# Async/Sync function
## Problem
Let's say that you want to implement the function that makes some asynchronous work and then
cache data and finally returns it. So the second call should return data from
cache. Problem is that first time function has asynchronous nature but
each next it has synchronous.

It is very bad practise to have function that behaves synchronously in
some circumstances and asynchronously in other. Those kind of functions
are unpredictable and can cause many problems hard to resolve.

Here is the problematic code:

```javascript
var fs = require('fs');
var cache = {};

function inconsistentRead(filename, callback){
  if(cache[filename]){
    callback(cache[filename]);
  } else {
    fs.readFile(filename, 'utf8', function(err, data){
      cache[filename] = data;
      callback(data);
    });
  }
}
```

And here is the use of it:
First we create function that provides 
```javascript
function createFileReader(filename){
  var listeners = [];
  inconsistentRead(filename, function(value) {
    listeners.forEach(function(listener) {
      listener(value);
    });
  });
  return {
    onDataReady: function(listener) {
      listeners.push(listener);
    }
  }
}
```

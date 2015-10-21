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

var reader1 = createFileReader('test.txt');

reader1.onDataReady(function(data) {
  console.log('First call result: ' + data);
  //Some time later

  var reader2 = createFileReader('test.txt');

  reader2.onDataReady(function(data) {
    console.log('Second call result: ' + data);
  });
});


### Projection
```javascript
var users = [
  {id: 123, name: "John"},
  {id: 124, name: "Paul"},
  {id: 125, name: "Chris"},
  {id: 126, name: "Kevin"},
];
 
var expected = {
  123: "John",
  124: "Paul",
  125: "Chris",
  126: "Kevin"
}
 
 
var reduced = users.reduce(function(prev,curr){
  prev[curr.id] = curr.name;
  return prev;
}, {});
 
console.log(JSON.stringify(reduced) === JSON.stringify(expected));
```

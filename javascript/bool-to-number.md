### Cast boolean value to number
```javascript
// implicit cast
+true; // 1
+false; // 0
// bit shift by zero
true >>> 0; // 1, right zerofill
false >>> 0; // 0
true << 0; // 1, left
false << 0; // 0
// double bitwise NOT
~~true; // 1
~~false; // 0
// bitwise OR ZERO
true | 0; // 1
false | 0; // 0
// bitwise AND ONE
true & 1; // 1
false & 1; // 0
// bitwise XOR ZERO, you can negate with XOR ONE
true ^ 0; // 1
false ^ 0; // 0
// even PLUS ZERO
true + 0; // 1
false + 0; // 0
// and MULTIPLICATION by ONE
true * 1; // 1
false * 1; // 0
```

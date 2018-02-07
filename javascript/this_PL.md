# this
W JavaScripcie wartość parametru this nie zależy od deklaracji, ale od tego jak funkcja została wywołana. Oto cztery możliwości wywołania:

## Wywołanie jako zwykła funkcja

W tym przypadku kontekstem domyślnie jest obiekt globalny (window). W strict mode natomiast będzie to `undefined` 


```javasript
function first() {
  return this;
}
console.log(first() === window);
```
## Wywołanie jako metoda

W tym przypadku this wskazuje na obiekt który jest właścicielem danej metody.

```javascript
var second = {}
second.invoke = function() {
  return this;
}
console.log(second.invoke() === second);
```
## Wywołanie jako konstruktor

W tym przypadku this wskazuje na third czyli nowo utworzony obiekt. Gdyby
pominąć słówko new przy przypisaniu to this wskazywałby na window, gdyż
funkcja nie zostałaby wywołana jako konstruktor tylko jako zwykła funkcja
(przypadek 1).

```javascript
function ThirdConstructor() {
  this.invoke = function() {
    return this;
  }
}
var third = new ThirdConstructor();
console.log(third.invoke() === third);
```

## Wywołanie przy użyciu metod apply() i call()

Każda funkcja posiada metody `apply` i `call`. Dzięki nim możemy
dowolną funkcję wywołać na rzecz dowolnego kontekstu. Możemy po prostu
ustalić czym ma być this w takim wywołaniu. Różnią się od siebie tylko tym że
apply() przyjmuje jako drugi parametr tablicę argumentów podczas gdy call()
przyjmuje listę argumentów.

```javascript
function sum() {
  var result = 0;for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  };
  this.sum = result;
}
var obj1 = {};
var obj2 = {};
sum.apply(obj1, [1, 2, 3]);
sum.call(obj2, 4, 5, 6);
console.log(obj1.sum == 6);
console.log(obj2.sum == 15);
```

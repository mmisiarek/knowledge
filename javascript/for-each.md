# forEach w Javascript

W języku JavaScript mamy do czynienia tak naprawdę z dwoma typami tablic. Te prawdziwe (actual arrays) i te które udają, że są tablicami (array-like objects). Poniżej zostaną przedstawione sposoby iterowania po ich elementach.

## Tablice

### forEach

```javascript
var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});
```

W ES5 dostępnych jest jescze kilka dodatkowych metod, którymi w podobny sposób można przejść po wszystkich elementach:

* `every` – kończy pętle jeśli dla którego elementu zostanie zwrócone false
* `some` – kończy pętle jeśli dla którego elementu zostanie zwrócone true
* `filter` – tworzy nową tablicę z elementami, dla których zostało zwrócone true i omija te z false
* `map` – tworzy nową tablicę z elementami zwróconymi przez funkcję iteratora
* `reduce` – buduje wartość przy każdym wywołaniu funkcji iteratora. Metoda przyjmuje jako parametry callback i wartość początkową. Callback natomiast wywoływany jest z 4 parametrami: `previousValue`, `currentValue`, `currentIndex`, `traversedObject`. Podczas pierwszego wywołania `previousValue` i `currentValue` mogą przyjąć dwie wartości. Jeśli został przekazany parametr `initialValue`, wtedy `previousValue` będzie równe `initialValue`, a `currentValue` będzie równe pierwszemu elementowi tablicy. Jeśli owy parametr nie został przekazany wtedy `previousValue` będzie równe pierwszemu elementowi a `currentValue` drugiemu. `reduce` nie modyfikuje obiektu na którym została wywołana, zostaje on przekazywany za każdym razem w parametrze `traversedObject`
`reduceRight` działa w ten sam sposób co reduce, lecz w przeciwnym kierunku.

### for

Stara znana metoda:

```javascript
var index;
var a = ["a", "b", "c"];
for (index = 0; index < a.length; ++index) {
    console.log(a[index]);
}
```
### for-in

Kolejna opcja to użycie for-in, jednak z zastrzeżeniem, że należy to robić ostrożnie. Pętla bowiem nie przelatuje po indeksach tablicy lecz po jej kluczach. Z odpowiednimi strażnikami można osiągnąć zamierzony efekt. A oto przykład:

```javascript
// `a` is a sparse array
var key;
var a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";
for (key in a) {
    if (a.hasOwnProperty(key)  &&
        /^0$|^[1-9]\d*$/.test(key) &&
        key <= 4294967294
        ) {
        console.log(a[key]);
    }
}
```
Pierwszy warunek gwarantuje, że właściwość będzie bezpośrednim kluczem obiektu (nie dziedziczoną z prototypu). Drugi, że klucz będzie poprawnym indeksem tablicy, czyli będzie liczbą z zakresu 0-4294967294 (wynika to ze specyfikacji).

### for-of (es6)

Pętla niejawnie korzystając z iteratora przelatuje po wszystkich elementach tablicy, ponieważ tablice tak definują swój iterator, aby przebiegał tylko po elementach – nie właściwościach. Przykładowy kod:


```javascript
var val;
var a = ["a", "b", "c"];
for (val of a) {
    console.log(val);
}
```
### iterator (es6)

Jak zostało powiedziane w poprzednim podpunkcie ES6 wprowadza iterator. Można również z niego skorzystać jawnie. Choć w przypadku tablic może się to wydać durne, warto wiedzieć, jak z niego korzystać, jeśli zajdzie taka potrzeba. Przykładowy kod:

```javascript
var a = ["a", "b", "c"];
var it = a.values();
var entry;
while (!(entry = it.next()).done) {
    console.log(entry.value);
}
```

## Obiekty tablico podobne (array-like objects)

Oprócz prawdziwych tablic istnieją również obiekty tablico podobne, które mają atrybut length takie jak np arguments czy NodeList. Jak sobie z nimi radzić?

Wykorzystanie metod dla prawdziwych tablic

Wszystkie wyżej wymienione sposoby można zaadaptować do potrzeb ALO pamiętając  o wszystkich obostrzeniach.

### forEach

Niektóre z metod Array.prototype  mogą być wykorzystane przez ALO przy pomocy funkcji call  i apply:

```javascript
Array.prototype.forEach.call(arguments, function(arg) {
    // Do something with `arg`
});
```

### Konwersja do postaci tablicy

Ostatni sposób to konwersja. Jedną prostą linijką można również zamienić AOL w pełnoprawną tablicę i korzystać z metod powyżej bez konieczności pożyczania metod od obiektu Array.prototype

```javascript
var trueArray = Array.prototype.slice.call(arrayLikeObject, 0);
```

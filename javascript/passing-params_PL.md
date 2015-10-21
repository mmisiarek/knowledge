# Przekazywanie parametrów w JS
W tym przykładzie chciałbym pokazać jak działa przekazywanie parametrów do funkcji. Intuicyjnie można by przypuszczać że parametry mają tylko zasięg funkcji. Niestety sprawa nie jest tak prosta. Najlepiej będzie pokazać to na przykładzie:
```javascript
function change(simple, obj, obj2){
    simple = simple * 2;
    obj.prop = "changed";
    obj = {prop: "changed"};
}

var o = { prop: 'not-changed' };
var o2 = { prop: 'not-changed'};
var n = 2;
change(n, o, o2);

console.log(n);  // 2
console.log(o);  // Object {prop: "change"}
console.log(o2); // Object {prop: "not-changed"}
```
Mamy zdefiniowaną funkcję change(),która zmienia każdy z parametrów. Na podstawie otrzymanych wyników moglibyśmy stwierdzić że typy proste są przekazywane do funkcji przez wartość, podczas gdy obiekty przez referencje. Intuicyjnie funkcja powinna dokonywać zmian lokalnie. I rzeczywiście w przypadku liczby tak się dzieje. Zmiany nie są widoczne na zewnątrz funkcji. Jednak sprawy komplikują się gdy przekazany jest obiekt. W drugim przypadku wygląda to tak jakby obiekt był przekazany przez referencję. Zatem czemu w trzecim wypadku tak nie jest?

Parametry zawsze są przekazywane przez wartość. W przypadku obiektów wartością tą jest referencja. Teraz w zależności od tego co zrobimy z tą wartością takie będą efekty. Jeśli zmienimy właściwości parametru (referencji) to zmiany będą widoczne na zewnątrz. Jednak jeśli całkowicie nadpiszemy parametr (referencję) zmiany nie będą widoczne.

Podsumowując w przypadku drugim rozszerzamy referencję dlatego zmiany są widoczne na zewnątrz, podczas gdy w przypadku trzecim nadpisujemy i tracimy referencję do przekazanego obiektu.

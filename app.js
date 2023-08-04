import { fromEvent } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

const num1Input = document.querySelector('#num1')
console.log(num1Input);
const num2Input = document.querySelector('#num2')
console.log(num2Input);
const resultSpan = document.querySelector('p span')
console.log(resultSpan);

const ob1 = fromEvent(num1Input, 'input').pipe(
    map((event) => parseInt(event.target.value))
);
const ob2 = fromEvent(num2Input, 'input').pipe(
    map((event) => parseInt(event.target.value))
);

ob1.subscribe(val => console.log(val))

const resultObservable = ob1.pipe(
    mergeMap((num1) => ob2.map(num2 => pgcd(num1, num2)))
)

resultObservable.subscribe(pgcdValue => resultSpan.innerHTML = pgcdValue)
/**Functions */
const pgcd = (a, b) => {
    if(b === a){
        return a;
    }
}
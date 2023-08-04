const { of, interval, mergeMap, map } = require("rxjs");


const letters = of ("a", "b", "c");

/**
 * MergeMap est un opérateur de transformation 
 * qui fusionne plusieurs observables
 * en un seul flux continu
 */
const results = letters.pipe(
    // map(x => x.toUpperCase())
    mergeMap(x => interval(1000).pipe(map(i => x + i)))
)

results.subscribe({
    next: val => console.log(val)
})
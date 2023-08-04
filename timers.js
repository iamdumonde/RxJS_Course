'use strict'

const { interval, take } = require('rxjs');

interval(1000)
    .pipe(take(10)) //recupère les 10 premiers éléments envoyés
    .subscribe(x => console.log(x));
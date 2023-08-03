'use strict'
const { of } = require('rxjs');
const { max } = require('rxjs/operators');

// liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// mapping data  TODO filtre
source.subscribe((x) => console.log("Valeur reçue !", x));

const monPoint = source.pipe(
    max((pa, pb) => Math.sqrt(pa.x ** 2 + pa.y ** 2) < Math.sqrt(pb.x ** 2 + pb.y ** 2) ? -1 : 1)
);

// s'inscrire TODO et afficher les données
monPoint.subscribe(v => console.log(`Le point le plus éloigné est x: ${v.x}, y: ${v.y}` ))
'use strict'

const { Observable, map } = require('rxjs');
const products = {
    data: [
        { nom: "spaghetti", prix: "15000", qualité: "supérieure" },
        { nom: "spaghetti", prix: "55000", qualité: "inférieure" },
        { nom: "spaghetti", prix: "65000", qualité: "supérieure" },
        { nom: "spaghetti", prix: "95000", qualité: "inférieure" },
        { nom: "hetti", prix: "105000", qualité: "inférieure" },
        { nom: "spag", prix: "85000", qualité: "supérieure" }
    ]
}

const observable = new Observable((subscriber) => {
    subscriber.next(products);
}).pipe(

    map((value) => {
        console.log("dans le prremier opérateur", value);
        return value.data;
    }),

    map((value) => {
        console.log("Dans le deuxième opérateur", value);
        return value.filter(prod => prod.qualité === "supérieure" );
    }),

    map((value) => {
        console.log("vérification de spaghetti");
        value.forEach(obj => {
            if(obj.nom === "spaghetti") {
                console.log("Spaghetti prêt !");
            }
        })
        return value;
    })
);


observable.subscribe((valeur) => {
    console.log("Réception de:", valeur);
}); 

'use strict'
// const btn = document.querySelector("button");

// au click du button on console btn cliqué
// btn.addEventListener('click', () => console.log("Button cliqué"));

//RxJs
// import { fromEvent } from "rxjs";
// import { Observable, from } from "rxjs/internal/Observable";
const { Observable, of, from } = require('rxjs')

//création implicite  d'un Observable
// fromEvent(btn, 'click').subscribe(() => console.log('Button cliqué'));

let monObserver = {
    next: (x) => console.log("Une valeur reçue: " + x), //la méthode qui s'execute à chaque fois que le serveur retourne une valeur
    error: (err) => console.log("Une erreur s'est produite" + err), //la méthode qui s'execute si une erreur advienne
    complete: () => console.log("L'Observer a reçu une notification de completion"), //la méthode qui s'execute quand on a récupéré toutes les valeurs
}

let monObservable = new Observable((observer) => {
    observer.next(1);  // envoie d'une notification
    observer.next(2); // envoie d'une notification
    observer.next(3); // envoie d'une notification

    setTimeout(() => {
        observer.next(4); //envoie d'une notification
        observer.complete(); //envoie d'une notification
    }, 4000);
});

// let obs = of(1, 2, 3);

let obs = from([1, 2, 3]);

//monObservable.subscribe(monObserver); //désormais l'observer souscrit à l'observable ce qui veut dire que l'observer est prêt à recevoir des valeurs de l'observable
monObservable.subscribe((x) => {
    console.log('Une valeur reçue !' + x);
});
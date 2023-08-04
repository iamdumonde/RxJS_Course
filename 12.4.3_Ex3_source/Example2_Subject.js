const { Subject, interval } = require('rxjs');

// deuxième exemple broadcast 

let source = interval(1000); // Observable
let subject = new Subject(); // Subject

// on s'abonne à l'Observable source en lui passant un Observer qui 
// est précisément le subject
let subSource = source.subscribe(subject); // Subject ~ Observer

// Subject ~ Observable : multicast
// ces derniers Observables vont recevoir les informations
let subject1 = subject.subscribe(
    (num) => { console.log(`Observer #1 ${num}`); },
    (e) => { console.log('error'); },
    () => { console.log('completed #1'); });

let subject2 = subject.subscribe(
    (num) => { console.log(`Observer #2 ${num}`); },
    (e) => { console.log('onError: ' + e.message); },
    () => { console.log('completed #2'); });

// au bout de 5 secondes 
const inter = setInterval(() => {
    subject.complete(); // exécute la méthode complete 
    subject1.unsubscribe();
    subject2.unsubscribe();

    subSource.unsubscribe(); 

    clearInterval(inter);

}, 5000);

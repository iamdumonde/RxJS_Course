const { interval, Subject, of } = require("rxjs");

/**
 * Méthode qui renvoie périodiquement et continuellement un flux de données d'entier naturels 1,2,3
 */
const numbers = interval(1000); //Observable
const subject = new Subject(); //la création ici de subject

//subject souscrit à l'observable numbers (Subject - Observer)
/**
 * ON connecte le sujet à l'observable numbers
 * et donc chaque valeur émise par numbers sera reçu par subject et transmis aux abonnés
 */
const subSubscribe = numbers.subscribe(subject);

//Subject - Observable
/**
 * Subject1, Subject2, Subject3 s'abonnent aux sujets "subject"
 */
const subject1 = subject.subscribe({
    next: (val) => console.log('Composant #1', val),
    error: (err) => console.log("Composant #1", err),
    complete: () => console.log("Composant #1 complete"),
})

const subject2 = subject.subscribe({
    next: (val) => console.log('Composant #2', val),
    error: (err) => console.log("Composant #2", err),
    complete: () => console.log("Composant #2 complete"),
})

const subject3 = subject.subscribe({
    next: (val) => console.log('Composant #3', val),
    error: (err) => console.log("Composant #3", err),
    complete: () => console.log("Composant #3 complete"),
})

//au bout de 5secondes 
const timeId = setTimeout(() => {
    subject.complete();
    subject1.unsubscribe();
    subject2.unsubscribe();
    subject3.unsubscribe();

    subSubscribe.unsubscribe(); //subjet se désabonne

    clearTimeout(timeId);
}, 5000);



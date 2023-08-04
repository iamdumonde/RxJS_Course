<p class="animated-text">Votre phrase ici.</p>

/* Animation keyframes */
@keyframes fadeInLetter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;

  }
}

/* Style du texte */
.animated-text {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  animation: fadeInLetter 1s steps(20, end);
}


<p id="animated-text"></p>
const text = "Votre phrase ici.";
const textElement = document.getElementById("animated-text");
let index = 0;

function animateText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(animateText, 100); // Définir la vitesse de l'animation (en millisecondes)
  }
}

animateText();

Dans cet exemple, nous utilisons JavaScript pour ajouter progressivement chaque lettre du texte à l'élément HTML avec l'id "animated-text". La fonction animateText est récursive et utilise setTimeout pour définir un délai entre chaque ajout de lettre, ce qui donne l'illusion que les lettres apparaissent une par une.
Vous pouvez ajuster la vitesse de l'animation en modifiant la valeur passée à setTimeout. Une valeur plus petite rendra l'animation plus rapide, et une valeur plus grande la ralentira.
Copiez ces codes dans votre fichier HTML et JavaScript, et votre phrase devrait maintenant s'animer lettre par lettre comme si on la tapait au clavier.


*********

Bien sûr ! Voici un autre exemple d'animation de phrase lettre par lettre avec JavaScript :

HTML :
```html
<p id="animated-text"></p>
```

JavaScript :
```js
const text = "Une autre phrase à animer.";
const textElement = document.getElementById("animated-text");
let index = 0;

function animateText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    const randomDelay = Math.random() * 200; // Ajoutez un délai aléatoire pour un effet naturel
    setTimeout(animateText, 100 + randomDelay);
  }
}

animateText();
```

Dans cet exemple, nous utilisons le même principe que précédemment, mais avec une variation supplémentaire : un délai aléatoire est ajouté entre l'ajout de chaque lettre. Cela crée un effet plus naturel, simulant une saisie réelle.

Vous pouvez personnaliser le texte en changeant la valeur de la variable `text` et ajuster l'effet en modifiant les valeurs du délai dans `setTimeout`.

Copiez ces codes dans votre fichier HTML et JavaScript, et vous aurez une autre phrase animée avec l'apparition des lettres de manière aléatoire.

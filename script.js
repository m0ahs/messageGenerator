// Faits aléatoires sur le monde tech
const techFacts = [
    {
        fact: "Le premier email a été envoyé par Ray Tomlinson à lui-même en 1971.",
    },
    {
        fact: "Le premier nom de domaine jamais enregistré était Symbolics.com, en 1985.",
    },
    {
        fact: "Le premier site web a été publié par Tim Berners-Lee en 1991 et est toujours en ligne.",
    },
    {
        fact: "La capacité de stockage moyenne d'un disque dur en 1980 était d'environ 10MB. Aujourd'hui, elle se compte en TB.",
    },
    {
        fact: "La première souris d'ordinateur était en bois, créée par Douglas Engelbart en 1964.",
    },
    {
        fact: "Le premier appel téléphonique depuis un téléphone portable a été passé par Martin Cooper de Motorola en 1973.",
    },
    { fact: "Google traite plus de 3,5 milliards de recherches par jour." },
    { fact: "Le premier jeu vidéo, 'Pong', a été créé par Atari en 1972." },
    {
        fact: "Environ 90% de la monnaie mondiale est numérique ; seulement 10% des devises existent sous forme de monnaie physique.",
    },
    { fact: "Le 'smiley' :-) a été utilisé pour la première fois en 1982." },
    {
        fact: "Le mot 'robot' vient du tchèque 'robota', qui signifie 'travail forcé'.",
    },
    { fact: "Plus de 570 nouveaux sites web sont créés chaque minute." },
    {
        fact: "Facebook compte plus de 2,7 milliards d'utilisateurs actifs mensuels.",
    },
    {
        fact: "La NASA utilise encore des ordinateurs des années 1970 pour gérer les systèmes de navigation des navettes spatiales.",
    },
    { fact: "La plus grande photo numérique du monde fait 195 gigapixels." },
    {
        fact: "La première version de Windows (Windows 1.0) a été lancée en 1985.",
    },
    {
        fact: "La première application jamais achetée sur l'App Store d'Apple était un jeu appelé 'PapiJump'.",
    },
    { fact: "Environ 40% des utilisateurs de YouTube sont des femmes." },
    {
        fact: "Le record du monde pour le plus long temps passé à naviguer sur internet est de 210 heures.",
    },
    {
        fact: "La première publicité en ligne a été mise en ligne en 1994 par AT&T.",
    },
    {
        fact: "Le terme 'bug informatique' a été utilisé pour la première fois en 1947 quand un vrai insecte a été trouvé dans un ordinateur.",
    },
    {
        fact: "Le premier tweet a été posté par Jack Dorsey en 2006 et disait 'just setting up my twttr'.",
    },
    {
        fact: "Il existe plus de 7000 langages de programmation différents dans le monde.",
    },
    {
        fact: "La quantité de données générées par l'humanité en deux jours équivaut à toutes les données créées jusqu'en 2003.",
    },
    {
        fact: "Le premier virus informatique a été créé en 1983 et s'appelait 'Elk Cloner'.",
    },
    {
        fact: "La première photo envoyée sur internet était une image d'un groupe de comédie musicale en 1992.",
    },
    {
        fact: "La première version de l'Internet Relay Chat (IRC) a été écrit en moins de 48 heures.",
    },
    {
        fact: "Le code de la première page web est toujours accessible et est considéré comme le début de l'internet.",
    },
    {
        fact: "Le premier appel vidéo a eu lieu en 1927 entre Washington D.C. et New York City.",
    },
    {
        fact: "'Tetris' a été le premier jeu vidéo à être joué dans l'espace par les cosmonautes en 1993.",
    },
];

// Fonction pour générer un message aléatoire
function generateMessage() {

    // Logique pour sélectionner un message aléatoire
    const randomIndex = Math.floor(Math.random() * techFacts.length);
    
    const message = techFacts[randomIndex].fact;

    // Sélectionne l'élément du DOM où le message doit être affiché
    const messageDisplayElement = document.getElementById('messageDisplay');

    // Affiche le contenu sur la page d'accueil
    messageDisplayElement.innerText = message;

    // Lancer les confettis après avoir affiché le message
    launchConfetti();
}

// Appeler generateMessage() lorsque le bouton est cliqué
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.button-39');
    button.addEventListener('click', generateMessage);
});


// Fonction pour lancer les confettis
function launchConfetti() {
    confetti({
        particleCount: 100, // Nombre de confettis
        spread: 70, // Angle de dispersion
        origin: { y: 0.45 } // Position d'origine des confettis
    });
}
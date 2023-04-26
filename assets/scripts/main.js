// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Variables
let userName, userSurname, userColour, randomNumber, userPassword;
const min = 1;
const max = 99;

// Name
userName = prompt ("Qual è il tuo nome?");

// Surname
userSurname = prompt ("Qual è il tuo cognome?");

// Colour
userColour = prompt ("Qual è il tuo colore preferito?");

// RandomNumber
randomNumber = getRandomNumber(min, max);

// Password output
userPassword = passwordFunction (userName, userSurname, userColour);


// Functions

// RNG function
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Input checker
function passwordFunction (userName, userSurname, userColour) {
    if (userName == 0 || userSurname == 0 || userColour == 0) {
        document.getElementById("password").innerHTML = "Non hai compilato tutti i campi!";
        document.getElementById("password").style.color = 'Red';
        document.getElementById("password-container").style.border = '2px red solid';
    } else {
        document.getElementById("password").innerHTML = userName + userSurname + userColour + randomNumber;
    }
}

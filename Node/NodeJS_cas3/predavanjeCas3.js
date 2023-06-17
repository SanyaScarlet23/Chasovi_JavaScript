//! 1. CORE MODULI
//*http, assert, fs, path, process, os...

//! 2. LOCAL MODULI ova go uchime cas3 so kalkulator za da implementiraat drugi funkcii od razlichni .js
//* Ovie nie kje gi kreirame

//?Prv nachin na povikuvanje na lokalni moduli
//const kalkulator = require("./kalkulator.js");
//const converter = require("./converter.js");


//? Vtor nachin na povikuvanje na lokalni moduli so destruction
const { sobiranje, odzemanje, delenje, mnozenje } = require("./kalkulator.js");




console.log(sobiranje(2,4));
console.log(delenje(4,4));
converter.textStats(
    "Nie sme studenti vo Semos Akademija, uchime full stack programiranj. i taka natamu."
);

//! 3. THIRD-PARTY
//*mongoose, express, dotenv, ejs, morgan..


//? Za domasna da se dodade uste eden modul so ime domasna.js
//? Koj kje ima funkcija da promeni faregajt vo celzius i obrantno
//? Da ima funkcija sto presmetuva plostina i perimetar na triagolnik
//? da ima funkcija sto presmetuva plostina i perimetar na pravoagolnik
//? Da ima funkcija sto proveruva dali nekoj broj e parel ili neparen

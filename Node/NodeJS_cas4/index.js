const fs = require("fs");


//! Vchituvanje na podatok
//* synchrona verzija
//const vcitanTekst =fs.readFileSync("./tekst.txt", "utf-8");
//console.log(vcitanTekst);

//! Zapishuvanje na podatok vo nashiot kompjuter(server)
//* synchrona verzija
//const podatok =`Ova sakame da go zapisheme vo nashiot kopjuter ${2+5}`;
//fs.writeFileSync(`./novTekst${Date.nov()}.tex`, podatok);

//! VO SINHRONO PROGRAMIRANJE SEKOJ PROCES MORA DA ZAVRSHI ZA DA POCHNE NOV PROCES
//! ZNACHI KODOT VO SINHRONO PROGRAMIRANJE SE IZVRSHUVA LINIJA PO LINIJA

//! Asychrona verzija mnogu bitna i vazhna i upotrebliva Callback Function

//Callback funkcii
function pozdrav(ime, biloshtodrugo) {
    console.log(`Zdravo, ${ime}`);
    biloshtodrugo(); //! MORA TUKA DA E SEKOGASH POVIKANA VO EDNA FUNKCIJA I TOGASH E CALLBACK FUNKCIJA VO SLUCHAJOT: biloshtodrugo
}

function prijatno() {
    console.log("Chao!");
}

//pozdrav("Danche", prijatno); //!prijatno e callback odnosno funkcijata: biloshtodrugo

//! Vchituvanje na fajls
//* Asynhrona verzija

//console.log("11111111") // ovie site console.log kje se izvrshat pa posle dolnata asynhrona funkcija koja se aktivira no vo pozadina 
fs.readFile("./tekst.tex", "utf-8", (err,text)=> {
    if (err) {
        return console.log("Imashe greshka");
    }
    console.log(text);
});

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
    fs.readFile("./novTekst.txt", "utf-8", (err,text2)=>{
        console.log(text, text2);
    });
});

//console.log("!§%&&//(");//i ovaa kje izvrshi isto a i dolnoto console.log("22222222")
//console.log("2222222");

//! Zapishuvanje na fajl
//*Asynhrona varijanta
const asyhronPodatok = "Ovoj fajl e kreiran asyhrono";
fs.writeFile("./asyhronWrite.txt", asyhronPodatok, "utf-8", (err) =>{
    if(err) {
        return console.log("Greshka");
    }
    console.log("uspeshno");
});

//! Promise pattern

//! DA PROCHITAME OD DOKUMENTACIJA:
//?Da se istrazhat ushte nekolku metodi na fs modulot
//?Kako da izbrishete fajl i kako da preimenuvate fajls
//? i ushte eden po zhelba
//? isto taka da kreirate fajl 
//? i da prochitate fajl

// Kreiram nov fajl
const prvMojFajl = "Asyhrono probuvam da kreiram .txt fajl to ga pravam so fs.writeFile dodeka sinhronoto e so fs.writeFileSync ";
fs.writeFile("./mojSanjaFile.txt", prvMojFajl, "utf-8", (err)=>{
    if(err) {
        return console.log("Go nemam kreirano mojSanjaFile.txt");
    }
    console.log("Fajlot e kreiran i se pojavi so ime mojSanjaFile.txt")
});

// Za vezhba kje kreiram ushte eden fajl i podocna istiot kje probame da go izbrisheme
const vtorMojFajl = " So primena na File System odnosno fs.writeFile kje krirame ushte eden asyhron fajl koj kje e .js";
fs.writeFile("./vtorSanjafile.js", vtorMojFajl, (err) =>{
    if(err){
        return console.log("Go nemam kreirano vtorSanjafile.js")
    }
    console.log("./vtorSanjafile.js e kreiran");
});

//Sega sakam vtorSanjafile.js da go izbrisham asyhrono bi bilo so fs.unlink
//!vo listata od direktoriumot NodeJS_cas4 fajlot so pateka./vtorSanjafile.js go nema
fs.unlink("./vtorSanjafile.js", (err) =>{
    if (err){
        return console.log("Tropki go nemam izbrishano fajlot");
    }
    console.log("Bravo ./vtorSanjafile.js e uspeshno izbrishan")
});

//Kje kreirame nov fajl i potoa istiot kje go preimenuvame
const fajlZaPreimenuvanje = "Jas sum fajlot file1Kreiran.txt koj prvin kje treba da se sozdadam so fs.writeFile a podocna da si go smenam imeto vo smenivIme.txt";
fs.writeFile("./file1Kreiran.txt", fajlZaPreimenuvanje, (err) =>{
    if(err) throw err;
    console.log("fajlot so ime file1Kreiran.txt e kreiran")
});

fs.rename("./file1Kreiran.txt","./smenivIme.txt", (err) =>{
    if(err){
        return console.log("Napraviv greshka i ne smeniv ime :(")
    }
    console.log("Uspeshno si go smeniv imeto od file1Kreiran.txt vo smenivIme.txt")
});

//Da go prochitam fajl smenivIme.txt
/*Asynchronously reads the entire contents of a file.

import { readFile } from 'node:fs'; //!Ova nie tuka ne go zapishuvame vaka tuku direktiva fs.readFile 

readFile('/etc/passwd', (err, data) => { //!tuka na nas ni treba "utf-8" inaku ni vadi buff
  if (err) throw err;
  console.log(data);
});
The callback is passed two arguments (err, data), where data is the contents of the file.
*/
fs.readFile("./smenivIme.txt","utf-8", (err,data)=>{ 
    if(err) throw err;
    console.log(data);
});
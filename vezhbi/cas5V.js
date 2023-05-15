

// Primer 1. Site parni broevi od 0-20
/*
 let brojach = 0;

 while(brojach<=20){
    if(brojach%2==0){
        console.log(brojach)
    }
    brojach++;
 }
*/

// Primer 2. Pechatenje na site parni broevi od pochetok do kraj i broenje na istite vo toj opseg
/*
let pochetok = Number(prompt("Vnesi pocheten broj"));
let kraj = Number(prompt("Vnesi kraen broj"))
let brojach = pochetok;
let brojachNaParni = 0;

while(brojach<=kraj){
    if(brojach%2==0){
        console.log(brojach)
        brojachNaParni++;
    }
    brojach++;
}
console.log(`od ${pochetok} do ${kraj} ima ${brojachNaParni} parni broevi`)
*/

// Primer 3. Presmetuvanje na zbir na site broevi od pochetok do kraj vneseni so prompt
/*
let pochetok = Number(prompt("Vnesi pocheten broj"))
let kraj = Number(prompt("Vnesi kraen broj"))
let brojach = pochetok
let zbirNaBroevi = 0

while(brojach<=kraj){
    zbirNaBroevi+=brojach
    brojach++
}
console.log(`Zbirot na site broevi od ${pochetok} do ${kraj} iznesuva ${zbirNaBroevi}.`)
*/

// Primer 4. Kako da gi ispechatime site elementi od edna niza
/*
let niza = ["Irena", "Vesna", "Bojan", "Aleksandar", "Milan"]
let index = 0
console.log(niza)

while(index<niza.length){
    console.log(niza[index])
    index++
}
*/

// Primer 5. Vnesuvanje na broevi vo niza se dodeka ne vneseme input koj ne e broj
/*
let input =prompt("Vnesi broj");
let niza = [];
let index = 0;

if(isNaN(input)){
    console.log("Imate vneseno vrednost koj ne e broj")
}else{
    while(!isNaN(input)){
        niza.push(Number(input))
        input = prompt("Vnesi broj");
        
    }
}
console.log(niza)
*/

// Do WHILE se mnogu malku koristi vo princip ako mora barem ednash kodot da se izvrshi shto e vsushnost i osnovnata razlika megju DO WHILE i WHILE
// DO WHILE ima sledna syntax:
// do{
//    naredbi;
//} while(uslov)

// Primer 6. Kako funkcionira DO WHILE cycle, mozhe da vrti kako WHILE isto no posekako kje se izvrshi barem ednash, odnosno do{}

/*
let i = 10, suma =0

do{
    suma+=i;
    i+=2   // ako beshe ova naredba zapishna red pred suma+=i vo toj sluchaj kje se ispechateshe 12 rezultat
}while(i<10)
console.log(suma) // pechati 10 kako rezultat se izvrshuva samo do{} dodeka na while(uslovot ne e zadovolen t.e.i=10 no ne i pomal od 10) ciklusot zastanuva
*/

// FOR ciklusi imaat slednata sintaks:
// for(INICIJALIZACIJA; USLOV; INKREMENT/ILI DEKREMENT){
//    naredbi;
//}

// Primer 7. Pechatenje na broevi od do 
/*
for(i = 0; i < 10; i++){
    console.log(i)
}
*/

// Primer 8. Pechatenje na elementi od zadadena niza

let niza = [1,2,3,4]
for(let i=0; i<niza.length; i++){
    console.log(niza[i])
}

// Primer 9. Pechatenje na elementi od zadadena niza od krajniot kon prviot element

let niza1 = [1,2,3,4,5]
for(let index=niza1.length-1; index>=0; index--){
    console.log(niza1[index])
}

// Primer 10. Ipechati gi iminjata na site uchenici koi imaat dolzhina >=6

let uchenici = ["Marijana", "Vesna", "Biljana", "Teodora", "Mihail", "Aleksandar", "Bojan"]
for(let i=0; i<uchenici.length; i++){
    let ime = uchenici[i];
    if(ime.length>=6){
        console.log(ime)
    }
}

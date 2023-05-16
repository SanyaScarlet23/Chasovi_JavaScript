//Cas_6_Vgnezdeni ciklusi_+ ciklusite FOR OF koje e za Array i FOR IN koj e za Object

//let iminja = ["Sanja", "Angela","Krunislav","Damjan","Danche"];
/*
for(let i = 0; i<iminja.length; i++){
    let ime = iminja[i]
    console.log(ime)
}
*/
//for of
//gi izminiva site elementi od nizata i element po element gi smestuva vo prvata promenliva (pred of)
//VAZHI SAMO ZA NIZI!
// izvrshuva naredbi za sekoj element od nizata
/*
for(let ime of iminja){
    console.log(ime)
}
*/
//Koga imame Object
/*
let obj = {name:"Semos", type:"edukacija"}

let keys = object.keys(obj)
console.log(keys)

// primer kako da se zemat vrednostite ako gi imame kluchesvite "kluc:vrednost"
for(let i=0; i<keys.length; i++){

    let key = keys[i]
    console.log(key+":"+ obj[key])
}
*/
//vtor nacin za pechatenje samo na vrednosti
/*
let values = Object.values(obj)
for(let i=0; i<values.length; i++){
    console.log(values[i])
}
*/


//zamena za ciklusot id 23 linija e for in
//for(kluc in objekt){
//    console.log(objekt[kluc])
//}

// se koristi za objects
/*
for(let key in obj){
    console.log(obj[key])
}

//se koristi i za nizi, no vo kluchot se smestuva indexot
for(let key in iminja){
    console.log(iminja[key])
}
*/
//slednot kod frla greshka 

/*
let niza =[1,2,"Semos",[1,2,3]]
let movie ={
    title:"Harry Potter",
    autor:"J.K.Rowling",
    year:1994,
    actors:["Daniel R", "a1", "a2"],
    parts:["p1","p2"]
}

for(let element of niza){
   
    console.log(element)
}

for(key in movie){
    console.log(movie[key]) 
}
*/

// VGNEZDENI CIKLUSI
// Primer: site denovi od nedelata za 2 nedeli 
//Za doma ova so nekoja vezhba 

/*
for(let i=1; i<=2; i++){ // brojach za broj na nedela
    console.log("nedela br: "+i)
    for(let j=1; j<=7; j++){ //brojach za den vo nedela
        console.log("Den "+j)
    }
}

*/

//FUNKCII
// imame funkcii koi imaat parametar , nemaat parametar, vrakja vrednost i funkcija koja ne vrakja vrednost
//syyntax:

/*
function imeNaFunkcija(){
    naredbi;
}
*/
// kako se poviku funkcija toa se pravi so: imeNaFunkcija()

// bez parametri
function prvaFunkcija(){ // funkcija bez parametar
    console.log("Hello World");
    console.log("Hello!")
}

prvaFunkcija();
prvaFunkcija();

// so parametri funkcija

function pechatiString(str){ // funkcija so eden parametar
    console.log(str)
}

pechatiString("Zdravo");
pechatiString("Hello")

//funkcija 
function broj2(broj){
       return broj*2
}

//broj2(5) ne vrakja vrednost i treba da se pechati so console.log, odnosno
console.log(broj2(5)) // pechati vrednost 10

//primer:

function vnesiIpomnozi(){
    let broj = Number(prompt("Vnesi broj"))
    //return broj*2 // return e kluchno zborche so koe kazhuvame deka funkcijata ni vrakja vrednost 
    console.log(broj*2)
}

vnesiIpomnozi()
vnesiIpomnozi()
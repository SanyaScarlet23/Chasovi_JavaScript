let iminja = ["Sanja","Ana","Vesna","Aco","Mile","Goran"]

// so "FOR" ciklus se ispechateni elementite od nizata iminja
/*
for(i=0; i<iminja.length; i++){
    let ime = iminja[i]
    console.log(ime)
}
*/

// Gorniot primer od istata niza iminja so ciklusot "FOR OF"
/* FOR OF ciklusot VAZHI SAMO ZA NIZI!!
->Gi izminuva site elementi od nizata i element po element gi smestuva vo prvata promenliva:promenlivata definirana so let(pred OF zborcheto)
->Izvrshuva naredbi za sekoj element od nizata

for(let ime of iminja){
    console.log(ime);
}
*/


//Primeri ako e Object i FOR ciklus
let obj = {name:"Semos", type:"edukacija"}

let keys = Object.keys(obj)
console.log(keys) // gi pechati site kluchevi od definiranaiot Object obj, odnosno name i type

//Primer so FOR ciklus: Kako da se zemat vrednostite ako gi imame kluchevite "kluc:vrednost"

for(i=0; i<keys.length; i++){
    let key=keys[i]
    console.log(key+":"+obj[key])
}

//Primer so FOR ciklus: Vtor nachin za pechatenje samo na vrednostite

let values = Object.values(obj)

for(let i=0; i<values.length; i++){
    console.log(values[i])
}

// Zamena za FOR ciklusot od 30 linija koga imame Object e FOR IN ciklusot 

for(kluc in obj){
    console.log(obj[kluc])
}

//Primer za FOR IN: Se koristi i za nizi, no vo klucot se smestuva indeksot
for(let key in iminja){
    console.log(iminja[key])
}

//Ako sakame FOR OF da go koristime za Object vo toj sluchaj kodot kje ima greshka 
// Ne se koristi FOR OF za Object tuku samo za nizi (Object is NOT Iterable)

/* Ovoj kod javuva greshka: Uncaught TypeError: obj is not iterable (shto znachi deka objector ne e ITERABLE?)
for(let element of obj){
    console.log(element)
}
*/

//Primer: da se ispechatat so koristenje FOR IN i FOR OF za niza i objekt

let niza = [1,2,"Semos",[1,2,3]]; // Tuka imame definirano Array
let movie = { // Tuka imame definirano Object
    title:"Harry Poter",
    author:"J.K.Rowling",
    year:1994,
    actors:["Daniel R","a1","a2"],
    parts:["p1","p2"]
}
//Reshenie:
//so primena na FOR OF:
for(let element of niza){ // Za Array koristime "FOR OF" ciklus koj ciklus nikako ne go koristime za Object, vidi podolu so FOR IN za array
    console.log(element);
}

//so primena na FOR IN:
for(let key in movie){ // FOR IN sekogash go koristime za Object, vo suchajov gi imame isprintano valuse od site keys od objektot
    console.log(key+":"+movie[key]) // tuka gi pechatime site keys i site values od objektot movie
    console.log(movie[key]) // tuka gi imame ispechateno samo site values od objektot movie
}

for(let element in niza){ // FOR IN primeneto na array, FOR IN isto taka mozhe da se primeni na array
    console.log(niza[element])
}

//VGNEZDENI CIKLUSI: sekogash imame nadvoreshen koj e pospor(i istovremeno e zavisen od vnatreshnit ciklus) i vnatreshen ciklus koje e pobrz

//Primer za vgnezden ciklus: site denovi od nedelata za 2 dve nedeli da ispechatime 

for(i=1; i<=2; i++){
    
    for(j=1; j<=7; j++){
        console.log("Den "+j)
    }
    console.log("Nedela "+i)    
}

//FUNKCII
//Postojat funkcii koi: imaat parametri, nemaat parametri, vrakjaat vrednost ili funkcii koi ne vrakjaat vrednost

//Sintaksata na funkcii e slednata:
/* function imeNaFunkcija(){
    nardbi;
}*/

//Povikuvanjeto odnosno izvrshuvanjeto na funkcijata e sledna: imeNaFunkcija()

//Primer za funkcija koj e bez parametar

function prvaFunkcija(){
    console.log("Hello World")
    console.log("Zdravo")
}

prvaFunkcija() // pechati vo consola na browser Hello World i Zdravo
prvaFunkcija() // Kolku pati da ja povikuvame kje gi pechati tie dve vrednosti: Hello World i Zdravo

//Primer za funkcija so eden parametar

function pechatiString(str){ // vrednosta na parametarot t.e vo nashit sluchaj str, ja definirame koga ja povikuvame funkcijata!!!
    console.log(str)
}

pechatiString("Bla Bla")
pechatiString("Hello")
pechatiString(23)

// Primer funkcija koja ima parametar i vrakja vrednost

function pomnozhiBroj(broj){
    return broj*2 // return e kluchno zborche so koe kazhuvame deka funkcijata ni vrakja vrednost
}
console.log(pomnozhiBroj(5)) // tuka imame povikano funkcija so parametar broj na koj mu imame zadadena vrednost 5 i e kratka verzija no mozheme so:
let rezultat = pomnozhiBroj(5)
console.log(rezultat)
console.log(pomnozhiBroj(20))

//Primer funkcija bez parametar i bez return

function vnesiBroj(){
    let broj = Number(prompt("Vnesi broj"))
    console.log(broj*2)
}

vnesiBroj() // povikana funkcija za prviot vnesen broj od prompt prozorecot koj kje e pomnozhen so 2
vnesiBroj() // povtorno povikuvanje na prompt prozorecot i vnesuvanje na drug broj koj kje isto taka pomnozhen so 2 



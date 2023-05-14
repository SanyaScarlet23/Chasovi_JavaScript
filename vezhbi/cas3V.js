//1.git clone (url)
//2.git checkout -b <branch-name> / git branch <branch-name>
//3.git pull
//4.git add (ime na file) dodavate `` po potreba
//5.git commit -m "ime na commit"
//6.git push

// ARRAY
// let niza = new Array("apple","orange","kiwi")

// Primer 1.
let sladoledi = ["chokolado","malina","jagoda",12]

console.log(sladoledi)
console.log(sladoledi[1]) //ime na niza[index]

let index = 2
console.log(sladoledi[index])

sladoledi[index] = "snikers" //promena na vrednost na element od niza
console.log(sladoledi)
console.log(sladoledi.length) // pechati dolzhina na niza


// Primer2.
// definiranje na niza 
let fruits = ["apple","Banana","orange","melon","cherry","strawberry",2]

//Pop za brishenje na konkreten element vo niza
let lastElement = fruits.pop() // se brishe poslednit element od nizata bez da se zachuva
console.log(fruits)
console.log(lastElement)

//Push dodava element na krajot od nizata
fruits.push("watermelon") // dodava element na krajot od nizata
console.log(fruits)

// Shift za brishenje na konkreten element od niza
let firstElement = fruits.shift() // go brishe prviot element od nizata
console.log(fruits)

//Slice za prikazhuvanje na elementi od niza bez da gi brishe
console.log(fruits.slice(1,4)) // gi prikazhuva elementite od index 1 do index 4 (bez 4-tiot element) BEZ DA GI IZBRISHE!!
console.log(fruits)

//Splice za brishenje na elementi vo niza!
console.log(fruits.splice(1,1)) //brishe kolku shto kje definirame elementi pochnuvajkji od onoj index koj go definirame
// // kako prv parametar(prva primena na splice)
console.log(fruits)

//Splice za dodavanje na elementi vo niza! Dodavanje na elementi:"bla bla" i "tra la la" na vtora pozicija so sledna sintaksa: arrayName.splice(2,0,"bla bla","tra la la")
console.log(fruits.splice(2,0,"lime","sour cherry")) //vo ovoj primer ne se brishe element (2ot parametar e 0)
// // tuku se dodavaat 2 novi elementi na vtora pozicija
console.log(fruits)


console.log(fruits.toString()) //Kreira rechenica od site elementi na nizata oddeleni so ,
console.log(fruits.join("-")) // so koj separator da se ispechatat elementite na nizata kako string
console.log(fruits.includes("banana")) //true/false dali elementot postoi vo nizata
console.log(fruits.sort()) // gi sortira alfabetski elementite

//Primer 3.
let ime = "Sanja Tashkovska"
console.log(ime.includes("Sa")) // pechati vrednost true
console.log(ime.substring(1,3)) // pechati pod zbor od rechenicata koja e definirana od string-ovi vrednostite od koja do koja pozicija (1,3) no bez 3-tiot
console.log(ime.replace("a","A")) // zamena no samo na prviot podzbor so string
console.log(ime.replaceAll("a","A")) // zamena na site podzborovi so string
console.log(ime.split(" ")) // kreira niza od zborovite vo rechenicata spored daden separator
console.log("Zdravo")
// console.log se koristi za pechatenje vo console od browserot
//tekstovi(stringovi) sekogash mora da bidat vo navodnici
/*
console.log("Zdravo"+"semos")
console.log("Zdravo"+" "+"World"+"!")
console.log('5'+'5') //pechati 55 vo console
console.log(5+5)// pechati 10 odnosno zbirot

//Podatochni tipovi: string, char, int, float, double, boolean(true/false)

//Numbers
console.log(4)
alert(5) //info prozorche
*/

console.log("The number 42 is of type"+ typeof 42) //go pechati tipot na vrednost
console.log("This is "+ typeof 42.5) // pechati: This is number
console.log("This is "+ typeof "42") // pechati: This is string

console.log(5 + "5") // broj+string = string
console.log(5+6) // pechati broj vo sluchajot zbirot 11

// PRAILNO DEKLARIRANJE NA PROMENLIVA
// 1. vas abc; ABC; // js e case sensitive
// 2. smee da sodrzhi _ $
// 3. ne smee da im drugi specijalni karakteri nitu prazni mesta
// 4. smee da ima brojki no da ne zapochnuva na broj

// var surname // deklariranje na promenliva
// surename = "Tashkovska" // zadavanje na vrednost

// var SE KORISTI ZA DEFINIRANJE NA GLOBALNI PROMENLIVI DOSTAPNI OD SEKADE 
// var name = "semos" // MOZHE NO NE MORA DA SE ZAPISHE ZBORCHETO VAR
 var Name = "Sanja"
 console.log(name)
 name = "semos akademija"
 console.log(name)
 console.log(Name)

 console.log("Hello, my name is "+ Name)

 ime = "Ana"
 console.log(ime)

let ime1 = "Petar" // SE KORISTI VO BLOK NA KOD; I NE MOZHEME DA DEFINIRAME POVEKJE PROMENLIVI SO ISTO IME AKO KORISTIME LET
ime1 = "Aleksandar"
console.log(ime1)

// const a = 10 // definiranje na konstantna vrednost
// a = 10
// console.log(a)

// PROMPT PROZORCHE SO INPUT POLE
/*var ime = prompt("Vnesi ime") // vrednosta na promptot se skladira vo ime
console.log(ime)

var godini = prompt("Vnesi godini")
var modul = prompt("Vnesi modul")
console.log("Jas se vikam "+ime+" imam "+godini+" i go izuchuvam "+modul)
*/

var num1 = prompt("Vnesi broj 1")
var num2 = prompt("Vnesi broj 2")

var parsed_num1 = Number(num1) // go konvertira stringot vo broj
var parsed_num2 = parseInt(num2) // go konvertira stringot vo cel broj
console.log(parsed_num1)
console.log(parsed_num2)

//OPERATORI
//+,-,*,/,%  (10%3)  3+3=9, 10-9=1 -ostatok
//++ (znachi zgolemuvanje za eden)
//-- (znachi namaluvanje za eden)
//+= (na starata vrednost dodavame vrednost
//-= (na starata vrednost odzemame vrednost)
//*=, /= (starata vrednost na promenlivata ja mnozhime/delime so vrednost)

var a = 5;
// pr: a = a+5
a+=5 //isto znachenje kako i predhodniot red 

// = (oznachuva dodeluvanje na vrednost)
// == (oznachuva sporedba po vrednost)
// === (oznachuva proverka po vrednost i pod.tip)

var x = 10
var y = '10'
console.log(x==y)
console.log(x===y)
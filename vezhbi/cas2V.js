// //CONDITIONAL (USLOVI)

// if(uslov){
//    naredbi;
// }

// AKO I SAMO AKO IMAME EDNA NAREDBA NE MORA DA SE PISHUVAAT FRAERSKI ZAGRADI

//let broj=0
//if(broj>=10){
//    console.log("Brojot e pogolem ili ednakov na 10")
//}

// dokolku imame SPROTIVEN nastan na if togash koristime struktura if-else

/* 
if(uslov){
    naredbi;
}else{
    naredbi;
}
*/


// PRIMER 1.
let promptBroj = prompt("Vnesi broj")
let broj = Number(promptBroj)
console.log(broj)

// vo sluchaj inputot da ne e broj dava rezultat NaN ->Not a number
//isNaN() -> FUNKCIJA KOJA PROVERUVA DALI INPUTOT NE E BROJ; VRAKJA true/false
console.log(isNaN(broj))

if(broj%2==0){
    console.log("brojot e paren")
}else{
    console.log("brojot e ne paren")
}
// PRIMER 2.

let godini = 20
 if(godini>=18 && godini<=60){
    console.log("Imate pravo da polagate za vozachka dozvola so "+ godini+" godini")
 }else{
    console.log("Nemate pravo da polagate so "+ godini+" godini")
 }

 // // TERANRY OPERATOR (?)
 // sintaksa: uslov ? naredba ako uslovot e ispolnet: (sprotivno) naredba ako uslovot ne e ispolnet
 // let godini = 30
 // let rezultat = (godini>=18) ? "Imate pravo da plagate" : "Nemate pravo da polagate"
 // nachin na pechatenje na vrednost na promenliva
 // console.log(`Odgovorot e ${rezultat}`)

 let proizvod = prompt("Vnesi proizvod")

 if(proizvod=="chokolado"){
    console.log("kupiv chokolado")
 }else if(proizvod=="mastika"){
    console.log("kupiv mastika")
 }else if(proizvod=="chips"){
    console.log("kupiv chips")
 }else{
    console.log("ne kupiv nishto")
 }
// PRAVILO! if mozhe da stoi samostojno dodeka else if ne mozhe da se definira bez if
// isto taka ne mora sekogash da se definira sprotiven (else) nastan

//domashno: da se prochita za switch-case i izrabotat primeri

/*
 switch(promenliva){
    case 1:
            naredbite vo sluchaj promenlivata da ima vrednost 1;
            break;
    case 2:
            nardbi;
            break;
    default: naredbi
}
*/
//PRIMER 1. zy switch-case 
let broj1=10
let broj2=5
let operator=prompt("Vnesi operator")

switch(operator){
    case "+":
        console.log(broj1+broj2)
        break;
    case "-":
        console.log(broj1-broj2)
        break;
    case "*":
        console.log(broj1*broj)
        break;
    case "/":
        console.log(broj1/broj2)
    break;
    default:
        console.log("Pogreshen operator")
}
//if(uslov){
//    naredbi;
//}

// ako i samo ako imame naredba ne mora da se pishuvaat fraerski zagradi

//let broj=20
//if(broj>=10){
//    console.log("Brojot e pogolem ili ednakov na 10")
//}

//dokolku imame SPROTIVEN nastan ne if togash koristime struktura if-else

// if(uslov){
//    naredbi;
//}
//else{
//    naredbi;
//}

//let promptBroj = prompt("Vnesi broj")
//let broj = Number(promptBroj)
//console.log(broj)
//vo sluchaj input ne e broj dava rezultat NaN = Not a number
//isNaN() -funkcija koja proveruva dali inputot ne e broj; vrakja true ili false
//console.log(isNaN(broj))

//if(broj%2==0){
//    console.log("brojot e paren")
//}else{
//    console.log("brojot e neparen")
//}

//let godini = 10
//if(godini>=18 && godini<=60){
//    console.log("Imate pravo za vozachka dozvola so "+godini +" godini")
//}else{
//    console.log("Nemate pravo da polagate za vozachka dozvola")
//}

//TERANRY OPERATOR (?) 
// sintaksata za teranry operatori no samo koga imame eden uslov gi koristime ovie operatori: uslov ? naredba ako uslovot e ispolnet : (sprotivno) ako uslovot ne e ispolnet
//let godini = 30
//let rezultat = (godini>=18)? "Imate pravo da polagate" : "Nemate pravo da polagate"
//console.log(`Odgovorot e ${rezultat}`) // nacin na pecatenje na vrednost na promenliva

let proizvod = prompt("Vnesi proizvod")

if (proizvod=="chokolado"){
    console.log("kupiv chokolado")
}else if(proizvod=="mastika"){
    console.log("kupiv mastika")
}else if(proizvod=="chips"){
    console.log("kupiv chips")
}else{
    console.log("ne kupiv nishto")
}

//PRAVILO! if mozhe da stoi samostojno dodeka else if i else ne mozhe da se definiraat bez if 
//isto taka ne mora sekogash da se definira sprotiven (else) nastan

//Domashno: da prochitate za switch-case 
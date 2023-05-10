// 1.Vnesete kordinati na edna tochka i kazhete vo koj kvadrant se naoga

//let promptBroj = prompt("Vnesi broj")
// let broj = Number(promptBroj)
let promptX = prompt("Vnesi koordinata po x-oska")
let X =Number(promptX)
let promptY = prompt("Vnesi koordinata po y-oska")
let Y=Number(promptY)
tochka = [X,Y];
console.log(tochka)

// So IF

//if(X==0 && Y==0){
//    console.log("Tochkata e centarot na koordinatniot sistem")
//}else if(X>0 && Y>0){
//    console.log("Tochkata e vo prviot kvadrant")
//}else if(X<0 && Y>0){
//    console.log("Tochkata e vo vtoriot kvadrant")
//}else if(X<0 && Y<0){
//    console.log("Tochkata se naogja vo chetvrtiot kvadrant")
//}else if(X>0 && Y<0){
//    console.log("Tochkata se naogja vo tretiot kvadrant")
//}else if(X!=0 && Y==0) {
//    console.log("Tochkata lezhi na X oskata")    
//}else if(X==0 && Y!=0){
//    console.log("Tochkata lezhi na Y oskata")
//}else{
//    console.log("Nemate vneseno broj za vrednost")
//}

// So switch
switch(true){
    case X==0 && Y==0:
        console.log("Tochkata e centarot na koordinatniot sistem")
    break;
    case X>0 && Y>0:
        console.log("Tochkata e vo prviot kvadrant")
    break;
    case X<0 && Y<0:
        console.log("Tochkata se naogja vo chetvrtiot kvadrant")
    break;
    case X<0 && Y>0:
        console.log("Tochkata e vo vtoriot kvadrant")
    break;
    case X>0 && Y<0:
        console.log("Tochkata se naogja vo tretiot kvadrant")
    break;
    case X!=0 && Y==0:
        console.log("Tochkata lezhi na X oskata")
    break;
    case X==0 && Y!=0:
        console.log("Tochkata lezhi na Y oskata")
    break;
    default:
        console.log("Nemate vneseno broj za vrednost")
    break;
}



// 2. Napravete lista od omileni knigi

let omileni_knigi = ["Majstorot i Margarita", "Maliot Princ", "Neuromancer", "The Peripheral", "1984"];
console.log(omileni_knigi)

// 2.1. Listata od omileni knigi kako objects

let knigiOmileni = [
    {
        naslov:"Majstorot i Margarita",
        avtor:"Mikhail Bulgakov",
        godinaIzdadena:1967,
    },

    {
        naslov:"Maliot Princ",
        avtor:"Antoan de Sent-Egziperi",
        godinaIzdadena:1943,
    },

    {
        naslov:"Neuromancer",
        avtor:"William Gibson",
        godinaIzdadena:1984,
    },

    {
        naslov:"The Peripheral",
        avtor:"William Gibson",
        godinaIzdadena:2014,
    },

    {
        naslov:"1984",
        avtor:"George Orwell",
        godinaIzdadena:1949,
    },
]

console.table(knigiOmileni)

console.log(knigiOmileni[0].naslov);
console.log(knigiOmileni[0].avtor);
console.log(knigiOmileni[0].godinaIzdadena);

console.log(knigiOmileni[1].naslov);
console.log(knigiOmileni[1].avtor);
console.log(knigiOmileni[1].godinaIzdadena);

console.log(knigiOmileni[2].naslov)
console.log(knigiOmileni[2].avtor);
console.log(knigiOmileni[2].godinaIzdadena); 

console.log(knigiOmileni[3].naslov);
console.log(knigiOmileni[3].avtor);
console.log(knigiOmileni[3].godinaIzdadena);

console.log(knigiOmileni[4].naslov)
console.log(knigiOmileni[4].avtor);
console.log(knigiOmileni[4].godinaIzdadena);









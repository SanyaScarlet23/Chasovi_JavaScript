// Ciklusi prodolzhenie od cas4_Maj_15ti_2023

// site parni broevi od 0 do 20

//let brojac = 0
//while(brojac<=20){
//    if(brojac%2==0){
//        console.log(brojac +" e paren broj")
//    }
//    brojac++;
//}

//let pochetok = Number(prompt("Vnesi pochetok"))
//let kraj =Number(prompt("Vnesi kraj"))

//let brojach = pochetok;
//let brojachNaParni = 0

//while(brojach<=kraj){
//    if(brojach%2==0){
//        console.log(brojach +" e paren broj")
//        brojachNaparni++
//    }
//brojach++;
//}
// console.log(`od ${pochetok} do ${kraj} ima ${brojachNaParni} parni broevi`)

/*let brojach = pochetok
let zbir = 0
while(brojach<=kraj){
    zbir+=brojach // 13+14+15+...
    brojach++
}

console.log(`Zbirot na broevite od  ${pochetok} do ${kraj} e ${zbir}`)
*/

/*
// pechatenje na site elementi od niza

let uchenici = ["Irena","Vilim","Gjoko"]

//let ucheniciLength = uchenici.length // za ova nema potreba od promenliva, se pishuva direktno vo uslovot od ciklusot
let index = 0

while(index < uchenici.length ) {
    console.log(uchenici[index]);
    index++
}
*/


// vnesuvanje na broevi vo se dodeka ne vneseme input koj ne e broj

/*
let input = prompt("vnesi broj")
let niza = []

//inNaN -> is Not a number
if(isNaN(input)){
    onslotchange.log("Vnesovte input koj ne e broj")
}
else{
    while(!isNaN(input)){
        niza.push(input) // Number(input) mozhe no i ne mora
        input = prompt("Vnesi broj")
    }
}
console.log(niza)
*/


// razlikata megju do-while i while e toa shto do-while se izvrshuva sigurno barem ednash
/*do{
    naredbi
}while(uslov)*/

/*
let i = 10
let suma = 0
do{
    suma+=i
    i+=2
}while(i<10)
console.log(suma)
*/

// FOR ciklusi

// for(inicijalizacija;uslov;inkrement/dekrement)
/*
for(let i=0; i<10; i++){
    console.log(i)
}

let niza=[1,2,3,4]
//for(let i=0; i<niza.length; i++){
//    console.log(niza[1])
//}

/*
for(let i=niza.length-1; i>=0; i--){
    console.log(niza[i])
}
*/
/*
let uchenici = ["Angela","Damjan","Irena","Sanja","Gjoko","Danche","Maja"]

for(let i=0; i<uchenici.length; i++){
    let ime = uchenici[i]
    if(ime.length>=6){
        console.log(ime)
    }
}
*/

let i = 10
let suma = 0
do{
    i+=2
    suma+=i
}while(i<10)
console.log(suma) // kje ispechati 12 ako beshe prvo sum pa posle i+=2 vo do{}
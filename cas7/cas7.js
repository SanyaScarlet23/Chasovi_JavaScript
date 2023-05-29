//anonimna funkcija
/*
let anonimna = function(){ // promenliva koja e funkcija e anonimna funkcija
    console.log("This function is anonymous")
}

anonimna()// na ist nachin se povikuva

//FAT ARROW Function zbotor se iskluchuva i se zamenuva ova funkcija so znaci!!! MNOGU se Koristat
let anonimna2 = () =>{ console,log("zdravo")} // so => e vsushnost zamena za function
anonimna2() // ja povikuvame najnormalno so istata sintaksa

//primer za site opcii za FAT ARROW function
let zbirBroj10 = a=>a+10 // imame 1 parametar i vrakja edna naredba
console.log(zbirBroj10(5))

//primer za dva parametri i edna naredba
let suma = (a,b)=>a+b
console.log(5,3)

//primer so povekje parametri i povekje naredbi
let proizvod = (a,b)=>{
    console.log(a*b)
    console.log("zdravo")
}
proizvod(2,3)

*/

// Primer so fat arrow function za presmetuvanje na faktoriel
/*
let faktoriel = x=>{
    let proizvod =1
    for(let i=x;i>0;i--){
        proizvod*=i
    }
    return proizvod
}

console.log(faktoriel(4))
console.log(faktoriel(5))
console.log(faktoriel(3))
*/
/*

//Primer za funkcija koja ima ne ogranichen broj na parametri (...args), args=arguments(parametri)
let unknownArgs= (...args)=>{
    console.log(args)
}
unknownArgs("1",2,10,200,"www")
unknownArgs(1,2,3,4,5,6,7,8,9,10)
*/

//Primer za splice gi stava vo a
/*
let unknownArgs= (a...args)=>{ 
    console.log(args)
}

unknownArgs("1",2,10,200,"www")
unknownArgs(1,2,3,4,5,6,7,8,9,10)
*/

//Primer za Rekurzivna funkcia(funkcija vo koja se povika istata funkcija)
//Faktoriel e sovrshen primer za rekurzivna funkcija!!!Bitno
let faktoriel= (x)=>{
    if(x==0){
        return 1
    }else{
        return x*faktoriel(x-1)
    }
} //5*faktoriel(4); 5*4*faktoriel(3); 5*4*3*faktoriel(2); 5*4*3*2*faktoriel(1); 5*4*3*2*1

// CALLBACK funkcii e funkcija koja prima parametri koi se drugi funkcii
/*
function greeting() {
    console.log("Hello")
}

function bye() {
    console.log("bye")
}

function testCallback(a1,a2) {
    if(5>4){
        a1()
    }else{
        a2
    }
}

testCallback(greeting,bye)//kako vrednosti se zadavaat n iminjata na funkciite
*/

//pred definirani funkcii epten korisni: setInterval i setTimeout

/*setInterval
let interval = setInterval( ()=>{//prima prv parametar funkcija, vtor vrednost vo ms za intervalo
    alert("Interval")
},2000)
*/

/*setTimeout
let timeout = setTimeout(()=>{
    alert("hi")
    clearInterval(interval)// go prekinuva intervalot so odredeno ime
},500)
*/

//DOPOLNITELNI FUNKCII ZA NIZI KOI PRIMAAT FUNKCII KAKO PARAMETAR: forEach, map, filter,reduce(dava eden cel broj)

//foreach/map/filter/reduce

let niza=[1,5,3,5,7,5,3,1]

/*
//povikuva funkcija za sekoj element od nizata vo koja se izvrshuvaat nekoi naredbi povrzani so toj element
 niza.forEach((element,index)=>{ // mozhe i bez index pak kje raboti najnormalno samo shto nema da go pechati indexot na elementot 
    console.log(element,index)
 })

 //index parametarot e opcionalen, go dodavame po potreba
 niza.forEach((element)=>{ // mozhe i bez index pak kje raboti najnormalno samo shto nema da go pechati indexot na elementot 
    console.log(element)
 })
*/

/*
niza.forEach((element,index)=>{ // podobro da se koristi (for element of niza) ako nema pobaruvanje za indexot 
    if(index%2==0){
        console.log(index+":"+element)
    }
})
*/

/*
//primer1
let niza2=niza.map(element=>element*2)
console.log(niza2)

//map se koristi koga sakame da kreirame nova niza so ist broj na elementi kako prvata (niza) no modificirana
// sekoj pat map vrakja niza
//prmer2
let niza3=niza.map((element,i)=>element*2+i)
console.log(niza3)

*/

let niza4=niza.filter(x=>x%2==0) // ako e true vnatreshnata funkcija togash kje go smestuva elementot t.e x vo nova niza t.e niza4
console.log(niza4)

let kandidati =[{name:"a",height:190},{name:"b",height:160}]

let k=kandidati.filter(element=>element.height>170)
console.log(k)

let names=kandidati.filter(element=>element.height>170).map(e=>e.name)
console.log(names)
//mozheme da gi kombinirame filter, map i reduce po potreba primer: filter(funkcija).map(funkcija)

let reducedArray = niza.reduce((acc, curr)=>acc+curr)
console.log(reducedArray)

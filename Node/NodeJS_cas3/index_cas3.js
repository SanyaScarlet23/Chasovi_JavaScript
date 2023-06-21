//! TYPEOF
console.log(typeof undefined);//output: undefined
console.log(typeof 239);//output: number
console.log(typeof 12n);//output: bigInt
console.log(typeof false);// output: boolean
console.log(typeof null)// output: object
console.log(console.log); // output: function
console.log(typeof "undefined")//output: string

//! BOOLEAN TRUE FALSE
console.log(Boolean(1)); //output: true
console.log(Boolean(0)); //output: false
console.log(Boolean("")); //output: false kako 0 isto
console.log(Boolean("  ")); //output: true
console.log(Boolean("1")); //output: true
console.log(Boolean("123456")); //output: true

console.log(+true)//output: 1
console.log(2>1)//true
console.log(2==1)//true
console.log(2=="2")//true
console.log(2 != 1)//true

//! || -or (ili ili)
// console.log(true || true); //output:true
// console.log(true || false);//output:true
// console.log(false || true);//output:true
// console.log(false || false);//output:false

//! && -and (ili ili)
// console.log(true && false);//output:true
// console.log(false && false);//output:false
// console.log(false && true);//output:false
// console.log(true && true);//output:false

//! Ternary operators
//uslov ? uslovot ako e tochno : uslovot ako e netochen
//const godini =26;
//const vozrast =godini >=18 ? "Polnoleten" : "Ne e polnoleten"

//!Rabota so nizi(Arrays)
const arrayEden=[5,2,3,6,7,8];
const arrayDva=[1,1,1,1,1];
const arrayTri=[10,20,30,40];
const arrayTriPrazen=[];
const ovoshje=["jabolka","praska","limun"];
const arrayNov=[];
const arrayponov=[];
const zelencuk="kromid";

//for(let i=0; i<arrayEden.length;i++){
//    console.log(arrayEden[i]);
//}

arrayponov[0] = ovoshje[0];
arrayponov[1] = "apple";
arrayponov[2] = zelencuk;
console.log(arrayponov);

// for(let i=0; i<arrayDva.length; i++){
//     arrayNov[i] = arrayDva[i]+1;
//     arrayponov[i]=arrayEden[i];
//     arrayTri[i]=arrayTri[i]+10;
// }
//console.log(arrayNov);
//console.log(arrayponov);
//console.log(arrayNov);

//! Kopiranje na array
//spread operator
const arry1=[2,3,4,5,6];
const arry2=[24,313,45,50,60];
const array3=array1.concat(array2);
const array4=[...array1, ...array2];
console.log(array4);

//!Destruction on Arrays
const arr1=[1,3,7];
const [a, b, element3]=arr1;
console.log(element3);

const arr2=[50,100,5,6,7,8,9]
const [x,z,...y]=arr2;
console.log(x);
console.log(y);
console.log(z);

//!Destruction on Objects
const myObject ={produkt: "Smoki", cena:13}
const {cena,produkt}= myObject;
console.log(cena,produkt);

//!Kopiranje na Objekt mozhe so spread operator no ima i drug nachin :)))
const obj1 ={
    item1: "eden",
    item2: "dva",
};

const obj2 ={
    item3: "tri",
    produkt: "osum",
};

const pbj3 ={...obj1, ...obj2, item3: "Chetiri"}


//! Implementacija na gotovi hight-order functions vo javascript
//* MAP, FOREACH, REDUCE, FILTER, SORT, FIND

//*forEach: vrshi interacija na sekoj element vo arrayot znachi ne go modificira 
//po default tuka samo go izminuva kako for loop raboti, no ako sakame mozheme i da ja modificirame nizata!!!
//Syntax: arrayEden.forEach((item, index, arr)=>console.log(item, index, arr))
//primer za modifikacija:

arrayTri.forEach((item,index,arr)=>(arr[index]=item+20)); 
for(let i=0; i<arrayTri.length; i++){
    //console.log(arrayTri)
};



//! MAP metodata izminuva niza za promena na istata, rezultatot e nova niza
const arrayCetiri =arrayTri.map((item,index)=>{
    return item +10;
});

//! REDUCE reducira/namaluva/sumira niza na eden edinstven rezultat
//accumulatorot -s e segashnaVrednost

const reducePrimer = [5,1,2,3,4,2];

let rezultat = arrayCetiri.reduce((acc, s)=>{
    return acc +s;
},0);

console.log(`Rezultatot na reducePrimer e ${rezultat}`);

//! SORT sortira elementi vo niza spored dadena funkcija za sortiranje
//Go modificira originalniot array

reducePrimer.sort((a,b)=>b-a); //od pogolemo do pomalo so a i b i b-a ako e samo sort togash e od pomalo kon pogolemo
console.log(reducePrimer)

//!FILTER vrakja nova niza od elementi koi odgovaraat na postaveniot uslov
const brojkiFilter = reducePrimer.filter((vrednosti)=> {
    return vrednosti > 3;
});
console.log(brojkiFilter);

//! FIND vrakja element od nizata koja odgovara na postaveniot uslov. Bitno: Go vrakja prviot element koj odgovara na uslovot i zastanuva
//! ne prodolzhuva ponataka da proveruva vrakja edna vrednost!!!
const brojkaFind = reducePrimer.find((vrednost)=>{
    return vrednost == 2;
});
console.log(brojkaFind);

//Primeri so niza od objekti:
const studenti=[
    {ime:"Bojan", prosek: 7.2, grad: "Skopje" },
    {ime:"Pero", prosek: 8.3, grad: "Bitola" },
    {ime:"Janko", prosek: 6.9, grad: "Kumanovo" },
    {ime:"Vesna", prosek: 9.1, grad: "Prilep" },
    {ime:"Elena", prosek: 9.9, grad: "Tetovo" },
    {ime:"Vancho", prosek: 8.8, grad: "Kratovo" },
    {ime:"Simona", prosek: 7, grad: "Ohrid" },
    {ime:"Ivana", prosek: 6.3, grad: "Kumanovo" },
    {ime:"Natasha", prosek: 8.2, grad: "Skopje" },
    {ime:"Stanko", prosek: 6.7, grad: "Kichevo" },
    {ime:"Damjan", prosek: 9.1, grad: "Kumanovo" },
    {ime:"Sandra", prosek: 9.2, grad: "Ohrid" },    
]

//todo: Da gi izlistame site iminja na studenti so primena na for loop 
//for(let i=0; i<studenti.length; i++){
//    console.log(studenti[i].ime);
//};

//todo: istiot primer za listanje na iminjata samo so primena na forEach
// studenti.forEach((studentObj) => console.log(studentObj.ime));

//todo: Da se izlistaat site studenti so prosek nad 9
let filtriraniStudenti = studenti
   .filter((studentObj) => studentObj.prosek > 9)
   .sort((a,b) => b.prosek - a.prosek)
   .slice(0, 2); // od kade da pochne 0 i kolu treba da smesti! nie od filter vidovme deka se samo dvaica studenti
console.log(filtriraniStudenti);

//todo: Da pronajdeme student shto ima prosek 6.9 (da ima i povekje studenti so prosek 6.9 so find kje vrati edna vrednost prviot koj kje go najde)
let edenStudent = studenti.find((studentObj) => studentObj.prosek === 6.9);
console.log(edenStudent);

//todo: Da presmetame zbir na site proseci na site studenti
const zbirNaProsek = studenti.reduce((acc, sV) => acc + sV.prosek, 0); // 0 e tuka zemena od koja vrednost treba da e pochetnata na acc vrednost
console.log(zbirNaProsek);

//! Kako dve nizi mozhat da se sporedat? Ako i samo ako se od .json tip file

const array1 = [1,2,3];
const array2 = [1,2,3];

console.log(JSON.stringify(array1)===JSON.stringify(array2)); // se vadat nizite vo .json i togash mozhat da se sporeduvaat megjusebno

//? Domasna
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
let skopjeStudenti = studenti
       .filter((studentObj) =>studentObj.grad == "Skopje")
       .filter((studentObj) => studentObj.prosek > 7)
       .sort((a,b) => a.ime + b.ime)
      // .endsWith((studentObj) => {
      //   let imeNaUchenik = studentObj.ime;
      //   let zavrshuvaNaA =imeNaUchenik.endsWith("a");
      // return studentObj;
     // });
console.log(skopjeStudenti);


//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
let studentiNeOdSkopje = studenti
     .filter((studentObj) => studentObj.prosek > 9) 
     .filter((studentObj) => studentObj.grad != "Skopje")
     .sort((a,b) => b.prosek - a.prosek);
console.log(studentiNeOdSkopje);

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
let iminja5 = studenti
      .filter((studentObj) => studentObj.ime.length > 5)
      .slice((0, 3))
      .sort((a,b) => b.prosek - a.prosek);
console.log(iminja5.length);
console.log(iminja5);
//let prviTri = iminja5
//        .slice((3, iminja5.length))
//        .sort((a,b) => b.prosek - a.prosek);
//console.log(prviTri);


//? 4. Vkupen prosek na studenti koi se od Kumanovo
let StudentiKU = studenti.filter((studentObj) => studentObj.grad == "Kumanovo");
console.log(`Vkupniot broj na studenti od KU e ${StudentiKU.length} i se prikazhani na dolnata lista:`);
console.log(StudentiKU);

let prosekStudentiKu = StudentiKU.reduce((acc, sValue) => acc + sValue.prosek, 0);
let prosekKU = prosekStudentiKu/StudentiKU.length;
console.log(`Prosekot na studentite od Kumanovo e presmetan i iznesuva ${prosekStudentiKu}/${StudentiKU.length} = ${prosekKU}`);

//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid

let studentiSK = studenti.filter((studentObj) => studentObj.grad == "Skopje");
console.log(`Vkupniot broj na studenti od Skopje e ${studentiSK.length} i se prikazhani na dolnata lista:`);
console.log(studentiSK);
let prosekStudentiSK = studentiSK.reduce((acc,sValue) => acc+sValue.prosek,0);
let prosekSK= prosekStudentiSK/studentiSK.length;
console.log(`Prosekot na studentite od Skopje e presmetan i iznesuva ${prosekStudentiSK}/${studentiSK.length} = ${prosekSK}`);


let studentiOH = studenti.filter((studentObj) => studentObj.grad == "Ohrid");
console.log(`Vkupniot broj na studenti od Ohrid e ${studentiOH.length} i se prikazhani na dolnata lista:`);
console.log(studentiOH);
let prosekStudentiOH = studentiOH.reduce((acc,sValue) => acc+sValue.prosek,0);
let prosekOH = prosekStudentiOH/studentiOH.length;
console.log(`Prosekot na studentite od Ohrid e presmetan i iznesuva ${prosekStudentiOH}/${studentiOH.length} = ${prosekOH}`);

//Prosekot od prosecite mozheme da go presmetame kako: zbirot od prosecite na prosekSK i prosekOH /2
let zaednichkiProsekSKOH = (prosekSK+prosekOH)/2;
console.log(`Zaednichkiot prosek na studentite od SK i Oh iznesuva ${zaednichkiProsekSKOH}`)

//Drug nachin za presmetka na prosekot od prosecite:
let studentiSKOH = studentiSK.concat(studentiOH)    
console.log(studentiSKOH);
let prosekOdproseci = studentiSKOH.reduce((acc,sValue) => acc+sValue.prosek,0);
let prosekSKOH=prosekOdproseci/studentiSKOH.length;
console.log(`Prosekot na studentite od Skopje i Ohrid e presmetan i iznesuva ${prosekOdproseci}/${studentiSKOH.length} = ${prosekSKOH}`);

//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
// so push() method e dodaden na krajot od nizata noviot student, dodeka so unshift() method-ot kje go dodademe na pochetokot od nizata
studenti.unshift({ime:"Goran", prosek: 7.3, grad:"Delchevo" });
studenti.push({ime:"Goran", prosek: 7.3, grad:"Delchevo" });
console.log(studenti);

//? 7.Da se izbrishe prviot student vo studentite
//Bidejkji vo 6 zad., e dodaden noviot student i na pochetok i na kraj od nizata studenti tuka e otstranet od pochetokot na nizata
let studentObj = studenti.shift();
console.log(studenti);


//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)
let studentiKUMANOVO = studenti
           .filter((studentObj) => studentObj.grad == "Kumanovo");
            //.map((studentObj) =>  studentObj.prosek+1);
          
console.log(studentiKUMANOVO);

let studentiOHRID = studenti.filter((studentObj) => studentObj.grad == "Ohrid");
console.log(studentiOHRID)

let zaednoKUOH = studentiKUMANOVO.concat(studentiOHRID);
console.log(zaednoKUOH);

for(let i=0; i<zaednoKUOH.length; i++){
    zaednoKUOH[i].prosek++    
};
console.log(zaednoKUOH)
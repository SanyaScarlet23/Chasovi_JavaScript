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
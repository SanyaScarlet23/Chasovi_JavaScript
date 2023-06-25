//? Student ime prezime prosek grad vo studenti1.json kreirana niza 
//? Dodavanja student vo fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of gajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da e konvertirana vo tekst | JSTON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile


const domashnoModul =require("./domashnoModul.js"); //kako go povikuvame modulot vo koj ni se definirani funkciite koi sakame da gi koristime na koe bilo drugo mesto

/* Sintaksa za asinhrona funkcija vo koja koristime await za file system
(async()=>{
    try{

    }catch(err){
        console.log(err)
    }
})();
*/

//Moj nachin kako ja reshiv zadachata, tochna no dolnoto reshenie e podobro!
/*
(async()=>{
    try{
        const celaSodrzhina = await domashnoModul.fileRead("studenti1.json");
        let studenti1 = JSON.parse(celaSodrzhina);

        studenti1.push({ime:"Lidija", prezime:"Lidova", prosek:8.8, grad:"Strumica"});
        console.log(studenti1);
        await domashnoModul.fileWrite("studenti1.txt", JSON.stringify(studenti1));

    }catch(err){
        console.log(err)
    }

})();
*/

//Reshenie podobro kade shto so patametarot student koj go stavame vo async-function si dodavame kolku i kakvi sakame chlenovi vo nizata!!!

const addstudent = async(student)=>{
    try{
        const celaSodrzhina = await domashnoModul.fileRead("studenti1.json"); 
        let studenti1 =JSON.parse(celaSodrzhina);
        studenti1.push(student);
        console.log(studenti1);
        
        await domashnoModul.fileWrite("studenti1.txt", JSON.stringify(studenti1)); 
    }catch(err){
        console.log(err);
    }
 }
 addstudent({ime:"Lidija", prezime:"Lidevska", prosek:8.9, grad:"Struga"})

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

(async()=>{
    try{
        const celaSodrzhina = await domashnoModul.fileRead("studenti1.json"); //1.Vchitana celata sodrzhina od fajlot fs|fs.readFile od modulot domashnoModul.js
        let studenti1 =JSON.parse(celaSodrzhina); //2.konvertiran studenti1.json vo niza so JSON.parse
        //console.log(studenti1);

        //3.dodavanje na podatok na student vo nizata so push() method, odnosno na krajot od studenti1
        studenti1.push({"ime":"Lidija", "prezime":"Lidevska", "prosek":8.9, "grad":"Struga"});
        console.log(studenti1);
        //4.Nizata od js niza objekt da se konvertira vo tekst i_JSON.stringify tekstot da bide zachuvan kako student1.txt kje ja
        //koristime funkcijata fileWrite od modulot domashnoModul.js
        await domashnoModul.fileWrite("studenti1.txt", JSON.stringify(studenti1)); //so ova e kreiran fajl: studenti1.txt 
        
    }catch(err){
        console.log(err);
    }
})();

//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot so primena na fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot so primena na  fs.writeFile



const domashnoModul= require("./domashnoModul.js");
/* Sintaksa:
(async()=>{
    try{

    }catch(err){
        console.log(err)
    }
})();
*/
(async()=>{
    try{
        const sodrzhina = await domashnoModul.fileRead("studenti1.json");//1. Da ja vchitate celata sodrzina od fajlot so primena na fs.readFile
        let studenti2 = JSON.parse(sodrzhina); //2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
        console.log(studenti2);

        //3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clenso Array.map da go smenime imeto na posledniot student 
        studenti2.map((studentObj) =>  studenti2[studenti2.length -1].ime = "Biljana");
        console.log(studenti2);

        //4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
        //5. tekstot treba da bide zachuvan vo fajlot so primena na  fs.writeFile
        await domashnoModul.fileWrite("studenti2.txt", JSON.stringify(studenti2));

    }catch(err){
        console.log(err);
    }

})();
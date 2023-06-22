//? Brishenje na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da she izbrtishe studen od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot



const domashnoModul = require("./domashnoModul.js");

(async() =>{
    try{
        const vchituvanje = await domashnoModul.fileRead("studenti1.json"); // 1.celata sodrzhina od json da se vchita
        let studenti3 = JSON.parse(vchituvanje); //2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
        console.log(studenti3);
        console.log(studenti3.length);
       
        //3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
        let filteredStudenti3 = studenti3.filter((studenti3Obj) => studenti3Obj.ime != "Milica" );
        console.log(filteredStudenti3);
        console.log(filteredStudenti3.length);

        //4. Nizata od js treba da bidde konvertirana vo tekst
        //5. Tekstot treba da bide zachuvan vo fajlot
        await domashnoModul.fileWrite("studenti3.txt", JSON.stringify(filteredStudenti3));

    }catch(err){
        console.log(err);
    }

})();

const readWrite = require("./readWrite");

(async ()=>{
    try{
        const dataString = await readWrite.fileRead("studenti.json");
        let studenti =JSON.parse(dataString);
    //kako e .sort() na peshki methodot
    const sortProsek = studenti.sort((a,b)=>{
        if (a.prosek<b.prosek){
            return -1;
        }else if(a.prosek>b.prosek) {
            return 1;
        }
        return 0;
    });
    
    //console.log(sortProsek);
    const najnizokProsek = sortProsek[0];
    const najvisokProsek = sortProsek[sortProsek.length -1];

    const sredenProsek =
    studenti.reduce((acc,studentObj) =>{
        return acc + studentObj.prosek;
    },0) / studenti.length;

    console.log(sortProsek);
    console.log(sredenProsek);
    console.log(najnizokProsek);
    console.log(najvisokProsek);
    await readWrite.fileWrite("prosek.txt", JSON.stringify(sredenProsek)); //ZAPOMNI: morame da go stavime vo.JSON bidejkji e broj a mora da e string !!!
    await readWrite.fileDelete("prosek.txt");
    
    }catch (err) {
        console.log(err);
    }
})();

//? Student ime prezime prosek grad
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of gajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da e konvertirana vo tekst | JSTON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da she izbrtishe studen od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot

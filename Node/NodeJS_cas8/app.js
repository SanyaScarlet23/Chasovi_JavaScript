//! Arhitekturata na edna aplikacija igra kluchna uloga za organizacijata i strukturata na samata aplikacija

//! 1. Organizirame i struktuirame nashiot kod
//! 2. Podelba na sektori
//! 3. Podobruvanje na testiranjeto na nashata aplikacija
//! 4. Odrzhlivost
//! 5. Modularnost

//* MVC - arhitektura
//* MVC
//! M- Model ova biznil logikata ili logikata za podatocite
//! V- View e zagrizhen za prezentacija na izgledot
//! C - Controller - Kontrolerot e mozokot na aplikacijata, koja vrshi interakcija so modelot i view 

const express = require("express");
const calculator = require("./controller/calculator");

const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);

/*
app.get("bmi/:weight/:height", (req, res)=>{ // on stavi .use no treba .get !!! vidi zoshto OK!!!
    const weight = req.params.weight;
    const height = req.params.height;
    const bmi = weight / (height* height);
    res.send(`${bmi}`);

});
*/

app.get("/bmi/:weight/:height", calculator.bmiCalculator); // so ova ja izvrushuvame 
app.get("/newton/:mass/:acc", calculator.calculateForce);

app.get("/calculator", calculator.getCalculator);
app.post("/calculator", calculator.postCalculator);


app.listen(10000, (err)=>{
    if(err) return console.log(err);
    console.log("Server started")
});

//? DA SE KREIRA VO CALCULATOR USHTE & FUNKCII DO 10
//? da se kreira nov html file shto kje se vika rezultat
//? 1. da se presmeta ploshtina na pravoagolnik
//? 2. da se presmeta f2c i obratno da se implementira switchgh
//? 3. da se kreira calculator (switch || if else)
//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
//? SITE OVIE FUNKCII DA VRAKJAAT WEB STRANIICA
//? STRANICATA DA IMA NEKAKOV STYLING(boi, background, flex, border)
//? VO WEB STRANICATA DA IMA  NASLOV ZA STO SLUZI REZULTATOT
//? I DA IMA PARAGRAPH SO KOJ KJE SE OBNASUNVA ZADADENATA FUNKCIJA
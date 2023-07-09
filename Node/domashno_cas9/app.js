//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

const express = require("express");
let ejs = require("ejs");
let {zelenchukOdDomashna, dodadi}= require("./controller/functions");
const app = express();

//za object
app.use(express.urlencoded({extended: true}));
//za setiranje na EJS deka koristime
app.set("view engine", "ejs");

//get() method
app.get("/zelenchuk", zelenchukOdDomashna);
//post() method
app.post("/zelenchuk", dodadi);

//Oslushuvanje na app so server da se def
app.listen(10011, (err)=>{
    if(err) return console.log(err);
    console.log("Server has been started successfully on port 10011");
});

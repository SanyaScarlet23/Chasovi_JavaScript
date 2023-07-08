const express=require("express");
let ejs = require("ejs");

const app = express();
app.use(express.urlencoded({extended: true})); //zadolzhitelno_Object-to go pravi
app.set("view engine", "ejs"); // Ovaa e zadolzhitelno koga kje koristime odnosno deka kje koristime ejs

let data={
    ime:"Pero",
    prezime:"Perovski",
    niza:["Skopje", "Bitola", "Kumanovo", "Tetovo"],
    studenti:[
        {ime:"Pero",prezime:"Perovski",prosek:9.2},
        {ime:"Janko",prezime:"Jankovski",prosek:8.2},
        {ime:"Stanko",prezime:"Stankovski",prosek:7.4},
        {ime:"Pero",prezime:"Perovski",prosek:7.0}
    ],
};

let domasna = {
    ime: "Sanja",
    prezime: "Kostovska",
    ovoshje: ["Jabolko, Praska, Kajsija, Krusha"],
    zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
    vitmini: [
      { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
      { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
      { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
      { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
      { ime: "Domat", vitamin: "G", mineral: "Srebro" },
    ],
};

// definirame get() method respond-ot ni e tuka so render!!!
app.get("/",(req,res)=>{
    res.render("index", data);
});

//!Morame posle "index" da gi zadademe ako sakame da funkcionira malku e poteshka sintaksata

// definirame na app-ot post() method i tuka informaciite odat vo body!!! 
// Isto taka res.render odnosno respon-ot odi so render
app.post("/", (req, res) => {
    console.log(req.body);
    const novStudent = {
      ime: req.body.ime,
      prezime: req.body.prezime,
      prosek: req.body.prosek,
    };
    data.studenti.push(novStudent);
  
    res.render("index", data);
});
  
//? DA SE KREIRA LOGIKA KAKO KJE GO BRISHIME STUDENTOT
/*
  app.post("/delete/:ime", (req, res) => {
    //? DA SE KREIRA LOGIKA KAKO KJE GO BRISHIME STUDENTOT
    res.redirect("/");
  });
*/

app.listen(9000, (err)=>{
    if(err) return console.log(err);
    console.log("succesfully started  on port 9000");
});

//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja
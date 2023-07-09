//za file system
const fs = require("fs");

//definiran objek so podatoci odnosno data
let domashna = {
    ime: "Sanja",
    prezime: "Kostovska",
    ovoshje: ["Jabolko, Praska, Kajsija, Krusha"],
    zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
    vitamini: [
      { ime: "Jabolko", vitamin: "C", mineral: "Kalcium" },
      { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
      { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
      { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
      { ime: "Domat", vitamin: "G", mineral: "Selen" },
    ],
};

//za printanje na objektot so podatoci
const zelenchukOdDomashna =(req,res)=>{
    res.render("index", domashna)
};

// funkcija za dodavanje na nov element vo tabelata
const dodadi =(req,res)=>{
    console.log(req.body);
    const addElement= {
        ime: req.body.ime,
        vitamin: req.body.vitamin,
        mineral: req.body.mineral
    }
    domashna.vitamini.push(addElement);
    res.render("index", domashna);
};

//eksportiranje na gorenavedenite funkcii od fs
module.exports ={
    dodadi,
    zelenchukOdDomashna
};
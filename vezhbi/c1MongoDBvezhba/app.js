// Go povikuvame express modulot
const express = require("express");

// Go povikuvame mongoose modulot
//? Mongoose e biblioteka za modeliranje na podatoci vo MongoDB baza, koja e bazirana vrz MongoDB 
//? i obezbeduva povisoko nivo na apstakcija slichno kako shto e espress za Node.js
const mongoose = require("mongoose");

// Go povikuvame kontrolorot (vo nego se smesteni funkciite za CRUD System- Create Read Update Delete System)
const filmControllor = require("./controllers/filmController");

// Inicijalizirame express aplikacija ...
const app = express();

// Se parsiraat informaciite shto gi prakjame od forma od front-end
app.use(express.urlencoded({extended: true})); // pri shto sozdavame objekt

// Sega kje ja vrzeme databazata preku mongoose koe e za MongoDB i toa so method-ot connect
// 1 prviot argument e url-to do nashata data baza
// 2 vtoriot argument e konfiguracijata za taa data baza

mongoose
    .connect(
        "mongodb+srv://sanyakost:Kumanovo23@cluster0.gpeifzi.mongodb.net/bazafilmovi?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(()=> {
        // se povikuva then() method-ot so koj method ako e uspeshno povrzana bazata konzolirame success
        console.log("Succesful connection!");
    })
    .catch((err)=> {
        // ili catch() method-ot ako ne e uspeshno povrzana data bazata togash konzolirame greshka
        console.log(err);
    });

    //! Tuka kje gi vrzeme site funkcii od controllerot otkako prethodno gi zapishavme vo controllers-> filmController i odime so definiranje na rutite!!!
    //!prviot parametar e rutata odnosno kako ni se vika kolekcijata, dodeka vtoriot parametar e const filmControllor = require("./controllers/filmController"); i soodvetnata funkcija na koja method-a pripagja 
    app.get("/films", filmControllor.getAllFilms);
    app.post("/films", filmControllor.createFilm);
    app.get("/films/:naslov", filmControllor.getFilm);
    app.patch("/films/:id", filmControllor.updateFilm);
    app.delete("/films/:id", filmControllor.deleteFilm);



    // Da se povrzeme so serverot
    app.listen(10000, ()=> {
        console.log("Application running");
    });

    //! Mozheme vo app.js da ja napisheme shemata, no nie kje praktikuvame vo folderot model i filmModel.js fajlot za podobra preglednost 
    //! So metodot Schema definirame shablon so struktura na nashta data baza
    //!sozdavame primerok od toj objekt shto mozheme da go koristime za da definirame schema
    // const filmSchema = new mongoose.Schema({
    //    naslov: {
    //        type: String,
    //        require: [true, "Mora da ima naslov bidejkje e required!"],
    //    },
    //    zanr: {
    //       type: String,
    //       required: [true, "Mora da ima definiran zhanr, bidejkji e required!"],
    //    },
    //    ocena: {
    //         type: Number,
    //         default: 3,
    //    },
    //    vreme: {
    //        type: Date,
    //        default: Date.now,
    //      },
    //});

    //Method-ot mongoose.model() funkcijata zema dva parametri: imeto na kolekcijata i objektot na shemata so koja ja definirame strukturata na kolekcijata.
    // const Film = mongoose.model("Film", filmSchema);

    //Kreirame nova instanca od Film modelot
    // const testFilm = new Film({
    //    naslov: "Avatar",
    //    zanr: "Avantura",
    //});

    // async function saveFilm() {
    //    try{
    //        await testFilm.save();
    //        console.log("Film saved successfully!")
    //    } catch(err) {
    //        console.log(err);
    //    }
    //}

    // saveFilm();
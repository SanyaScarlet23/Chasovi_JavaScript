// go povikuvame express modulot
const express = require("express");

//go povikuvame mongoose modulot
const mongoose = require("mongoose");
// Mongoose e biblioteka za modeliranje na podatoci vo MongoDB baza,koja e bazirana vrz MongoDB i obezbeduva povisoko nivo na apstrakcija slichno kako shto e ekspress za NodeJS

// Povikuvame kontrolor
const filmControllor = require("./controllers/filmController");

// inicijalizirame express aplikacija
const app = express();

// Se parsiraat informaciite shto gi prakjame od forma od front-end
app.use(express.urlencoded({extended: true}));

// so methodot connect vospostavuvame konekcija so bazata na podatoci MongoDB
// 1.prviot argument e url-todo nashata data baza
// 2. vtoriot argument e kofiguracijata za taa data baza

mongoose
.connect(
    "mongodb+srv://sanyakost:Kumanovo23@cluster0.gpeifzi.mongodb.net/Filmovi?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(()=>{
    // se povikuva then method-ot so koj method ako e uspeshno povrzana data bazata konzolirame succesfull connection
    console.log("Succesfull connection!");
})
.catch((err)=>{
    // ili ako ima greshka go pishuvame method-ot catch so koj method konzolirame greshka 
    console.log(err);
});

app.get("/films", filmControllor.getAllFilms);
app.post("/films", filmControllor.createFilm);

//slushanje na server
app.listen(11000, () =>{
    console.log("Application running");
});



// so metodot Schema definirame shablon so struktura na nashata data baza
// odnosno sozdavame primerok od toj objekt shto mozheme da go koristime za da definirame shema
//const filmSchema = new mongoose.Schema({
//    naslov: {
//        type: String,
//        required: [true, "Mora da ima naslov"],
//    },
//    zanr: {
//        type: String,
//        required: [true, "mora da imame zhanr"],
//    },
//    ocenka: {
//        type: Number,
//        default: 3,
//    },
//    vreme: {
//        type: Date,
//        default: Date.now,S
//    },
//);

// Methodot mongoose.model() zema dva argumenti: imeto na kolekcijata i objektot na schema-ta so koja ja definirame strukturata
//const Film = mongoose.model("Film",filmSchema);

//kreirame nova instanca od Film modelot
//const testFilm =new FilmS({
//    naslov: "The Godfather",
//    zanr: "crime",
//    ocena: 7.7,
//});

//async function saveFilm(){
//    try{
//        await testFilm.save();
//        console.log("Film saved successfully.");
//    } catch(err){
//        console.log(err);
//    }
//}

//saveFilm(); // ja povikuvame async funkcijata saveFilm


//? Tuka vo model folderot kje se vrzeme so nashata databaza preku mongoose i definiranje na schema-ta za izgledot na bazata
// Prvin go povikuvame mongoose modulot odnosno Importing mongoose module:
const mongoose = require("mongoose");

// Sega kje ja definirame shemata na data bazata odnosno, Creating Structure of the collection:
const filmSchema = new mongoose.Schema({
    nasolv: {
        type: String,
        required: [true, "Mora da ima naslov"],
    },
    zanr: {
        type: String,
        required: [true, "Mora da ima zanr"],
    },
    ocenka: {
        type: Number,
        default: 3,
    },
    vreme: {
        type: Date,
        default: Date.now,
    },
});

//? The mongoosse.model() function of the mongoose module is used to create a collection of a particular database of MongoDB.
//? The name of the collection created by the model function is always in plural format mean GFG to gfss and the created collection imposed a definite structure.
//? Syntax: mongoose.model("CollectionName", CollectionSchema), this function accept the following two parameters:
//? 1.Collection Name: it is the name of the collection
//? 2.Collection Schema: it is the schema of the collection, and mongoose.model() function returns the Mongoose object.
const Film = mongoose.model("Film", filmSchema);

// So express module definirame vo nashiot sluchaj Film:
module.express = Film;
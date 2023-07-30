const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    year: {
        type: Number,
    },
    imbdRating: {
        type: Number,
    },

    //! So ova dolu se posochuva za shto kje bidne id-ito od koja kolekcija
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
    naslov:{
        type: String,
        required: [true, "Mora da ima naslov"],
    },

    zarn:{
        type: String,
        reqiured: [true, "Mora da ima zarn"],
    },

    ocena:{
        type: Number,
        default: 3,
    },

    vreme: {
        type: Date,
        default: Date.now,
    },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
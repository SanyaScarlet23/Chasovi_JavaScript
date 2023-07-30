const mongoose = require("mongoose");

const dotenv = require("dotenv");
//! So dotenv ja konfigurirame okolinata i vmetnuvame fajl config.env da e del od process.env objektot
dotenv.config({path: `${__dirname}/../config.env`});

const DB = process.env.DATABASE.replace(
    "<PASSWORD",
    process.env.DATABASE_PASSWORD
);

//! Kreirame funkcija so koja kje exportirame a i voedno kje se povikame vo app.js
exports.init = async()=>{
    try{
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to the DATABASE");

    }catch(err) {
        console.log(err);
    }
};

const mongoose = require("mongoose");
//! npm install validator
const validator = require("validator");
//! npm install bcryptjs
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, // sekoj email da ni e unikaten
        lowercase: true, //site bukvi da se mali
        validate: [validator.isEmail, "Please provide  a valid email addres"], // validacija dali vrednosta e vistinski email
    },
    role: {
        type: String,
        enum: ["user", "admin", "administrator"], // enum se koristi koga imame tochno zadadeni parametri
        default: "user",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [4, "Password must be at least 8 characters long"],
        // validate: [validator.isStrongPassword, "Please provide a strobg password"], // validacija/ proverka dali e silen password-ot
    },
});

userSchema.pre("save", async function(next){
    // so ova method-a na predvremen return sprechuvame da se aktivira celosnata funkcija ako uslovort/condition e ispolnet
    if(!this.isModified("password")) return next();
    // so ova this.password go selektirame passwordot shto sakame da go hashirame so pomosh na bcrypt bibliotekata koj ima dva parametri i toa prviot parametar e vrednosta shto sakame 
    // da izvrshime promena i vtoriot parametar e jachinata na hashiranjeto, vo deneshno vreme sekogash pishuvame nad 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
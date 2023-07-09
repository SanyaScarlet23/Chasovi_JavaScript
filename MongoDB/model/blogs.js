const mongoose= require("mongoose");

const blogSchema = new mongoose.Schema({
    naslov:{
        type: String,
        required: [true, "treba da ima naslov"]
    },
    opis:{
        type: String,
        required:[true, "treba da ima opis"],
    },
    ocenka:{
        type: Number,
        default: 2,
    },
    vreme:{
        type: Date,
        default: Date.now,
    },
    avtor:{
        type: String,
        required:[true, "treba da ima avtor"],
    },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
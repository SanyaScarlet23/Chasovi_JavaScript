//Prvin go povikuvame express modulot 
//Posle go povikuvame mongoose modulot
//Treba da go povikame kontrolerot
//Inicijalizirame express aplikacija
//Gi parsirame informaciite shto gi prakjame od form-a od frontend
const express= require("express");
const mongoose= require("mongoose");
const blogController = require("./controllers/blogController");
const app = express();
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    //!Tuka imav zaboraveno ime na data bazata Blogovi pomegju /?, odnosno treba da e /Blogovi?
    //! Osven toa se drugo funkcionira super i na postman :)
    "mongodb+srv://sanyakost:Kumanovo23@cluster0.gpeifzi.mongodb.net/Blogovi?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log("Successfully connection.");
}).catch((err)=>{
    console.log(err);
});

app.get("/blogs", blogController.getAllBlogs);
app.post("/blogs", blogController.createBlog);
//! Prodolzhuvanje na domashnoto, kreiranje na method-i i pritoa se odnesuvaat vo mojot sluchaj po id a mozhe po shto sakame naslov,ocenka,opis,vreme,avtor
app.get("/blogs/:id", blogController.getBlog);
//! Za update odnosno izmeni vo konkreten objekt od kolekcijata izbran po sopstvenoto id
app.patch("/blogs/:id", blogController.updateBlog);
//!Brishenje po id
app.delete("/blogs/:id", blogController.deleteBlog);


app.listen(10023, (err)=>{
    if(err) return console.log(err);
    console.log("Server has been started successfully on port 10023");
});
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

app.listen(10023, (err)=>{
    if(err) return console.log(err);
    console.log("Server has been started successfully on port 10023");
});
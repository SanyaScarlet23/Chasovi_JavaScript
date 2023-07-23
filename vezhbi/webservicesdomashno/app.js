const express = require("express");
const db = require("./pkg/db/index");
const oglasHandler = require("./handlers/oglasHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.init();

//Tuka kje gi stavime site metodi koi kje gi vrzeme so funkciite kako i rutite za nashata data baza, odnosno za CRUD sistemot 
//CRUD- Create Read Update and Delete
app.get("/oglass", oglasHandler.getAllOglasi);
app.get("(oglass/:type", oglasHandler.getAllOglasByType);
app.post("/oglass", oglasHandler.createOglas);
app.patch("/oglass/:id", oglasHandler.updateOglas);
app.delete("/oglass/:id", oglasHandler.deleteOglas)

//SLushanje na server
app.listen(process.env.PORT, (err)=>{
    if(err) {
        return console.log("Could not start a service")
    }
    console.log(`Service started successfully on port ${process.env.PORT}`);
});
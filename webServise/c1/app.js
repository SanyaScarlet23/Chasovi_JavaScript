
//! SOAP i REST apinja
//! SOAP - XML za transfer
//! REST - XML i JSON za transfer
//! APIs - Application Programming Interace
//! REST - Representation State Transfer
//! NPN INSTALL DOTENV

//! process.env e mesto kade shto nashata aplikacija zhivee (okolina)

//! JWT - Json WEB TOKEN
//* sekogash e statless
//! Logiranje - koga korisnikot se logira, serverot proveruva akreditacija i generira json web token
//! Avtorizacija - odkoga korisnikot vekje se logiral aplikacijata mu go vrakja nazad tokenot pak do korisnikot vo forma na kukis ili korisnikot go zachuvuva vo forma na lokalen storage
//! Verifikacija - koga korisnikot ima rikvest kon serverot so jwt tokenot, serverot prvo go verifikuva potpisot od tokenot potoa serverot proveruva dali korisnikot ima dozvola da ja zeme povratnata
//! usluga od rikvestot ili pobaruvanjeto znachi ako potpisot e validen togash korisnikot uspeshno ja dobiva uslugata od rikvestot


//*JWT ima tri dela
// -header = chuva informacii za algoritmot koj e upotreben za da se logirame
// -payload = zachuvuvame podatoci od korisnikot i koga e izdaden
// -signature = koj go sochinuva hashiraniot header i payload i e potpishan so taen kluch koj shto go znae samo serverot
//? npm install express
//? npm init -y (vo megjuvreme e dodadeno "start": "node app.js")
//? zapishano .gitignore (node_modules)
//? npm install ejs
//? npm install mongoose
//? npm install dotenv
//? npm install db
//? npm install cookie-parser

//?Gi povikuvame paketite

const express = require("express");
const db = require(".pkg/db/index");

//? npm install express-jtw (so instalacija na ovoj paket implementirame zashtita-protection)
const jwt = require("express-jwt");
const cookieParser = require("cookie-parser");

const movies = require("./handlers/movies");
const authHandler = require("./handlers/authHandler");
const viewHandler = require("./handlers/viewHandler");

//? Inicijalizirame aplikacija
const app = express();

//? Povikuvame middelwari
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//? Ovoj paket se grizhi za parsiranjeto na cookies
app.use(cookieParser());
//Specificirame direktorium public za da imame pristap za fajlovite od frondend-ot
//Static methodot ni ovozmozhuva da opsluzhuvame statichni fajlovi
app.use(express.static("public"));
//?Izvrshuvanje na init funkcijata so koja funkcija se konektirame so data bazata
db.init();

//Ovde koristime middelware shto ni ovozmozhuva da gi zashtitime rutite, kako prv parametar imame jwt.expressjwt,
//vnatre go stavame algoritmot za hashiranje i tajnata porka. So pomosh na ovoj middelware gi zashtituvame site ruti osven onie ruti koi se vo unless method-ot navedeni
app.use(
    jwt.expressjwt({
        algorithms: ["HS256"],
        secret: process.env.JWT_SECRET,
        getToken: (req)=>{
            if(
                req.headers.authorization &&
                req.headers.authorization.split(" ")[0]==="Bearer"
            ) {
                return req.headers.authorization.split(" ")[1];
            }
            if(req.cookies.jwt){
                return req.cookies.jwt;
            }
            return null; //ovoj return ni e vo sluchajot ako nemame isprateno token
        },

    }).unless ({
        path: ["/api/v1/signup", "/api/v1/login", "/login"],
    })
);

app.post("/api/v1/signup", authHandler.signup);
app.post("/api/v1/login", authHandler.login);

app.get("/movies", authHandler.middelwareTest, movies.getAll);
app.get("/movies/:id", movies.getOne);
app.post("/movies", movies.create);
app.put("/movies/:id", movies.replace);
app.patch("/movies/:id", movies.update);
app.delete("/movies/:id", movies.delete);

app.get("/me", movies.getByUser);
app.post("/createuser", movies.createByUser);

//? View Ruti
app.get("/viewMovies", viewHandler.movieView);
app.get("/login", viewHandler.getLoginForm);
app.post("/createMovie", viewHandler.createMovie);
app.get("/deleteMovie/:id", viewHandler.deleteMovie);
// Istoto mozheme i so post()method-ata 
// app.post("/deleteMovie/:id", viewHandler.deleteMovie);
app.get("/viewMovie/:id", viewHandler.viewMovieDetails);
app.post("/modifyMovie/:id", viewMovie.modifyMovie);

//?Slushame server, odnosno aplikacija na koja porta kje e vrzan so server-ot
app.listen(process.env.PORT, (err)=>{
    if(err){
        return console.log("Could not started a server!");
    }
    console.log(`Server started successfully on port ${process.env.PORT}`);
});

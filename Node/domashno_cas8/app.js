const express = require("express");
const app = express();

const calculator = require("./controller/calculator");

app.get("/ploshtinaNaPravoagolnik/:shirina/:visina", calculator.ploshtinaNaPR);
app.get("/konverter/:op/:num", calculator.celFar);
app.get("/digitron/:op/:a/:b", calculator.kalk);
app.get("/sila/:mass/:acc", calculator.calcForce);
app.get("/ploshtinaNaTriagolnik/:osnova/:visina", calculator.ploshtinaNaTRI);

app.listen(11001, (err)=>{
    if(err) return console.log(err);
    console.log("Server has been started successfully!")
});
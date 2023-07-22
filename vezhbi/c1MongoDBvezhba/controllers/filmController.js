// Go povikuvame Film modelot so koj model nie mozheme da komunicirame so databazata
const Film = require("../model/filmModel");

//? Tuka kje prodolzhime so sozdavanje na nashiot CRUD- Create Read Update Delete sistemot odnosno kje gi zapishuvame site funkcii

//! Fuknkcija za kreiranje (Create) na film vo nashta data baza
exports.createFilm = async(req,res)=> {
    try{
        const newFilm= await Film.creat(req.body);
        res.send(newFilm);

    }catch(err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const rechenica = "Uchime programiranje";
const vtoraRechenica = `Uchime i logika ${rechenica}`;

// 127.0.0.1:10000/films?naslov=Titanik

//! Funkcija za listanje/ prikazhuvanje (Read) na site filmovi od nashata data baza 
exports.getAllFilms = async(req,res)=> {
    try{
        console.log(req.params);
        // findById e gotova metoda so koja se zema dokument koj odgovara na id-ito od kolekcijata
        // const film = await Film.findById(req.params.id);

        // findOne e metoda so koja zemame dokument spored parametarot koj nas ni odgovara
        const film = await Film.findOne({naslov: req.params.naslov});

        //Film.findOne({_id: req.params.id})
        //Film.findOne({naslov: req.param.naslov})

        res.status(200).json({
            status: "Success",
            data: {
                film,
            },
        });

    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//! Funkcija za Update na podatocite vo nashata data baza
exports.updateFilm = async(req, res)=> {
    try{
        const updatedFilm = await Film.findByIdAndUpdate(req.param.id, re.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                updatedFilm,
            },
        });

    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//! Funkcija za brishenje (Delete) od data bazata
exports.deleteFilm = async(req,res)=> {
    try{
        await Film.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null,
        });

    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });

    }
};
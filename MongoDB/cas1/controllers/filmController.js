// Go povikuvameFilm modelot so koj model nie mozheme da komunicirame soa data bazata
const Film = require("../model/filmModel");

exposrts.creatFilm = async (req,res)=>{
    try{
        // const newFilm = new Film({
        //     naslov:"Avatar",
        //     zarn:"Avantura"
        // });
        // newFilm.save();

        // create e method-a da zachuvuva dokument vo edna kolekcija
        const newFilm = await Film.create(req.body);


        // res.status(201).json({
        //     status: "success",
        //     data: {
        //         film: newFilm,
        //     },
        // });

        //Gornovo ni go zamenuva res.send() method-ot, odnosno
        res.send(newFilm);
    }catch(err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }

};

exposrts.getAllFilms = async (req,res)=> {
    try{
        // find() e method za da gi zeme site dokumenti od edna kolekcija
        const film= await Film.find();

        res.status(200).json({
            test: "Test",
            status: "success",
            data: {
                films: films,
            },
        });
    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//? ZA DOMASHNA DA SE KREIRA DATABAZA BLOGOVI
//? ime na kolekcija blogs
//? da ima create i getAll funkcionalnosti
//? shemata da e naslov, opis, ocenka, vreme i avtor
//? na ruta "/blogs" da se povikuva i da se kreira blog
//? i da ima najmalku 10 bloga
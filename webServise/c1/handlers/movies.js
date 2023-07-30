const Movie = require("..pkg/movies/moviesShmea");

//? Tuka kje go definirame CRUD sistemot 

//! 1- za listanje/prevzemanje na site od kolekcija
exports.getAll = async(req,res)=>{
    try{
        // so populate method-ot namesto id-injata gi zadavame nivnite vrednosti
        let movies = await Movie.find().populate("author");
        res.status(200).json({
            status: "success",
            data: {
                movies,
            },
        });

    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//! 2- za da mozheme da odelime eden bojekt od kolekcijata
exports.getOne = async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                movie,
            },
        });

    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//! 3- za sozdavanje na nov vo kolekcijata od nashata data baza
exports.create = async(req,res)=>{
    try{
        const newMovie = await Movie.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie,
            },
        });

    }catch(err) {
       res.status(500).json({
        status: "fail",
        message: err,
       }) ;
    }
};

//! 4- za update odnosno vrshenje na izmeni vo nekoj konkreten objekt od kolekcijata
exports.update = async(req,res)=>{
    try{
        console.log(req.file);
        console.log(req.body);

        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                movie,
            },
        });

    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

//! 5- za replace odnosno da izvrshime zamena 
exports.replace = async(req,res)=>{
    try{
        const movie = await Movie.findOneAndReplace(
            { _id: req.params.id},
            req.body,
            {
                new : true,
                runValidators: true,
            }
        );

        res.status(200).json({
            status: "success",
            data: {
                movie,
            },
        });

    }catch(err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//! 6- za brishenje na objekt od kolekvija vo data baza
exports.delete = async(req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null,
        });

    }catch(err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

//! 7- sekoj korisnik da mozhe da kreira i da dodava objekt vo kolekcija kako postiranje
exports.createByUser = async(req,res,next)=>{
    try{
        //const userId = req.auth.id;
        //! poradi shto imame implementirano express-jwt toj kreira objekt so koj imame pristap a go lreira so method-a jwt.decode
        const moviePost = await Movie.create({
            title: req.body.title,
            year: req.body.year,
            imdbRating: req.body.imdbRating,
            author: req.auth.id,
        });

        res.status(201).json(moviePost);

    }catch(err) {
        res.status(500).json({
            error: err
        });
    }
};

//! 8-za site korisnici koi imaat pristap za logiranje i registracija da mozhat po nivnoto id 
exports.getByUser = async(req,res)=>{
    try{
        const userId = req.auth.id;
        //! vrshime query na avtorot od korisnikot shto e logiran
        const mineMovie = await Movie.find({author: userId});

        res.status(201).json(mineMovie);

    }catch(err) {
        res.status(500).json({error: err});
    }
};
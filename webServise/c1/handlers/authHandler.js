const User = require("../pkg/user/userShema");
//! npm install jsonwebtoken
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//! Tuka kje gi kreirame funkciite za signup, login i protect

//! 1-Signup funkcija
exports.signup = async(req,res)=>{
    try{
        //kreirame korisnik, kako input kreirame nash objekt, zaradi pogolema bezbednost i sanatizacija na kodot
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        // da generirame token
        //kako prv parametar e payload-ot, vtor parametar e tajnata rechenica i kako ttret rokot na istek
        //const token = jwt.sign(
        //    {_id: newUser._id, name: newUser.name},
        //    process.env.JWT_SECRET,
        //    {
        //        expresIn: process.env.JWT_EXPIRES,
        //    }
        //);

        // res.cookies ima tri parametri: prviot e kako se vika cookie-to, vtoriot parametar e vrednosta na cookie i tretiot parametar se dodadeni opcii
        //res.cookie("jwt", token, {
        //    expires: new Date(
        //        Date.now() + process.env.JWT_COOKIE_EXPIRES *24*60*60*1000
        //    ),
        //    secure: false,
        //    httpOnly: true,
        //});

        //res.status ni vrakja token status i koj e korisnikot
        res.status(201).json({
            status: "success",
            //za token ni e gorniov status,
            data: {
                user: newUser,
            },
        });

    }catch(err) {
        return res.status(500).send(err);
    }
};

//! 2- Login funkcija
exports.login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        //! 1.Proveruvame dali ima vneseno email i password
        if(!email || !password){
            return res.status(400).send("Please provide email and password!");
        }

        //! 2.Proveruvame dali korisnikot postoi
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).send("This user with this email does not exist in database.")
        }

        //! 3.Sporeduvame password
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if(!isPasswordValid) {
            return res.status(400).send("Invalid Password!");
        }

        //! 4.Se generira tokenot so sign method-a
        const token = jwt.sign(
            {id: user._id, name: user.name},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES,}
        );

        //! 5.Go isparakjame cookie-to so token-ot
        res.cookie("jwt", token, {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            secure: false,
            httpOnly: true,
        });

        //! 6.Go isparakjame token-ot
        res.status(201).json({
            status: "success",
            token,
        });

    }catch(err) {
         return res.status(500).send("Internal server error.")
    }
};

//! Protect funkcija odnosno zashtita
exports.protect = async(req,res,next)=>{
    try{
        // 1).Go zemame tokenot i proveruvame dale e tamu 
        // console.log(req.headers);
        let token;
        if(req.headers.authorization){
            token = req.headers.authorization.split(" ")[1];
        }
        //console.log(token);
        if(!token){
            return res.status(500).send("You are not logged in! Please log in.");

        }
        // 2). Go verifikuvame tokenot
       //promisot kje bide ili success vrednost ili rejected kje ni frli error

       //!Prv Nachin
       // function verifyToken(token){
       //        return new Promise((resolve, reject)=>{
       //            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken)=>{
       //                if(err){
       //                    reject(new Error("Token verification failed"));
       //                } else {
       //                    resolve(decodedToken);
       //                }
       //            });
       //        });
       //    }

   // //! Vtor Nachin
   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
   //console.log(decoded);
   // 3). Proveruvame korisnikot dali postoi
   const userTrue = await User.findById(decoded.id);
   if(!userTrue){
       return res.status(401).send("User does not longer exist!");
   }
   //Davame dozvola za protektiranata ruta
   req.auth = userTrue;

   next();

    }catch(err) {
        return res.status(500).send("Internal server error.");
    }    
};


exports.middelwareTest = (req,res,next)=>{
    console.log("This is middelware");
    req.semos="WELCOME TO BACKEND";

    next();
};
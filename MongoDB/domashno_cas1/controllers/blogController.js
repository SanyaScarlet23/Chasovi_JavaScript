//Prvin go povikuvame Blogs modelot so koj nie mozheme da komunicirame so databazata
const Blog = require("../model/blogs");

exports.createBlog = async(req,res)=>{
    try{
        const newBlog = await Blog.create(req.body);
        res.send(newBlog);

    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
    
};

exports.getAllBlogs = async(req,res)=>{
    try{
        //! Ovaa kje go smenime: const blogs = await Blog.find(); za da mozhe da prebaruva sprema query no predhodno za da prebaruva treba da se definira i sozdade query-ito 
         //! Sega prodolzhuvame so toa shto kje go kreirame query-ito i toa prvin go definirame kako objekt (Query e vsushnost Object)
         const queryObj={...queryObj};
         //! Sega Query-ito so ????? OPERATORI(Prashaj za imeto na operatorite?????), prvin queryObjektot go pretvorame vo string za da mozheme da go modificirame
         let queryString =JSON.stringify(queryObj);
         //!Sega kje go modificirame stingot, odnosno:
         queryString = queryString.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`
         );

         //! Sega otkako e modificiran sakame pak da go transformirame vo Object, odnosno:
         const query =JSON.parse(queryString);

         //! E sega kje ja uptrebime find() method-ata bidejkji gi zema site dokumenti od kolekcijata na nashta databaza i barame sprema toj objekt
         const blogs = await Blog.find(query);

        res.status(200).json({
            status:"success",
            data: {
                blogs: blogs,
            },
        });

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getBlog = async(req,res)=>{
    try{
        console.log(req.params);
        //!  Nie kje primenime findById i togsh e dolnata syntax no ako odime so findOne() togash e: Blog.findOne({_id: req.params.id})
        const blog = await Blog.findById(req.query.id); //!tuka sakame da prebaruvame preku query, odnosno samoto query ni sluzhi za prebaruvanje
        res.response(200).json({
            status:"success",
            data:{
                blog, //! OVDE IMAME RAZLIKA OD PREDHODNOTuka e konstanta za response ni e potrebno, bidejkji sega se prakja respons kako Query!!!
            },
        });
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.updateBlog = async(req,res)=>{
    try{
        //! Pri samoto ischekuvanje vrshime izmena na soodveten id 
        await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
    }catch(err){
        res.status(404).json({
            status:"success",
            data:{
                updateBlog,
            }
        });
    }
    
};

//! Pod soodvetno id koe kje go izbereme kje go izbrisheme a bidejkji go nema odnosno e prazen objek i nema shto da ni se vrati vo response kako data stavame null!!!
exports.deleteBlog = async(req,res) =>{
    try{
        const updateBlog = await Blog.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"seccess",
            data: null, //! BITNO deka nema shto da vrati i zatoa e null odnosno prazen object odnosno nema shto da vrati samo kje go nema vo kolekcijata i toa e!!!
        })

    }catch(err){
        res.status(404).json({
            status:"fail",
            message: err,
        });
    }
};
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
        const blogs = await Blog.find();

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
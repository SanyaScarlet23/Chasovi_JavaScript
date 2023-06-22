const fs=require("fs"); //ova ni e za definiranjena file sytem od koj exports kje gi definirame i zemame od modulot: domashnoModul.js

exports.fileRead = (filename) =>{ //za vchituvanje na fajl
    return new Promise((success,fail) =>{
        fs.readFile(filename, "utf-8", (err, data) =>{
            if(err) return fail(err);
            return success(data);
        });
    });
};

exports.fileWrite = (filename, data) =>{ //za zapishuvanje na fajl vo JSON.strinify 
    return new Promise((success, fail)=>{
        fs.writeFile(filename, data, (err) =>{
            if(err) return fail(err);
            return success();
        });
    });
};


//? Servis koj kje obrabotuva ruti od sledniot tip
// /ime/aleksandar
// /ime/angela
// /ime/julija

// parno: da, karakteri 5, soglaski: 2, samoglaski

//! http://127.0.0.1:10000/

const http = require("http");

const server = http.createServer((request,response)=>{

    //! Prvin ja zadavame rutata na serverot, shto vo nashiot sluchaj e /ime/aleksandar odnosmo se delat so / i dva parameti imame path koja e ime 
    //! i imeto koe kje go ispisheme odnosno name parametarot na url-to
    const [_, path, name] = request.url.split("/");
    if(path === "ime"){
        console.log(path, name);
        if(!name){ //!ovoj if go stavame za da ako nekje da pochne so drugo ime koga kje dodademe vo serverot
            response.end("invalid url")
            return;
        } 

        const samoglaski = ["a","e","i","u","o"];
        const brojNaBukvi = name.length;
        const daliEParen = brojNaBukvi %2===0 ? "Da" : "Ne";

        //! Dali i kolku samoglaski imame vo imeto kje gi broime so brojachot for loop
        let samoglaskiBroj = 0;
        const bukviNiza =name.split(",");
        for(let i=0; i< bukviNiza; i++){
            if(samoglaski.includes(bukviNiza[i])){
                samoglaskiBroj++;
            }
        }
        //! Sega koga vekje for loop kje gi najde i izbroi site samoglaski vo imeto, da gi presmetame samoglaskite 
        const soglaskiBroj = brojNaBukvi - samoglaskiBroj;

        //! Sega ushte za na kraj ni e potrebni shto serverot kje ni vrakja i toa e so res.end(), odnosno

        response.end(`
        Vkupen broj na karakteri vo imeto se ${brojNaBukvi}, paren: ${daliEParen}, soglaski ima: ${soglaskiBroj},
        samoglaski ima vkupno: ${samoglaskiBroj}`)

    }
});

//! Ushte server.listen()
server.listen(11000, (err)=>{
      if(err) console.log(err);
      console.log("sever has started");
});





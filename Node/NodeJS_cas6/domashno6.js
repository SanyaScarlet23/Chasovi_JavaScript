//? Servis koj kje obrabotuva ruti od sledniot tip
// ime/aleksandar
// /ime/angela
// /ime/julija

// parno: da, karakteri 5, soglaski: 2, samoglaski

//! http://127.0.0.1:10000/

const http =require("http");

//?Tuka kje sakame da ja vgnezdime funkcijata koja kje ni go deli stringot i kje ni presmetuva parni ne parni bukvi
const zadacha=(request, response)=>{

    const ime=request.url;
    //const ime="Aleksandar";
    const nizaIme=[];
    for(let i=0; i<ime.length; i++){   
        nizaIme.push(ime[i]);    
    };
    response.end(`Nizata od imeto ${ime} e ${nizaIme}`)
    //console.log(nizaIme);

    if(nizaIme.length % 2 ==0){
        response.end(`Nizata so ime ${ime} e so paren broj na bukvi`)
        //console.log(`Nizata so ime ${ime} e so paren broj na bukvi`)
    }else{
        response.end(`Nizata so ime ${ime} e so ne paren broj na bukvi`)
        //console.log(`Nizata so ime ${ime} e so ne paren broj na bukvi`)
    };

};


const server =http.createServer(zadacha);
server.listen(11000, "127.0.0.1", (err)=>{
    if(err) return console.log("error");
    return console.log("Server started on port 11000");
});

//? Servis koj kje obrabotuva ruti od sledniot tip
// ime/aleksandar
// /ime/angela
// /ime/julija

// parno: da, karakteri 5, soglaski: 2, samoglaski

//! http://127.0.0.1:10000/

const http =require("http");

//?Tuka kje sakame da ja vgnezdime funkcijata koja kje ni go deli stringot i kje ni presmetuva paren ili ne paren broj na bukvi

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
    

    for(let element=0; element < nizaIme.length; element++){
      switch(element) {
        case "a":
        case "A":
            response.end(`chlenot od nizata e samoglaska, ima karakter 2`);
        break;
        case "o":
        case "O":
            response.end(`chlenot od nizata e samoglaska, ima karakter 2`);
        break;
        case "e":
        case "E":
            response.end(`chlenot od nizata e samoglaska, ima karakter 2`);
        break;
        case "u":
        case "U":
            response.end(`chlenot od nizata e samoglaska, ima karakter 2`);
        break;
        case "i":
        case "I":  
           response.end(`chlenot od nizata e samoglaska, ima karakter 2`);
        break;
        default:
            response.end(`chlenot od nizata e soglaska, ima karakter 5`)
      };


    };

};


const server =http.createServer(zadacha);
server.listen(11000, "127.0.0.1", (err)=>{
    if(err) return console.log("error");
    return console.log("Server started on port 11000");
});

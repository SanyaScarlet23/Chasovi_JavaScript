// request - prima nekoja naredba // HTTP e callback function so request & response funkcii
// response - vrakja na primenata naredba so res.edn() method kje go ispratime respondot od nashiot server

const http = require("http"); //na ist nachin kako core module odnosno fs_ file system shto go definirame 

//const server= http.createServer((req,res)=>{
//    res.end("Hello World!!!");
//});

//server.listen(10000, "127.0.0.1", (err)=>{
//    if(err) console.log("error");
//    console.log("server started on port 10000");
//});

const handler =(req,res)=>{
    //console.log(req);
    //console.log(req.method);
    //console.log(req.headers);
    //sobiranje/2/5;

    const [_, op, a,b]=req.url.split("/");
    //["","sobiranje","2","5"]
    //split methodata go deli stringot prema parametarot shto e vnatre vo /
    //const ime= "Aleksandar Maja Vesna Petko Sharko";
    //console.log(ime.split(" "));

    let o;
    switch (op){
        case "sobiranje":
            o=Numner(a)+Number(b);
            res.end(`rezultatot e ${o}`);
        break;
        case "odzemanje":
            o=Number(a)-Number(b);
            res.end(`rezultatot e ${o}`);
        break;
        case "mnozhenje":
            o=Number(a)*Number(b);
            res.end(`rezultatot e ${o}`);
        break;
        case "delenje":
            o=Number(a)/Number(b);
            res.end(`rezultatot e ${o}`);
        break;
        default:
            res.end("OK");
    }
};

const server = http.createServer(handler);
server.listen(10000, (err) => {
  if (err) console.log("error");
  console.log("server started on port 10000");
});
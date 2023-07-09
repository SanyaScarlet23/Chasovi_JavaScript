const fs = require("fs");

const parseTempate = async(template, object=null) =>{
 return new Promise((success, fail)=>{
    fs.readFile(`${__dirname}/../views/${template}`, "utf-8", (err, content)=>{
        if(err) return fail(err);
        if(object) {
            for(property in object){
                content = content.replaceAll(`{{${property}}}`, object[property]);
            }
        }
        return success(content);
    });
 });
    
};

//? 1.DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
const ploshtinaNaPR = async (req,res)=> {
    const shirina = req.params.shirina;
    const visina = req.params.visina;
    const ploshtinaNapr = shirina*visina;
    const response = await parseTemlate("rezultat.html", {data: ploshtinaNapr, ime: "Ploshtina na pravoagolnik", podatoci: "Presmetana ploshtina na pravoagolnik"});

    res.send(response);
};

//? 2.DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
const celFar = async(req,res)=>{
    let response;
    switch(req.params.op){
        case "f2c":
            response = `${Number(req.params.num -32)*0.556}`;
        break;
        case "c2f":
            response = `${Number(req.params.num)*1.8 +32}`;
        break;
        default:
            return res.send("Nepoznat operator.");
    }
    response = await parseTemplate("rezultat.html", {data: response, ime:"Kalkuliranje na f2c ili c2f", podatoci:"Konverter od farenfajt vo celzuse ili odbratno"});
    res.send(response);
};

//? 3.DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
const kalk = async(req,res)=> {
    let response;
    switch(req.params.op){
        case "sobiranje":
            response =`${Number(req.params.a)+Number(req.params.b)}`;
        break;
        case "odzemanje":
            response =`${Number(req.params.a)-Number(req.params.b)}`;
        break;
        case "mnozhenje":
            response =`${Number(req.params.a)*Number(req.params.b)}`;
        break;
        case "delenje":
            response =`${Number(req.params.a)/Number(req.params.b)}`;
        break;
        default:
            return res.send("Nepoznata operacija.");
    }
    response = await parseTemplate("rezultat.html", {data: response, ime:"Presmetuvanje so kalkulator", podatoci:"Operaciite na ovoj kalkulator se sobiranje, odzemanje, mnozhenie i delenje"});
    res.send(response);
};

//? 4.DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
const calcForce = async(req,res)=>{
    const mass =req.params.mass;
    const acc =req.params.acc;
    const force =mass*acc;
    const response = await parseTemplate("rezultat.html", {data: force, ime:"Presmetuvanje na sila so kalkulator", podatoci:"Presmetuvame sila"});
    
    res.send(response);
};

//? 5.DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
const ploshtinaNaTRI = async(req,res)=>{
    const osnova= req.params.osnova;
    const visina= req.params.visina;
    const ploshtinaNatri= (osnova*visina)/2;
    const response = await parseTemplate("rezultat.html", {data: ploshtinaNatri, ime:"Ploshtina na triagolnik", podatoci:"So zadadena osnova i visina se presmetuva ploshtina na triagolnik"});

    res.send(response);
};

module.exports= {
    ploshtinaNaTRI,
    calcForce,
    kalk,
    celFar,
    ploshtinaNaPR
};




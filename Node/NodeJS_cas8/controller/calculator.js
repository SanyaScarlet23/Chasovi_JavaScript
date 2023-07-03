const fs = require("fs"); // ovaa i parseTemlate e odposle .html

const parseTemlate = async(template, object =null)=> {
    return new Promise((success, fail)=>{
        fs.readFile(`${__dirname}/../views/${template}`, "utf-8", (err, content)=>{ // content go dodadovme posle for-in ciklusot koj go napishavme 
            if(err) {
                return fail(err);
            }
            if(object) {
               for(property in object) {
                content = content.replaceAll(`{{${property}}}`), object[property]);
               }
            }
            return success(content);
        });
    });
};

const bmiCalculator= async (req, res)=>{ 
    const weight = req.params.weight;
    const height = req.params.height;
    const bmi = weight / (height* height);
    const response = await parseTemlate("calculator.html", {
        data: bmi,
        ime: "BMI CALCULATOR",
    });
    res.send(response);

};

//nova funkcija mozheme da si stavime na primer:

const calculateForce =(req,res)=>{
    const mass =req.parms.mass;
    const acc =req.parms.acc;
    const newton =mass*acc;
    res.send(`${newton}`);
};

const getCalculator = async(req,res)=>{
    try{
        const output = await parseTemplate("calculator_form.html");
        res.send(output);
    }catch (err){
        console.log(err);
        res.send("ERROR")
    }
};

const postCalculator =async(req,res)=>{
    try{
        if((req.body.a==="") | (req.body.b==="")){
            return res.send("Prazni polinja");
        }

        let brojka1= Number(req.body.a);
        let brojka2= Number(req.body.b);

        let rezultat ="";
        switch(req.body.op){
            case "sobiranje":
                rezultat = `${brojka1+brojka2}`;
            break;
            case "odzemanje":
                rezultat = `${brojka1-brojka2}`;
            break;
            case "mnozenje":
                rezultat = `${brojka1*brojka2}`;
            break;
            case "delenje":
                rezultat = `${brojka1/brojka2}`;
            break;
        }

        const response = await parseTemplate("calculator.html", {
            data: rezultat,
            ime = `Operacija ${req.body.op}`,
        });

        res.send(response);
        // res.send(`${rezultat}`)
    }catch (err){
        console.log(err);
        res.send(err);
    }
};

module.exports ={
    bmiCalculator,
    calculateForce,
    getCalculator,
    postCalculator,
};
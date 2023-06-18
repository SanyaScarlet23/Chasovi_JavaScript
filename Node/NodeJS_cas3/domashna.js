
//? Koj kje ima funkcija da promeni faregajt vo celzius i obrantno
/*
function pretvori(parametar){
    return function (vrednost){ 
        switch(parametar){
            case ce2f:
                return (vrednost*9/5)+32;
            case f2c:
                return (vrednost-32)*5/9;
        }

    }
} 

const c2farenhajt = pretvori(ce2f) 
//const rezultat1 = c2farenhajt(20)
console.log(c2ffarenhajt(60))

const f2celsius =pretvori(f2c)
//const rezultat2= f2celsius(60)
console.log(f2celsius(60))
*/
const f2c=(fah)=> (fah-32) * 0.5556
const c2f=(cel)=> cel*1.8+32

//? Da ima funkcija sto presmetuva plostina i perimetar na triagolnik
const zaRamnostranTriagolnik = (a) =>{ //Ploshtinana ramnostran triagolnik: P=1/2*a*h, h=sq(a2-(a/2)2) sleduva P=sq3*a/4
    return console.log(`Ploshtinata na triagolnikot e ${1.73205*a/4}, dodeka perimetarot iznesuva ${3*a}`) 
};


//? da ima funkcija sto presmetuva plostina i perimetar na pravoagolnik
const zaPravoagolnik = (a,b) =>{
    return console.log(`Ploshtinata na pravoagolnikot e ${a*b}, dodeka perimetarot iznesuva ${2*a + 2*b}`)
};


//? Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen
const parenNeparenBroj = (x) =>{
    if(x%2==0){
        console.log(`Brojot ${x} e paren`)
    }else{
        console.log(`Brojot ${x} e ne paren`)
    }
};

//? Za domasna da se dodade uste eden modul so ime domasna.js
// so module.exports ={imeNaFunction1,imeNaFunction2,imeNaFunction3,imeNaFunction4,...imeNaFunctionN} mozheme od koj bilo drug .js file da ja povikame 

module.exports ={
    zaRamnostranTriagolnik,
    zaPravoagolnik,
    parenNeparenBroj,
    f2c,
    c2f,

};
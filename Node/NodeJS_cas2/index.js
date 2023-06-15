// 1. Function Declaration (Funkcionalni deklaracii)
// Ova e najstar nachin na deklariranje na funkcija kade shto se sostoi od funkcija i i ime na funkcija
const reshenie = sobirok(2,3,6); // tuka kje se izvrshi i ako funkcijata seushte ne e deklarirana!!!
function sobirok(a,b,c){
    return a+b+c;
    //console.log(a+b+c) ova e samo da vidme u terminal no bez return funkcijata e bezveze funkcijata treba da ni vrkja informacija!!!
}
console.log(`Sobirokot e ${sobirok(2,3,4)}`);



// 2. Function Expressions (Funkcionalni ekspresii)
// Funkcionalnite espresii se onie koi se zapishuva funkcija kako varijabla ili konstanta, znachi ne i treba ime na funkcijata
 const proizvod = function(a,b) {
    return a*b;
 };
 
const proizvodot =proizvod(7,7);
console.log(`Proizvodot e ${proizvodot}`)

// 3. Fat-Arrow function
// I ovaa e tochnata sintaksa no kratkata verzija e bez return zborot: const razlika =(a,b) => { return a-b}
const razlika=(a,b) => a-b;

console.log(`Razlikata e ${razlika(6,2)}`)

// this e prviot kluchna razlika

// 4.Metodi vo objekti vo JavaScriot
/*
const uchenik={
    ime: "Trajan",
    pozdrav: function(){ // proizvod e tuka method vo object-ot uchenik
        console.log(`Zdravo ${this.ime}`);
    },
};

uchenik.proizvod();

// 5. IIFFE Immediately Invoked Function Expression glavanata ideja e da se kreira ili ekapsulira privaten kod vnatreshen i zashtita od drugiot code 
// Ova se koristi da se odeli od drugiot kod, i drugiot kod da ne mozhr da modificira vo ovaa IIFFE funkcijata
// i ova se izvrshuva na pochetok od aplikacijata
(function (){
    console.log("Ovde kje se izvrshi funkcijata");
})();
*/
// Zadacha 1. Da se kreira funkcionala ekspresija so ime c2f koja kje konvertira celziusovi stepeni vo farenhajt
function c2f(cel){
   return cel*1.8+32
}

console.log(c2f(45))
// Zadacha 2. Da se kreira Fet Arrow function so ime f2x koja kje konvertira farenhajt vo celziusovi stepeni
const f2x=(fah)=> (fah-32) * 0.5556

console.log(f2x(30))

// 5. High order functions
//primer 1.

//zadacha 3. Da se kreira funkcija koja kje zema argument c2f ili f2x i koja kje gi pretvora celziusovi vo farenhajt
// i farenhajt vo celz.
 function pretvori(parametar){
    return function (vrednost){ 
        switch(parametar){
            case "ce2f":
                return (vrednost*9/5)+32;
            case "f2c":
                return (vrednost-32)*5/9;
        }

    }
}    
 const c2farenhajt = pretvori("ce2f") // tuka mora c2f da e kako string zashto u case ni e so ""
 const rezultat1 = c2farenhajt(20)
 console.log(rezultat1)

 const f2celsius =pretvori("f2c")
 const rezultat2= f2celsius("60")
 console.log(rezultat2)

///////////////////////////////////

const arrayEden = [2,3,6,7,8]; // arrayEden.length e 5
const arrayDva =[1,1,1,1,1]; // arrayDva.length e 5
console.log(arrayDva.length);


for(let i=0; i<arrayEden.length; i++){ // Ova nema uslovot vrska so koja niza kje chita i-to vrti do koj broj e dozhinata na nizata bidejkje e broj odnosno arrayEden.length iznesuva 5
    console.log(arrayDva[i]); // output: 1 1 1 1 1 smeshkata koja ne ja znaevme :)
}







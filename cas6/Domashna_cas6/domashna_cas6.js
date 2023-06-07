//1. Da se napishe programa za vnesuvanje na faktoriel za nekoj broj// N!=1*2*3*4*....*N, primer: 4!=1*2*3*4

let N=Number(prompt("Vnesi pozitiven broj i razlichen od nula!!!"))
let factoriel = 1 

for(x=1; x<=N; x++){ 
    factoriel *= x     
}
console.log(`Faktoriel od brojot ${N} iznesuva ${factoriel} `)

//2. Vnesuvaj broevi vo niza se dodeka ne vneses karakter. Od vnesenite broevi 
//odredi kolku od niv se dellivi so 5 i 3, koi samo so 5 i koi samo so 3

let z=prompt("Vnesuvaj broevi")
let niza=[]

while(!isNaN(z)){
    niza.push(z)
    z=prompt("Vnesuvaj broevi")
}
console.log(niza)


zaTri=[]
zaPet=[]
for(i=0; i<niza.length; i++){
        if(niza[i]%3==0)
            zaTri.push(niza[i])        
}
console.log(`Od vnesenite broevi ${zaTri.length} se delivi so 3, odnosno ${zaTri}`)

for(i=0; i<niza.length; i++){
    if(niza[i]%5==0)
        zaPet.push(niza[i]) 
}
console.log(`Od vnesenite proevi ${zaPet.length} se delivi so 5, odnosno ${zaPet}`)

let zaedno35=zaTri.concat(zaPet) 
//console.log(`Broevite koi se delivi so 3 i 5 se ${zaedno35}`)
//console.log(zaedno35)

let edinstvena35=[]
zaedno35.forEach((c) =>{ //this is with fat arrow function_od cas7
    if(!edinstvena35.includes(c)){
        edinstvena35.push(c)
    }
})
console.log(`Broevite koi se delivi so 3 i 5 se ${edinstvena35}`)

//3. Da se napishe programa koja na ekran ke gi ispecati site cetiri-cifreni broevi kaj koi zbirot na trite
//najmalku znacajni cifri e ednakov so najznacajnata cifra (5302->5=3+0+2;4310->4=3+1+0)
/*
var broj=Number(5302)

console.log(broj)
a=parseInt(broj/1000)
console.log(a)

b=(parseInt(broj/100))%10
console.log(b)

c=(parseInt(broj/10)%10)
console.log(c)

d=broj%10
console.log(d)
*/
var broj
for( broj=1000; broj<=9999; broj++){
    
    a=parseInt(broj/1000)
    b=(parseInt(broj/100))%10
    c=(parseInt(broj/10)%10)
    d=broj%10
       if(a==(b+c+d)){
           console.log(broj+" zbirot e "+a+"="+b+"+"+c+"+"+d)
        
    }
     
}

/* 
4. Da se napise objekt koj ke sodrzi poveke kluc-vrednost parovi, 
kade sto vrednostite ke bidat od tip string, broj, niza i objekt. 
Da se ispecatat site svojstva na objektot vo sledniot format kluc:vrednost. 
Dokolku vrednosta e niza da se napisat elementite od nizata vo nov red so prazni mesta pred elementot. Array.is.Array()
*/
let bookStoreInventory = {
            
    language:{
        language1: "English",
        language2: "Macedonian",
        language3: "German",
        language4: "Russian",
        language5: "Vietnamese",
        language6: "Japanese",
        language7: "French",

    },
    publisher:["Makedonska Kniga","Ace", "Penguin"],
               
        yearPublication: {
        year1: 1988,
        year2: 1989,
        year3: 1990,
        year4: 2000,
        //siteGodini: function(){return this.year1+" "+this.year2+" "+this.year3+""+this.year4} //Kako???
    },
        
    bookTotalNumber: 5789,
    inventoryName: "1st shift",
    
}
         
for(key in bookStoreInventory){
      
   console.log(key+":"+bookStoreInventory[key])
    
        /*
        let index = 0
        let publisher=["Makedonska Kniga","Ace", "Penguin"] 
        while(index < publisher.length ) {
        console.log(publisher[index]);
        index++
         console.log(Array.isArray(publisher)) 
         console.log(publisher.join("  "))
    */
}

let publisher=["Makedonska Kniga","Ace", "Penguin"] 
Array.isArray(publisher)
    //console.log(Array.isArray(publisher)) 
console.log(publisher.join("  "))
   // console.log(Object.values(bookStoreInventory))



//5. Kreirajte niza od uchenici (ime, prezime, poeni) i presmetajte go prosechniot broj na poeni
let uchenici  = ["Vesna","Dodevska",100,"Biljana","Stefanovska",84,"Alex","Todorovski",56,"Ivan","Gelevski",76]
let indexProsek=0

 for(i=0; i<uchenici.length; i++){
    let element = uchenici[i]
    
      if(element!=parseInt(element)){
        //console.log("Elementot vo nizata e string")
    }else if(element=parseInt(element)){
        indexProsek +=element    
    } 
    }
    //console.log(indexProsek) 
console.log(`Prosekot na uchenicite iznesuva ${indexProsek/4}`)

//6. y = x^n

let x=parseInt(Number(prompt("Vnesi ja osnovata")))
let n=parseInt(Number(prompt("Vnesi go stepenot")))

let y=1

for(i=0; i<=n-1; i++){    
    y *= x 
}
console.log(`${x}^${n}=${y}`)

//7.Vnesuvajte broevi vo niza dodeka ne vnesete karakter
// Od vneseni broevi vo niza odredete koja e najgolemata max suma od dva posledovatelni broevi

let m=prompt("Vnesuvaj broevi")
let niza1=[]
while(!isNaN(m)){
    niza1.push(parseInt(m))
    m=prompt("Vnesuvaj broevi")
}
console.log(niza1)


var y1=[]


for(let index=0; index<niza1.length-1; index++){
    zbir=niza1[index]+niza1[index+1]
    y1.push(parseInt(zbir))
}
console.log(y1)

/*sporedba na site chlenovi vo nizata za max i min vrednost
for(let i=0; i<y1.length-1; i++){
    
    if(y1[i]>y1[i+1]){
        console.log(`Zbirot od broevite predhodnicite iznesuva ${y1[i]} i e pogolem od ${y1[i+1]} koj e zbir na posledovatelnite broevi`)
    }else{
        console.log(`Zbirot na poseldovatelnite broevi e ${y1[i+1]} i e pogolem od zbirot na predhodnicite ${y1[i]}`)
    }    
}
*/
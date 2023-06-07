//1. Da se napishe programa za vnesuvanje na faktoriel za nekoj broj// N!=1*2*3*4*....*N, primer: 4!=1*2*3*4

let N=Number(prompt("Vnesi pozitiven broj i razlichen od nula!!!"))
let factoriel = 1 

for(x=1; x<=N; x++){ 
    factoriel *= x     
}
console.log(`Faktoriel od brojot ${N} iznesuva ${factoriel} `)


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
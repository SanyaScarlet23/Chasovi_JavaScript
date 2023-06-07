//DOM is Document Object Model
/*
let title=document.getElementById("title")
console.log(title)

//ova kje vrati null ili nishto ako script tagot ne e na kraj od bodyto
//Reshenie 2?
//- koristenje na window.pnload funkcija

window.onload=function(){
    let title=document.getElementById("title")
    console.log(title)
    console.dir(title)// gi prikazhuva site svojstva na toj element
}

let blockElements=document.getElementsByClassName("block")
console.dir(blockElements)
let firstBlockElement = blockElements[0]
firstBlockElement.innerText ="Zdravo"
//1_nachin za menuvanje na attribute
//link.attributes e niza
link.attributes[0].value="http://www.google.com"
link.innerText="google"

//2_nachin
link.setAttribute("href", "http://www.yahoo.com")

//brishenje na atribut
link.removeAttribute("ime na atribut")

//1_nachin za setiranje na klasi odnosno class kako se dodavaat
document.getElementById("title").setAttribute("class","someClass someClass1")

//2_nachin za class
document.getElementById("title").classList.add("newClass")

//brishenje na klasa
document.getElementById("title").classList.remove("newClass")

console.log(document.querySelector("#title")) //skrateno od getElementById
console.log(document.querySelector(".block")) //skrateno od getElementByClass
//go zema prviot element so klasa block

console.log(document.querySelectorAll(".block"))// gi selektira site elementi so klasa .block
 */

/*
window.onload=function(){ //HINT: Sekogash vo head-ot na HTML <script type="text/javascript" src="cas8.js"></script>
document.getElementById("button").addEventListener("click",
   ()=>{
    document.getElementById("result").innerHTML = new Date()
   }
)
}
*/

/*
window.onload=function(){ // ovoj nachin e povekje vo korist, vtoriot sluchaj e direktiva vo .html file-ot
document.getElementById("light_off").addEventListener("click",()=>{
    document.getElementById("light").setAttribute("src","https://www.w3schools.com/js/pic_bulboff.gif")
})
}


//ova funkcija e nadvor od window.onload bidejkji window.pnload e predefinirana funkcija 
//NIKOGASH NE DEFINIRAJ FUNKCIJA VO FUNKCIJA VO JAVASCRIPT VNIMAVAJ NA ZAGRADI 
function lighton(){
    document.getElementById("light").setAttribute("srce", "https://www.w3schools.com/js/pic_bulboff.gif")
}
*/

/*
window.onload=function(){
    let div =document.createElement("div")

    div.id ="firstdiv"

    div.innerHTML = `<p>Ova e paragraf</p>
                <h1>Naslov</h1>`
   
    //izbegnuvaj dodavanje na style na ovoj nachin so javascript podobro class vo .css file-ot
   div.style.color ="red"
   div.style.height ="100px"
   div.style.width = "100px"
   div.style.background ="green"

   document.body.appendChild(div)// dodavam dete na body tagot za celosen gotov element vo body-ito
    
}
*/

window.onload=function(){

    let uchenici =[
        {name:"Krunislav", surname:"Mirkovski", email:"email"},
        {name:"Gjoko", surname:"Blazhevski",email:"email"},
        {name:"Tihana", surname:"Chingarova",email:"email"},
    ]

    createTable(niza,"Uchenici JS akademija")
}

//nadvor od .onload kreirame druga funkcija za tabela za ova vezhba 

function createTable(niza,naslov){

    let tabela = document.createElement("table")
    let caption = document.createElement("caption")
    caption.innerText = naslov
    tabela.appendChild(caption)//na elementot dodavame dete na body tagot, elementot e smesten vo promenlivata

    let firstRow = document.createElement("tr")// go kreirame prviot red
    let object = uchenici[0]
    for(key in object){
        let th = document.createElement("th")//gi kreirame keliite od prviot red
        th.innerText = key
        tr.appendChild(th)//se dodava kelijata na redot
    }
    tabela.appendChild(firstRow)// se dodava prviot red na tabelata

    for(element of niza){//za prazen red
        let tr = document.createElement("tr")//za prazen red

        for(key in element){//za da gi poplnam kjeliite odnosno td tagovite za toa ni e ovoj for in ciklus
            let td = document.createElement("td")
            td.innertext =element[key]
            tr.appendChild(td)
        }
        tabela.appendChild(tr)//za przen red
    }

    //da go daoademe elementot tabela vo body na .html odnosno dolnovo
    tabela.setAttribute("border","1px")
    document.body.appendChild(tabela)//se dodava tabelata na bodyto
    //so document.body se pristapuva do body tagot od html

}
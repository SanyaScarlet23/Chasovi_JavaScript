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


window.onload=function(){ //HINT: Sekogash vo head-ot na HTML <script type="text/javascript" src="cas8.js"></script>
document.getElementById("button").addEventListener("click",
   ()=>{
    document.getElementById("result").innerHTML = new Date()
   }
)
}
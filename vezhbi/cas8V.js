//let title = document.getElementById("title")
//console.log(title)

//ova kje vrati null ako script tagot ne e na kraj od body-to
//Reshenie 2?
//-Koristenje na window.onload funkcija

window.onload = function(){
    //let title = document.getElementById("title")
    //console.log(title)
    //console.dir(title)//gi prikazhuva site svojstva na toj element
    
    //let blockElement = document.getElementsByClassName("block")
    //console.dir(blockElement) //Prototype e HTMLCollection

    //let firstBlockElement = blockElement[0] //deklarirame kako promenliva
    //firstBlockElement.innerText = "Zdravo" //Vo prviot div element vo HTML so svojstvoto .innerText ja menuvame sodrzhinata od Semos edukacija vo Zdravo

    //let links = document.getElementsByTagName("a")// go definira kako niza
    //let link = links[0]
    //console.log(links)// vo console kako: HTMLCollection [a]
    //console.log(link) // ni go prikazhuva vo console kako <a href="#">Link</a>
    
    // //1_nachin za menuvanje na attribute
    // //link.attributes e niza
    //link.attributes[0].value = "http://www.google.com"
    //link.innerText = "google"

    // //2_nachin
    //link.setAttribute("href","https://www.yahoo.com")

    //brishenje na atribut
    //link.removeAttribute("ime na atribut")

    // //1_nachin za setiranje na klasi
    //document.getElementById("title").setAttribute("class","someClass someClass1")
    
    // //2_nachin za setiranje na klasi
   // document.getElementById("title").classList.add("newClass")

    //brishenje na klasa
    //document.getElementById("title").classList.remove("newClass")

    //console.log(document.querySelector("#title"))//skrateno od getElementById
    //console.log(document.querySelector(".block"))//skrateno od getElementByClassName
    //go zema prviot element so klasa block 

    //console.log(document.querySelectorAll(".block"))//gi selektira site elementi koi imaat klasa block
 
    //1_nachin za definiranje na akcija za nastan
    //document.getElementById("button").addEventListener("click",
    //
    //        ()=>{
    //            document.getElementById("result").innerHTML = new Date()
    //        }
    //)

    //document.getElementById("light_off").addEventListener("click",()=>{
    //    document.getElementById("light").setAttribute("src",
    //    "https://www.w3schools.com/js/pic_bulboff.gif")
    //})

    //KREIRANJE NA ELEMENT VO JS

   // let div = document.createElement("div")
    //div.id = "firstDiv"
    //div.innerHTML = `<p>Ova e paragraf</p>
    //                 <h1>Naslov</h1>`
    //div.style.color="red"
    //div.style.height="100px"
    //div.style.width="100px"
    //div.style.background="green"

    //document.body.appendChild(div) //Dodava dete na body tag-ot
   
    //Primer: kje definirame niza ispolneta so podatochen tip objekti, od uchenici koja kje treba da ja smestime vo tabela
    //prvin ja kreirame table vo .html a podocna vo .js kreirame funkcija za tabela i 
    //funkcija za polnenje na polinjata vo redovite od tabelata 
    //HINT: definiranjeto na promenlivata i nejzinoto kreiranje go pravime vo window.onload funkcijata za sozdavanje na tabela nadvor od window.onload
    let uchenici=[
        {name:"Krunislav", surname:"Mirkovski", email:"email"},
        {name:"Gjoko", surname:"Blazhevski", email:"email"},
        {name:"Tihana", surname:"Chingarova", email:"email"}
    ]

    createTable(uchenici,"Uchenici JS akadeija")

}

function createTable(niza,naslov){

    let tabela = document.createElement("table")
    let caption = document.createElement("caption")
    caption.innerText=naslov
    tabela.appendChild(caption)//na element dodavame date, elementot e smesten vo promenliva

    let firstRow=document.createElement("tr")//go kreirame prviot red od tabelata
    let objekt=niza[0]
    for(key in objekt){
            let th=document.createElement("th")//gi kreirame keliite od prviot red
            th.innerText=key
            firstRow.appendChild(th)//se dodava kjelijata na redot
    }
    tabela.appendChild(firstRow)//se dodava prviot red na tabelata

    for(element of niza){
        let tr=document.createElement("tr")
        for(key in element){
            let td=document.createElement("td")
            td.innerText=element[key]
            tr.appendChild(td)
        }
        tabela.appendChild(tr)//se dodava redot na tabelata
    }

    tabela.setAttribute("border","1px")
    document.body.appendChild(tabela)//se dodava tabelata na body-to

}


//Mozheme i da definirame nadvor od window.onload togash bi izgledalo vaka
//function lighton(){
//    document.getElementById("light").setAttribute("src",
//        "https://www.w3schools.com/js/pic_bulbon.gif")
//}
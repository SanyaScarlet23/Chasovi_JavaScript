//1.Da se prikazat site iminja na korisnicite  od https://jsonplaceholder.typicode.com/users

async function iminjaNaKorisnici(){
    const result= await fetch("https://jsonplaceholder.typicode.com/users")
    const dataUsers= await result.json()
    //console.log(dataUsers)
    for(let korisnici in dataUsers){
        console.log(dataUsers[korisnici].name)
    }
    
    //console.log(dataUsers[0].name)
    
}
iminjaNaKorisnici()


/*2.Da se kreira input pole, kopce i paragraf. 
Pri vnesuvanje na ime na grad vo poleto i klik na kopceto,
vo paragrafot da se prikaze temperturata vo gradot*/
//Input Pole
let inputPole= document.createElement("inputPole")
inputPole.setAttribute("type","text")
inputPole.setAttribute("placeholder","Vnesi ime na grad")
//document.body.appendChild(inputPole)

//Button-Prebaruvaj
let button= document.createElement("button")
button.setAttribute("type","submit")
button.innerText= "Prebaruvaj"
//document.body.appendChild(button)

//paragraf-p kako vo html
let p=document.createElement("p")
p.innerText="Temperaturata vo gradot e:"
//document.body.appendChild(p)

button.addEventListener("click", gradoviTemp)



async function gradoviTemp(){
    let inputPole=document.querySelector("inputPole")
    let grad=input.value
    const result= await fetch("http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric")
    const niza= await result.json()
    console.log(niza.main.temp)
    let p=document.querySelector("p")
    p.innerHTML=`Momentalnata temperatura vo ${grad} e ${niza.main.temp}`
}
//gradoviTemp()

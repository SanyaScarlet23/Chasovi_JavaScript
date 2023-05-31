/*
// samo kako primer e promise da se razbere kako rabotata drugite dva nachini za prevzemanje na podatoci od API
let promise = new Promise((resolve, reject)=>{
    if(uslov){
        resolve()
    }else{
        reject()
    }
})
*/

/*
let hasPizza = false
let promiseToBringPizaa = new Promise((resolve,reject)=>{
    if(hasPizza){
        resolve("We´ll eat pizza")
    }else{
        reject("The pizza place was closed")
    }

    //alternativa za if
    //hasPizza?resolve("We´ll eat pizza"):reject("The pizza place was closed")
})


promiseToBringPizza.then(result=>{
    console.log(result)
}).catch(error=>{console.log(error)})
*/



/*eden nachin za pristapuvanje na podatoci fetch

//Ova se uchi na pamet strukturata
//then funkcija se povikuva koga vetuvanjeto e ispolneto
//catch se povikuva koga vetuvanjeto ne e ispolneto
//edna promise resolve funkcija mozhe da vrati novo vetuvanje koe povtorno treba da se proveri
//dali e ispolneto ili ne 

fetch("https://randomuser.me/api/?results=1")
.then(response=>response.json()) // od responsot gi konvertirame vo json
.then(jsonObj=>{
   // console.log(jsonObj)
    let user =jsonObj.result
    console.log(user)
})

*/

/*
//drug nachin za pristapuvanje na podatoci
async function fetchWeather(){
    const result= await fetch("url") //gi zemam rezultatite od api bukvalno go kopirame linkot 
    const data = await result.json() //gi prevzemam rezultatite od json
    console.log(data.main.temp)// od stranata koja e data pa main e object tamu i temp koj isto e object
}

fetchWeather()

*/
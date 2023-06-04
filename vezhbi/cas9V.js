// let promise = new Promise((resolve,reject)=>{
//    if(uslov){
//        resolve()
//    }else{
//        reject()
//    }
//})

//let hasPizza = false
//let promiseToBringPizza = new Promise((resolve,reject)=>{
//    if(hasPizza){
//        resolve("We will eat pizza")
//    }else{
//        reject("The pizza place was closed")
//    }

   //     //alternativa za if
   //    //hasPizza?resolve("We will eat pizza"):reject("The pizza place was closed")

// })

// promiseToBringPizza.then(result=>{
//    console.log(result)
// }).catch(error=>{console.log(error)})

//then funkcija se povikuva koga vetuvanjeto e ispolneto
//catch se povikuva koga vetuvanjeto ne e ispolneto
//edna promise resolve funkcija mozhe da vrati novo vetuvanje koe 
//povtorno treba da se proveri dali e ispolneto ili ne


// fetch("https://randomuser.me/api/?results=1")
// .then(response=>response.json())
// .then(jsonObj=>{
//     //console.log(jsonObj)
//    let user = jsonObj.results
//    console.log(user)
// })

async function fetchWeather(){
    const result = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric")
    const data = await result.json()
    console.log(data.main.temp)
}

fetchWeather()
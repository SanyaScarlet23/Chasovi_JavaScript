// Da se prikazat site iminja na korisnicite  
// od https://jsonplaceholder.typicode.com/users


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(names => {
        names.forEach(element => {
            console.log(element.name);
        });
    });


// Da se kreira input pole, kopce i paragraf.
// Pri vnesuvanje na ime na grad vo poleto i klik na kopceto,
// vo paragrafot da se prikaze temperturata vo gradot

let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let nameEL = document.querySelector(".name");
let temp = document.querySelector(".temp");



button.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=b47acee6213e03b7c2f286c9da52ba6a&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let nameValue = data['name']
            let tempValue = data['main']['temp'];


            nameEL.innerHTML = "City of: " + nameValue;
            temp.innerHTML = "Temperature is: " + tempValue + " Celsius";

        })



        .catch(err => alert("Wrong city name !"))
})
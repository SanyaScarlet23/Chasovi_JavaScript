//Chas_4_Sanja Taskovska
// Objects literals (i  se od podatochen tip)
let firstObj = {
    title: "Harry Potter",
    year: 1994,
    12:123
}

console.log(firstObj.title)
console.log(firstObj.year)
console.log(firstObj[12])


console.log(firstObj["title"])//ako go oberete ovoj nachin na pechatenje togash kluchot(string) se stava vo ""
console.log(firstObj["year"])

//let user = {
   // name: "Sanja",
   // surename: "Tashkovska",
   // email: "mail.$mail.com",
   // number: 123
//}

//console.log(user)


let hotel = {
    name: "some hotel",
    roomNumber: 234,
    hasVacancy: true,
    management: {
        manager:"Pero",
        email:"pero&mail.com"
    },
    owner: "Pero"
}
console.log(hotel)
let hotel2 = hotel
//povekje nachini ya pechatenje na vrednosti na manager
console.log(hotel.management.manager) // najmnogu se koristi od dolnite dva sluchai ya pechatenje 
console.log((hotel.management).manager)
console.log(hotel.management["manager"])
console.log(hotel["management"]["manager"])// za matrici se koristi

let managementVar = hotel.management
//console.log(management.manager) // ???????????NAJDI ZOSHTO JAVUVA VO CONSOLE GRESHKDE DEKA NE E DEFINIRANA VREDNOSTA ???????? 
//dodavanje na svojstvo
hotel.built = 2000
hotel.owner = "Petko"
//console.log(hotel)
//console.log(hotel2)

// zy doma: da se prochita kako funcioniraat objektite vo javascript

//brishenje na svojstvo
delete hotel.built // kluchnoto zborche delete i svojstvoto koe sakate da go iybrishete

console.log(Object.keys(hotel)) // pechatenje na site kluchevi na objektot hotel
console.log(Object.values(hotel)) // pechatenje na site vrednosti od objektot hotel

let uchenici =[
    {
        ime:"Gjoko",
        prezime:"Blazhevski"
    },
    {
        ime:"Tihana",
        prezime:"Petrovska"
    }
]
 
console.log(uchenici[0].ime)
console.log(uchenici[1].prezime)


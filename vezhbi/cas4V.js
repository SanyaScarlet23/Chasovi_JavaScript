// //OBJECTS LITERALS

// Prv Object
let firstObj ={
    title: "Harry Potter",
    year: 1994,
    12:123
}
console.log(firstObj)

console.log(firstObj.title)
console.log(firstObj.year)
console.log(firstObj[12])

//Ako go odberete ovoj nachin na pechatenje togash kluchot(string) se stava vo ""
console.log(firstObj["title"]) 
console.log(firstObj["year"])

// Vtor Objec
let user ={
    name: "SANJA",
    surname: "KOSTOVSKA",
    email:"mail@mail.com",
    number:123
}
console.log(user)

// Tret Object

let hotel ={
    name:"some name", //svojstvo
    roomNumber: 234,  //svojstvo
    hasVacancy: true, //svojstvo
    managment: {
        manager: "Pero",
        email: "pero@mail.com"
    },
    owner: "Pero",
    user: {
        name:"Sanja",
        surname:"Kostovska",
        email: "mail@mail.com",
        number:123
    }
}
console.log(hotel)

let hotel2=hotel
//povekje nachini za pechatenje na vrednosta na manager
console.log(hotel.managment.manager)
console.log((hotel.managment).manager)
console.log(hotel["managment"].manager)
console.log(hotel["managment"]["manager"])

let managementVar = hotel.managment
console.log(managementVar.manager)

//dodavanje na svojstvo

hotel.bild = 2000
hotel.owner = "Petko"
console.log(hotel)
console.log(hotel2)

// brishenje na svojstvo
//delete hotel.bild // kluchno zborche delete i svojstvoto koe sakate da go izbrishete


// PECHATENJE NA SITE KLUCHEVI NA OBJEKTOT hotel
console.log(Object.keys(hotel))

// PECHATENJE NA SITE VREDNOSTI OD OBJEKTOT hotel
console.log(Object.values(hotel))

// Chetvrt Object

let uchenici =[
    {
        ime: "Gjoko",
        prezime:"Tanevski"
    },
    {
        ime:"Vesna",
        prezime:"Veleva",
    }
]
console.log(uchenici[0].ime)
console.log(uchenici[1].prezime)

// //CIKLUSI
// CIKLUSITE SE SLEDNIVE: while, do-while, for

// pred while definirame pochetok
// while(uslov){
//    naredbi;
//    PROMENA KOJA KJE NAPRAVI USLOVOT DA BIDE NE TOCHEN!!!!!
//             }
var i=0
while(i<=10){
    let b = 10 //koga definirame LET promenliva vo bol na kod taa promenliva nema da e dostapna nadvor od toj blok
    console.log(b)
    console.log(i)
    i++;
}
console.log(b) // vo console pechati greshka na 
//105 linija deka b is not defined bidejkje b e LET promenliva i se naogja vo ciklusot while 
//ako beshe b var definirana kje ja pechateshe bidejkji e dostapna sekade vo kodot bez raylika kade e definirana
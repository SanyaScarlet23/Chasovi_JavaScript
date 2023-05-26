/*
1. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
output во конзолата :
#
##
###
####
#####
######
*/



let niza=["#","##","###","####","#####","######"]

for(let i of niza){
    console.log(i +'\n' )    
}

//2. Имате две низи:направете нова низа во која што ќе ги ставите сите имиња кои двете низи ги делат (Jill, Kate)

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var Mutual = [];


for(let i=0; i<JaneFollowers.length; i++){
    if(JohnFollowers[i]==JaneFollowers[i]){
        Mutual.push(JohnFollowers[i])
    }
}
console.log(Mutual)




//3.  креирајте функција која се вика exclaim.
//Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, 
//оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. Пример za резултат во конзолата : Javascript!


let exclaim=()=>{
    let zbor=prompt("Vnesi zbor")
    console.log(zbor+"!")
}

exclaim()
//exclaim() // mozheme da ja povikuvame funkcijata kolku pati sakame 
//exclaim()

//4.  Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
//Title -> име на книгата //string
//Author -> име на авторот //string
//Price -> цена на книгата //number
//Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks

var books=[
    {title:"Neuromancer",
     author:"William Gibson",
     price:350
    },

    {title:"1984",
     author:"George Orwell",
     price:500
    },

    {title:"Heart of a Dog",
     author:"Mikhail Bulgakov",
     price:410
    },

    {title:"Frankenstein",
     author:"Mary Shelley",
     price:390
    },

    {title:"Count Zero",
     author:"William Gibson",
     price:550
    }
]

function filteredByPrice(elementObject){
    let elementObjectPrice=0
    
    if(elementObject.price<400){
        return true
    }
    elementObjectPrice++;
}

let filteredBooks=books.filter(filteredByPrice)
console.log("Books with less price of 400den are: \n", filteredBooks)




//5. Креирајте функција која се вика LargestNumber.
//Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа.

let x=prompt("Vnesuvaj broevi")
let nizaBroevi=[]

while(!isNaN(x)){
    nizaBroevi.push(x)
    x=prompt("Vnesuvaj broevi")
}
console.log(nizaBroevi.sort())
console.log(nizaBroevi[nizaBroevi.length-1])



function LargestNumber(array){
    var max=array[0]
    for(let index=0;index<array.length; index++){
        
        if(array[index]>max){
            max=array[index]
        }
    }
    console.log(max)  
}

LargestNumber([-70,0,-30,-56,83.89,1])// koga ja povikuvame funkcijata: LargestNumber ja vnesuvame nizata array=[]




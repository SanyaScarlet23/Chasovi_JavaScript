// 1. Vnesete dvocifren broj preku prompt i ispecatete go brojot kako zbori. primer: 23- dva tri, 57- pet sedum

var num1 = [x,y] = prompt("Vnesi dvocifren broj") 
if((num1.length=2) && (parsed_num1 = Number(num1))){
    // console.log(num1) // type string
    console.log("Vneseniot broj e "+parsed_num1+ " i tipot na vnesenata vrednost e "+ typeof parsed_num1)
}else {
    console.log("Nemate vneseno dvocifren broj!")
} 
//console.log(num1[0]+" tip na promenliva e "+ typeof num1[0])
//console.log(num1[1]+" tip na promenliva e "+ typeof num1[1])
parsed_x = Number(x)
parsed_y = Number(y)
//console.log(parsed_x+" "+"Tipot na promenlivata e "+ typeof parsed_x)
//console.log(parsed_y+" "+"Tipot na promenlivata e "+ typeof parsed_y)

let num2 = {
    parsed_x:{
        0:"nula",
        1:"eden",
        2:"dva",
        3:"tri",
        4:"chetiri",
        5:"pet",
        6:"shest",
        7:"sedum",
        8:"osum",
        9:"devet" 
    }, 
    
    parsed_y:{
        0:"nula",
        1:"eden",
        2:"dva",
        3:"tri",
        4:"chetiri",
        5:"pet",
        6:"shest",
        7:"sedum",
        8:"osum",
        9:"devet" 
    }   
}

//console.table(num2)
console.log(num2.parsed_x[parsed_x])
console.log(num2.parsed_y[parsed_y])
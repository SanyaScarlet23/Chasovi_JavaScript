//1. Vnesete dvocifren broj preku prompt i ispecatete go brojot kako zbori. primer: 23- dva tri, 57- pet sedum 

var num1 = [x,y] = prompt("Vnesi dvocifren broj") 
parsed_num1 = Number(num1)

//console.log(x)
//console.log(y)
/*
if(parsed_num1<=9 || parsed_num1>=100) {
    console.log("Nemate vneseno dvocifren broj!")    
}else{
    console.log(num2.x[x])
    console.log(num2.y[y])
} 
*/

let num2 = {
    x:{
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
    
    y:{
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

if(parsed_num1<=9 || parsed_num1>=100 || isNaN(parsed_num1)) {
    console.log("Nemate vneseno dvocifren broj!")    
}else{
    console.log("Vnesenata vrednost e " +parsed_num1)
    console.log(num2.x[x])
    console.log(num2.y[y])    
} 

console.table(num2)
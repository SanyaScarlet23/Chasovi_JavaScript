// 1.Vnesete kordinati na edna tochka i kazhete vo koj kvadrant se naoga

//let promptBroj = prompt("Vnesi broj")
// let broj = Number(promptBroj)
let promptX = prompt("Vnesi koordinati po x-oska")
let X =Number(promptX)
let promptY = prompt("Vnesi koordinati po y-oska")
let Y=Number(promptY)
tochka = [X,Y];
console.log(tochka)

if(X===0 && Y===0){
    console.log("Tochkata e centarot na koordinatniot sistem")
}else if(X>0 && Y>0){
    console.log("Tochkata e vo prviot kvadrant")
}else if(X==0 && Y>0){
    console.log("Tochkata se naogja na pozitivniot del od Y oskata")
}else if(X<0 && Y>0){
    console.log("Tochkata e vo vtoriot kvadrant")
}else if(X<0 && Y==0){
    console.log("Tochkata se naogja na negativniot del od X oskata")
}else if(X>0 && Y==0){
    console.log("Tochkata se naogja na pozitivniot del od X oskata")
}else if(X==0 && Y<0){
    console.log("Tochkata lezhi na negativniot del na Y oskata")
}else if(X<0 && Y<0){
    console.log("Tochkata se naogja vo chetvrtiot kvadrant")
}else if(X>0 && Y<0){
    console.log("Tochkata se naogja vo tretiot kvadrant")
}else{
    console.log("Nemate vneseno broj kako vrednost")    
}

// 2. Napravete lista od omileni knigi

let omileni_knigi = ["Majstorot i Margarita", "Maliot Princ", "Neuromancer", "The Peripheral", "1984"];
console.log(omileni_knigi)
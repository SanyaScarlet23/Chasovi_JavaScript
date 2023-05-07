// 1. Ispechati hello world vo konzola
console.log("Hello World!")

// 2.Ispechati go zbirot 5+5
console.log(5+5)

// 3.Vesi go vasheto ime preku promt i ispechati go
var ime = prompt("Vnesi go vasheto ime")
console.log("Moeto ime e "+ime)

// 4.Preku promt vnesete dva broja i presmetaj go nivnit proizvod
var num1=prompt("Vnesi go prviot broj")
var num2=prompt("Vnesi go vtoriot broj")
console.log("Proizvodot na dvata broja"+" "+ num1 + " i "+ num2 + " iznesuva "+ num1*num2)

// 5. Od prethodno vnesenite broevi prikazhete koj e pogolem
if(num1>num2){
    console.log(num1 +" e pogolem od " + num2)
}if(num1<num2){
    console.log(num2 + " e pogolem od " + num1)
}else {   
    console.log("i dvata broj se isti i nivnata vrednost e " + num1)
}

// 6.Vnesete poeni preku promt od 0-100 i ispechatete koja e ocenata
let poeni = prompt("Vnesi poeni so vrednosti od 0 do 100")

if(poeni>=0 && poeni<=35){
     console.log("Ocenkata e nedovolen 1")
}else if(poeni>35 && poeni<=56){
    console.log("Ocenkata e dovolen 2")
}else if(poeni>56 && poeni<=76){
    console.log("Ocenkata e dobar 3")
}else if(poeni>76 && poeni<90){
    console.log("Ocenkata e mn.dobar 4")
}else{
    console.log("Ocenkata e odlichen 5")
}



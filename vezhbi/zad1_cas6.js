// N!=1*2*3*4*....*N, primer: 4!=1*2*3*4

let N=Number(prompt("Vnesi pozitiven broj i razlichen od nula!!!"))
let factoriel = 1 

for(x=1; x<=N; x++){ 
    factoriel *= x     
}
console.log(`Faktoriel od brojot ${N} iznesuva ${factoriel} `)

 
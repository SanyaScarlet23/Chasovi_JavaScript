//6. y = x^n

let x=parseInt(Number(prompt("Vnesi ja osnovata")))
let n=parseInt(Number(prompt("Vnesi go stepenot")))

let y=1

for(i=0; i<=n-1; i++){    
    y *= x 
}
console.log(`${x}^${n}=${y}`)

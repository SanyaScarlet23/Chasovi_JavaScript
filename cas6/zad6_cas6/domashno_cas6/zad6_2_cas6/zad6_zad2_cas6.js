//6. y = x^n

let x=parseInt(Number(prompt("Vnesi ja osnovata")))
let n=parseInt(Number(prompt("Vnesi go stepenot")))

let y=1

for(i=0; i<=n-1; i++){    
    y *= x 
}
console.log(`${x}^${n}=${y}`)

//2. Vnesuvaj broevi vo niza se dodeka ne vneses karakter. Od vnesenite broevi 
//odredi kolku od niv se dellivi so 5 i 3, koi samo so 5 i koi samo so 3

let z=prompt("Vnesuvaj broevi")
let niza=[]

while(!isNaN(z)){
    niza.push(z)
    z=prompt("Vnesuvaj broevi")
}
console.log(niza)


zaTri=[]
zaPet=[]
for(i=0; i<niza.length; i++){
        if(niza[i]%3==0)
            zaTri.push(niza[i])        
}
console.log(`Od vnesenite broevi ${zaTri.length} se delivi so 3, odnosno ${zaTri}`)

for(i=0; i<niza.length; i++){
    if(niza[i]%5==0)
        zaPet.push(niza[i]) 
}
console.log(`Od vnesenite proevi ${zaPet.length} se delivi so 5, odnosno ${zaPet}`)

let zaedno35=zaTri.concat(zaPet) 
//console.log(`Broevite koi se delivi so 3 i 5 se ${zaedno35}`)
//console.log(zaedno35)

let edinstvena35=[]
zaedno35.forEach((c) =>{
    if(!edinstvena35.includes(c)){
        edinstvena35.push(c)
    }
})
console.log(`Broevite koi se delivi so 3 i 5 se ${edinstvena35}`)
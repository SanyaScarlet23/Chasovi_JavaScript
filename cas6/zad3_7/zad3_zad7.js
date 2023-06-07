//7.Vnesuvajte broevi vo niza dodeka ne vnesete karakter
// Od vneseni broevi vo niza odredete koja e najgolemata max suma od dva posledovatelni broevi

let x=prompt("Vnesuvaj broevi")
let niza=[]
while(!isNaN(x)){
    niza.push(parseInt(x))
    x=prompt("Vnesuvaj broevi")
}
console.log(niza)


var y=[]


for(let index=0; index<niza.length-1; index++){
    zbir=niza[index]+niza[index+1]
    y.push(parseInt(zbir))
}
console.log(y)


for(let i=0; i<y.length-1; i++){
    
    if(y[i]>y[i+1]){
        console.log(`Zbirot od broevite predhodnicite iznesuva ${y[i]} i e pogolem od ${y[i+1]} koj e zbir na posledovatelnite broevi`)
    }else{
        console.log(`Zbirot na poseldovatelnite broevi e ${y[i+1]} i e pogolem od zbirot na predhodnicite ${y[i]}`)
    }    
}


//3. Da se napishe programa koja na ekran ke gi ispecati site cetiri-cifreni broevi kaj koi zbirot na trite
//najmalku znacajni cifri e ednakov so najznacajnata cifra (5302->5=3+0+2;4310->4=3+1+0)
/*
var broj=Number(5302)

console.log(broj)
a=parseInt(broj/1000)
console.log(a)

b=(parseInt(broj/100))%10
console.log(b)

c=(parseInt(broj/10)%10)
console.log(c)

d=broj%10
console.log(d)
*/
var broj
for( broj=1000; broj<=9999; broj++){
    
    a=parseInt(broj/1000)
    b=(parseInt(broj/100))%10
    c=(parseInt(broj/10)%10)
    d=broj%10
       if(a==(b+c+d)){
           console.log(broj+" zbirot e "+a+"="+b+"+"+c+"+"+d)
        
    }
     
}



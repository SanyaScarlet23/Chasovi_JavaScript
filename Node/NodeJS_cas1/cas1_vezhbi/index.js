let niza=["1","2","3"];
let newNiza=["0",...niza,"4"]; //spread-operator
console.log(newNiza)

const a=[1,2,3];
//const b=a;
//b.push(4); //.push method
a.splice(3,0,4); //.splice method
console.log(a)

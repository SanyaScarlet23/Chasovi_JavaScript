const sobiranje=(x,y)=>{
    return x+y;
};

const odzemanje=(x,y)=>{
    return x-y;
};

const mnozenje=(x,y)=>{
    return x*y;
};

const delenje=(x,y)=>{
    return x/y;
};

//! so ovoj del gi exportirame funkciite za da gi primenime kade sakame
module.exports ={
    sobiranje,
    odzemanje,
    mnozenje,
    delenje,
};
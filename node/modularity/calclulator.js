function add(a,b){
    console.log('the sum',a+b)
}

function sub(a,b){
    console.log('the difference',a-b)
}

function mul(a,b){
    console.log('the product',a*b)
}

function div(a,b){
    console.log('quotent',a/b)
}

module.exports={
    Addition:add,
    Substraction:sub,
    Multiply:mul,
    Division:div
}
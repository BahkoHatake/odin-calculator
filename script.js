function add(x,y){
    return x+y
}
function subtract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}
function operate(operator,x,y){
    let res=null
    if (operator==="+"){
        res=add(x,y)
    }
    else if (operator==="-"){
        res=subtract(x,y)
    }
    else if(operator==="*"){
        res=multiply(x,y)
    }
    else if(operator==="/"){
        res= devide(x,y)
    }
    return res
}

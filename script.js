function add(x,y){
    return Number(x)+Number(y)
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
let firstVar=""
function fillFirstDisplay (){
    firstVar+=this.value
    display1.textContent=firstVar
}
let secondVar=""
function makeSecondVar(){
    secondVar+=this.value
    display1.textContent=secondVar
}
const display1=document.querySelector(".display1")
const numButtons=document.querySelectorAll(".num");
numButtons.forEach(number=>number.addEventListener("click", fillFirstDisplay))
 
let operatorVar=""
let secondDisplay=""
const display2=document.querySelector(".display2");
const operatorButtons=document.querySelectorAll(".operator");
operatorButtons.forEach(operator=>operator.addEventListener("click",()=>{
    operatorVar=operator.value;
    secondDisplay=firstVar+operatorVar;
    display2.textContent=secondDisplay;
    numButtons.forEach(number=>number.removeEventListener("click", fillFirstDisplay))
    numButtons.forEach(number=>number.addEventListener("click",makeSecondVar))
    })
)

let equals = document.querySelector(".equals");
equals.addEventListener("click",()=>{
    display2.textContent=secondDisplay+secondVar+"=";
    let resoult=operate(operatorVar,firstVar,secondVar)
    display1.textContent=resoult
})
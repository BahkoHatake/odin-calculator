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
    if (y==="")
        {return x}
    else if (operator==="+"){
        res=add(x,y)
    }
    else if (operator==="-"){
        res=subtract(x,y)
    }
    else if(operator==="×"){
        res=multiply(x,y)
    }
    else if(operator==="÷"){
        if(y==0){
            alert("LOL, it is impossible to divide by ZERO")
        }
        res= divide(x,y)
    }
    return res.toFixed(8).replace(/\.?0+$/, "")
}

let firstNum=""
function fillFirstDisplayFirsTime (){
    firstNum+=this.value;
    display1.textContent=firstNum;
    if (this.value==="."){
        decimal.removeEventListener("click",fillFirstDisplayFirsTime)}
}
const decimal=document.querySelector(".decimal")
const display1=document.querySelector(".display1")
const numButtons=document.querySelectorAll(".num");
numButtons.forEach(number=>number.addEventListener("click", fillFirstDisplayFirsTime))
let operatorVar="";
let currentNum="";
let secondNum="";
let currentOperation="";
function addEventListenerOperator(){
    operatorVar=this.value;
    if (operatorVar===currentOperation||currentOperation==="") {   
        currentNum=operate(operatorVar,firstNum,secondNum);
        display2.textContent=currentNum+operatorVar;}
    else{
        currentNum=operate(currentOperation,firstNum,secondNum);
        display2.textContent=currentNum+operatorVar;
    }
    display1.textContent="_";
    firstNum=currentNum;
    secondNum="";
    currentOperation=operatorVar
    numButtons.forEach(number=>number.removeEventListener("click", fillFirstDisplayFirsTime))
    numButtons.forEach(number=>number.addEventListener("click",makeSecondVar))
}
function makeSecondVar(){
    secondNum+=this.value;
    display1.textContent=secondNum;
    if (this.value==="."){
        decimal.removeEventListener("click",makeSecondVar)}
}
const display2=document.querySelector(".display2");
const operatorButtons=document.querySelectorAll(".operator");
operatorButtons.forEach(operator=>operator.addEventListener("click",addEventListenerOperator));

let equals = document.querySelector(".equals");
equals.addEventListener("click",()=>{
    if(secondNum===""){
        display2.textContent=firstNum+"=";
    }
    else{display2.textContent=firstNum+currentOperation+secondNum+"=";}
    let result=operate(currentOperation,firstNum,secondNum)
    display1.textContent=result
    numButtons.forEach(number=>number.removeEventListener("click",makeSecondVar));
    numButtons.forEach(number=>number.removeEventListener("click", fillFirstDisplayFirsTime))
})

const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{location.reload()})




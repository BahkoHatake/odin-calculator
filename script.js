let inputNum=""
const decimal=document.querySelector(".decimal")
const display1=document.querySelector(".display1")
function takeNumberInput (key){
    if (equa){return}
    if(Number.isInteger(key)){
        inputNum+=key
    }
    else{inputNum+=this.value}

    display1.textContent=inputNum;
    if (this.value==="."){
        decimal.removeEventListener("click",takeNumberInput)};
}
const numButtons=document.querySelectorAll(".num");
numButtons.forEach(number=>number.addEventListener("click", takeNumberInput))
let equa="";
let operatorVar="";
let firstNum="";
let secondNum="";
let currentOperator="";
function setOperator(x){
    equa=false;
    if(typeof x==="string")
    {operatorVar=x}
    else{
    operatorVar=this.value;}
    decideInputNum();
    if (operatorVar===currentOperator||currentOperator==="") {   
        firstNum=operate(operatorVar,firstNum,secondNum);}
    else{
        firstNum=operate(currentOperator,firstNum,secondNum);
    } 
    display2.textContent=firstNum+operatorVar;
    inputNum="";
    currentOperator=operatorVar;
}
const display2=document.querySelector(".display2");
const operatorButtons=document.querySelectorAll(".operator");
operatorButtons.forEach(operator=>operator.addEventListener("click",setOperator));

function evaluate(){
    if(currentOperator==""){
        console.log(true)
        return}
    decideInputNum();
    if(secondNum==""){
        console.log(true)
        return}
    let result=operate(currentOperator,firstNum,secondNum)
    display2.textContent=firstNum+operatorVar+secondNum+"=";
    display1.textContent=result
    firstNum=result
    inputNum=""
    equa=true
}
let equals = document.querySelector(".equals");
equals.addEventListener("click",evaluate)

function clear(){
    inputNum="";
    firstNum="";
    secondNum="";
    operatorVar="";
    currentOperator="";
    display1.textContent="";
    display2.textContent="";
    equa="";
}
const clearBut=document.querySelector(".clear");
clearBut.addEventListener("click",clear)

function backspace(){
    let len=inputNum.length
    inputNum=inputNum.slice(0,len-1);
    display1.textContent=inputNum;
}
const del=document.querySelector(".delete");
del.addEventListener("click",backspace)

window.addEventListener('keydown', handleKeyboardInput)
function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) takeNumberInput(Number(e.key))
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') backspace()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      setOperator(convertOperator(e.key))
  }
  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
  }
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
    if(res===null){
        return}
    else{
    return res.toFixed(8).replace(/\.?0+$/, "")}}
function decideInputNum(){
    if(firstNum==""){
        firstNum=inputNum;
    }
    else{
        secondNum=inputNum;
    }
}
function calc(operation, num1, num2){
 return operation(num1, num2)   
}


function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 * num2;
}

function buttonClick(e){
    let btn = e.target.textContent;
    if (btn != 'CLEAR'){
        if (btn != "="){
            if (btn != "+" && btn != "-" && btn != "*" && btn != "/"){
                currNum += btn
                console.log(currNum);
                console.log(prevNum);
                document.querySelector("#display").textContent = currNum;
            } else {
                operant = btn;
                prevNum = currNum;
                currNum = '';
                document.querySelector("#display").textContent = operant;
            }
        } else {
            result = 0;
            if (operant == "+") {
                result = calc(add, Number(prevNum), Number(currNum))
            } else if(operant == "-"){
                result = calc(substract, prevNum, currNum)
            } else if(operant == "*"){
                result = calc(multiply, prevNum, currNum)
            } else if(operant == "/"){
                result = calc(divide, prevNum, currNum)
            }
        document.querySelector("#display").textContent = result;
        }
    } else {
        prevNum = '';
        currNum = '';
        operant = '';
        document.querySelector("#display").textContent = 0;
    }
    

}

let prevNum = '';
let currNum = '';
let operant = '';

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener('click', buttonClick))
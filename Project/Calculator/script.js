const computeFrame = document.querySelector("#compute-frame");
const resultCurrent = document.querySelector("#result-text-current");
const resultPrev = document.querySelector("#result-text-prev");
let boxFrame, box, boxArray; 
let currentType, currentOperation = '=';
let value, x, y;
let recursive = false;
const typeArrayFunction = ['<', '/', '*', '-', '+', '%', 'c', 'ce', '='];
const typeArrayFunctionStay = ['<', 'c', 'ce', '='];
const typeArrayFunctionClear = ['c', 'ce'];
const typeArray = [
    'c', 'ce', '%', '<', 
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-',
    '.', '0', '=', '+'
];



const createButton = ()=> {
    for (let i = 0; i < 5; i++){
        boxFrame = document.createElement("div");
        boxFrame.classList.add("box-frame");
        
        for(let j = 0; j < 4; j++){
            box = document.createElement("button");
            currentType = typeArray[(i * 4) + j];
            box.classList.add(`${currentType}`);
            box.textContent = `${currentType}`;
            boxFrame.appendChild(box);
        }
        computeFrame.appendChild(boxFrame);
    }
    boxArray = document.querySelectorAll("button");
}

const getMouseInput = ()=> {
    boxArray.forEach(element => {
        element.addEventListener("click", (e)=> {
            updateScreen(e);
        })
    });
}

const updateScreen = (e)=> {
    if (typeArrayFunction.includes(e.target.textContent)){
        if (typeArrayFunctionClear.includes(e.target.textContent)){
            calculate(e.target.textContent);
        }
        else {
            if (resultPrev.textContent === "" && !typeArrayFunctionStay.includes(e.target.textContent)) {
                PrevResultNull();
                currentOperation = e.target.textContent;
            }
            else{
                console.log(currentOperation);
                calculate(currentOperation);
                currentOperation = e.target.textContent;
            }
        }
    }
    else {
        draw(e.target)
    }
}    

const draw = (textNode) => {
    resultCurrent.textContent += textNode.textContent;
}

const PrevResultNull = ()=> {
    if (resultPrev.textContent === ""){
        resultPrev.textContent = resultCurrent.textContent;
        resultCurrent.textContent = "";
        return;
    }
}

const calculate = (type)=> {

    x = Number(resultPrev.textContent);
    y = Number(resultCurrent.textContent);

    switch (type){
        case '+':
            value = plus(x, y);
            break;
        case '-':
            value = minus(x, y);
            break;
        case '*':
            value = multiply(x, y);
            break;
        case '/':
            value = divide(x, y);
            break;
        case '%':
            value = mod(x, y);
            break;
        case 'c':
            resultCurrent.textContent = "";
            resultPrev.textContent = "";
            return;
        case 'ce':
            resultCurrent.textContent = "";
            return;
        case '=':
            if (!recursive) {
                recursive = true;
                calculate(type);
            }
            break;
        case '<':
            popString(resultCurrent.textContent);
            return;
    }
    resultPrev.textContent = value;
    resultCurrent.textContent = "";
}

const popString = (e) => {
    let textString = e.toString();
    textString = textString.substring(0, textString.length - 1);
    console.log(textString);
    resultCurrent.textContent = textString;
}

const plus = (x, y)=> {
    return x + y;
}

const minus = (x, y)=> {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x/y;
}

const mod = (x, y) => {
    return x % y;
}


createButton();
getMouseInput();


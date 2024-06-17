const computeFrame = document.querySelector("#compute-frame");
let boxFrame, box, currentType;
let boxArray;
const typeArray = [
    'c', 'ce', '%', '<', 
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-',
    '+-', '0', '.', '+'
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

const calculate = ()=> {

}

const plus = ()=> {

}

const minus = ()=> {

}

createButton()



const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

let boxArray;
let boxContainer, box, timeout, size = 16;

const removeChildNodes = ()=> {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

const createBoxes = (size)=> {
    removeChildNodes()
    for (let i = 0; i < size; i++){
        boxContainer = document.createElement("div")
        boxContainer.classList.add("box-container");
        for(let j = 0; j < size; j++){
            box = document.createElement("div")
            box.classList.add("box")
            boxContainer.appendChild(box);
        }
        container.appendChild(boxContainer);
    }
    boxArray = document.querySelectorAll(".box")
}

const hoverEffect = (boxArray)=> {
    boxArray.forEach((boxElement)=>{
        boxElement.addEventListener("mouseenter", (e)=>{
            console.log(box);
            const target = e.target;
            console.log("mouseEntered");
            target.style.cssText = "background-color: red;";
            // e.stopPropagation();
        })
        
        boxElement.addEventListener("mouseleave", (e)=> {
            const target = e.target;
            setTimeout(()=>{
                target.style.cssText = "background-color: black;";
            }, 100);
        })
    });    
}

createBoxes(size);
hoverEffect(boxArray);


btn.addEventListener("click", (e)=> {
    size = prompt("What is the size of boxes you want.");
    createBoxes(size);
    hoverEffect(boxArray);
})




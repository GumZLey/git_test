// We need to check win after each click of person\\
const boxs = document.querySelectorAll('#box');
const resetStat = document.querySelector('#reset-stat');

const createElemet = (element, id, elementClass = "") => {
    const newElemet = document.createElement(element);
    newElemet.id = id;
    newElemet.classList.add(elementClass);
}

const gameBoard = (() => {
    let currentType = null;
    let defaultBoard = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ]
    
    let board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
    ]
    // Three cases which is [row, col, diagonal]
    const checkWin = (player)=>{
        let col1 = [], col2 = [], col3 = [];
        let win = false;

        board.forEach(element => {
            let tmpSet = new Set(element)
            let tmpSetValue = tmpSet.values().next().value;
            if (tmpSet.size === 1 && tmpSetValue !== '0') //rows
            {
                element[0] // row win
                console.log(`${currentType} wins row`)
                win = true;
                return;
            }
            col1.push(element[0]);
            col2.push(element[1]);
            col3.push(element[2]);
            
        });

        if ((col1[0] === col2[1]) && (col2[1] === col3[2])) { 
            if (col1[0] !== '0') {
                console.log(`${currentType} wins diagoanl`);
                win = true;
            }
        }
        if ((col1[2] === col2[1]) && (col2[1] === col3[0])) { 
            if (col3[0] !== '0') {
                console.log(`${currentType} wins diagoanl`);
                win = true;
            }
            //diagonal win
        }
        
        //figure out the best way to do this.
        if (repetitionChecker(col1, col2, col3)) {
            console.log(`${currentType} wins column`);
            win = true;
            // col win
        }

        if (win) { player.updateScore(); resetBoard(); }
    }

    const resetBoard = ()=> {
        board = defaultBoard.map((arr)=> { return arr.slice(0); });
        console.log(defaultBoard);
        boxs.forEach(box => {
            box.textContent = "";
        })
    }

    const repetitionChecker = (col1, col2, col3)=> {
        let flag = false;
        for (let i = 0; i < 2; i++) {
            if (!col1.includes("0")){
                flag = col1[i] === col1[i+1] ? true : false;
            }
            if (!col2.includes("0")){
                flag = col2[i] === col2[i+1] ? true : false;
            }
            if(!col3.includes("0")) {
                flag = col3[i] === col3[i+1] ? true : false;
            }
        }
        return flag;
    }

    const changePos = (type, x, y)=> {
        currentType = type;
        board[Number(x)][Number(y)] = type;
    }

    const currentBoard = ()=> {

        board.forEach(e=> {
            console.log(e);
        })
        console.log("");
    }

    return {
        checkWin: checkWin,
        currentBoard: currentBoard,
        changePos: changePos,
        resetBoard: resetBoard
    }
})()

function person(type, htmlNode) {
    let score = 0;
    return {
        updateScore() {
            score++;
            htmlNode.textContent = score;
        },

        getType() {
            return type;
        },

        resetScore() {
            score = 0;
        }
    }
}

const p1_element = document.querySelector("#player1-score");
const p2_element = document.querySelector("#player2-score");

const p1 = person('X', p1_element);
const p2 = person('O', p2_element);
let playerPointer, counter = 0;

gameBoard.currentBoard();
gameBoard.checkWin();

const getBoxIndex = (element)=> {
    let index = Number(element.target.classList[1]);
    let returnList = [];

    returnList[0] = Math.floor(index / 3);
    returnList[1] = Math.floor(index % 3);
    return returnList;
}



boxs.forEach(box => {
    box.addEventListener('click', (e)=> {
        playerPointer = counter % 2 === 0 ? p1 : p2;
        let currentPos = getBoxIndex(e);
        console.log(currentPos[0], currentPos[1]);
        gameBoard.changePos(playerPointer.getType(), currentPos[0], currentPos[1]);
        e.target.textContent = playerPointer.getType();
        counter++;
        gameBoard.currentBoard();
        gameBoard.checkWin(playerPointer);
    })
})

resetStat.addEventListener("click", e => {
    gameBoard.resetBoard();
    p1.resetScore();
    p2.resetScore();
})
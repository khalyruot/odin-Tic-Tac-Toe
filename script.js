const playerOneName = "Jame";
const playerOneMarker = "X";
const playerTwoName = "David";
const playerTwoMarer = "O";

const playerOne = {
    name: "Jame", 
    marker: "X"
};

const playerTwo = {
    name: "David",
    marker: "O"
};



var container = document.querySelector('.grid_area');

function tictactoeGame(playerOne, playerTwo){
    
    for(let i = 0; i<3; i++){
        const box_3x3_row = document.createElement('div');
        box_3x3_row.classList.add('content');
        container.appendChild(box_3x3_row);
        
        for(let j = 0; j < 3; j++){
            const box_3x3_column = document.createElement('div');
            box_3x3_column.textContent = "";
            box_3x3_row.appendChild(box_3x3_column);
            box_3x3_column.classList.add('sub_content');
            
        }

        const box_hover = document.querySelectorAll('.sub_content');
    
        for(let k = 0; k < box_hover.length; k++){
    
            box_hover[k].onclick = function(){mouseOnClick()};
            function mouseOnClick(){
                box_hover[k].style.backgroundColor ="red";
            }
        } 
    }

    return "a winner";

}

function playGame(){
   
    const boardGame = {
        a:[1,2,3],
        b:[1,2,3],
        c:[1,2,3]
    }

    const choicePlayer = {
        a:1,
        b:2,
        c:2
    }

    const choicePlayerRow = [];
    const choicePlayerNumber = [];


    for(const key in choicePlayer){
        if(boardGame.hasOwnProperty(key)){
            const element = choicePlayer[key];
            choicePlayerRow.push(key);
            choicePlayerNumber.push(element);
        }
    }

    console.log(choicePlayerRow);
    console.log(choicePlayerNumber);
    console.log(choicePlayerNumber[1]===choicePlayerNumber[2]);


    if(choicePlayerRow[0]!==choicePlayerRow[1] && choicePlayerRow[1]!==choicePlayerRow[2] && choicePlayerRow[0]!==choicePlayerRow[2] &&  choicePlayerNumber[0]!==choicePlayerNumber[1] && choicePlayerNumber[1]!==choicePlayerNumber[2] && choicePlayerNumber[0]!==choicePlayerNumber[2]){
        console.log("You're the Winner!!");
    }
    else if(choicePlayerRow[0]===choicePlayerRow[1] && choicePlayerRow[1]!==choicePlayerRow[2]){
        console.log("You're the Winner!!");
    }
    else if(choicePlayerNumber[0]===choicePlayerNumber[1] && choicePlayerNumber[1]===choicePlayerNumber[2]){
        console.log("You're the Winner!!")
    }
    else{
        console.log("You're the Loser!!")
    }

   

   

}

tictactoeGame();
playGame();

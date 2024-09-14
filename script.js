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

const choicePlayer = {}


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
            console.log("j:  " + j);
            console.log("i: " + i);

            
        }
    }
    
    for(let k=0; k<3; k++){
        const box_hover = document.querySelectorAll('.sub_content');
        console.log("k: " + k);
    
        for(let l = 0; l < box_hover.length; l++){

            const player = 5;
    
            box_hover[l].onclick = function(){mouseOnClick()};
            function mouseOnClick(){
                if(player%2 == 0){
                    const para = document.createElement("p");
                    para.innerHTML = "X";
                    box_hover[l].appendChild(para);
                    console.log("l: " + l);
                    boardGame_push(l);
                   
                }
                else{
                    const para = document.createElement("p");
                    para.innerHTML = "O";
                    box_hover[l].appendChild(para);
                    console.log("l: " + l);
                    boardGame_push(l);
                    console.log(choicePlayer);
                }
            }
        } 

    }

       
    

    return "a winner";

}



function boardGame_push(l){
    const keys_boardGame = [];
    const values_boardGame = [];
    if(l==0){
        keys_boardGame.push("a");
        values_boardGame.push(0);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==1){
        keys_boardGame.push("b");
        values_boardGame.push(0);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==2){
        keys_boardGame.push("c");
        values_boardGame.push(0);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==3){
        keys_boardGame.push("a");
        values_boardGame.push(1);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==4){
        keys_boardGame.push("b");
        values_boardGame.push(1);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==5){
        keys_boardGame.push("c");
        values_boardGame.push(1);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==6){
        keys_boardGame.push("a");
        values_boardGame.push(2);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==7){
        keys_boardGame.push("b");
        values_boardGame.push(2);
        keys_boardGame.forEach((key, index) => {
        choicePlayer[key] = values_boardGame[index];
        });
    }
    else if(l==8){
        keys_boardGame.push("c");
        values_boardGame.push(2);
        keys_boardGame.forEach((key, index) => {
            choicePlayer[key] = values_boardGame[index];
        });
    }
    return choicePlayer;
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
boardGame_push();
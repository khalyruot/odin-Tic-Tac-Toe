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

tictactoeGame();

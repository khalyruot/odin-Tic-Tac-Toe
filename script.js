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

var arrayIndexBox =[];
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
    }
    
    for(let k=0; k<3; k++){
        const box_hover = document.querySelectorAll('.sub_content');
    
        for(let l = 0; l < box_hover.length; l++){

            const player = 5;
    
            box_hover[l].onclick = function(){mouseOnClick()};
            function mouseOnClick(){
                if(player%2 == 0){
                    const para = document.createElement("p");
                    para.innerHTML = "X";
                    box_hover[l].appendChild(para);
                    console.log("l: " + l);
                    arrayIndexBox.push(l);
                    console.log("arrayIndexBox: " + arrayIndexBox);
                   
                }
                else{
                    const para = document.createElement("p");
                    para.innerHTML = "O";
                    box_hover[l].appendChild(para);
                    console.log("l: " + l);
                    arrayIndexBox.push(l);

                    function compareNumbers(a, b)
                    {
                            return a - b;
                    }
                        
                    arrayIndexBox.sort(compareNumbers);
                    console.log("arrayIndexBox: " + arrayIndexBox);
                    playGame(arrayIndexBox);

                }
            }
        } 

    }

       
    

    return "a winner";

}


function playGame(){
    const a = [0,1,2]; 
    const b = [3,4,5];
    const c = [6,7,8];
    const d = [0,4,8];
    const e = [2,4,5];
    const f = [0,3,6];
    const g = [1,4,7];
    const h = [2,5,8];
   

    
    console.log(arrayIndexBox.toString()!==a.toString());
    //console.log(arrayIndexBox[i] !== b[i] && arrayIndexBox[i] !== c[i] && arrayIndexBox[i] !== d[i] && arrayIndexBox[i] !== e[i]);
    if(arrayIndexBox.toString() == a.toString() || arrayIndexBox.toString() == b.toString() || 
        arrayIndexBox.toString() == c.toString() || arrayIndexBox.toString() == d.toString() ||
        arrayIndexBox.toString() == e.toString() || arrayIndexBox.toString() == f.toString() ||
        arrayIndexBox.toString() == g.toString() || arrayIndexBox.toString() == h.toString() ){
        console.log("You're the Winner!!");
    }
    else{

        console.log("You're the Loser!!")
    }

   
}

tictactoeGame();
playGame();

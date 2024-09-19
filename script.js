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

var choicePlayer_i = [];
var choicePlayer_j = [];

var arrayIndexBox_X =[];
var arrayIndexBox_O =[];
var container = document.querySelector('.grid_area');


function tictactoeGame(playerOne, playerTwo){

    for(let i = 0; i<3; i++){
            const box_3x3_row = document.createElement('div');
            box_3x3_row.classList.add('content');
            container.appendChild(box_3x3_row);
            choicePlayer_i.push(i);
            

        
        for(let j = 0; j < 3; j++){
            const box_3x3_column = document.createElement('div');
            box_3x3_column.textContent = "";
            box_3x3_row.appendChild(box_3x3_column);
            box_3x3_column.classList.add('sub_content');
            choicePlayer_j.push(j);
            
        }
        
        
    }
    

    
    

    var box_click = document.querySelectorAll('.sub_content');
    var count = 0;
    for(let l=0; l<9; l++){
        box_click[l].onclick = function(){
            count += 1;
            const para = document.createElement("p");
            var playerMarker = "X";
            console.log("choicePlayer_i: " + choicePlayer_i[l]);
            console.log("choicePlayer_j: " + choicePlayer_j[l]);
            if (count%2==0){
                playerMarker = "X";
                console.log(playerMarker);
                para.innerHTML = playerMarker;
                arrayIndexBox_X.push([choicePlayer_i[l],choicePlayer_j[l]]);
                console.log("arrayIndexBox_X: " + arrayIndexBox_X);
                playGame(arrayIndexBox_X);
                const arrayIndexBox_X_Display = convertArrayToObject(arrayIndexBox_X);
                console.log(arrayIndexBox_X_Display);
                
                
            }
            else{
                playerMarker = "O";
                console.log(playerMarker);   
                para.innerHTML = playerMarker;
                arrayIndexBox_O.push(l);
                function compareNumbers(a, b)
                {
                    return a - b;
                }
                arrayIndexBox_O.sort(compareNumbers);
                console.log("arrayIndexBox: " + arrayIndexBox_O);
                playGame(arrayIndexBox_O);
                convertArrayToObject(arrayIndexBox_O);
                //console.log(arrayBoxObject);
            }

        box_click[l].appendChild(para);
        };
        

    }    
    
    return "a winner";

}




function playGame(arrayIndexBox){
    const a = [0,1,2]; 
    const b = [3,4,5];
    const c = [6,7,8];
    const d = [0,4,8];
    const e = [2,4,5];
    const f = [0,3,6];
    const g = [1,4,7];
    const h = [2,5,8];

   

    //console.log(arrayIndexBox[i] !== b[i] && arrayIndexBox[i] !== c[i] && arrayIndexBox[i] !== d[i] && arrayIndexBox[i] !== e[i]);
    if(arrayIndexBox.toString() == a.toString() || arrayIndexBox.toString() == b.toString() || 
        arrayIndexBox.toString() == c.toString() || arrayIndexBox.toString() == d.toString() ||
        arrayIndexBox.toString() == e.toString() || arrayIndexBox.toString() == f.toString() ||
        arrayIndexBox.toString() == g.toString() || arrayIndexBox.toString() == h.toString() ){
        console.log("You're the Winner!!");
        const para = document.createElement("p");
        para.innerHTML = "X is the Winner";
        document.getElementById("result_winner").appendChild(para);
    }
    else{

        console.log("You're the Loser!!")
        
    }

   
}


function convertArrayToObject(arrayBox){
    const arrayBoxObject={
        a: [arrayBox[0]],
        b: [arrayBox[1]],
        c: [arrayBox[2]]
    }
    
    return arrayBoxObject;

}


tictactoeGame();
playGame();

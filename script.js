
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


function tictactoeGame(){

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
            
            console.log("l: " + l);
            count += 1;
            const para = document.createElement("p");
            if (count%2==0){
                playerMarker = playerOne.marker;
                para.innerHTML = playerMarker;
                arrayIndexBox_X.push(l);
                function compareNumbers(a, b)
                {
                    return a - b;
                }
                arrayIndexBox_X.sort(compareNumbers);
                playGame(arrayIndexBox_X, playerOne.name);
                
            }
            else{
                para.innerHTML = playerTwo.marker;
                arrayIndexBox_O.push(l);
                function compareNumbers(a, b)
                {
                    return a - b;
                }
                arrayIndexBox_O.sort(compareNumbers);
                playGame(arrayIndexBox_O, playerTwo.name);
                //console.log(arrayBoxObject);
            }

        box_click[l].appendChild(para);

        };
        

    }    
    

}



function playGame(arrayIndexBox, Player){
    const a = [0,1,2]; 
    const b = [3,4,5];
    const c = [6,7,8];
    const d = [0,4,8];
    const e = [2,4,6];
    const f = [0,3,6];
    const g = [1,4,7];
    const h = [2,5,8];
    var condition =[a, b, c, d, e, f, g, h];
    

    function exists(arr, search) {       // check to see input array include in condition array
        return arr.some(row => 
            Array.isArray(row) &&
            Array.isArray(search) &&
            row.length === search.length &&
            row.every((val, index) => val === search[index])
      )
    };


    
    function allTeams(arr, size) {      // only take 3 index portion of the input array
        let res = [];
        function helper(curr, i) {
          if (curr.length === size) res.push([...curr]);
          else if (i < arr.length) {
            helper(curr.concat(arr[i]), i + 1);
            helper(curr, i + 1);
          }
        }
        helper([], 0);
        return res;
    }
    console.log(allTeams(arrayIndexBox, 3));



    for(let i = 0; i<allTeams(arrayIndexBox, 3).length;i++){
        if(exists(condition, allTeams(arrayIndexBox, 3)[i])){
            const para = document.createElement("p");
            para.innerHTML = Player + ": You are the Winner!!";
            const display = document.getElementById("result_winner").appendChild(para);
            return display;
        }
        else {
    
            const para = document.createElement("p");
            para.innerHTML = "";
            const display = document.getElementById("result_winner").appendChild(para);
            return display;
        }

    }

    
}



tictactoeGame();

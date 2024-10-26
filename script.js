
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

var previous_box = [];


function onclickFunction() {
    window.location.reload();
}





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
            if (count%2==0 && !previous_box.includes(l)){
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
            else if(count%2==1 && !previous_box.includes(l)){
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

        
        
        console.log("previous_box: " + previous_box);


        console.log("Previous_box: " + !previous_box.includes(l));

        box_click[l].appendChild(para);
        box_click[l].classList.add('sign_marker');
        console.log("l: "+l)
        previous_box.push(l);

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
    

    for(let i = 0; i < condition.length; i++){
        for(let j = 0; j < allTeams(arrayIndexBox, 3).length; j++){
            console.log("i: " + i);
            console.log(condition[i]);
            console.log("j: " + j);
            console.log(allTeams(arrayIndexBox, 3)[j]);
            const comparetwoarr = new compareTwoArray(condition[i],allTeams(arrayIndexBox, 3)[j]);
            if(comparetwoarr.compare_two_arr() == 3){
                console.log("A");
                console.log("B");
                const para = document.createElement("p");
                para.innerHTML = Player + ": You are the Winner!!";
                const display = document.getElementById("result_winner").appendChild(para);
                return display;
                  
            }

        }
        
    }
    function compareTwoArray(arr_A, arr_B){
        this.arr_A = arr_A;
        this.arr_B = arr_B;

        this.compare_two_arr = function(){
            let a = 0;

            if(arr_A.length !== arr_B.length){
                console.log("Keep Going");
                a = 1;
                console.log("a: "+a);
                return a;
            }
            for(let i = 0; i<arr_A.length; i++){
                if(arr_A[i]!==arr_B[i]){
                    console.log("Keep Going");
                    a = 2;
                    console.log("a: "+a);
                    return a;
                    
                }
            
            }
          
    
            a = 3;
            console.log("a: "+a);
            return a;
        }
    }

   
    /*for(let i = 0; i<allTeams(arrayIndexBox, 3).length;i++){
        console.log("condition:" + exists(allTeams(arrayIndexBox, 3)[i]),condition);
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

    }*/

    
}



tictactoeGame();

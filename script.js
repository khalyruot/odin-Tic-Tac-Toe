//create player
var container = document.querySelector('.grid_area');

var logo_part = document.querySelector('.logo_part');

var input_player_name = document.querySelector('.input_player_name');

/*var logo_player = document.createElement("DIV");
logo_player.innerText = "Enter Player Name: ";
logo_player.setAttribute("id","logo_player");
logo_part.appendChild(logo_player);*/

var input_player = document.createElement("INPUT");
input_player.setAttribute("type", "text");
input_player.setAttribute("id","input_style");
input_player.placeholder = "Enter Player Name";
input_player_name.appendChild(input_player);

var select = document.createElement("SELECT");
var option_1 = document.createElement("OPTION");
option_1.innerText = "X";
var option_2 = document.createElement("OPTION");
option_2.innerText = "O";
select.appendChild(option_1);
select.appendChild(option_2);
select.setAttribute("id","selectOption");
input_player_name.appendChild(select);

var input_submit = document.createElement("BUTTON");
input_submit.innerText = "Submit";
input_submit.setAttribute("id","input_submit");
input_player_name.appendChild(input_submit);


let click_count = 0;
let player_name = [];
let player_maker = [];

function onclickFunction() {
    window.location.reload();
}
input_submit.onclick = function(){
    
    if(input_player.value == ""){
        alert("Please Input Player Name!");
    }
    else if(!player_name.includes(input_player.value) && !player_maker.includes(select.value) &&click_count < 2){
        click_count += 1;
        player_name.push(input_player.value);
        player_maker.push(select.value);
        input_player.value = "";
        if(click_count == 2){

            input_player_name.innerText="";
            var player_1 = document.createElement("DIV");
            player_1.innerText = player_name[0] + ", your marker is: " + player_maker[0];
            player_1.innerText = player_1.innerText.toUpperCase();
            player_1.setAttribute("id", "player_1");
            input_player_name.appendChild(player_1);

            var player_2 = document.createElement("DIV");
            player_2.innerText = player_name[1] + ", your marker is: " + player_maker[1];
            player_2.innerText = player_2.innerText.toUpperCase();
            player_2.setAttribute("id", "player_2");
            input_player_name.appendChild(player_2);

                            
                const playerOne = {
                    name: player_name[0], 
                    marker: player_maker[0]
                };

                const playerTwo = {
                    name: player_name[1], 
                    marker: player_maker[1]
                };

                var choicePlayer_i = [];
                var choicePlayer_j = [];

                var arrayIndexBox_X =[];
                var arrayIndexBox_O =[];


                var previous_box = [];


            





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
                            count += 1;
                            const para = document.createElement("p");
                            let final_value = document.getElementById("result_winner");
                            console.log("final_value_1: "+final_value.innerText);
                            
                            if (count%2==0 && !previous_box.includes(l) && !final_value.innerText.includes("n")){
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
                            else if(count%2==1 && !previous_box.includes(l) && !final_value.innerText.includes("n")){
                                para.innerHTML = playerTwo.marker;
                                arrayIndexBox_O.push(l);
                                function compareNumbers(a, b)
                                {
                                    return a - b;
                                }
                                arrayIndexBox_O.sort(compareNumbers);
                                playGame(arrayIndexBox_O, playerTwo.name);
                                
                            }

                            console.log("final_value_2: "+final_value.innerText);
                        
                    

                        box_click[l].appendChild(para);
                        box_click[l].classList.add('sign_marker');
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
                    let z = 0;



                    
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
                        
                            const comparetwoarr = new compareTwoArray(condition[i],allTeams(arrayIndexBox, 3)[j]);
                            if(comparetwoarr.compare_two_arr() == 3 &&  z==0){
                                
                                const para = document.createElement("p");
                                para.innerHTML = Player.toUpperCase() + ": You are the Winner!!";
                                const display = document.getElementById("result_winner").appendChild(para);
                                z = 1;
                                
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
                                return a;
                            }
                            for(let i = 0; i<arr_A.length; i++){
                                if(arr_A[i]!==arr_B[i]){
                                    console.log("Keep Going");
                                    a = 2;
                                    return a;
                                    
                                }
                            
                            }
                        
                    
                            a = 3;
                        
                            return a;
                        }
                    }


                    console.log("z: " + z);
                    return z;
                }



                tictactoeGame();


        }
                    
    }
    else if(player_name.includes(input_player.value)){
        alert("Please Choose Different Name");
    }
    else{
        alert("Please Choose Different Marker");
    }
}


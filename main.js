var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

score_1 = 0;
score_2 = 0;

document.getElementById("player1_name").innerHTML= player1_name + " : " ;
document.getElementById("player2_name").innerHTML= player2_name + " : " ;

document.getElementById("player1_score").innerHTML = score_1;
document.getElementById("player2_score").innerHTML = score_2;

document.getElementById("player_q").innerHTML = "Question Turn = " + player1_name;
document.getElementById("player_a").innerHTML = "Answer Turn = " + player2_name;

Number_1 = document.getElementById("number_1").value;
Number_2 = document.getElementById("number_2").value;

function send(){
    
}
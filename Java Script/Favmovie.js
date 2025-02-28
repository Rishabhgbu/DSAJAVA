let favmovie="dhoom";
let guess = prompt("guess my favorite movies");
while ((guess!=favmovie)&&(guess!="quit")){
    
    guess=prompt("wrong guess. please try again");
}
if (guess==favmovie){
    console.log("congrats!!");

}else{
    console.log("you quit");
}
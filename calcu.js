function loveScore() {
    var name1 = document.getElementById("firstname").value;
    var name2 = document.getElementById("secondname").value;

    if(name1.length <= 2){
        document.getElementById("result").innerHTML = "Please Enter atleast 3 character.";
    }
    if(name2.length <= 2){
        document.getElementById("result").innerHTML = "Please Enter atleast 3 character.";
    }else{
        var love_score = Math.random() * 100;
        love_score = Math.floor(love_score) + 1;
       
    }
    if(love_score > 40 && love_score <= 80) {
        document.getElementById("result").innerHTML = love_score + "%. "+ " of love " + " SANA ALL!🥰";
        document.getElementById('happySound').play();

    }else if(love_score <= 30){
        document.getElementById("result").innerHTML = love_score + " %.💔 " + "You don't love each other better luck next life."; 
        document.getElementById('emotionSound').play();
    }
    
}

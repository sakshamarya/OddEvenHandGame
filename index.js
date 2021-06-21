

var score1=0;
var bowls2=0;
var score2=0;
var bowls1=0;

let flag=0;

// Computer bowler, user batsman

function reply_click(clicked_id)
{
    if(flag===2)
    {
        return;
    }

    console.log(clicked_id + "pressed");
    
    var x=document.getElementById("myImage");
    
    if(x)
    {
        x.src = "images/"+clicked_id[3]+".jpg";
    }

    var randno=Math.floor(Math.random() * 4)+1;
    document.getElementById("compImage").src = "images/"+randno+".jpg";

    if(clicked_id[3]==randno)
    {

        if(flag===0)
        {
            console.log("Thats out!");
            alert("Thats out, Now it's your turn to bowl.");

            // updating final score text
            document.getElementById("userFinalScore").innerHTML="Your Final Score: "+score1;
            document.getElementById("userFinalScore").style.color = "red";

            console.log("Changed flag to 1");
            flag=1;

            //new screen
                
            var x=document.getElementById("myImage");
            if(x)
            {
                x.src = "images/start.png";
            }

            document.getElementById("compImage").src = "images/start.png";

            document.getElementById("scoreLine").innerHTML = "Score: 0 Balls: 0";
            
            // check

            return; 

        }

        else if(flag===1){
            
            flag=2;
            console.log("flag becomes 2");
            
            // updating final score text
            document.getElementById("compFinalScore").innerHTML="Computer's Final Score: "+score2;
            document.getElementById("compFinalScore").style.color = "red";

            alert("That out, You got him!");

            // final results

            if(score1==score2)
            {
                document.getElementById("decision").innerHTML="Game Drawn.";
            }

            else if(score1>score2)
            {
                document.getElementById("decision").innerHTML="You Won, Congratulations!";
                document.getElementById("decision").style.backgroundColor="green";
            }

            else{
                document.getElementById("decision").innerHTML="You lost, Better luck next time!";
                document.getElementById("decision").style.backgroundColor="red";
            }



        }

    }

    if(flag===0)
    {
        bowls2++;  
        score1=score1+parseInt(clicked_id[3]);
        document.getElementById("scoreLine").innerHTML = "Score: "+score1+"  Balls: " + bowls2;
    }

    else{
        bowls1++;
        score2=score2+randno;
        document.getElementById("scoreLine").innerHTML = "Score: "+score2+"  Balls: " + bowls1;

        if(score2>score1)
        {
            // updating computers score
            document.getElementById("compFinalScore").innerHTML="Computer's Final Score: "+score2;
            document.getElementById("compFinalScore").style.color = "red";

            document.getElementById("decision").innerHTML="You lost, Better luck next time!";
            document.getElementById("decision").style.backgroundColor="red";
            flag=2;
        }
    }

}



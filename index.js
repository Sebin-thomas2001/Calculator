
//to manage number keys
var numberOfButtons = document.querySelectorAll(".btn").length;

for (var i=0 ; i<numberOfButtons; i++)
{
   document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        
    var audio = new Audio("sound/audio-5.wav");
        audio.play();
        this.style.color="red";

    });
}
//to manage opertor keys

var numberOfButton = document.querySelectorAll(".operator").length;


for (var i=0 ; i<numberOfButton; i++)
{
    document.querySelectorAll(".operator")[i].addEventListener("click", function(){
        var audio = new Audio("sound/audio-6.wav");
        audio.play();

    });
}





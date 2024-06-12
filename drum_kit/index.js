
// detecting button presses
// {
var x=document.querySelectorAll(".drum").length;


for(var i=0;i<x;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
var buttonhtml=this.innerHTML
makesound(buttonhtml);
}


// here what we have done is
// we have applied a for loop on the buttons and then when clicked we have applied an eventlistener
//  to it which gives us a  prompt alert.
// }


// audio when the button on the screen is clicked{

function handleclick(){
    // alert("button was clicked");
    // this.style.color="white";
    var btn=this.innerHTML;
    switch (btn) {
        case "w":
            var v1= new Audio("clash.mp3");
            v1.play();  
            break; 

        case "a":
            var v2= new Audio("drums.mp3");
            v2.play();  
            break; 

        case "s":
            var v3= new Audio("base.mp3");
            v3.play();  
            break;


        case "d":
            var v4= new Audio("electric-guitar-metal-riff-107087.mp3");
            v4.play();  
            break;    
        
        case "j":
            var v5= new Audio("ting.mp3");
            v5.play();  
            break;

        case "k":
            var v6= new Audio("flute.mp3");
            v6.play();  
            break;
    
        case "l":
            var v7= new Audio("snare.mp3");
            v7.play();  
            break;



        default:
            console.log("done");
    }

}

// audio when the button on keyboard is pressed

document.addEventListener("keydown",function(event) {
    makesound(event.key);
    
}
)


function makesound(key){
    switch (key) {
        case "w":
            var v1= new Audio("clash.mp3");
            v1.play();  
            break; 

        case "a":
            var v2= new Audio("drums.mp3");
            v2.play();  
            break; 

        case "s":
            var v3= new Audio("base.mp3");
            v3.play();  
            break;


        case "d":
            var v4= new Audio("electric-guitar-metal-riff-107087.mp3");
            v4.play();  
            break;    
        
        case "j":
            var v5= new Audio("ting.mp3");
            v5.play();  
            break;

        case "k":
            var v6= new Audio("flute.mp3");
            v6.play();  
            break;
    
        case "l":
            var v7= new Audio("snare.mp3");
            v7.play();  
            break;



        default:
            console.log("done");
    }


}
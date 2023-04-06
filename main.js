var DOG = 0;
var CAT = 0;
var COW = 0;
var LION = 0;


function start(){
    navigator.mediaDevices.getUserMedia({audio : true, video:false});
   classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dblY9ic8C/model.json', modelReady);
}    

function modelReady(){

    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        
        var red = Math.floor(Math.random() * 255) + 1;
        var green = Math.floor(Math.random() * 255) + 1;
        var blue = Math.floor(Math.random() * 255) + 1;
 
        if (results.length > 0) {
            if (results[0].label === 'Bark') {
              DOG++;
              document.getElementById("img").src = "32.gif";
            } else if (results[0].label === 'Meow') {
              CAT++;
              document.getElementById("img").src = "cat.avif";
            } else if (results[0].label === 'Roar') {
                LION++;
                document.getElementById("img").src = "lion.gif";
            } else if (results[0].label === 'Mooing') {
                COW++;
                document.getElementById("img").src = "cow.gif";
            }
            
        }

        document.getElementById("times").innerHTML = "Detected Dog: " + DOG + ", Detected Cat: " + CAT + ", Detected Lion: " + LION + " And Detected Cow: " + COW;
       document.getElementById("detected").innerHTML = "Detected Voice Is Of: " + results[0].label;
       document.getElementById("times").style.color = "rgb("+red+","+green+","+blue+")";
       document.getElementById("detected").style.color = "rgb("+red+","+green+","+blue+")";
        
    }
}


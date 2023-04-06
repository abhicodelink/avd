function start(){
    navigator.mediaDevices.getUserMedia({audio : true, video:false});
   classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dblY9ic8C/model.json', modelReady);
}    

function modelReady(){

    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log(results)
}


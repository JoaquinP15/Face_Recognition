Webcam.set({
    height: 310,
    width: 400,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

webcam.attach(' #camera ');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/z5gX0vpQM/',modelLoded);

function modelLoded()
{
    console.log('modelLoded');
}

function check(){
    img =  document.getElementById("capture_image");
  
    classifier.classify(img,got_result);
}

function got_result(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        var synth = window.speechSynthesis;

    var speakData = "This Is"+ result[0].label;

    var utter_this = new SpeechSynthesisUtterance(speakData);

    synth.speak(utter_this);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}
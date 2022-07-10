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
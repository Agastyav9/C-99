var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();



function start()
{
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}


 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textarea").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}

function speak(){
  var synth = window.speechSynthesis;

  speak_data = document.getElementById("textbox").value;

  var utterThis = new SpeechSynthesisUtterance(speak_data)

  synth.speak(utterThis);
  Webcam.attach(camera);
}

camera = document.getElementById("camera");

Webcam.set({

  width:360,
  height:250,
  image_format : 'png',
  png_quality:90
});


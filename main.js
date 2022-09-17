var Dog = 0
var cat = 0
var cow = 0
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/giycMxyuM/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
  }
  function gotResults(error,results)
  {
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
     

        img = document.getElementById("Clue")

        if (results[0].label == "Barking") {
            img.src = 'Dog.png';
            Dog = +1 
            doglimo = document.getElementById("doglimo").innerHTML = value;
        }else if(results[0].label == "Meowing")
        {
            img.src = 'Cat.png';
            cat = +1 
        }
        else if(results[0].label == "Moowing")
        {
            img.src = 'Cow.png';
            cow = +1 
        }
        else if(results[0].label == "Background Noise")
        {
            img.src = 'default.png';
        }
    }
  }
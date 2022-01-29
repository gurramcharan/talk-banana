var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Tanay Pratap"
// var serverURL =
//   "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error Occured", error);
  alert("Server Down, Please Try Again Later");
}

function clickHandler() {
  // outputDiv.innerText = "ajjajaja " + txtInput.value;
  var inputText = txtInput.value; //Taking Input

  // Calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output 
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
var checkForm = document.querySelector('.js-form');
var jsTextInput = document.querySelector('.jsTextInput');
var result = document.querySelector('.result');
var emptyInputBtn = document.querySelector('.emptyInputBtn');
checkForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var numbersArray = [];
  result.textContent = "";
  var textValue = (jsTextInput.value.trim()).split(',');
  for (var i =0 ; i < textValue.length ; i++){
    var alsoNumber = parseFloat(textValue[i].trim() , 10);
    if(!isNaN(alsoNumber)){
      numbersArray.push(alsoNumber);
    }
  }
  var bigNumber = numbersArray[0] ;
  for(i = 0 ; i < numbersArray.length ; i++){
    if(numbersArray[i] > bigNumber ){
      bigNumber = numbersArray[i];
    }
  };
  result.textContent = bigNumber ; 
});

emptyInputBtn.addEventListener('click' , function(){
  jsTextInput.value = "" ;
  jsTextInput.focus();
});
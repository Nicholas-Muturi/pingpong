$(document).ready(function(){

  $("form#pingPongForm").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());

    $("ul#gameOutput").empty(); //Clears previous List
    errorHandler(userNumber); //Handles invalid input

    //Loop through the numbers & calls the functions
    for (var loopVar=1;loopVar<=userNumber;loopVar++){
      if(checkBoth(loopVar)){
        $("ul#gameOutput").append("<li>"+"Ping Pong!"+"</li>");
      }
      else if(checkThree(loopVar)){
        $("ul#gameOutput").append("<li>Ping!</li>");
      }
      else if(checkFive(loopVar)){
        $("ul#gameOutput").append("<li>Pong!</li>");
      }
      else {
        $("ul#gameOutput").append("<li>"+loopVar+"</li>");
      }
     }
     clearForm();
     inputFocus();
  });
});


//Back-End
function clearForm(){
  document.getElementById("pingPongForm").reset();
}

function inputFocus(){
  document.getElementById("userInput").focus();
}

function errorHandler(num){
  if (Number.isInteger(num) || num < 0){
      clearForm();
      alert("I like numbers. Please insert a valid number :)");
      inputFocus();
      return false;
    }
}

function checkThree(num){
  if(num%3===0){
		return true;
    }
}

function checkFive(num){
  if(num%5===0){
		return true;
    }
}

function checkBoth(num){
  if(checkThree(num) && checkFive(num)){
		return true;
    }
}

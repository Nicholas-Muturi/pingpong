$(document).ready(function(){

  $("form#pingPongForm").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());

    $("ul#gameOutput").empty(); //Clears previous List
    errorHandler(userNumber); //Handles invalid input

    //Loop through the numbers & calls the functions
    for (var x=1;x<=userNumber;x++){
      if(checkBoth(x)){
        $("ul#gameOutput").append("<li>"+"Ping Pong!"+"</li>");
      }
      else if(checkThree(x)){
        $("ul#gameOutput").append("<li>Ping!</li>");
      }
      else if(checkFive(x)){
        $("ul#gameOutput").append("<li>Pong!</li>");
      }
      else {
        $("ul#gameOutput").append("<li>"+x+"</li>");
      }
     }
     clearForm();
  });

});

function clearForm(){
  document.getElementById("pingPongForm").reset();
}

function errorHandler(num){
  if (num !== parseInt(num)){
    clearForm();
    alert("Please insert a valid number :)")
    document.getElementById("userInput").focus();
    return false;
  }
  else if (num !== parseFloat(num)){
    alert("I can't handle floats yet :)")
    clearForm();
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
  if(checkThree(num)&&checkFive(num)){
		return true;
    }
}

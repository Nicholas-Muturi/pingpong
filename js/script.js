$(document).ready(function(){

  $("form#pingPongForm").submit(function(event){
    event.preventDefault();
    $("ul#gameOutput").empty(); //Clears previous List
    var userNumber = parseInt($("input#userInput").val());

    // Remove previous classes and restore default classes
    $("#userInput").addClass("inputTag");
    $("#userInput").removeClass("error");
    $("#userInput").removeClass("animated pulse");
    if(!Number.isInteger(userNumber)||userNumber<0||userNumber===""){    //Error Handler
      $("#userInput").removeClass("inputTag");
      $("#userInput").addClass("error");
      clearForm();
      inputFocus();
      return false;
    }
    else {
      $("#userInput").addClass("animated pulse");
      clearForm();
    }

    //Loop through the numbers & calls the functions
    for (var loopVar=1;loopVar<=userNumber;loopVar++){
      if(checkBoth(loopVar)){
        $("ul#gameOutput").append("<li>"+"Ping Pong!"+"</li>");
      }
      else if(checkThree(loopVar)){
        $("ul#gameOutput").append("<li>Ping</li>");
      }
      else if(checkFive(loopVar)){
        $("ul#gameOutput").append("<li>Pong</li>");
      }
      else {
        $("ul#gameOutput").append("<li>"+loopVar+"</li>");
      }
     }

  });
});


//Back-End
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

function clearForm(){
  document.getElementById("pingPongForm").reset();
}

function inputFocus(){
  document.getElementById("userInput").focus();
}

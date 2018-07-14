$(document).ready(function(){

  $("form#pingPongForm").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("input#userInput").val());

    $("ul#gameOutput").empty(); //Clears previous List
    $("#userInput").removeClass("error"); //Removes error class if previous input had an error
    if(!Number.isInteger(userNumber)||userNumber<0||userNumber===""){    //Error Handler
      $("#userInput").addClass("error");
      return false;
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
     clearForm();
     inputFocus();
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

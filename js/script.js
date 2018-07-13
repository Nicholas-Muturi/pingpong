$(document).ready(function(){

  $("form#pingPongForm").submit(function(event){
    event.preventDefault();
    //Capture user input and convert it to Int type from String
    var userNumber = parseInt($("input#userInput").val());
    $("ul#gameOutput").empty();

    //Error handling code
    errorHandler(userNumber);

    //Loop through the numbers
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

  });

});

function errorHandler(num){
  if (num !== parseInt(num)){
    alert("User hasn't inserted a valid number")
    document.getElementById("pingPongForm").reset();
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

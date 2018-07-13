$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());
    $("ul#gameOutput").empty();
    //Capture user input and convert it to Int type from String

    //Error handling code

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

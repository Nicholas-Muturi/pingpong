$(document).ready(function(){
	var userInput = parseInt(prompt("Insert a number"));

  for(var x=1;x<=userInput;x++){
  	if(checkBoth(x)){
    	console.log("ping pong");
    }
    else if(checkFive(x)){
    	console.log("pong");
    }
    else if(checkThree(x)){
    	console.log("ping");
    }
    else {
    	console.log(x);
    }
   }

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

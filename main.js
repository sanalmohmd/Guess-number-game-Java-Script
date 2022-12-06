


var y = Math.floor(Math.random ()*10)+1;

console.log(y)
var guess = 1;

document.getElementById("submitguess").onclick=function(){

  var x = document.getElementById("guessbox").value;

//   document.getElementById("print").innerHTML=y;
  if(x==y){
    alert("CONGRATULATIONS YOUR GUESS IS RIGHT ");

  }else if(x>y){
    guess++;
    alert(" TRY A SMALLER NUMBER");
 } else{
    guess++;
    alert(" TRY A GREATER NUMBER");
 }
}

var numsquares=6;
var color=generateRandomColor(numsquares);

var sqr=document.querySelectorAll(".square");
var colorPick = pickColor();
//colorPick.toString();
var toprgb=document.querySelector("#h1");
var messageDisplay=document.querySelector("#message");
var topp=document.querySelector("#top");
var res=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");
toprgb.textContent=colorPick;

for(var i=0; i < sqr.length; i++){
  sqr[i].style.background=color[i];

  //add click event listener

  sqr[i].addEventListener("click", function(){
  	 var clickedColor= this.style.background;
     //clickedColor.toString();
     
     if(clickedColor===colorPick )
     { 
	  messageDisplay.textContent="correct!!!";

      //same color when its correct

       for(var i=0; i < sqr.length; i++)
       {
          sqr[i].style.background=colorPick;
       }
       topp.style.background=colorPick;
       res.textContent="PlayAgain?";

     }
     else{
      messageDisplay.textContent="TryAgain";
      //if wrongly guessed background===sqr color
       this.style.background = "#232323";
     }
  });

}
//random PickCOlor function
function pickColor(){
  var random;
 random=Math.floor(Math.random()*color.length );
 return color[random];

}

function generateRandomColor(num){
  var arr=[]
   for(var i=0;i<num;i++)
   {
      arr[i]=randomColor();
   }
  return arr;
}

function randomColor(){

  var x=Math.floor(Math.random() *256);
  var y=Math.floor(Math.random() *256);
  var z=Math.floor(Math.random() *256);
  return "rgb("+ x + ", " + y + ", " + z +")";
}

res.addEventListener("click",function()
{
  res.textContent="New Colors";
  topp.style.background="#1496ff";
   color=generateRandomColor(numsquares);
    colorPick = pickColor();
    toprgb.textContent=colorPick;
    messageDisplay.textContent=" ";
    for(var i=0; i < sqr.length; i++)
       {
          sqr[i].style.background=color[i];
       }

});

easybtn.addEventListener("click", function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
numsquares=3;
color=generateRandomColor(numsquares);
colorPick = pickColor();
toprgb.textContent=colorPick;
topp.style.background="#1496ff";
sqr[3].style.display="none";
sqr[4].style.display="none";
sqr[5].style.display="none";
 for(var i=0;i<color.length;i++)
 {
   if(color[i]){
    sqr[i].style.background=color[i];
   }
 }
});

hardbtn.addEventListener("click", function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
numsquares=6;
color=generateRandomColor(numsquares);
colorPick = pickColor();
toprgb.textContent=colorPick;
topp.style.background="#1496ff";
sqr[3].style.display="block";
sqr[4].style.display="block";
sqr[5].style.display="block";
 for(var i=0;i<color.length;i++)
 {
    sqr[i].style.background=color[i]; 
 }
});
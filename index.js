let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let restangleWidth = document.getElementById("my_bouncing_box").clientWidth;
let restangleHeight = document.getElementById("my_bouncing_box").clientHeight;

var toTop = 0;
var toLeft = 0;

var x = setInterval(function(){
  let restangle = document.getElementById("my_bouncing_box");
  
  if(toTop){
    restangle.style.top = (parseInt(restangle.style.top) - 1) + "px";
  }else{
    restangle.style.top = (parseInt(restangle.style.top) + 1) + "px";
  }
  
  if(toLeft){
    restangle.style.left = (parseInt(restangle.style.left) - 1) + "px";
  }else{
    restangle.style.left = (parseInt(restangle.style.left) + 1) + "px";
  }
  
  if(parseInt(restangle.style.top) == 0){
    toTop = 0;
  }
  
  if(parseInt(restangle.style.left) == 0){
    toLeft = 0;
  }
  
  if(parseInt(restangle.style.top) == (screenHeight - restangleHeight)){
    toTop = 1;
  }
  
  if(parseInt(restangle.style.left) == (screenWidth - restangleWidth)){
    toLeft = 1;
  }  
  
}, 0.5);
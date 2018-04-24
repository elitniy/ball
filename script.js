var billiards = document.querySelector(".billiards");
var ball = document.querySelector(".ball");
var topp = 1;
var leftt = 1;
var x= 1;
var y= 1;
var winWidth = billiards.offsetWidth;
var winHeight = billiards.offsetHeight;
var count = 0;
  function gooo(){
 	  if (topp == winHeight -30) {
 		 y = y * (-1);
 	  };
 	  if (leftt == winWidth - 30) {
 		 x = x * (-1);
 	  };
 	  if (topp == 0) {
 		 y = y * (-1);
 	  };
 	  if (leftt == 0) {
 		 x = x * (-1);
 	  };
	topp = topp + (1* y)
	leftt = leftt +(1 * x) 
	ball.style.top = topp +"px";
	ball.style.left = leftt + "px";
}
ball.onmousedown = function(e) {

  	var coords = getCoords(ball);
  	var shiftX = e.pageX - coords.left;
  	var shiftY = e.pageY - coords.top;

  	ball.style.position = 'absolute';
  	billiards.appendChild(ball);
  	moveAt(e);
  	function moveAt(e) {
    	ball.style.left = (e.pageX - shiftX - winWidth/2) + "px";
    	ball.style.top = (e.pageY - shiftY - winHeight/2) + "px";
      leftt = (e.pageX - shiftX - winWidth/2);
      topp = (e.pageY - shiftY - winHeight/2);
      
  	}
  	document.onmousemove = function(e) {
    	moveAt(e);
  	};
  	ball.onmouseup = function() {
    	document.onmousemove = null;
    	ball.onmouseup = null;
      setInterval(gooo, 1)
  	};
	ball.ondragstart = function() {
  		return false;
	};
	function getCoords(elem) {
  	var box = elem.getBoundingClientRect();
  		return {
    		top: box.top + pageYOffset,
    		left: box.left + pageXOffset
  		};
	}
}

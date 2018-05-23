
var canvas = document.getElementsByClassName('canvas')[0];
var ctx = canvas.getContext('2d');
var currentDimensions;

var myEllipse;
var mySecondEllipse;

window.onload = function() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  currentDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var radius = _calculateRadius();
  var centerRight = _calculateCenterForElipse(1,radius);
  var centerLeft = _calculateCenterForElipse(0, radius);

  console.log(centerRight);
  console.log(centerLeft);
  console.log(radius);
  myEllipse = new Ellipse(centerRight, radius);
  mySecondEllipse = new Ellipse(centerLeft, radius);
  myEllipse.draw();
  mySecondEllipse.draw();

  //animate();
  setInterval(function(){ animate();}, 15);

};

function animate() {
  clearCanvas();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var newPosition = _getNewPosition(myEllipse.getRadius());
  myEllipse.updateEye(newPosition);
  mySecondEllipse.updateEye(newPosition);
}



function clearCanvas() {
  ctx.clearRect(0,0,currentDimensions.width,currentDimensions.height);
}

function _calculateRadius() {
  return {x: currentDimensions.height * 0.26, y: currentDimensions.height * 0.26 * 0.7};
}

function _calculateCenterForElipse(right, r){
  if(right){
    return {x: currentDimensions.width / 2  + r.x * 0.73, y: currentDimensions.height  / 2};
  }
  return {x: currentDimensions.width / 2 - r.x * 0.73, y: currentDimensions.height  / 2};
}

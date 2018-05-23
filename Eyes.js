var MAX_RADIUS = 0.125;
var PI = Math.PI;

function Eye(pos, rad) {
  var position = pos;
  var radius = rad;
  var newPosition;
  var endMovement = true;
  return {
    draw: function() {
      _drawCircle(position, radius);
    },
    updatePosition: function(pos) {
      if (endMovement){
        newPosition = pos;
        endMovement = false;
      }
      // console.log(position);
      // console.log(newPosition);
      position = _changePosition(position, newPosition);
      if(_samePostion(position, newPosition)){
        endMovement = true;
      }
    },
    getPosition: function() {
      return position;
    },
    getRadius: function() {
      return radius;
    }
  };
}

function _samePostion(from, to){
    return from.x === to.x && from.y === to.y;
}

function _changePosition(from, to) {
  return _calculateNewPosition(from, to);
}

function _calculateNewPosition(from, to) {
  var fromX = from.x;
  var fromY = from.y;
  var toX = to.x;
  var toY = to.y;

  if (fromX === toX){
    if(fromY > toY){
      return {x: fromX, y: fromY - 1};
    }
    else if (fromY < toY){
      return {x: fromX, y: fromY + 1};
    }
    return from;
  }
  if(fromX > toX){
    if(fromY > toY){
      return {x: fromX - 1, y: fromY - 1};
    }
    else {
      return {x: fromX - 1, y: fromY + 1};
    }
  }
  if(fromX < toX){
    if(fromY > toY){
      return {x: fromX + 1, y: fromY - 1};
    }else{
      return {x: fromX + 1, y: fromY + 1};
    }
  }
}

function _drawCircle(pos, radius) {
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius, 0, 2 * PI);
  //color = _randomColor();
  ctx.strokeStyle ="rgba(108,102,114,1)";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius * 0.5, 0, 2 * PI);
  ctx.fillStyle = 'rgba(241,241,244,1)' ;
  ctx.fill();
}

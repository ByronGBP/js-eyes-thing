
function Ellipse(c, r, rot, s, e) {
  var center = c || {x: 200, y: 200};
  var radius = r || {x: 100, y: 70};
  var rotation = rot || 90 * Math.PI/180;
  var startAngle = 0;
  var endAngle = 2 * Math.PI;

  var eye;

  return{
    draw: function() {
      _draw(center, radius, rotation, startAngle, endAngle);
      eye = _createEye(center, radius.y);
      eye.draw();
    },
    getCenter: function() {
      return center;
    },
    getRadius: function() {
      return radius;
    },
    updateEye: function(to) {
      var newPosition = _getPosition(center, radius, to);
      eye.updatePosition(newPosition);
      eye.draw();
      _draw(center, radius, rotation, startAngle, endAngle);
    },
    setCenter: function(newCenter) {
      center = newCenter;
    }
  };
}

function _getPosition(c, r, to) {
    var centerChanged = _changeCenter(c,r);
    var newX = to.x + centerChanged.x;
    var newY = to.y + centerChanged.y;

    return {x: newX, y: newY};
}

function _getNewPosition(r){
  var rangeXmax = r.y;
  var rangeYmax = r.x;

  var randomX = Math.floor((Math.random() * rangeXmax));
  var randomY = Math.floor((Math.random() * rangeYmax));

  return {x: randomX, y: randomY};
}

function _changeCenter(c, r) {
  return {x: Math.floor(c.x - r.y * 0.56), y: Math.floor(c.y - r.x * 0.56)};
}

function _createEye(c, r) {
  var newC = _floorCenter(c);
  console.log(newC);
  return new Eye(newC, r * 0.35);
}

function _floorCenter(c){
  return {x: Math.floor(c.x), y: Math.floor(c.y)};
}

function _draw(c, r, rot, s, e) {
  ctx.beginPath();
  ctx.ellipse(c.x, c.y, r.x, r.y,rot , s, e);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

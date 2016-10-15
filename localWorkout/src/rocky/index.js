//something we execute every time we draw
//we want to get the location data, and based on some route that
//we choose, display a 'compass' that represents the direction i'm facing

//update the screen every time i change direction based on my phone's GPS
//or Pebble's GPS

var rocky = require('rocky');

function drawHand(ctx, cx, cy, angle, length, color)
{
  ctx.lineWidth = 8;
  ctx.strokeStyle = color;

  ctx.beginPath();

  ctx.moveTo(cx, cy);
  ctx.lineTo(x2, y2);

  ctx.stroke();

}

function fracToRadian(minuteFrac)
{
  return minuteFrac * 2 * Math.PI;
}

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  // Clear the screen with default .fillStyle = 'black'
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // As the screen could be partly covered by system UI
  // we are asking for the unobstructed screen area
  // This way, we can make sure our content is always fully visible
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();

  //middle point
  var cx = w / 2;
  var cy = h / 2;

  var minuteFrac = (d.getMinutes() / 60);
  var minuteAngle = fracToRadian(minuteFrac);
  var hourFrac = (d.getHours() % 12 + minuteFrac);
  

});

rocky.on('minutechange', function(event) {
  // Callback will be executed on each new full minute
  // If you need a higher or lower frequency, try 'secondchange' or 'hourchange'
  // Note: more frequent updates mean more battery consumption (e.g. 60x)

  // Display a message in the system logs
  console.log("Another minute with your Pebble!");

  // Request the screen to be redrawn at the next possible time
  rocky.requestDraw();
});

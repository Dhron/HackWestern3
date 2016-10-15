//something we execute every time we draw
//we want to get the location data, and based on some route that
//we choose, display a 'compass' that represents the direction i'm facing

//update the screen every time i change direction based on my phone's GPS
//or Pebble's GPS

var rocky = require('rocky');

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

  // Set the text color and alignment
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';

  // Display the time, in the middle of the screen
  // Note that we refresh the screen only once a minute (see below)
  // whereas .toLocaleTimeString() also contains seconds
  // Your first step as a watchface developer could be to make this more awesome :)
  ctx.fillText(d.toLocaleTimeString(), w / 2, h / 2, w);
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

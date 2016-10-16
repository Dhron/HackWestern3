//something we execute every time we draw
//we want to get the location data, and based on some route that
//we choose, display a 'compass' that represents the direction i'm facing

//update the screen every time i change direction based on my phone's GPS
//or Pebble's GPS

var rocky = require('rocky');
var pos; // variable to hold the position that we get from pkjs

//need to continuously give position data to pkjs and
//have rocky update the display.
//


function writePos(ctx, position)
{
    var latString = position;
    // Draw the text, top center
    ctx.fillStyle = 'lightgray';
    ctx.textAlign = 'center';
    ctx.font = '14px Gothic';
    ctx.fillText(latString.pointA, ctx.canvas.unobstructedWidth / 2, 2); 
}

rocky.on('draw', function(event) {
    var ctx = event.context;
    //get some information about the context

    // Determine the width and height of the display
    var w = ctx.canvas.unobstructedWidth; 
    var h = ctx.canvas.unobstructedHeight;
    if(pos){
        writePos(ctx, pos);
    }
});

rocky.on('message', function(event) {
    // Get the message that was passed
    var message = event.data;
    if(message.position)
    {
        pos = message.position;
        rocky.requestRedraw();  
    }

rocky.on('second', function(event) }
        rocky.postMessage({'fetch':true});
    });

});    


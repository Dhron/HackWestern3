//TO DO:
//Gather all data from phone and API's
//Create event listeners in Rocky to represent that data on Pebble watch
//...

var myAPIKEY = AIzaSyCLVUo2YRbZqlclMzNfV1dCeyHjQCLWwMo; //for the Google geolocation API
//API uses POST method


//helper fn using XMLHttp to make calls to API easier

function request(url, type, callback) {
      var xhr = new XMLHttpRequest();
        xhr.onload = function () {
                callback(this.responseText);
                  };
          xhr.open(type, url);
            xhr.send();
}

//listener that gets the location when the 'fetch' message is recieved from the smartwatch // what is a fetch message? how often is it received?
Pebble.on('message', function(event){
    var message = event.data; //the data that was provided by the Pebble
    if(message.fetch) //If I successfully get a message...
    {
        navigator.geolocation.getCurrentPosition(function(pos)
                {
                
                }, function(err) {
                    console.error('Error getting location');
                },
                { timeout: 15000, maximumAge: 60000 });
    }
});

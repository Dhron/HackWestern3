import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: "{05f1730d4da9ff63183efad25ac6df62967b2f9695182e756f5f4df21c285c88}",
    secret: "{8564b64e5cfea0660fd8402df03a65f8871e313a87a7d72e65d11d49f1625197}",
    callbackUrl: "{urn:ietf:wg:oauth:2.0:oob}"
})

unsplash.photos.getPhoto().then(toJson).then(json => {
        $(document).ready(function()
        {
            document.getElementById("link").innerHTML = json;
        });
  });
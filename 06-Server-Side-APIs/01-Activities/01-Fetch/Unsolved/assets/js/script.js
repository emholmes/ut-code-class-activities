// Write a fetch request to the Giphy API
// Then log the response in the console
var giphyAPI = "https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN";

fetch(giphyAPI).then(function(response) {
    return response.json();
    })
    .then(function(data) {
        console.log(data);
});

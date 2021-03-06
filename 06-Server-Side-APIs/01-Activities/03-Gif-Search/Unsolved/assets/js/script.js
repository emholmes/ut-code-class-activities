// Create a function called `myFunction()`
// YOUR CODE HERE
//
function myFunction() {


  // Create a variable that will use `document.querySelector()` to target the `id` of the input 
  // Use `.value` to capture the value of the input and store it in the variable
  // YOUR CODE HERE
  //
  var inputValue = document.querySelector("#searchTerm");
  inputValue = inputValue.value.trim();
  // Make a `fetch` request concatenating that variable to the query URL
  // Remember to add your API key at the end
  // YOUR CODE HERE
  //
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' + inputValue + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.data[0]);
    // Create a variable that will select the <div> where the GIF will be displayed
    // YOUR CODE HERE
    var displayGif = document.querySelector("#response-container");
    // Empty out the <div> before we append a GIF to it
    // YOUR CODE HERE
    displayGif.innerHTML = "";
    var gifImg = document.createElement('img');
    gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
    // Append 'gifImg' to the <div>
    // YOUR CODE HERE
    displayGif.appendChild(gifImg);
  });

}
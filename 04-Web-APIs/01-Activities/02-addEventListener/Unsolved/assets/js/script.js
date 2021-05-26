// TODO: Create a variable to hold the count
var count = 0;
// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var countSpan = document.querySelector("#count");
var decrementButton = document.querySelector("#decrement");
var incrementButton = document.querySelector("#increment");
// TODO: Create a function that displays the current count on the page
function displayCount() {
    countSpan.textContent = count;
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
incrementButton.addEventListener("click", function() {
    count++;
    displayCount();
})
// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
decrementButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
        displayCount();
    }
})
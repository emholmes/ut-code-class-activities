// TODO: Create an array with five question objects
var objectsArray = [
    {
        q: "Does 1 + 1 = 3?", 
        a: false
    },
    {
        q: "Does the cow go moo?",
        a: true
    }, 
    {
        q: "Does 1 + 1 = 2?",
        a: true
    }, 
    {
        q: "Is grass green?", 
        a: true
    },
    {
        q: "Is Austin the capital of Texas?",
        a: true
    }
];

// TODO: Create a variable to keep track of the score
var score = 0;
// TODO: Iterate over the questions array and display each question in a confirmation box
for (var i = 0; i < objectsArray.length; i++) {
    var answer = confirm(objectsArray[i].q);
    // TODO: Check the user's answer against the correct answer
    if (answer === objectsArray[i].a) {
        alert("Correct!");
        score++;
    } else {
        // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
        alert("Wrong!");
    }
}

// TODO: At the end of the game, alert the user with the final score
alert("Your score: " + score + " / " + objectsArray.length);

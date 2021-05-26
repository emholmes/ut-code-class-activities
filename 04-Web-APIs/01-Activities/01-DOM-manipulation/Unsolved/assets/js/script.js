// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1
var h1 = document.createElement("h1");
h1.style.textAlign = "center";
h1.textContent = "Favorite Food";
body.appendChild(h1);

// TODO: Add a centered h2
var h2 = document.createElement("h2");
h2.style.textAlign = "center";
h2.textContent = "This page contains my favorite food.";
body.appendChild(h2);

// TODO: Add a centered image with a centered caption under it
var image = document.createElement("img");
image.src = "https://picsum.photos/seed/picsum/200/300";
image.setAttribute("style", "display: block; margin: 0 auto; width: 20%;");
var caption = document.createElement("figcaption");
caption.textContent = "Wow, so pretty.";
caption.setAttribute("style", "text-align: center");
body.appendChild(image);
body.appendChild(caption);

// TODO: Add a list of your favorite foods (or other favorites)
var listOl = document.createElement("ol");
body.appendChild(listOl);
var foodArray = ["Ice Cream", "Queso", "Gnocchi"];
for (var food in foodArray) {
    var listLi = document.createElement("li");
    listLi.textContent = foodArray[food];
    listOl.appendChild(listLi);
}



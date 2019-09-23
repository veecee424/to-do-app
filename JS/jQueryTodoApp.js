let inputField = $("input"); //Get the input field
let uList = $("ul"); //Get the unordered list
let plusButton = $(".fa-plus"); //Button near h1


//When an input is made into the input field, add it to the list of ToDo items to be displayed
inputField.on("keypress", function(event) {
event.stopPropagation(); //Stops bubbling
if (event.which === 13) {
    let todoItem = inputField.val(); //Getter for the .val() method
    inputField.val(""); //Setter for the .val() method
    uList.append("<li><span><i class='fa fa-trash'></i></span>  " + todoItem + " </li>");
}
});

//When a todo is completed(clicked), change the background color and add a line-through text-decoration
//....Since our list items (and span) only exist when we enter an input, we cannot grab it immediately. Hence, we grab and use its containing element (ul) this way
uList.on("click", "li", function (e) {
    e.stopPropagation();
    $(this).toggleClass("completed");
});

//When X on the li is clicked, fade out the entire list item and remove it completely from the list.. Stop event propagation
uList.on("click", "span", function (e) {
    e.stopPropagation(); //This prevents this fxn from running the fxns of its parents elements in hierarchy (up to html)
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); //This here refers to the parent element
    });
});

plusButton.on("click", function(e) {
    e.stopPropagation();
    inputField.fadeToggle();
})



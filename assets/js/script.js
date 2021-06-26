let tasks = {};
const currentHour = moment().format("k");

// saving tasks to local storage
const saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
// display date on page
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const currentDateEl = document.querySelector("#currentDay");
currentDateEl.textContent = currentDate;

// editing task content fields
$(".task-content").click(function () {
    // get current text of td element
    const text = $(this)
        .text()
        .trim();

    // replace td element with a new textarea
    const textInput = $("<textarea>")
        .addClass("edit-task-content")
        .val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");

    // get image of td element
    $(".edit-task-content")
        .next()
        .children()
        .removeClass("oi oi-lock-locked")
        .addClass("oi oi-lock-unlocked");

});

// editable task content field becomes unfocused
$(document).on("blur", ".edit-task-content", function () {
    // get current value of textarea
    var text = $(this).val();

    // recreate p element
    var taskTd = $("<td>")
        .addClass("task-content")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskTd);
});


// assign background color to time row
// helpful: https://stackoverflow.com/questions/4358155/changing-background-based-on-time-of-day-using-javascript
// helpful with parseInt: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_parseint
function assignHourColor() {
    let hourOfDay = document.querySelector(".time-block")
    let hourOfDayId = document.getElementsByClassName("time-block")[1].id
    let hourOfDayIdInt = parseInt(hourOfDayId);
    console.log(hourOfDayId);
    console.log(hourOfDayIdInt);
    console.log(currentHour);

    if (document.body.hourOfDay) {
        if (currentHour > hourOfDayIdInt) {
            document.body.hourOfDay.removeClass("present")
            document.body.hourOfDay.addClass("past")
        } else if (currentHour < hourOfDayIdInt) {
            document.body.hourOfDay.removeClass("present")
            document.body.hourOfDay.addClass("future")
        }
    }
}

assignHourColor();

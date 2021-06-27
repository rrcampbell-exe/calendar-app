let tasks = {};
const currentHour = moment().format("k");

// saving tasks to local storage
const saveTasks = function () {
    $(".saveBtn").click(function () {
        let taskText = $(".edit-task-content").val();
        console.log(taskText);
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
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
    let hourOfDay = $(".time-block") // javascript DOM array
    console.log(JSON.stringify(hourOfDay, null, 2))
    console.log(hourOfDay[1])
    for (let i = 1; i < 10; i++) {
        let hourOfDayId = document.getElementsByClassName("time-block")[i].id
        let hourOfDayIdInt = parseInt(hourOfDayId);
        let currentHourInt = parseInt(currentHour)
        console.log(hourOfDayIdInt);
        console.log(currentHourInt);
        if (hourOfDay) {
            if (currentHourInt > hourOfDayIdInt) {
                hourOfDay[i].setAttribute('class', 'time-block past')
            } else if (currentHourInt < hourOfDayIdInt) {
                hourOfDay[i].setAttribute('class', 'time-block future')
            }
        }
        
    }

}

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create new object to track tasks
    if (!tasks) {
        tasks = {

        };
    }

// need to populate empty tasks object with tasks/hour of day

}

// save item to local storage
$(".saveBtn").click(function () {
    $(".task-content") // instead of *all* .task-content items, we want the closest preceding member of the family to be selected here
    .next()
    .find("span:first")
    .removeClass("oi oi-lock-unlocked")
    .addClass("oi oi-lock-locked");
});

// run functions on page load
assignHourColor();

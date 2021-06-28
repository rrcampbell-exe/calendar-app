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
$(document).on("click", ".task-content", function (event) { 
    // DOES THE ABOVE NEED TO BE EVENT DELEGATED INSTEAD WITH .ON("CLICK", SOMETHING??? FUNCTION), ref: https://stackoverflow.com/questions/14186505/jquery-click-action-only-fires-once-per-page-refresh
    event.preventDefault();
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
function assignHourColor() {
    let hourOfDay = $(".time-block") 
    for (let i = 1; i < 10; i++) {
        let hourOfDayId = document.getElementsByClassName("time-block")[i].id
        let hourOfDayIdInt = parseInt(hourOfDayId);
        let currentHourInt = parseInt(currentHour)
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
    $(this)
    .find("span:first")
    .removeClass("oi oi-lock-unlocked")
    .addClass("oi oi-lock-locked");

    saveTasks();

});

// run functions on page load
assignHourColor();

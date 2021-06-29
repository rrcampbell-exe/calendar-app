const currentHour = moment().format("k");
let tasksArr = []

// getting tasks from local storage
// function retrieveTasks() {
//     return JSON.parse(localStorage.getItem("tasksTable"))
// }
  
// display date on page
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const currentDateEl = document.querySelector("#currentDay");
currentDateEl.textContent = currentDate;

// editing task content fields
$(document).on("click", ".task-content", function (event) { 
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

// save item to local storage
$(".saveBtn").click(function () {
    $(this)
    .find("span:first")
    .removeClass("oi oi-lock-unlocked")
    .addClass("oi oi-lock-locked");

    let taskToAdd = $(this).siblings(".task-content").text();
    let hourOfTask = $(this).closest("tr").attr("id");
    console.log(hourOfTask);
    console.log(taskToAdd);

    let tasksObj = {
        task: taskToAdd,
        time: hourOfTask
    }

    if (localStorage.getItem("tasksTable")) {
        tasksArr = JSON.parse(localStorage.getItem("tasksTable"))
    }
    tasksArr.push(tasksObj)

    localStorage.setItem("tasksTable", JSON.stringify(tasksArr))
    localStorage.setItem("task", taskToAdd);
    localStorage.setItem("time", hourOfTask);
});

function retrieveTasks() {
    let displayTasksObj = JSON.parse(localStorage.getItem("tasksTable"))
    console.log(displayTasksObj);

    // set index of array equal to hour of day in military time
    // or sort object in ascending order based on time, and need placeholders of "" for hours where nothing recorded.
}

// run functions on page load
retrieveTasks();
assignHourColor();

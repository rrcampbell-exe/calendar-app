let tasks = {};
const currentHour = moment().format("k");

// saving tasks to local storage
const saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
// display date on page
const currentDate = moment().format("dddd, MMMM, Do YYYY");
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

// assign numerical id to hour of day
let hourOfDay = document.querySelectorAll(".time-block")
function hourOfDayIdAssign() {
    hourOfDay.forEach(node => {
        for (let i = 8; i < 18; i++) {
            node.setAttribute("id", (i));
            console.log(i);
        }
    })
}

// let hourOfDay = document.querySelectorAll(".time-block")
// function hourOfDayIdAssign() {
//     let hourOfDay = document.querySelectorAll(".time-block")
//     // function hourOfDayIdAssign() {
//     hourOfDay.forEach(node => {
//         for (let i = 0; i < 9; i++) {
//         node.setAttribute("id", (i + 9));
//         console.log(i + 9);
//     }
// }
    
    
//     // for (let i = 0; i < 9; i++) {
//     //     hourOfDay.setAttribute("id", (i + 9));
//     //     console.log(i + 9);
        
//     // }
// };
// assign background color to time row
// helpful: https://stackoverflow.com/questions/4358155/changing-background-based-on-time-of-day-using-javascript
// var hourOfDayId = hourOfDay.getAttribute("id").innerText;
// if (document.body.hourOfDay) {
//     if (currentHour > hourOfDay) {
//         document.body.hourOfDayId.removeClass("present")
//         document.body.hourOfDayId.addClass("past")
//     } else if (currentHour < hourOfDay) {
//         document.body.hourOfDayId.removeClass("present")
//         document.body.hourOfDayId.addClass("future")
//     }
// }

hourOfDayIdAssign();

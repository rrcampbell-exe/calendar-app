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
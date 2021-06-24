// display date on page
const currentDate = moment().format("dddd, MMMM, Do YYYY");
const currentDateEl = document.querySelector("#currentDay");
currentDateEl.textContent = currentDate;
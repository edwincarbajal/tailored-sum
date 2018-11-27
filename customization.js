var canvas_buttons = document.querySelectorAll(".canvas-background");
var all_clear_buttons = document.querySelectorAll(".ac-background");
var clear_entry_buttons = document.querySelectorAll('.ce-background');
var operator_button_options = document.querySelectorAll('.operator-background');
var equals_button_options = document.querySelectorAll('.equals-background');
var theme_options = document.querySelectorAll('.calculator-background');
var display_options = document.querySelectorAll('.dispay-background');


var center_column = document.getElementById("center_column");
var all_clear_button = document.getElementById("all-clear");
var clear_entry_button = document.getElementById("clear-entry");
var equals_button = document.getElementById("equals-button");
var operator_buttons = document.querySelectorAll(".operation-button");
var calculator_theme = document.getElementById("calcualtor-theme");
var display_screen = document.getElementById("display-screen");

function addOrRemoveClassName(element, button_id) {
  if (element.classList.contains(element.dataset.bgColor)) {
    element.classList.remove(element.dataset.bgColor);
    element.classList.add(button_id)
    element.dataset.bgColor = button_id;
  }
}

canvas_buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    addOrRemoveClassName(center_column, button.id)
  })
})

all_clear_buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    addOrRemoveClassName(all_clear_button, button.id)
  })
})

clear_entry_buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    addOrRemoveClassName(clear_entry_button, button.id)
  })
})

operator_button_options.forEach(function(button) {
  button.addEventListener("click", function() {
    operator_buttons.forEach(function(operator) {
      addOrRemoveClassName(operator, button.id)
    })
  })

  equals_button_options.forEach(function(button) {
    button.addEventListener("click", function() {
      addOrRemoveClassName(equals_button, button.id)
    })
  })


theme_options.forEach(function(button) {
  button.addEventListener("click", function() {
    addOrRemoveClassName(calculator_theme, button.id)
  })
})

display_options.forEach(function(button) {
  button.addEventListener("click", function() {
    addOrRemoveClassName(display_screen, button.id)
    })
  })
})

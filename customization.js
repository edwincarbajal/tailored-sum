var button_elements = document.querySelectorAll(".canvas-background")
var center_column = document.getElementById("center_column");

function addOrRemoveClassName(element, button_id) {
  if (element.classList.contains(element.dataset.bgColor)) {
    center_column.classList.remove(element.dataset.bgColor);
    center_column.classList.add(button_id)
    center_column.dataset.bgColor = button_id;
  }
}

button_elements.forEach(function(button) {
  button.addEventListener("click", function() {
    addOrRemoveClassName(center_column, button.id)
  })
})

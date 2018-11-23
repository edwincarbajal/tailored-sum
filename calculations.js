var calculation_span = document.getElementById("calculation-span")
var product_display = document.getElementById("product-display")

document.querySelectorAll(".number-button").forEach(function(button) {
  button.addEventListener("click", function() {
    if (calculation_span.textContent === '0') {
      calculation_span.textContent = button.textContent
    } else {
      calculation_span.textContent += button.textContent
    }
  })
})

document.querySelectorAll(".operation-button").forEach(function(button) {
  button.addEventListener("click", function() {
    // Store the last index of the calculation_span in a variable for readability
    const last_index = calculation_span.textContent.length - 1;
    // If the last character is a number or a 0
    if (parseInt(calculation_span.textContent[last_index]) || calculation_span.textContent[last_index] === '0') {
      // append the operation button to the string
      calculation_span.textContent += ' ' + button.textContent + ' '
    }
    // if not, don't do anything
  })
})

calculation_span.addEventListener('DOMSubtreeModified', function() {
  const last_index = calculation_span.textContent.length - 1;
  // If the last character is a number or a 0
  if (parseInt(calculation_span.textContent[last_index]) || calculation_span.textContent[last_index] === '0') {
    // then evaluate the expression && format the string
    product_display.textContent = eval(calculation_span.textContent).toLocaleString();
  }
  // if not, don't do anything
})

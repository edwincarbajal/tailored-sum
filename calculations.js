var calculation_span = document.getElementById("calculation-span")
var product_display = document.getElementById("product-display")
var decimal_operator = document.getElementById("decimal-operator")

document.querySelectorAll(".number-button").forEach(function(button) {
  button.addEventListener("click", function() {
    // If the element holds a 0
    if (calculation_span.textContent === '0') {
      // replace the value with the value of the button pressed
      calculation_span.textContent = button.textContent
    } else {
      // if not, append the new value to the end of the string
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
  })
})

decimal_operator.addEventListener("click", function() {
  // Storing frequent long expresions in variables for readability
  const last_index = calculation_span.textContent.length - 1;
  const last_character = calculation_span.textContent[last_index];

  // If the last character is a number OR equal to 0
  if(parseInt(last_character) || last_character === '0') {
    // append a '.' to the string
    calculation_span.textContent += '.'
    // ELSE IF the last character is not a number AND it's not equal to a '.'
  } else if (!parseInt(last_character) && last_character !== '.') {
    // append a '0.' to the string
    calculation_span.textContent += '0.'
  }
})

calculation_span.addEventListener('DOMSubtreeModified', function() {
  const last_index = calculation_span.textContent.length - 1;
  // If the last character is a number OR a 0
  if (parseInt(calculation_span.textContent[last_index]) || calculation_span.textContent[last_index] === '0') {
    // then evaluate the expression AND format the string
    product_display.textContent = eval(calculation_span.textContent).toLocaleString();
  }
})

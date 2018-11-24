var calculation_span = document.getElementById("calculation-span")
var product_display  = document.getElementById("product-display")
var decimal_operator = document.getElementById("decimal-operator")
var percent_operator = document.getElementById("percent-operator")

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
  if (parseInt(last_character) || last_character === '0') {
    // Split calculations into array
    const seperated_calculations = calculation_span.textContent.split(' ');
    // Find last index of array
    const last_index_in_array = seperated_calculations.length -1;
    // If the string at the last index does not include a '.'
    if(!seperated_calculations[last_index_in_array].includes('.')) {
      // append a '.' to the string
      calculation_span.textContent += '.'
    }
    // ELSE IF the last character is not a number AND it's not equal to a '.'
  } else if (!parseInt(last_character) && last_character !== '.') {
    // append a '0.' to the string
    calculation_span.textContent += '0.'
  }
})

percent_operator.addEventListener("click", function() {
  const last_index = calculation_span.textContent.length - 1;
  // If the last character is a number OR a 0
  if(parseInt(calculation_span.textContent[last_index]) || calculation_span.textContent[last_index] === '0') {
    // Split calculations into array
    const seperated_calculations = calculation_span.textContent.split(' ');
    // Find last index of array
    const last_index_in_array = seperated_calculations.length -1;
    // Store the number at the last index in a variable for readability
    const last_number = seperated_calculations[last_index_in_array];
    // Change the last number into a decimal and store at the last index
    seperated_calculations[last_index_in_array] = parseInt(last_number) / 100;
    // Join the array into a string and assign to the span
    calculation_span.textContent = seperated_calculations.join(' ');
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

var calculation_span = document.getElementById("calculation-span")
var product_display = document.getElementById("product-display")

document.querySelectorAll(".number-button").forEach(function(button) {
  button.addEventListener("click", function() {
    if (parseInt(calculation_span.textContent) !== 0) {
      calculation_span.textContent += button.textContent
    } else {
      calculation_span.textContent = button.textContent
    }
  })
})

document.querySelectorAll(".operation-button").forEach(function(button) {
  button.addEventListener("click", function() {
    calculation_span.textContent += ' ' + button.textContent + ' '
  })
})

calculation_span.addEventListener('DOMSubtreeModified', function() {
  // Find the last character in the calculation_span string // e.x ('1 + z') --> the last character is 'z'
  // Check if the last character is equal to a number && return a boolean (true or false) // e.x ('z' === Number) --> false
  // if true, then evaluate the expression
    // and update the product_display element
  if(!!parseInt(calculation_span.textContent[calculation_span.textContent.length - 1])) {
    product_display.textContent = eval(calculation_span.textContent)
  }
})

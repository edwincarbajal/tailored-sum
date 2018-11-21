var calculation_span = document.getElementById("calculation-span")
//This is the grouping for the numbers
document.querySelectorAll(".number-button").forEach(function(button) {
  button.addEventListener("click", function() {
    if(parseInt(calculation_span.textContent) !==0){
      calculation_span.innerHTML += button.textContent
    } else{
        calculation_span.innerHTML = button.textContent
    }
    
 })

})
document.querySelectorAll(".operation-button").forEach(function(button) {
  button.addEventListener("click", function() {
    calculation_span.innerHTML += button.textContent
  })
})

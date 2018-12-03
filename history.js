const equals_operator = document.getElementById('equals-button');
const products_display = document.getElementById('product-display');
const calculation_display = document.getElementById('calculation-span')
const history_container = document.getElementById('history-list-container')

equals_operator.addEventListener('click', () => {
  // if the math object doesn't exist in localStorage
  if (!localStorage.getItem('math')) {
    // create a math object
      // and give it a key/value pair with the current operations/calculation
    localStorage.setItem('math', JSON.stringify({
      [calculation_display.textContent]: products_display.textContent
    }))
    // if it already exists
  } else {
    // store math object in a variable
    const storage_object = JSON.parse(localStorage.getItem('math'));

    // store the new entry at the end of previous entries
    localStorage.setItem('math', JSON.stringify({
      [calculation_display.textContent]: products_display.textContent, ...storage_object  }));
  }
  // Change the calculations span content with the total, commas removed
  calculation_display.textContent = products_display.textContent.replace(/\,/g,'')
  // Call function to populate the history column
  populateHistoryCol()
})

const populateHistoryCol = () => {
  // Remove the 'no history message' from html
  if(document.getElementById('no-history')) {
    document.getElementById('no-history').remove()
  }
  // Get stored math object from local storage and parse it
  const parsedObject = JSON.parse(localStorage.getItem('math'));
  // Add new html with the math operations to the top of the history container
  history_container.insertAdjacentHTML('afterbegin',
    `
      <li class="list-group-item bg-light text-right">
        <div class="w-100">
          <small>${ parsedObject[Object.keys(parsedObject)[0]] }</small>
          <div class="row pt-2">
            <div class="col">
              ${ Object.keys(parsedObject)[0] }
            </div>
          </div>
        </div>
      </li>
    `
  )
}

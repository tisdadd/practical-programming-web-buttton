console.log('abc')

// clickedTimes is to keep track of how many times the button has been clicked
let clickedTimes = 0
/**
 * This function is meant to be called on the click of the button.
 *
 * It serves as an example function to show a few things.
 */
function onButtonClick () {
  // increment the times clicked by one, as it was just clicked
  clickedTimes = clickedTimes + 1

  // grab all of the buttons on the page
  const buttons = document.getElementsByTagName('button')

  // get just the inner button
  const button = buttons[0]

  // change the button text
  button.innerText = `Clicked ${clickedTimes} times!`

  // get some items using a different way
  const listItems = document.querySelectorAll('li:nth-child(2)')

  // iterate through each of the items selected
  listItems.forEach(listItem => {
    // check if the color of the text is red
    if (listItem.style.color === 'red') {
      // make the text of the color blue
      listItem.style.color = 'blue'
    } else {
      // make the text color red for that item
      listItem.style.color = 'red'
    }
  })
}

//PART-1
//--------------------------------
//reference//
// let modal = document.querySelector(`.modal`);
// let signin = document.querySelector(`.signin`);
// let close = document.querySelector(`.close`);
// let user = document.querySelector(`#user`);
// let password = document.querySelector(`#password`);
// let submit = document.querySelector(`.submit`);

const $ = (selector) => document.querySelector(selector)

// signin
$('.signin').addEventListener('click',(event) => {
//show
  $('.modal').style.display = 'block'
})


//close
$('.close').addEventListener('click',(event) => {
//hide
  $('.modal').style.display = 'none'
})

//submit
$('.submit').addEventListener('click',(event) => {
//add/user
  $('#user').classList.add(`error`)
//add/pass
  $('#pass').classList.add(`error`)
})


//focus/user
$('#user').addEventListener('focus',event => {
  //remove
  $('#user').classList.remove(`error`)
})


//focus/password
$('#pass').addEventListener('focus',event => {
  //remove
  $('#pass').classList.remove(`error`)
})

//PART-2
//--------------------------------
$('form#getstarted').addEventListener('submit', event => {
  // 2.1
  event.preventDefault()
  
  let username = $('#user')
  let password = $('#pass')

  let isValid = validateUserInput(username, password)
  handleFormValidation(isValid, username.value)
})


// 2.2
// Method to validate user input
const validateUserInput = (usernameElement, passwordElement) => {
  let isValidUserName = validate(usernameElement)
  let isValidPassword = validate(passwordElement)

  return isValidUserName && isValidPassword
}

// Generic validate function instead of creating same function for username and password
const validate = (element) => {
  let isValid = true

  elementTrimmedText = element.value.trim()
  if (elementTrimmedText == "" ) {
    isValid = false
    element.classList.add(`error`)
  } else {
    element.classList.remove(`error`)
  }

  return isValid
}

// 2.3
const handleFormValidation = (isValid, username) => {
  if (isValid) {
    removeElement('modal')
    removeElement('signin')
    let displayMessage = `Welcome,${username}`  
    $('#hello').textContent = displayMessage
  }
}

const removeElement = (elementId) => {
  // Removes an element from the document
  let element = document.getElementById(elementId)
  // Basically going to the parent, which is body in this case and remove the child by the element name
  element.parentNode.removeChild(element)
}

// 2.4
// Method to add blur listener for element by element id
const addingBlurListener = (elementId) => {
  $(elementId).addEventListener("blur", event => {
    //remove
    validate($(elementId))
  })
}

const inputElement = [
  '#user', 
  '#pass'
]

// Looping over the id's
inputElement.forEach(element => addingBlurListener(element))
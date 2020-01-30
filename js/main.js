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
$('.form').addEventListener('submit', event => {
  event.preventDefault()
  //error/user
  $('#user').classList.add(`error`)
  //error/pass
  $('#pass').classList.add(`error`)
})


// if $('.submit').addEventListener('click', event => {

// })
const overlay = document.querySelector('.alertdialog__overlay')
const closeButton = document.querySelector('#close')
const triggerButton = document.querySelector('#trigger') 

const openDialog = () => {
  overlay.classList.remove('alertdialog--hidden')
  closeButton.focus()
}

const closeDialog = () => {
  overlay.classList.add('alertdialog--hidden')
  triggerButton.focus()
}

document.querySelector('#alertdialog').addEventListener('click', event => event.stopPropagation())

triggerButton.addEventListener('click', openDialog)

closeButton.addEventListener('click', closeDialog)
document.querySelector('#confirm').addEventListener('click', closeDialog)
document.querySelector('.alertdialog__overlay').addEventListener('click', closeDialog)
document.querySelector('.alertdialog__overlay').addEventListener('keydown', (event) => {
  if(event.key === 'Escape') closeDialog()
})

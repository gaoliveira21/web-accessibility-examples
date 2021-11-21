const progressbar = document.querySelector('.progressbar')
const indicator = document.querySelector('.progressbar__indicator')
const textValue = document.querySelector('.progressbar__value')

const STEP_VALUE = 10

setInterval(() => {
  const currentValue = Number(progressbar.getAttribute('aria-valuenow'))

  const progressValue = currentValue >= 100 ? 0 : currentValue + STEP_VALUE  
  const percent = `${progressValue}%`

  progressbar.setAttribute('aria-valuenow', progressValue.toString())
  indicator.style.width = percent
  textValue.textContent = percent
}, 1000)

function accordion ({
  buttonClass = 'accordion-button',
  panelClass = 'accordion-panel'
} = {}) {
  const buttons = document.querySelectorAll(`.${buttonClass}`)
  const panels = document.querySelectorAll(`.${panelClass}`)

  if (buttons.length !== 0 && panels.length !== 0) {
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault()

        const panel = button.nextElementSibling
        const isActive = button.classList.contains('active')

        buttons.forEach(item => item.classList.remove('active'))
        panels.forEach(item => item.classList.remove('active'))

        if (isActive) {
          panel.classList.remove('active')
          button.classList.remove('active')
        } else {
          panel.classList.add('active')
          button.classList.add('active')
        }
      })
    })
  } else {
    console.error(`ACCORDION ERROR: No accordion found with selectors ".${buttonClass}" or ".${panelClass}"`)
  }
}

export default accordion

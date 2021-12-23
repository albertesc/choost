function dropdown ({ dropdown }) {
  const dropdowns = document.querySelectorAll(`.${dropdown}`)

  if (dropdowns.length !== 0) {
    dropdowns.forEach(dropdown => {
      document.addEventListener('click', e => {
        e.preventDefault()

        const menu = dropdown.nextElementSibling
        const clickInside = dropdown.contains(e.target)

        if (clickInside) {
          const isActive = menu.classList.contains('active')
          isActive ? menu.classList.remove('active') : menu.classList.add('active')
        } else {
          menu.classList.remove('active')
        }
      })
    })
  } else {
    console.error(`DROPDOWN ERROR: No dropdown found with selector ".${dropdown}"`)
  }
}

export default dropdown

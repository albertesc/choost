function select ({
  selectClass = 'select',
  selectBoxClass = 'select-box',
  selectOptionClass = 'select-option'
} = {}) {
  const selectors = document.querySelectorAll(`.${selectClass}`)

  if (selectors.length !== 0) {
    selectors.forEach(selector => {
      selector.querySelectorAll('option').forEach(option => { option.style.display = 'none' })

      const options = selector.querySelectorAll('option')
      const box = document.createElement('div')

      options.forEach(option => {
        box.innerHTML += `
        <span class="${selectOptionClass}" data-value="${option.value}">
          ${option.innerHTML}
        </span>
      `
      })
      box.classList.add(selectBoxClass)
      selector.parentNode.insertBefore(box, selector.nextSibling)

      const selectorsBox = box.querySelectorAll(`.${selectOptionClass}`)

      document.addEventListener('click', e => {
        const clickInside = selector.contains(e.target)

        if (clickInside) {
          const isActive = box.classList.contains('active')
          isActive ? box.classList.remove('active') : box.classList.add('active')
        } else {
          box.classList.remove('active')
        }
      })

      selectorsBox.forEach(selectorBox => {
        selectorBox.addEventListener('click', e => {
          e.preventDefault()

          selectorsBox.forEach(item => item.classList.remove('active'))
          selectorBox.classList.add('active')

          const value = selectorBox.dataset.value
          selector.value = value
        })
      })
    })
  } else {
    console.error(`SELECT ERROR: No select found with selector ".${selectClass}"`)
  }
}

export default select

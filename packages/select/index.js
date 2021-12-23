function select ({ select, selectBox, selectOption }) {
  const selectors = document.querySelectorAll(`.${select}`)

  if (selectors.length !== 0) {
    selectors.forEach(selector => {
      selector.querySelectorAll('option').forEach(option => { option.style.display = 'none' })

      const options = selector.querySelectorAll('option')
      const box = document.createElement('div')

      options.forEach(option => {
        box.innerHTML += `
        <span class="${selectOption}" data-value="${option.value}">
          ${option.innerHTML}
        </span>
      `
      })
      box.classList.add(selectBox)
      selector.parentNode.insertBefore(box, selector.nextSibling)

      const selectorsBox = box.querySelectorAll(`.${selectOption}`)

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
    console.error(`SELECT ERROR: No select found with selector ".${select}"`)
  }
}

export default select

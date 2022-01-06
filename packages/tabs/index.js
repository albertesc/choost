function tabs ({
  tabClass = 'tab-button',
  panelClass = 'tab-panel'
} = {}) {
  const tabs = document.querySelectorAll(`.${tabClass}`)
  const panels = document.querySelectorAll(`.${panelClass}`)

  if (tabs.length !== 0 && panels.length !== 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        e.preventDefault()

        const tabPanel = document.querySelector(`#${tab.getAttribute('aria-controls')}`)

        tabs.forEach(tab => tab.classList.remove('active'))
        panels.forEach(panel => panel.classList.remove('active'))

        tab.classList.add('active')
        tabPanel.classList.add('active')
      })
    })
  } else {
    console.error(`TABS ERROR: No tabs found with selectors ".${tabClass}" or ".${panelClass}"`)
  }
}

export default tabs

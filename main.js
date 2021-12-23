import './style.css'
import accordion from './packages/accordion'
import dropdown from './packages/dropdown'
import select from './packages/select'
import tabs from './packages/tabs'

accordion({
  button: 'accordion-button',
  panel: 'accordion-panel'
})

dropdown({
  dropdown: 'dropdown',
  menu: 'dropdown-menu'
})

select({
  select: 'select',
  selectBox: 'select-box',
  selectOption: 'select-option'
})

tabs({
  tab: 'tab',
  panel: 'tab-panel'
})

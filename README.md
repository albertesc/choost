# Choost

Simple unstyled UI component library, each component is installed separately with zero-dependency.

Choost provides a Open Source UI components library of NPM modules with the basic JavaScript utility of each component, so that you don't have to think about anything, allowing you to create your own design system.

## The modules

- [Accordion](#accordion)
- [Dropdown](#dropdown)
- [Select](#select)
- [Tabs](#tabs)

## Accordion

[Source](https://github.com/albertesc/choost/tree/main/packages/accordion)

With this JavaScript module you will obtain the basic utility of an accordion component. This script provides the `.active` class when you click on button element, use this in your CSS styles for show/hide elements.

### NPM Installation

```bash
npm install @choostdev/accordion
```

### How to use

```JavaScript
// Import the accordion module
import accordion from '@choostdev/accordion'

accordion({
  buttonClass: 'accordion-button',
  panelClass: 'accordion-panel'
})
```

Remember add `type="module"` on your html script. Example: `<script type="module" src="/main.js"></script>`

## Dropdown

[Source](https://github.com/albertesc/choost/tree/main/packages/dropdown)

With this JavaScript module you will obtain the basic utility of a dropdown component. This script provides the `.active` class when you click on dropdown element, use this in your CSS styles for show/hide elements.

### NPM Installation

```bash
npm install @choostdev/dropdown
```

### How to use

```JavaScript
// Import the dropdown module
import dropdown from '@choostdev/dropdown'

dropdown({ dropdownClass: 'dropdown-button' })
```

Remember add `type="module"` on your html script. Example: `<script type="module" src="/main.js"></script>`

## Select

[Source](https://github.com/albertesc/choost/tree/main/packages/select)

With this module you will obtain the basic utility of a custom select component. This script creates a `<div>` in the DOM with the select options inside it so that you can style it however you want.

### NPM Installation

```bash
npm install @choostdev/select
```

### How to use

```JavaScript
// Import the select module
import select from '@choostdev/select'

select({
  selectClass: 'select',
  selectBoxClass: 'select-box',
  selectOptionClass: 'select-option'
})
```

Remember add `type="module"` on your html script. Example: `<script type="module" src="/main.js"></script>`

## Tabs

[Source](https://github.com/albertesc/choost/tree/main/packages/tabs)

With this JavaScript module you will obtain the basic utility of a tabs component. This script provides the `.active` class when you click on button element, use this in your CSS styles for show/hide elements.

### NPM Installation

```bash
npm install @choostdev/tabs
```

### How to use

```JavaScript
// Import the select module
import select from '@choostdev/tabs'

tabs({
  tabClass: 'tab-button',
  panelClass: 'tab-panel'
})
```

Remember add `type="module"` on your html script. Example: `<script type="module" src="/main.js"></script>`

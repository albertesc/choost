# @choostdev/dropdown

This module is part of [choost](https://github.com/albertesc/choost), a component library without css styles, only JavaScript. Create your custom design.

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

#### Parameters

- `dropdownClass`: Indicates the class of the DOM element that will have the click action. _Default value: dropdown-button_

The next sibling element is the one that will be shown and hidden as contextual menu

#### HTML Example

```html
<!-- Example of html -->
<div>
  <button class="dropdown">Menu</button>

  <div class="dropdown-menu">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
```

### Help for your CSS

This script provides the `.active` class when you click on the dropdown element. Use for show elements.

```html
<!-- Example of active elements -->
<div>
  <!-- 👇 You are clicked in this element -->
  <button class="dropdown active">Menu</button>

  <div class="dropdown-menu active">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
```

```css
/* Example of css */
.dropdown-menu {
  display: none;
}

.dropdown-menu.active {
  display: block;
}
```

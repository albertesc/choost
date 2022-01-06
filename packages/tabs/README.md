# @choostdev/tabs

This module is part of [choost](https://github.com/albertesc/choost), a component library without css styles, only JavaScript. Create your custom design.

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

#### Parameters

- `tabClass`: Indicates the class of the DOM element that will have the click action.
- `panelClass`: Indicates the class of the DOM element that will have the show action.

**Important:** add `aria-controls="tab1"` on a tab element corresponding to the id of the panel. the script uses this to add `.active` class in the correct panel.

#### HTML Example

```html
<!-- Example of html -->
<div>
  <div class="tab" aria-controls="tab1">tab 1</div>
  <div class="tab" aria-controls="tab2">tab 2</div>
  <div class="tab" aria-controls="tab3">tab 3</div>
</div>

<div class="tab-panel" id="tab1">...</div>
<div class="tab-panel" id="tab2">...</div>
<div class="tab-panel" id="tab3">...</div>
```

### Help for your CSS

This script provides the `.active` class when you click on the button element. Use for show elements.

```html
<!-- Example of active elements -->
<div>
  <!-- 👇 You are clicked in this element -->
  <div class="tab active" aria-controls="tab1">tab 1</div>
  <div class="tab" aria-controls="tab2">tab 2</div>
  <div class="tab" aria-controls="tab3">tab 3</div>
</div>

<div class="tab-panel active" id="tab1">...</div>
<div class="tab-panel" id="tab2">...</div>
<div class="tab-panel" id="tab3">...</div>
```

```css
/* Example of css */
.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}
```

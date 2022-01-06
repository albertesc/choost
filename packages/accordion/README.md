# @choostdev/accordion

This module is part of [choost](https://github.com/albertesc/choost), a component library without css styles, only JavaScript. Create your custom design.

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

#### Parameters

- `buttonClass`: Indicates the class of the DOM element that will have the click action.
- `panelClass`: Indicates the class of the DOM element that will have the unfold action.

#### HTML Example

```html
<!-- Example of html -->
<div class="accordion">
  <div class="accordion-button">Accordion button</div>
  <div class="accordion-panel">This is a panel of accordion example</div>

  <div class="accordion-button">Accordion button</div>
  <div class="accordion-panel">This is a panel of accordion example</div>

  <div class="accordion-button">Accordion button</div>
  <div class="accordion-panel">This is a panel of accordion example</div>
</div>
```

### Help for your CSS

This script provides the `.active` class when you click on the button element. Use for show elements.

```html
<!-- Example of active elements -->
<div class="accordion">
  <div class="accordion-button">Accordion button</div>
  <div class="accordion-panel">This is a panel of accordion example</div>

  <!-- 👇 You are clicked in this element -->
  <div class="accordion-button active">Accordion button</div>
  <div class="accordion-panel active">This is a panel of accordion example</div>

  <div class="accordion-button">Accordion button</div>
  <div class="accordion-panel">This is a panel of accordion example</div>
</div>
```

```css
/* Example of css */
.accordion .accordion-panel {
  display: none;
}

.accordion .accordioni-panel.active {
  display: block;
}
```

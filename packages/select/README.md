# @choostdev/select

This module is part of [choost](https://github.com/albertesc/choost), a component library without css styles, only JavaScript. Create your custom design.

With this module you will obtain the basic utility of a custom select component.

### NPM Installation

```bash
npm install @choostdev/select
```

### How to use

```JavaScript
// Import the select module
import select from '@choostdev/select'

select({
  select: 'select',
  selectBox: 'select-box',
  selectOption: 'select-option'
})
```

Remember add `type="module"` on your html script. Example: `<script type="module" src="/main.js"></script>`

#### Parameters

- `select` : Indicates the class of `<select>` to use for the custom selector element _(Required parameter)_

- `selectBox` : Indicates the css class that you will use to style the selector box. This element is created by the script _(Required parameter)_
- `selectOption` : Indicates the css class that you will use to style the selector option. This element is created by the script _(Required parameter)_

**Note:** This script creates a `<div>` in the DOM with the select options inside it so that you can style it however you want.

#### HTML Example

```html
<!-- Example of html -->
<select class="select">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<!-- 👇 This element is created by the script -->
<div class="select-box">
  <span class="select-option">Option 1</span>
  <span class="select-option">Option 2</span>
  <span class="select-option">Option 3</span>
</div>
```

### Help for your CSS

This script provides the `.active` class when you click on the select element. Use for show element.

```html
<!-- Example of active elements -->

<!-- 👇 You are clicked in this element -->
<select class="select active">
  <option value="1" style="display: none;">Option 1</option>
  <option value="2" style="display: none;">Option 2</option>
  <option value="3" style="display: none;">Option 3</option>
</select>

<!-- 👇 This element is created by the script -->
<div class="select-box active">
  <span class="select-option">Option 1</span>
  <span class="select-option">Option 2</span>
  <span class="select-option">Option 3</span>
</div>
```

```css
/* Example of css */
.select-box {
  display: none;
}

.select-box.active {
  display: block;
}
```

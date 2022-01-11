# Exercise 2: CSS Variables

An `HTML` document is provided to us with the `input` tags, `background-Image` & styles are applied to them in the starter code.

## Guide

1. Since we're going to use CSS variables, head over to CSS and declare the variables in the `:root` so it will be easier to manipulate them, it should match the `name` attribute in the `input` tags

2. Set the variables ie; `padding`, `background-color` & `filter` to Image in order to manipulate them using JS and also the `.hl` class

3. Head over to JS file, select all the input tags with the class `.controls`

4. Create a function, since the css style usually are declared in `px`, we need some way to capture that, we're going to capture it using our `data-sizing` attribute declared at the `input` tags, make sure to check the empty values

5. Use the `DOM` and capture the value, change the `:root` element style and set the `propertyName` to the values and add the suffix ie; `px` to it

```js
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix
```

6. Since we're handling the nodelist make sure to loop over them using `forEach()` & simply add an eventlistener to it, call the function which you have created!!

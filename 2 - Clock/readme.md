# Exercise 2: CSS + JS Clock

An HTML page contains a `div` tag with a class with a `clock` which gives us a clock followed by the `minute,hour & seconds` hand. Each of their styles have been declared already in the HTML document. Write the JavaScript code necessary to add this functionality.

## Guide

We're provided with the code,

`HTML` - structure of the clock with `min, hour, seconds` hand

`CSS` - Style for the clock, using transform we can create the clock.

## Steps

1. The `hours, minute and second` hands are are all laying flat; we need them to be vertical. Rotate all of the hands by 90 degrees so that they are upright by giving the .hand class a transform rule with the value `rotate(90deg)`.

2. Set the `transform-origin` The `.hand` class to 100%; the default value is 50% (or the midway point of the HTML element), but if we leave it there the clock hands will transform from the respective centers of their lines as opposed to the center of the clock. (If that doesn't make sense, try it out in your code & also set a transition `all o.5s`

3. Create a function & get the current date using `date()`, function has to be placed inside the `setInterval` since we need to call function for every one second.

```js
setInterval(functionName, 1000);
```

4. Find the `minutes, seconds & hours` from the date ie;

```js
const now = new Date();
const seconds = now.getSeconds();
```

5. Calculate the degrees, Use the transform property to move the `hour, second and minute`. Divide the current numerical value of the clock hand by it's max possible value to get the rotation as a percentage, then multiply the result of that by 360 (each hand can rotate 360 degrees) to convert the value from a percentage to an integer, and increase that result by another 90 degrees to compensate for the shift originally applied by the CSS styling on page load.

```js
(seconds / 60) * 360 + 90;
```

6. Use the `style` attribute to change the transform

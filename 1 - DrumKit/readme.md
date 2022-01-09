# Exercise 1: JavaScript Drum Kit

An HTML page displays a collection of div elements, each containing a letter that corresponds with a key on the keyboard, and the name of the soundclip to be played when that button is clicked. When a user presses a key that matches one of the letters displayed in the `div` elements, the page should play the corresponding soundclip and place a temporary 'highlight' (or border) around the `div`. Write the JavaScript code necessary to add this functionality.

## Guide

We're provided with the HTML,CSS, sound clips that are necessary to make this project, we can utilize it and make this project.

- `HTML` - Wesbos, already provided us the keycode for each keys in html Document along with their sounds.
- `CSS` - We've to toggle the class, `playing` in order to create the effect of key being pressed.

We can use the data-key attributes to match up the correct audio clip with the div element, and we can use the playing class to add that temporary highlight/border.

## Steps

1. Add an event listener to the window object event - `keydown` & a function that we will provide as the callback will be defined next.

2. Capture the selected key with the help of keycode, matching the data attributesie of the sound clip & key that is being pressed; `audio[data-key="${e.keyCode}",`.key[data-key="${e.keyCode}"]`. This allows us to select the audio tags & match them with the clips, when the keys are pressed.

3. if the key pressed doesn't match with audio key, simply return nothing aka `guard clause`

4. Play the clips using `audio.play()` & add the transitions by adding the class `playing`, set the `currenttime` of audio to 0 in order to play the clip in loop

5. Select each key & iterate through it, add an event listener to it ie; `transitionend` & check if it has a `propertyName` set to `transform` and simply return it aka `Guard clause`, finally remove the `playing` class.

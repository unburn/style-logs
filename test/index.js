const { style } = require("../dist/index");

console.log(style(`<text f-red>Hello There</text>`)) // Foreground Color
console.log(style(`<text b-red>Hello There</text>`)) // Background Color
console.log(style(`<text s-underline>Hello There</text>`)) // Style (Underline)
console.log(style(`<text s-bold>Hello There</text>`)) // Style (Bold)
console.log(style(`<text s-inverse>Hello There</text>`)) // Style (Inverse)

console.log(style(`<text f-red s-bold s-underline>Hello</text> There`)) // Multiuse
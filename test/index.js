const { log } = require("../dist/index");

log(`<text f-red>Hello There</text>`) // Foreground Color
log(`<text b-red>Hello There</text>`) // Background Color
log(`<text s-underline>Hello There</text>`) // Style (Underline)
log(`<text s-bold>Hello There</text>`) // Style (Bold)
log(`<text s-inverse>Hello There</text>`) // Style (Inverse)

log(`<text f-red s-bold s-underline>Hello</text> There`) // Multiuse
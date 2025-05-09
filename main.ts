let stripLength = 17

let strip = neopixel.create(DigitalPin.P0, stripLength, NeoPixelMode.RGB)
let middle = Math.floor(stripLength / 2)
let amount = 0
type Color = {
    h: number
    s: number
    l: number
}

const colors: Array<Color> = [
    {h: 250, s: 100, l: 50}, // blue
    {h: 360, s: 100, l: 50}, // red
    {h: 60, s: 100, l: 50}, // yellow
    {h: 130, s: 100, l: 50}, // green
    {h: 290, s: 100, l: 50} // purple
]

basic.forever(function() {
    for (let x = 0; x < colors.length; x++) {
        let color = colors[x]
        for (let y = 0; y < amount; y++) {
            strip.setPixelColor(middle, neopixel.hsl(color.h, color.s, color.l))
            strip.setPixelColor(middle+y, neopixel.hsl(color.h, color.s, color.l))
            strip.setPixelColor(middle-y, neopixel.hsl(color.h, color.s, color.l))
        }
        if (amount > stripLength) {
            amount = 0
        } else {
            amount += 1
        }
        basic.pause(1000)
        strip.show()
    }
})
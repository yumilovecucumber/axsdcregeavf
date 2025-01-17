basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
})

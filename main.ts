radio.onReceivedString(function (receivedString) {
    niveauSignal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (niveauSignal < -83) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (niveauSignal < -73) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (niveauSignal < -53) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
    } else if (niveauSignal < -43) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let niveauSignal = 0
basic.showIcon(IconNames.Umbrella)
radio.setGroup(1)

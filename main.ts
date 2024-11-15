radio.onReceivedString(function (receivedString) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
basic.showIcon(IconNames.Umbrella)
radio.setGroup(1)
basic.forever(function () {
	
})

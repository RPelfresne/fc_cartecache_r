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
        music.play(music.createSoundExpression(WaveShape.Noise, 60, 60, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (niveauSignal < -73) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        music.play(music.createSoundExpression(WaveShape.Noise, 964, 991, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (niveauSignal < -53) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1511, 2662, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (niveauSignal < -43) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1511, 2662, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.LoopingInBackground)
    }
})
let niveauSignal = 0
basic.showIcon(IconNames.Umbrella)
radio.setGroup(1)

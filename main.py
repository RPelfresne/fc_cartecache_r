def on_received_string(receivedString):
    global niveauSignal
    niveauSignal = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    if niveauSignal < -83:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif niveauSignal < -73:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            """)
    elif niveauSignal < -63:
        basic.show_leds("""
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            """)
    elif niveauSignal < -43:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
radio.on_received_string(on_received_string)

niveauSignal = 0
basic.show_icon(IconNames.UMBRELLA)
radio.set_group(1)
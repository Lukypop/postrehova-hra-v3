pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
P1 = False
P2 = False
Game = False
Lock = False
def main():
    global Game
    basic.pause(randint(3000, 10000))
    if not Lock:
        basic.show_icon(IconNames.HEART, 0)
        Game = True
        music.play_tone(Note.C, 1500)    
def check():
    global P1, P2, Lock, Game
    P1 = input.pin_is_pressed(TouchPin.P1) 
    P2 = input.pin_is_pressed(TouchPin.P2) 
    if not Lock:
        if Game: 
            if P1 and P2:
                basic.show_string("R")
                Lock = True
            elif P1:
                basic.show_string("1")
                Lock = True
            elif P2:
                basic.show_string("2")
                Lock = True
        else:
            if P1 and P2:
                basic.show_string("C")
                Lock = True
            elif P1:
                basic.show_string("B")
                Lock = True
            elif P2:
                basic.show_string("A")
                Lock = True
    else:
        basic.pause(3000)
        basic.clear_screen()
        Game = False
        Lock = False
        control.in_background(main)
basic.forever(check)
control.in_background(main)
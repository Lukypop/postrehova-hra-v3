pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let P1 = false
let P2 = false
let Game = false
let Lock = false
function main() {
    
    basic.pause(randint(3000, 10000))
    if (!Lock) {
        basic.showIcon(IconNames.Heart, 0)
        Game = true
        music.playTone(Note.C, 1500)
    }
    
}

basic.forever(function check() {
    
    P1 = input.pinIsPressed(TouchPin.P1)
    P2 = input.pinIsPressed(TouchPin.P2)
    if (!Lock) {
        if (Game) {
            if (P1 && P2) {
                basic.showString("R")
                Lock = true
            } else if (P1) {
                basic.showString("1")
                Lock = true
            } else if (P2) {
                basic.showString("2")
                Lock = true
            }
            
        } else if (P1 && P2) {
            basic.showString("C")
            Lock = true
        } else if (P1) {
            basic.showString("B")
            Lock = true
        } else if (P2) {
            basic.showString("A")
            Lock = true
        }
        
    } else {
        basic.pause(3000)
        basic.clearScreen()
        Game = false
        Lock = false
        control.inBackground(main)
    }
    
})
control.inBackground(main)

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
    }
})

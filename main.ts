input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(5000)
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let sprite: game.LedSprite = null
game.setLife(5)
sprite = game.createSprite(2, 2)
let e = game.createSprite(randint(0, 4), randint(0, 4))
let u = game.createSprite(randint(0, 4), randint(0, 4))
let o = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    sprite.set(LedSpriteProperty.Blink, 1)
    if (sprite.isTouchingEdge()) {
        game.removeLife(1)
    }
    if (sprite.isTouching(e)) {
        game.addScore(1)
        e.delete()
    }
    if (sprite.isTouching(o)) {
        game.addScore(1)
        o.delete()
    }
    if (sprite.isTouching(u)) {
        game.addScore(1)
        u.delete()
    }
})
loops.everyInterval(5000, function () {
    e.set(LedSpriteProperty.X, randint(1, 3))
    e.set(LedSpriteProperty.Y, randint(1, 3))
    o.set(LedSpriteProperty.Y, randint(1, 3))
    o.set(LedSpriteProperty.X, randint(1, 3))
    u.set(LedSpriteProperty.X, randint(1, 3))
    u.set(LedSpriteProperty.Y, randint(1, 3))
    if (e.isDeleted()) {
        e = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (o.isDeleted()) {
        o = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (u.isDeleted()) {
        u = game.createSprite(randint(0, 4), randint(0, 4))
    }
})

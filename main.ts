namespace SpriteKind {
    export const Dacor = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    assets.animation`shooting shark`,
    50,
    false
    )
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    info.changeCountdownBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let mySprite2: Sprite = null
let Myfopd: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(15)
scene.setBackgroundImage(assets.image`ocean1`)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Dacor)
    myDecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
info.setLife(5)
game.onUpdateInterval(2100, function () {
    Myfopd = sprites.create(assets.image`food`, SpriteKind.Food)
    Myfopd.setPosition(scene.screenWidth(), randint(5, 115))
    Myfopd.vx = -75
    animation.runImageAnimation(
    Myfopd,
    assets.animation`animated food`,
    200,
    true
    )
})
game.onUpdateInterval(10000, function () {
    mySprite2 = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    mySprite2.setPosition(scene.screenWidth(), randint(5, 115))
    mySprite2.vx = -75
    animation.runImageAnimation(
    mySprite2,
    assets.animation`animated enemy`,
    50,
    true
    )
})

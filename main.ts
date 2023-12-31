let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 f f f 9 9 f f f 2 . . . 
    . . . 2 f f f 4 9 f f f 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 5 5 5 5 f 5 5 5 5 5 . . . 
    . . . 2 2 2 2 5 2 2 2 2 2 . . . 
    . . . 2 2 2 2 5 2 7 7 7 2 . . . 
    . . . 2 2 2 2 5 2 7 7 7 2 . . . 
    . . . 2 2 2 2 5 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(150, 60)
mySprite.setVelocity(-50, 0)
let mySprite2 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 5 5 5 5 8 8 8 5 5 5 5 8 8 8 
    8 8 5 f 9 5 8 8 8 5 f 9 5 8 8 8 
    8 8 5 f f 5 8 8 8 5 f f 5 8 8 8 
    8 8 5 5 5 5 8 8 8 5 5 5 5 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 2 2 2 2 2 2 2 2 2 8 8 8 8 
    8 8 8 2 1 8 8 1 8 8 1 2 8 8 8 8 
    8 8 8 2 1 2 2 1 2 2 1 2 8 8 8 8 
    8 8 8 8 1 8 8 1 8 8 1 8 8 8 8 8 
    8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Enemy)
mySprite2.setPosition(0, 0)
controller.moveSprite(mySprite, 100, 100)
mySprite2.follow(mySprite, 60)

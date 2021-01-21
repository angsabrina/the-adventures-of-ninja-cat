namespace SpriteKind {
    export const ForestTunnel = SpriteKind.create()
    export const BeachTunnel = SpriteKind.create()
    export const QuarryTunnel = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const forestController = SpriteKind.create()
    export const quarryStone = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (playerRoom == "forest" && finishForestDialogue == "false") {
            game.setDialogTextColor(7)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Greetings. My name is Forest Cat, and I need help! A powerful wizard has left me unable to see the colors of my forest.", DialogLayout.Bottom)
            game.showLongText("I need to find a forest Controller in order to defeat him. Will you help me find it?", DialogLayout.Bottom)
            game.showLongText("Here's a riddle in case you're a spy for the terrible wizard.", DialogLayout.Bottom)
            game.setDialogFrame(img`
                8888.....88....888....888...8888.
                867788..8768..86768..8678.887768.
                8767768.877788676768877788677678.
                87767768676778776778776786776778.
                .877876667767877677876778678778..
                .867786686766867676866766687768..
                ..8666868867688686886768686668...
                .88866688888888888888888866688...
                8777768866666666666666668886688..
                86767768666666666666666688677778.
                .8776678666666666666666686776768.
                ..87766866666666666666668766778..
                ..8888886666666666666666866778...
                .86776886666666666666666888888...
                8677776866666666666666668867768..
                87666688666666666666666686777768.
                86777768666666666666666688666678.
                .8677688666666666666666686777768.
                ..88888866666666666666668867768..
                ..8776686666666666666666888888...
                .87766786666666666666666866778...
                8676776866666666666666668766778..
                87777688666666666666666686776768.
                .8866888666666666666666688677778.
                ..88666888888888888888888666888..
                ..8666868676886868867688686668...
                .867786667668676768667686687768..
                .877876877678776778767766678778..
                87767768767787767787767686776778.
                876776887778867676887778.8677678.
                867788.8768..86768..8678..887768.
                8888...888....888....88.....8888.
                .................................
                `)
            game.showLongText("Find me where ground matches the color of what used to be my old box.", DialogLayout.Full)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("When you find the item, you'll be teleported to the next friend that needs your help.", DialogLayout.Bottom)
            finishForestDialogue = "true"
            spawnLevelCompleter()
        } else if (playerRoom == "beach" && finishedBeachDialogue == "false") {
            game.setDialogTextColor(8)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Howzit, brah? I'm Beach Kat! Meeting you today is totally rad! Some gnarly wizard blew by here. Really messed up the vibe of the whole place.", DialogLayout.Bottom)
            game.showLongText("Heard him mumbling something crazy, like some epic spell. How 'bout you help me set the surf right?", DialogLayout.Bottom)
            game.showLongText("Maybe if you step on those sparkly rocks and say it out right loud, everything'll be totally tubular again! Keep on, my dude", DialogLayout.Bottom)
            game.setDialogFrame(img`
                ..ccccc....333.....333.....333...ccccc....
                .c33b33c..39993...39993...39993.c33b33c...
                c3b33bb3c3999993339999933399999c3bb33b3c..
                c33b33b3c9911199999111999991119c3b33b33c..
                cb33b33bc9199919991999199919991cb33b33bc..
                c3b33bbbcb99999111999991119999bcbbb33b3c..
                c3bb3bbd1b11111999111119991111b1dbb3bb3c..
                .c33bbd1b1111111111111111111111b1dbb33c...
                ..cccc1b111111111111111111111111b1cccc....
                .3991bb11111111111111111111111111bb993....
                399199111111111111111111111111111191993...
                3991991111111111111111111111111111991993..
                3991991111111111111111111111111111991993..
                .399191111111111111111111111111111991993..
                ..3991911111111111111111111111111191993...
                ..399191111111111111111111111111191993....
                ..399191111111111111111111111111191993....
                .3991911111111111111111111111111191993....
                399199111111111111111111111111111191993...
                3991991111111111111111111111111111991993..
                3991991111111111111111111111111111991993..
                .399191111111111111111111111111111991993..
                ..3991911111111111111111111111111191993...
                ..399191111111111111111111111111191993....
                ..399191111111111111111111111111191993....
                .3991911111111111111111111111111191993....
                399199111111111111111111111111111191993...
                3991991111111111111111111111111111991993..
                3991991111111111111111111111111111991993..
                .399191111111111111111111111111111991993..
                ..699bb11111111111111111111111111bb1993...
                ..cccc1b111111111111111111111111b1cccc....
                .c33bbd1b1111111111111111111111b1dbb33c...
                c3bb3bbd1b11119991111199911111b1dbb3bb3c..
                c3b33bbbcb99991119999911199999bcbbb33b3c..
                cb33b33bc1999199919991999199919cb33b33bc..
                c33b33b3c9111999991119999911199c3b33b33c..
                c3b33bb3c9999933399999333999993c3bb33b3c..
                .c33b33c.39993...39993...39993..c33b33c...
                ..ccccc...333.....333.....333....ccccc....
                ..........................................
                ..........................................
                `)
            game.showLongText("Long have I helped those who gaze upon me, those who consult me receive believe in the true art of word.", DialogLayout.Full)
            finishedBeachDialogue = "true"
        } else if (playerRoom == "quarry" && finishedQuarryDialogue == "false") {
            game.setDialogTextColor(12)
            game.setDialogFrame(img`
                ..bbabbaabbaabbaabbbbb..
                .bddbaddbaddbaddbabbddb.
                addddbaddbaddbaddbadddda
                addddbbaabbaabbaabbdddda
                abddb11111111111111bddba
                bbab1111111111111111bbab
                babb1111111111111111badb
                abda1111111111111111adda
                adda1111111111111111adba
                bdab1111111111111111bbab
                babb1111111111111111badb
                abda1111111111111111adda
                adda1111111111111111adba
                bdab1111111111111111bbab
                babb1111111111111111badb
                abda1111111111111111adda
                adda1111111111111111adba
                bdab1111111111111111bbab
                babb1111111111111111babb
                abddb11111111111111bddba
                addddbbaabbaabbaabbdddda
                addddabddabddabddabdddda
                .addbbabddabddabddabdda.
                ..aaabbaabbaabbaabbaaa..
                `)
            game.showLongText("Hi, um i'm sorry i'm a little nervous to talk to strangers that i haven't met yet. *breathes out*", DialogLayout.Bottom)
            game.showLongText("okay. hi. i'm quarry cat and all the lights in here got turned off by this super mean wizard.", DialogLayout.Bottom)
            game.showLongText("like from harry potter or something. um, but i think i heard him drop something in his hurry, his powers seemed weaker.", DialogLayout.Bottom)
            game.showLongText("maybe could you help me find it and restore light to the cave? it's blue like the sky you'd through some windows. ", DialogLayout.Bottom)
            finishedQuarryDialogue = "true"
            tiles.setWallAt(tiles.getTileLocation(2, 12), false)
            spawnLevelCompleter()
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast1, function (sprite, location) {
    quarryCat.destroy(effects.hearts, 500)
    quarryStone.destroy(effects.hearts, 500)
    showPlace("win")
    tiles.placeOnRandomTile(playerSprite, sprites.vehicle.roadIntersection3)
    playerSprite.say(":) I did it!")
    beachCat = sprites.create(img`
        . . . . . . . . . . . . . . 
        b b b . . . . b b b . . . . 
        c 9 9 c . . c 9 9 c . . . . 
        c a 9 9 f f 9 9 a c . . . . 
        c 3 a 9 a a 9 a 3 c . . . . 
        f a 3 8 8 8 8 3 a f . . . . 
        b 9 9 9 9 9 9 9 9 b . . . . 
        b 9 f 9 9 9 9 f 9 b . a f a 
        f 9 9 9 9 9 9 9 9 f . f 8 f 
        f a 9 9 a a 9 9 c a f f 9 f 
        . f c c c c c c 9 a a 9 a f 
        . f 9 9 9 9 9 9 9 f f f f . 
        . . f 9 a 9 f 9 f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    forestCat = sprites.create(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c 7 7 c . . c 7 7 c . . . . 
        c b 7 7 f f 7 7 b c . . . . 
        c 3 b 7 7 b 7 b 3 c . . . . 
        f b 3 6 6 6 6 3 b f . . . . 
        e 7 7 7 7 7 7 7 7 e . . . . 
        e 7 f 7 7 7 7 f 7 e . b f b 
        f 7 7 7 7 7 7 7 7 f . f 6 f 
        f b 7 7 b b 7 7 c b f f 7 f 
        . f c c c c c c 7 b b 7 b f 
        . f 7 7 7 7 7 7 7 f f f f . 
        . . f 7 b 7 f 7 f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    quarryCat = sprites.create(img`
        . . . . . . . . . . . . . . 
        b b b . . . . b b b . . . . 
        c d d c . . c d d c . . . . 
        c 4 d d f f d d 4 c . . . . 
        c 3 4 d 4 4 d 4 3 c . . . . 
        f 4 3 b b b b 3 4 f . . . . 
        c e e e e e e e e c . . . . 
        c e f e e e e f e c . 4 f 4 
        f e e e e e e e e f . f d f 
        f 4 e e 4 4 e e c 4 f f e f 
        . f c c c c c c e 4 4 e 4 f 
        . f e e e e e e e f f f f . 
        . . f e 4 e f e f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(forestCat, sprites.vehicle.roadTurn3)
    tiles.placeOnRandomTile(beachCat, sprites.vehicle.roadIntersection1)
    tiles.placeOnRandomTile(quarryCat, sprites.vehicle.roadTurn4)
    effects.confetti.startScreenEffect()
})
function spawnLevelCompleter () {
    if (playerRoom == "forest") {
        forestController = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.forestController)
        tiles.placeOnRandomTile(forestController, myTiles.tile9)
    } else if (playerRoom == "beach" && finishedBeachDialogue == "true") {
        beachRiddleAnswer = game.askForString("What's the spell? Mr...", 6)
        if (beachRiddleAnswer == "clippy") {
            tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101030303010404010301010101010301010301030104040101010101010101010103030301010101030101010101030101010101010101010103030303030101010101010101010101010101010101010105050101010101010101010101010101050501010101010101010303030101010101030101010101010103010301010101010301010101010101030303010103030303030303010101010101010101010101030101010101010101010101010101030103010101010101010101010101030101010301010101010101010101010101010101010202020202020202020202020202020202020202020202020202020202020202`, img`
                . . . . . . . . . . 2 2 2 . . . 
                . . . . . . . . . . 2 . 2 . . . 
                . . . . . . . . . . 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 . . . . . . . . . 
                . . . . 2 . 2 . . . . . . . . . 
                . . . . 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16,myTiles.tile10,sprites.dungeon.hazardWater,sprites.castle.shrub,myTiles.tile2,myTiles.tile11], TileScale.Sixteen))
            tiles.placeOnRandomTile(quarryCat, myTiles.tile2)
        } else {
            teleportPlayer()
        }
    } else if (playerRoom == "quarry") {
        quarryStone = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 d d 6 6 6 . . . . 
            . . . 9 9 9 9 6 6 6 6 6 6 . . . 
            . . 6 9 9 9 9 8 8 8 1 1 6 6 . . 
            . . 9 9 9 9 9 8 8 8 1 1 d 6 . . 
            . 6 9 9 9 9 8 8 8 8 8 d d 6 6 . 
            . 6 9 9 9 8 8 8 6 6 6 6 d 6 6 . 
            . 6 6 9 9 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 9 9 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 9 9 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 9 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.quarryStone)
        tiles.placeOnRandomTile(quarryStone, sprites.dungeon.darkGroundNorthEast1)
    }
}
function checkPlayerCollision () {
    if (playerRoom == "forest") {
        if (playerSprite.tileKindAt(TileDirection.Center, myTiles.tile5)) {
            showTryAgainSplash()
            teleportPlayer()
        } else if (playerSprite.tileKindAt(TileDirection.Center, myTiles.tile7)) {
            showTryAgainSplash()
            teleportPlayer()
        } else if (playerSprite.tileKindAt(TileDirection.Center, myTiles.tile8)) {
            showTryAgainSplash()
            teleportPlayer()
        }
    } else if (playerRoom == "beach") {
        if (playerSprite.tileKindAt(TileDirection.Center, myTiles.tile6)) {
            spawnLevelCompleter()
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    forestCat.destroy()
    forestTunnel.destroy()
    showPlace("beach")
    tiles.placeOnRandomTile(playerSprite, myTiles.tile10)
    beachCat = sprites.create(img`
        . . . . . . . . . . . . . . 
        b b b . . . . b b b . . . . 
        c 9 9 c . . c 9 9 c . . . . 
        c a 9 9 f f 9 9 a c . . . . 
        c 3 a 9 a a 9 a 3 c . . . . 
        f a 3 8 8 8 8 3 a f . . . . 
        b 9 9 9 9 9 9 9 9 b . . . . 
        b 9 f 9 9 9 9 f 9 b . a f a 
        f 9 9 9 9 9 9 9 9 f . f 8 f 
        f a 9 9 a a 9 9 c a f f 9 f 
        . f c c c c c c 9 a a 9 a f 
        . f 9 9 9 9 9 9 9 f f f f . 
        . . f 9 a 9 f 9 f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(beachCat, myTiles.tile2)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    beachCat.destroy(effects.spray, 500)
    showPlace("quarry")
    tiles.placeOnRandomTile(playerSprite, sprites.dungeon.darkGroundNorthWest1)
    quarryCat = sprites.create(img`
        . . . . . . . . . . . . . . 
        b b b . . . . b b b . . . . 
        c d d c . . c d d c . . . . 
        c 4 d d f f d d 4 c . . . . 
        c 3 4 d 4 4 d 4 3 c . . . . 
        f 4 3 b b b b 3 4 f . . . . 
        c e e e e e e e e c . . . . 
        c e f e e e e f e c . 4 f 4 
        f e e e e e e e e f . f d f 
        f 4 e e 4 4 e e c 4 f f e f 
        . f c c c c c c e 4 4 e 4 f 
        . f e e e e e e e f f f f . 
        . . f e 4 e f e f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(quarryCat, myTiles.tile2)
})
function playWinMusic () {
    music.playMelody("C E G B C5 C5 C5 C ", 340)
    music.playMelody("D G A B C5 C5 C5 D ", 340)
    music.playMelody("E G A B C5 B C5 C5 ", 340)
    music.playMelody("C5 C5 - - - - - - ", 340)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    showPlace("forest")
    tiles.placeOnRandomTile(playerSprite, myTiles.tile4)
    forestCat = sprites.create(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c 7 7 c . . c 7 7 c . . . . 
        c b 7 7 f f 7 7 b c . . . . 
        c 3 b 7 7 b 7 b 3 c . . . . 
        f b 3 6 6 6 6 3 b f . . . . 
        e 7 7 7 7 7 7 7 7 e . . . . 
        e 7 f 7 7 7 7 f 7 e . b f b 
        f 7 7 7 7 7 7 7 7 f . f 6 f 
        f b 7 7 b b 7 7 c b f f 7 f 
        . f c c c c c c 7 b b 7 b f 
        . f 7 7 7 7 7 7 7 f f f f . 
        . . f 7 b 7 f 7 f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(forestCat, myTiles.tile2)
})
function teleportPlayer () {
    if (playerRoom == "forest") {
        tiles.placeOnRandomTile(playerSprite, myTiles.tile4)
    } else if (playerRoom == "beach") {
        tiles.placeOnRandomTile(playerSprite, myTiles.tile10)
    } else if (playerRoom == "quarry") {
        tiles.placeOnRandomTile(playerSprite, sprites.dungeon.darkGroundCenter)
    }
}
function showTryAgainSplash () {
    scene.cameraShake(4, 500)
    game.showLongText("Oops, that wasn't the right thing to do. Try again!", DialogLayout.Full)
}
function showPlace (place: string) {
    playerRoom = place
    if (place == "town") {
        tiles.setTilemap(tiles.createTilemap(hex`200018000101010101010101010101010101010e0b0b01010101010101030303030303030101010101010101010101010101010107080e010303030101030f0f0f0f0f030f0f0f0f0f0f01030303010101010101070801010301030101030f0f0f0f0f0301010101010f01030103010101010e01070801010303030101030f0f0f0f0f0301010101010f010303030101010101010708010e0101010101030f0f0f0f0f030f0f0f0f0f0f0101010101010101010e070801010101010101030f0f0f0f0f0301010101010101010101010101010101070801010101010101030303030303030d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d07080d0d0d0d0d0d0d0d0d0d0d0d0d0d0d06040404040404040404040404040404040404040404040404040404040c010d0a0505050505050505050505050505050505050505050505050505050509010d010101010101010101010101010101020202020202020202020202020202010d010101010101010101010101010101020202030303030303030303030202010101010303030103030303010303030303030303030101020202020303020202010101030103010303030301030101010101010103010102020202030302020201010103030301030303030103030303030303030301010202020203030303030101010101010101010101010101010101010101010101020202020202020101010202020202020101010101010101010101010101010102030303030302010102020202020202030303030f0f0f0f0f0f0f0f0f0f0f0102030202020302010103020202020202030303030f0101010101010101010f01020302020203020202020f0f0f0f0f02030303030f0101010101010101010f01020302020203020202030f0202020f02030303030f0f0f0f0f0f0f0f0f0f0f01020303030303020202020f0202020f0201010101010101010101010101010303030202020202020202030f0202020f0201010101010101010101010101010301030101010101010101020f0202020f020d07080505050505050505050505030303010a050505050505`, img`
            ...............2..2.............
            ...............2..2.............
            ...............2..2.............
            ...............2..2.............
            ...............2..2.............
            ...............2..2.............
            ...............2..2.............
            2222222222222222..22222222222222
            2..............................2
            2..............................2
            22222222222222222222222222222222
            22222222222222222222222222222222
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .......2...............22.......
            `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.dungeon.buttonTealDepressed,sprites.vehicle.roadTurn2,sprites.castle.shrub,sprites.castle.saplingOak,sprites.castle.tilePath5], TileScale.Sixteen))
    } else if (place == "forest") {
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        game.showLongText("Welcome to the magical forest", DialogLayout.Center)
        effects.starField.startScreenEffect(2000)
        tiles.setTilemap(tiles.createTilemap(hex`200020000202020202020202020202020202020a0a020202020202020202020202020202020202020202020202020202020202030302020202020202020202020202020202020505050505050505050505020203030202060606060606060606060602020202050505050505050505050502020303020206040606060606060606060202020205040505050505050504050202030302020604060606060606060b06020202020504050505050505050405020203030202060406060606060606060602020202050405050505050505040502020303020206040606060606060606060202020205040505050505050504050202030302020604060606060606060606020202020504040404040404040405020203030202060406060606060606060602020202050405050505050505040502020303020206040606060606060606060202020205040505050505050504050202030302020604060606060606060606020202020504050505050505050405020203030202060404040404040404040602020202050505050505050505050502020303020206060606060606060606060202020202020202020202020202050202030302020602020202020202020202020202020202020202020202020203020203030202030202020202020202020202020a0303030303030303030303030303010103030303030303030303030303030a0a0303030303030303030303030303010103030303030303030303030303030a020202020202020202020202030202030302020302020202020202020202020202020202020202020202020207020203030202080202020202020202020202020202070707070707070707070702020303020208080808080808080808080202020207040707070707070704070202030302020804080808080808080408020202020707040707070707040707020203030202080408080808080808040802020202070707040707070407070702020303020208040808080808080804080202020207070707040704070707070202030302020804080808080808080408020202020707070707040707070707020203030202080408080808080808040802020202070707070704070707070702020303020208040404040404040404080202020207070707070407070707070202030302020804080808080808080408020202020707070707040707070707020203030202080408080808080808040802020202070707070704070707070702020303020208040808080808080804080202020207070707070707070707070202030302020808080808080808080808020202020202020202020202020202020203030202020202020202020202020202020202020202020202020202020202020909020202020202020202020202020202`, img`
            ..............22222.............
            ..............2..22222222222222.
            ..............2..22...........2.
            ..............2..22.2.........2.
            ...2..........2..22.2.........2.
            ...2..........2..22.2.........2.
            ...2..........2..22.2.........2.
            ...2..........2..22.2.........2.
            ...222222222..2..22.2.........2.
            ...2..........2..22.2.........2.
            ...2..........2..22.2.........2.
            ...2..........2..22.222222222.2.
            ..............2..22...........2.
            ..............2..22.22222222222.
            222222222222.22..22.222222222222
            2..............................2
            2..............................2
            222222222222.22..22.222222222222
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            ..............2..2..............
            `, [myTiles.transparency16,myTiles.tile2,sprites.castle.tileDarkGrass1,myTiles.tile4,sprites.castle.saplingPine,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile3,sprites.builtin.forestTiles0,myTiles.tile9], TileScale.Sixteen))
    } else if (place == "beach") {
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        game.showLongText("Welcome to the bubbly beach", DialogLayout.Center)
        effects.bubbles.startScreenEffect(2000)
        tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101030303010404010301010101010301010301030104040101010101010101010103030301010101010101010101010101010101010101010101010103010101010103010101010101010101010101050501010101010101010301010101010505010101010301010101010303030101010101010101010101010103010301010101010301010101010101030303010101010101010101010103010101010101010101010101010101010103010101010101010301010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202020202020202020202`, img`
            . . . . . . . . . . 2 2 2 . . . 
            . 2 . . . . . 2 . . 2 . 2 . . . 
            . . . . . . . . . . 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . 2 . 
            . . . . 2 2 2 . . . . . . . . . 
            . . . . 2 . 2 . . . . . 2 . . . 
            . . . . 2 2 2 . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile10,sprites.dungeon.hazardWater,sprites.castle.shrub,myTiles.tile2,myTiles.tile6], TileScale.Sixteen))
    } else if (place == "quarry") {
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        effects.blizzard.startScreenEffect()
        tiles.setTilemap(tiles.createTilemap(hex`1000100002030303030303030303030303030304090a0a0a0a0a0a0a0a0a18110a1a1a05090a0a0a0a0a0a0a0a0a0a110a1a1a05090a0a0a0a0a0a0a0a0a0a110a0a0a05090d0f100a0a0a0a0a0a0a120d0d0e05090a0a0a0a0a0a0a140a0a0116190a05090a0a16140a0a150a0f0a0a0a0a0a05090a0a0a13160a0a130a0a0a0a0a0a05090a0a0a0a0a0a0a0a0a0a0a0a0a0a05090a0a0a0a0a0a0a0a0a0a0a17010a05090a150d0f160a0a0a0a0a0a01160a05090a0a19160a0a0a18140a0a14100a05090a1b0a0a0a0a0a150a0f0a130a0a0509150b0f0a0a0a0a0a130a0a0a0a0a05090a130a0a0a0a0a0a0a0a0a0a0a0c0508070707070707070707070707070706`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . 2 . . . . 
            . 2 2 2 . . . . . . . 2 2 2 2 . 
            . . . . . . . . 2 . . 2 2 2 . . 
            . . . 2 2 . . 2 2 2 . . . . . . 
            . . . . 2 2 . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 2 2 . . 
            . . 2 2 2 2 . . . . . . 2 2 . . 
            . . . 2 2 . . . 2 2 . . 2 2 . . 
            . . 2 . . . . . 2 . 2 . 2 . . . 
            . 2 . 2 . . . . . 2 . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.dungeon.floorDark5,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenEast,sprites.dungeon.doorLockedWest,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedNorth,myTiles.tile2,sprites.dungeon.floorLight3], TileScale.Sixteen))
    } else if (place == "win") {
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        effects.blizzard.startScreenEffect()
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000f0f0f0f0f0f0f0f0f0f0e0e0e0e0e0e0e0e0e0e0709080a0b0c070d0b0c0604040404040404040501020202020202020203101212121212121212101111111111111111131313131313131313131313`, img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.builtin.crowd5,sprites.builtin.crowd1,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd6,sprites.builtin.brick,sprites.dungeon.hazardWater,sprites.castle.saplingPine,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3], TileScale.Sixteen))
    }
}
let beachRiddleAnswer = ""
let forestController: Sprite = null
let forestCat: Sprite = null
let beachCat: Sprite = null
let quarryStone: Sprite = null
let quarryCat: Sprite = null
let finishedQuarryDialogue = ""
let finishedBeachDialogue = ""
let finishForestDialogue = ""
let playerRoom = ""
let forestTunnel: Sprite = null
let playerSprite: Sprite = null
game.splash("Hi")
showPlace("town")
playerSprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . 2 2 
    c b d d f f d d b c 2 2 . . 
    c 3 b d d b d b 3 c 2 . . . 
    f b 3 2 2 2 2 3 b f 2 2 . . 
    e d d d d d d d d e . 2 2 2 
    e d f d d d d f d e . b f b 
    f d d d d d d d d f . f d f 
    f b d d b b d d c b f f d f 
    . f c c c c c c d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
forestTunnel = sprites.create(sprites.dungeon.buttonTealDepressed, SpriteKind.ForestTunnel)
tiles.placeOnRandomTile(playerSprite, sprites.vehicle.roadIntersection3)
playerRoom = ""
finishForestDialogue = "false"
finishedBeachDialogue = "false"
finishedQuarryDialogue = "false"
forever(function () {
    controller.moveSprite(playerSprite)
    scene.cameraFollowSprite(playerSprite)
    checkPlayerCollision()
    if (controller.A.isPressed() && playerRoom == "win") {
        playWinMusic()
        game.splash("The End")
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        game.over(true)
    }
})

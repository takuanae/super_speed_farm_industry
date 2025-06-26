ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:pumpkin_seeds',2),
        [
            'A  ',
            '   ',
            ' A '
        ],
        {
            A:'minecraft:hay_block'
        }
    ),
    event.shaped(
        Item.of('minecraft:melon_seeds',2),
        [
            'AA ',
            '   ',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:carrot',2),
        [
            'A  ',
            'A  ',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:potato',3),
        [
            'A A',
            ' A ',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:beetroot_seeds',2),
        [
            ' A ',
            'A  ',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:sugar_cane',3),
        [
            'AA ',
            'A  ',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('farmersdelight:tomato_seeds',2),
        [
            'A  ',
            '  A',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('farmersdelight:cabbage_seeds',3),
        [
            'A  ',
            'A  ',
            'A  '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('farmersdelight:onion',3),
        [
            'AA ',
            '  A',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('farmersdelight:rice',2),
        [
            'A A',
            '   ',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:sweet_berries',3),
        [
            'A A',
            '  A',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:glow_berries',3),
        [
            'A  ',
            ' AA',
            '   '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:apple',4),
        [
            'A  ',
            ' AA',
            'A  '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:cocoa_beans',4),
        [
            'A  ',
            'AA ',
            'A  '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:kelp',4),
        [
            ' A ',
            'A A',
            ' A '
        ],
        {
            A:'minecraft:hay_block'
        }
    )
    event.shaped(
        Item.of('minecraft:wheat_seeds',5),
        [
            ' A ',
            'AAA',
            ' A '
        ],
        {
            A:'minecraft:wheat'
        }
    )
    //cabbage
    event.shaped(
        Item.of('minecraft:beef',2),
        [
            ' A ',
            'A  ',
            '   '
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
    event.shaped(
        Item.of('minecraft:porkchop',2),
        [
            '   ',
            ' A ',
            'A  '
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
    event.shaped(
        Item.of('minecraft:mutton',2),
        [
            '  A',
            ' A ',
            '   '
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
    event.shaped(
        Item.of('minecraft:rabbit',2),
        [
            '   ',
            '  A',
            ' A '
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
    event.shaped(
        Item.of('minecraft:chicken',2),
        [
            'A  ',
            ' A ',
            '   '
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
    event.shaped(
        Item.of('minecraft:cod',2),
        [
            ' A ',
            '  A',
            '   '
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
    event.shaped(
        Item.of('minecraft:salmon',2),
        [
            '   ',
            ' A ',
            '  A'
        ],
        {
            A:'farmersdelight:cabbage_crate'
        }
    ).noMirror().noShrink()
})
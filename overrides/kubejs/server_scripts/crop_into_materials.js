ServerEvents.recipes(event => {
  //orematerials
  event.shaped(Item.of('farmindustry:pumpkin_ingot_base'),
        [
            'AA'
        ],
        {
            A:'minecraft:pumpkin'
        }
    ),
    event.shaped(Item.of('farmindustry:like_iron_ingot'),
        [
            ' W ',
            'WAW',
            ' W '
        ],
        {
            A:'farmindustry:pumpkin_ingot_base',
            W:'farmindustry:flour'
        }
    ),
  event.shaped(Item.of('farmindustry:carrot_ingot_base'),
      [
          'AA'
      ],
      {
          A:'minecraft:carrot'
      }
  ),
  event.shaped(Item.of('farmindustry:like_gold_ingot'),
    [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A:'farmindustry:carrot_ingot_base',
        B:'farmersdelight:rice_panicle'
    }
),
  event.shaped(Item.of('farmindustry:apple_ingot_base'),
    [
        'AA'
    ],
    {
        A:'minecraft:apple'
    }
),
  event.shaped(Item.of('farmindustry:like_copper_ingot'),
    [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A:'farmindustry:apple_ingot_base',
        B:'minecraft:sweet_berries'
    }
),
event.shaped(Item.of('farmindustry:onion_ingot_base'),
  [
      'AA'
  ],
  {
      A:'farmersdelight:onion'
  }
),
event.shaped(Item.of('farmindustry:like_osmium_ingot'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmindustry:onion_ingot_base',
      B:'farmersdelight:rice'
  }
),
event.shaped(Item.of('farmindustry:potato_ingot_base'),
  [
      'AA'
  ],
  {
      A:'minecraft:potato'
  }
),
event.shaped(Item.of('farmindustry:like_tin_ingot'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmindustry:potato_ingot_base',
      B:'minecraft:sugar'
  }
),
event.shaped(Item.of('farmindustry:beetroot_ingot_base'),
  [
      'AA'
  ],
  {
      A:'minecraft:beetroot'
  }
),
event.shaped(Item.of('farmindustry:like_lead_ingot'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmindustry:beetroot_ingot_base',
      B:'minecraft:sugar'
  }
),
event.shaped(Item.of('farmindustry:like_redstone'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmindustry:flour',
      B:'farmersdelight:tomato'
  }
),
event.shaped(Item.of('farmindustry:like_quartz'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'minecraft:apple',
      B:'minecraft:sugar'
  }
),
event.shaped(Item.of('farmindustry:like_emerald'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'minecraft:dried_kelp_block',
      B:'farmersdelight:cabbage_crate'
  }
),
event.shaped(Item.of('farmindustry:like_fluorite'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmindustry:flour',
      B:'minecraft:glow_berries'
  }
),
event.shaped(Item.of('farmindustry:like_lapis_lazuli'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'minecraft:kelp',
      B:'minecraft:sweet_berries'
  }
),
event.shaped(Item.of('farmindustry:like_ancient_debris'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmersdelight:onion_crate',
      B:'farmersdelight:tomato_crate'
  }
),
event.shaped(Item.of('farmindustry:like_diamond'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmersdelight:rice_bag',
      B:'minecraft:hay_block'
  }
),
event.shaped(Item.of('farmindustry:melon_ingot_base'),
  [
      'AA'
  ],
  {
      A:'minecraft:melon'
  }
),
event.shaped(Item.of('farmindustry:like_uranium_ingot'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'farmindustry:melon_ingot_base',
      B:'farmersdelight:cabbage'
  }
),
event.shaped(Item.of('farmindustry:like_glowstone'),
  [
      ' B ',
      'BAB',
      ' B '
  ],
  {
      A:'minecraft:melon',
      B:'minecraft:glow_berries'
  }
)
//materials recipes
const ngbling = ['farmindustry:like_iron', 'farmindustry:like_gold', 'farmindustry:like_copper', 'farmindustry:like_tin', 'farmindustry:like_uranium', 'farmindustry:like_osmium', 'farmindustry:like_lead', 'farmindustry:like_netherite']
for (let i = 0; i < ngbling.length; i++) {
  event.shaped(Item.of(ngbling[i]+'_block'),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A:ngbling[i]+'_ingot'
    }
  ),
  event.shaped(Item.of(ngbling[i]+'_ingot'),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A:ngbling[i]+'_nugget'
    }
  ),
  event.shapeless(Item.of(ngbling[i]+'_ingot',9),
    [
      ngbling[i]+'_block'
    ]
  ),
  event.shapeless(Item.of(ngbling[i]+'_nugget',9),
    [
      ngbling[i]
    ]
  )
}
const blgem =  ['farmindustry:like_emerald', 'farmindustry:like_diamond', 'farmindustry:like_fluorite','farmindustry:like_redstone']
for (let i = 0; i < blgem.length; i++) {
  event.shaped(Item.of(blgem[i]+'_block'),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A:blgem[i]
    }
  ),
  event.shaped(Item.of(blgem[i],9),
    [
      blgem[i]+'_block'
    ]
  )
}
event.shaped(Item.of('farmindustry:like_lapis_block'),
  [
      'AAA',
      'AAA',
      'AAA'
  ],
  {
      A:'farmindustry:like_lapis_lazuli'
  }
)
event.shaped(Item.of('farmindustry:cocosteel_block'),
  [
      'AAA',
      'AAA',
      'AAA'
  ],
  {
      A:'farmindustry:cocosteel_ingot'
  }
)
event.shaped(Item.of('farmindustry:cocosteel_ingot'),
  [
      'AAA',
      'AAA',
      'AAA'
  ],
  {
      A:'farmindustry:cocosteel_nugget'
  }
)
event.shapeless(Item.of('farmindustry:cocosteel_ingot',9),
[
  'farmindustry:cocosteel_block',
]
),
event.shapeless(Item.of('farmindustry:cocosteel_nugget',9),
[
  'farmindustry:cocosteel_ingot',
]
),
event.shaped(Item.of('farmindustry:like_glowstone'),
  [
      'AA',
      'AA'
  ],
  {
      A:'farmindustry:like_glowstone_dusts'
  }
)
event.shaped(Item.of('farmindustry:like_quartz_block'),
  [
      'AA',
      'AA'
  ],
  {
      A:'farmindustry:like_quartz'
  }
)
event.shapeless(Item.of('farmindustry:like_lapis_lazuli',9),
[
  'farmindustry:like_lapis_block',
]
),
event.shapeless(Item.of('farmindustry:like_glowstone_dusts',4),
[
  'farmindustry:like_glowstone',
]
),
event.shapeless(Item.of('farmindustry:like_quartz',4),
[
  'farmindustry:like_quartz_block',
]
)
event.remove({id:'mekanism:processing/iron/enriched'})
event.remove({id:'mekanism:processing/steel/ingot_to_dust'})
event.recipes.mekanism.metallurgic_infusing('farmindustry:cocoriched_iron','#forge:ingots/iron','10x farmindustry:cocoa')
event.recipes.mekanism.metallurgic_infusing('farmindustry:cocosteel_dusts','farmindustry:cocoriched_iron','10x farmindustry:cocoa')
event.smelting('minecraft:netherite_scrap','farmindustry:like_ancient_debris')
event.blasting('minecraft:netherite_scrap','farmindustry:like_ancient_debris')
//ingot
const mcingotmaterials = ['iron','copper','gold','netherite']
for (let i = 0; i < mcingotmaterials.length; i++) {
  event.replaceOutput([{ output:'minecraft:'+mcingotmaterials[i]+'_ingot',input:'#forge:dusts/'+mcingotmaterials[i]+''},{input:'@farmindustry'}],'minecraft:'+mcingotmaterials[i]+'_ingot','farmindustry:like_'+mcingotmaterials[i]+'_ingot')
}
const mekingotmaterials = ['lead','tin','uranium','osmium']
for (let i = 0; i < mekingotmaterials.length; i++) {
  event.replaceOutput([{ output:'mekanism:ingot_'+mekingotmaterials[i]+'',input:'#forge:dusts/'+mekingotmaterials[i]+''},{input:'@farmindustry'}],'mekanism:ingot_'+mekingotmaterials[i]+'','farmindustry:like_'+mekingotmaterials[i]+'_ingot')
}
const mcgemmaterials = ['quartz','emerald','diamond']
for (let i = 0; i < mcgemmaterials.length; i++) {
  event.replaceOutput([{ output:'minecraft:'+mcgemmaterials[i]+'',input:'#forge:dusts/'+mcgemmaterials[i]+''},{input:'@farmindustry'}],'minecraft:'+mcgemmaterials[i]+'','farmindustry:like_'+mcgemmaterials[i]+'')
}
event.replaceOutput([{ output:'mekanism:fluorite_gem',input:'#forge:dusts/fluorite'},{input:'@farmindustry'}],'mekanism:fluorite_gem','farmindustry:like_fluorite')
event.replaceOutput([{ output:'minecraft:redstone',input:'#forge:dusts/redstone'},{input:'@farmindustry'}],'minecraft:redstone','farmindustry:like_redstone')
event.replaceOutput([{ output:'minecraft:lapis_lazuli',input:'#forge:gems/lapis'},{input:'@farmindustry'}],'minecraft:lapis_lazuli','farmindustry:like_lapis_lazuli')
event.replaceOutput([{ output:'mekanism:ingot_steel',input:'#forge:dusts/steel'},{input:'@farmindustry'}],'mekanism:ingot_steel','farmindustry:cocosteel_ingot')
//saladbowls
const ormate = (out,mate1,mate2)=>{
    event.shapeless(Item.of(out),['4x '+mate1,'2x '+mate2,'minecraft:bowl']) 
}
const saladmate1 =['farmindustry:iron_saladbowl', 'farmindustry:gold_saladbowl', 'farmindustry:copper_saladbowl', 'farmindustry:tin_saladbowl', 'farmindustry:uranium_saladbowl', 'farmindustry:osmium_saladbowl', 'farmindustry:lead_saladbowl', 'farmindustry:quartz_saladbowl', 'farmindustry:emerald_saladbowl','farmindustry:diamond_saladbowl', 'farmindustry:fluorite_saladbowl', 'farmindustry:redstone_saladbowl', 'farmindustry:lapis_saladbowl']
const saladmate2 =['farmindustry:flour', 'farmersdelight:rice_panicle', 'minecraft:sweet_berries', 'minecraft:sugar', 'farmersdelight:cabbage', 'farmersdelight:rice', 'minecraft:sugar', 'minecraft:glow_berries', 'farmersdelight:cabbage_crate', 'minecraft:hay_block', 'minecraft:glow_berries', 'farmersdelight:tomato', 'minecraft:sweet_berries']
const saladmate3 =['farmindustry:pumpkin_ingot_base', 'farmindustry:carrot_ingot_base', 'farmindustry:apple_ingot_base', 'farmindustry:potato_ingot_base', 'farmindustry:melon_ingot_base', 'farmindustry:onion_ingot_base', 'farmindustry:beetroot_ingot_base', 'minecraft:apple', 'minecraft:dried_kelp_block', 'farmersdelight:rice_bag', 'farmindustry:flour', 'farmindustry:flour', 'minecraft:kelp']
for (let i = 0; i < saladmate1.length; i++) {
  ormate(saladmate1[i],saladmate2[i],saladmate3[i]) 
}
    //other
  event.shapeless(Item.of('minecraft:wheat'),
        [
          '4x minecraft:wheat_seeds',
        ]
      ),
  event.shapeless(
        Item.of('farmindustry:flour'),
        [
          'minecraft:wheat',
        ]
      ),
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
          { item: 'minecraft:wheat' }
        ],
        tool: { tag: 'forge:tools/axes' },
        result: [
          { item: 'farmindustry:flour'}
        ]
    })
    event.recipes.mekanism.enriching('farmindustry:enriched_cocoa_beans','minecraft:cookie')
    event.custom({type:'mekanism:infusion_conversion',input:{'ingredient':{'item':'minecraft:cocoa_beans'}},output:{'infuse_type':'farmindustry:cocoa','amount':10}})
    event.custom({type:'mekanism:infusion_conversion',input:{'ingredient':{'item':'farmindustry:enriched_cocoa_beans'}},output:{'infuse_type':'farmindustry:cocoa','amount':80}})
})
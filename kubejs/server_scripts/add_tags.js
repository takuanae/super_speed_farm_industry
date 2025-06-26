ServerEvents.tags('item', event => {
    const ingotmaterials = ['iron','copper','gold','netherite','lead','tin','uranium','osmium']
    ingotmaterials.forEach(element => {
        event.add('forge:ingots/'+element+'','farmindustry:like_'+element+'_ingot')
        event.add('forge:storage_blocks/'+element+'','farmindustry:like_'+element+'_block')
        event.add('forge:nuggets/'+element+'','farmindustry:like_'+element+'_nugget')
    })
    const gemsmaterials = ['quartz','emerald','diamond','fluorite']
    gemsmaterials.forEach(element=>{
        event.add('forge:gems/'+element+'','farmindustry:like_'+element+'')
    })
    const ormate = ['iron','gold','copper','netherite','lead','tin','uranium','osmium','quartz','emerald','diamond','fluorite','redstone','ancient_debris','lapis','glowstone']
    for (let i = 0; i < ormate.length; i++) {
        event.add('forge:ores/'+ormate[i]+'','farmindustry:'+ormate[i]+'_saladbowl')
    }
    event.add('mekanism:alloys/basic','farmindustry:like_redstone')
    event.add('forge:dusts/steel','farmindustry:cocosteel_dusts')
    event.add('forge:ingots/steel','farmindustry:cocosteel_ingot')
    event.add('forge:nugget/steel','farmindustry:cocosteel_nugget')
    event.add('forge:storage_block/steel','farmindustry:cocosteel_block')
    event.add('forge:ores/netherite_scrap', 'farmindustry:like_ancient_debris'),
    event.add('forge:dusts/redstone','farmindustry:like_redstone'),
    event.add('forge:storage_blocks/redstone','farmindustry:like_redstone_block')
    event.add('forge:gems/lapis','farmindustry:like_lapis_lazuli'),
    event.add('forge:storage_blocks/lapis','farmindustry:like_lapis_block'),
    event.add('forge:dusts/glowstone','farmindustry:like_glowstone_dusts')
})
ServerEvents.tags('fluid',event=>{
    event.add('minecraft:lava','farmindustry:hot_chocolate')
    event.add('minecraft:lava','farmindustry:flowing_hot_chocolate')
})
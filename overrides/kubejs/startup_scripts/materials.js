//priority: 2147483647
const ngbling = ['farmindustry:like_iron', 'farmindustry:like_gold', 'farmindustry:like_copper', 'farmindustry:like_tin', 'farmindustry:like_uranium', 'farmindustry:like_osmium', 'farmindustry:like_lead', 'farmindustry:like_netherite']
const blgem = ['farmindustry:like_quartz', 'farmindustry:like_emerald', 'farmindustry:like_diamond', 'farmindustry:like_fluorite','farmindustry:like_redstone']
StartupEvents.registry('item', event => {
    event.create('farmindustry:pumpkin_ingot_base').food(f=>{f.hunger(24).saturation(1.2)}),
    event.create('farmindustry:carrot_ingot_base').food(f=>{f.hunger(6).saturation(1)}),
    event.create('farmindustry:apple_ingot_base').food(f=>{f.hunger(8).saturation(0.8)}),
    event.create('farmindustry:onion_ingot_base').food(f=>{f.hunger(4).saturation(0.5)}),
    event.create('farmindustry:potato_ingot_base').food(f=>{f.hunger(1).saturation(0.8)}),
    event.create('farmindustry:melon_ingot_base').food(f=>{f.hunger(36).saturation(0.8)}),
    event.create('farmindustry:beetroot_ingot_base').food(f=>{f.hunger(2).saturation(1)}),
    event.create('farmindustry:flour').food(f=>{f.hunger(2).saturation(0.8)})
    event.create('farmindustry:cocosteel_ingot').food(f=>{f.hunger(20).saturation(1.5)})
    event.create('farmindustry:cocosteel_nugget').food(f=>{f.hunger(2).saturation(1.5)})
    event.create('farmindustry:cocosteel_dusts').food(f=>{f.hunger(20).saturation(1.5)})
    event.create('farmindustry:cocoriched_iron').food(f=>{f.hunger(10).saturation(1.5)})
    //ingot
    for (let i = 0; i < ngbling.length; i++) {
        event.create(ngbling[i]+'_ingot').food(f=>{f.hunger(12).saturation(1.25)})
        event.create(ngbling[i]+'_nugget').food(f=>{f.hunger(2).saturation(1)})
    }
    for (let i = 0; i < blgem.length; i++) {
        event.create(blgem[i])
    }
    event.create('farmindustry:like_lapis_lazuli').food(f=>{f.hunger(12).saturation(1.25)}),
    event.create('farmindustry:like_glowstone_dusts').food(f=>{f.hunger(12).saturation(1.25)})
    //salad_bowls
    const ormate = ['iron','gold','copper','lead','tin','uranium','osmium','quartz','emerald','diamond','fluorite','redstone','lapis']
    for (let i = 0; i < ormate.length; i++) {
        event.create('farmindustry:'+ormate[i]+'_saladbowl').food(f=>{f.hunger(20).saturation(1.5)})
    }
    //compress
    const compress = ['minecraft:wheat_seeds', 'minecraft:pumpkin_seeds', 'minecraft:melon_seeds', 'minecraft:beetroot_seeds', 'minecraft:carrot', 'minecraft:potato', 'minecraft:glow_berries','minecraft:beetroot', 'minecraft:wheat', 'minecraft:pumpkin', 'minecraft:melon','farmersdelight:cabbage', 'farmersdelight:tomato', 'farmersdelight:onion', 'farmersdelight:rice', 'farmersdelight:cabbage_seeds', 'farmersdelight:tomato_seeds', 'farmersdelight:rice_panicle', 'minecraft:sweet_berries', 'minecraft:sugar_cane', 'minecraft:cocoa_beans', 'minecraft:apple', 'minecraft:kelp', 'minecraft:beef', 'minecraft:porkchop', 'minecraft:mutton', 'minecraft:chicken', 'minecraft:rabbit', 'minecraft:cod', 'minecraft:salmon','minecraft:leather', 'minecraft:white_wool', 'minecraft:rabbit_hide', 'minecraft:rabbit_foot', 'minecraft:egg', 'minecraft:feather','minecraft:iron_ingot', 'minecraft:copper_ingot', 'minecraft:gold_ingot', 'minecraft:netherite_ingot', 'mekanism:ingot_bronze', 'mekanism:ingot_steel', 'mekanism:ingot_refined_obsidian', 'mekanism:ingot_refined_glowstone', 'mekanism:ingot_osmium', 'mekanism:ingot_tin', 'mekanism:ingot_lead', 'mekanism:ingot_uranium', 'mekanism:alloy_infused', 'mekanism:alloy_reinforced', 'mekanism:alloy_atomic', 'mekanism:basic_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:ultimate_control_circuit','farmindustry:valine_3g']
    for (let i = 0; i < compress.length; i++) {
        event.create(compress[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_single_compressed').textureJson({layer0: compress[i].replace('farmindustry:','farmindustry:item/compress/').replace('minecraft:','farmindustry:item/compress/').replace('farmersdelight:','farmindustry:item/compress/').replace('mekanism:','farmindustry:item/compress/'),layer1: "farmindustry:item/compress/compress_one"}).tag('farmindustry:compress/single') 
        event.create(compress[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_double_compressed').textureJson({layer0: compress[i].replace('farmindustry:','farmindustry:item/compress/').replace('minecraft:','farmindustry:item/compress/').replace('farmersdelight:','farmindustry:item/compress/').replace('mekanism:','farmindustry:item/compress/'),layer1: "farmindustry:item/compress/compress_two"}).tag('farmindustry:compress/double')
        event.create(compress[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_triple_compressed').textureJson({layer0: compress[i].replace('farmindustry:','farmindustry:item/compress/').replace('minecraft:','farmindustry:item/compress/').replace('farmersdelight:','farmindustry:item/compress/').replace('mekanism:','farmindustry:item/compress/'),layer1: "farmindustry:item/compress/compress_three"}).tag('farmindustry:compress/triple')
        event.create(compress[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quadruple_compressed').textureJson({layer0: compress[i].replace('farmindustry:','farmindustry:item/compress/').replace('minecraft:','farmindustry:item/compress/').replace('farmersdelight:','farmindustry:item/compress/').replace('mekanism:','farmindustry:item/compress/'),layer1: "farmindustry:item/compress/compress_four"}).tag('farmindustry:compress/quadruple')
        event.create(compress[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quintuple_compressed').textureJson({layer0: compress[i].replace('farmindustry:','farmindustry:item/compress/').replace('minecraft:','farmindustry:item/compress/').replace('farmersdelight:','farmindustry:item/compress/').replace('mekanism:','farmindustry:item/compress/'),layer1: "farmindustry:item/compress/compress_five"}).tag('farmindustry:compress/quintuple')
        event.create(compress[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_singularity').textureJson({layer0:"farmindustry:item/compress/singularity_back",layer1:compress[i].replace('farmindustry:','farmindustry:item/compress/').replace('minecraft:','farmindustry:item/compress/').replace('farmersdelight:','farmindustry:item/compress/').replace('mekanism:','farmindustry:item/compress/'),layer2:"farmindustry:item/compress/singularity_front"}).tag('farmindustry:compress/singularity')
    }
    event.create('farmindustry:infused_printed_silicon')
    event.create('farmindustry:enriched_quartz')
    event.create('farmindustry:enriched_silicon')
    event.create('farmindustry:enriched_cocoa_beans')
    event.create('farmindustry:valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(2147483647).alwaysEdible()}).displayName('Valine_3g')
    event.create('farmindustry:valine_3g_dusts').tag('forge:dusts/valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(2147483647).alwaysEdible()}).displayName('Valine_3g Dusts')
    event.create('farmindustry:enriched_valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(2147483647).alwaysEdible()}).displayName('Enriched Valine_3g')
    event.create('farmindustry:valine_3g_ingot').tag('forge:ingots/valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(2147483647).alwaysEdible()}).displayName('Valine_3g Ingot')
    event.create('farmindustry:tiny_valine_3g').rarity('rare').food(f=>{f.hunger(32767).saturation(32767).fastToEat().alwaysEdible()}).displayName('Tiny Valine_3g')
    event.create('farmindustry:half_valine_3g').rarity('epic').food(f=>{f.hunger(1073741823.5).saturation(1073741823.5).alwaysEdible()}).displayName('Half Valine_3g')
    event.create('farmindustry:darkness_pot').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:peace_of_darkness_pot_1')
    event.create('farmindustry:peace_of_darkness_pot_2')
    event.create('farmindustry:peace_of_darkness_pot_3')
    event.create('farmindustry:peace_of_darkness_pot_4')
    event.create('farmindustry:abyss_bowl').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:peace_of_abyss_bowl_1')
    event.create('farmindustry:peace_of_abyss_bowl_2')
    event.create('farmindustry:peace_of_abyss_bowl_3')
    event.create('farmindustry:peace_of_abyss_bowl_4')
    event.create('farmindustry:eternal_salad').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:peace_of_eternal_salad_1')
    event.create('farmindustry:peace_of_eternal_salad_2')
    event.create('farmindustry:peace_of_eternal_salad_3')
    event.create('farmindustry:all_being_plate').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:peace_of_all_being_plate_1')
    event.create('farmindustry:peace_of_all_being_plate_2')
    event.create('farmindustry:peace_of_all_being_plate_3')
    event.create('farmindustry:peace_of_all_being_plate_4')
    event.create('farmindustry:chaos_glass').rarity('rare').food(f=>{f.hunger(1024).saturation(1)}).useAnimation('drink')
    event.create('farmindustry:gluttony_cake').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:peace_of_gluttony_cake_1')
    event.create('farmindustry:peace_of_gluttony_cake_2')
    event.create('farmindustry:living_bowl').rarity('rare').food(f=>{f.hunger(32767).saturation(1)})
    event.create('farmindustry:many_kinds_of_bread').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:sea_food_rice').rarity('rare').food(f=>{f.hunger(1024).saturation(1)})
    event.create('farmindustry:ultimate_valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Ultimate Valine_3g')
    event.create('farmindustry:ultimate_valine_3g_ingot').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Ultimate Valine_3g Ingot')
    event.create('farmindustry:ultimate_valine_3g_dusts').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Ultimate Valine_3g Dusts')
    event.create('farmindustry:half_ultimate_valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Half Ultimate Valine_3g')
    event.create('farmindustry:devil_valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Davil Valine_3g')
    event.create('farmindustry:devil_valine_3g_ingot').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Davil Valine_3g Ingot')
    event.create('farmindustry:devil_valine_3g_dusts').rarity('epic').food(f=>{f.hunger(2147483647).saturation(1).alwaysEdible()}).displayName('Davil Valine_3g Dusts')
    event.create('farmindustry:server')
    event.create('farmindustry:eatable_server').food(f=>{f.hunger(32767).saturation(1)})
    event.create('farmindustry:industrial_valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(2147483647).alwaysEdible()}).displayName('Industrial Valine_3g').glow(true)
    event.create('farmindustry:empowered_valine_3g').rarity('epic').food(f=>{f.hunger(2147483647).saturation(2147483647).alwaysEdible()}).displayName('Empowered Valine_3g').glow(true)
}),
StartupEvents.registry('block', event => {
    for (let i = 0; i < ngbling.length; i++) {
        event.create(ngbling[i]+'_block')
    }
    for (let i = 0; i < blgem.length; i++) {
        event.create(blgem[i]+'_block')
    }
    event.create('farmindustry:like_ancient_debris'),
    event.create('farmindustry:like_lapis_block')
    event.create('farmindustry:like_glowstone')
    event.create('farmindustry:cocosteel_block')
}),
StartupEvents.registry('fluid',event=>{
    event.create('farmindustry:liquid_fertilizer_tier1').color(0xb9ff92).thickTexture(0xb9ff92)
    event.create('farmindustry:liquid_fertilizer_tier2').color(0xfec4ff).thickTexture(0xfec4ff)
    event.create('farmindustry:liquid_fertilizer_tier3').color(0xff80a2).thickTexture(0xff80a2)
    event.create('farmindustry:liquid_fertilizer_tier4').color(0xc987ff).thickTexture(0xc987ff)
    event.create('farmindustry:liquid_fertilizer_tier5').color(0x4cdaff).thickTexture(0x4cdaff).density(15)
    event.create('farmindustry:liquid_fertilizer_tier6').color(0xff00ff).thickTexture(0xff00ff).density(15)
    event.create('farmindustry:hot_chocolate').color(0xb67d65).thickTexture(0xb67d65)
    event.create('farmindustry:liquid_chocolate').color(0x6e544a).thickTexture(0x6e544a)
    event.create('farmindustry:apple_juice').color(0xfff2c1).thinTexture(0xfff2c1)
})
StartupEvents.registry('mekanism:infuse_type',event =>{
    event.create('farmindustry:cocoa').color(0x4b3419),
    event.create('farmindustry:certus_quartz').color(0xcbfcff)
    event.create('farmindustry:silicon').color(0x908d90)
    event.create('farmindustry:valine_3g').color(0x9f9ea4)
    event.create('farmindustry:ultimate_valine_3g').color(0x9f9ea4)
    event.create('farmindustry:devil_valine_3g').color(0x9f9ea4)
})
StartupEvents.registry('mekanism:gas',event=>{
    event.create('farmindustry:industrial_valine_3g_gas').color(0xb9a4ca)
    event.create('farmindustry:valine_3g_gas').color(0x9f9ea4).fuel(1,2147483647)
    //event.create('mekanism:hydrogen').color(0xffffff).fuel(1,200)
    //event.create('farmindustry:ethene').displayName('Ethylene').color(0xEACCF9).fuel(40,28200)
})
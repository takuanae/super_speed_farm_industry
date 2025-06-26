function compress(itemIn,amo,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:compresser",1)
            .requireItem(Item.of(itemIn,amo))
            .requireEnergyPerTick(1000)
            .produceItem(Item.of(itemOut))
            .resetOnError()
        event.recipes.mekanism.enriching(itemOut,Item.of(itemIn,amo))
    })
}
function tagcompress(itemIn,amo,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:compresser",1)
            .requireItemTag(itemIn,amo)
            .requireEnergyPerTick(1000)
            .produceItem(Item.of(itemOut))
            .resetOnError()
        event.recipes.mekanism.enriching(itemOut,amo+'x '+itemIn)
    })
}

    const normalmaterial = ['minecraft:wheat_seeds', 'minecraft:pumpkin_seeds', 'minecraft:melon_seeds', 'minecraft:beetroot_seeds', 'minecraft:carrot', 'minecraft:potato', 'minecraft:glow_berries','minecraft:beetroot', 'minecraft:wheat', 'farmersdelight:cabbage', 'farmersdelight:tomato', 'farmersdelight:onion', 'farmersdelight:rice', 'farmersdelight:cabbage_seeds', 'farmersdelight:tomato_seeds', 'farmersdelight:rice_panicle', 'minecraft:sweet_berries', 'minecraft:sugar_cane', 'minecraft:cocoa_beans', 'minecraft:apple', 'minecraft:kelp', 'minecraft:beef', 'minecraft:porkchop', 'minecraft:mutton', 'minecraft:chicken', 'minecraft:rabbit', 'minecraft:cod', 'minecraft:salmon', 'mekanism:alloy_infused', 'mekanism:alloy_reinforced', 'mekanism:alloy_atomic', 'mekanism:basic_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:ultimate_control_circuit','minecraft:leather', 'minecraft:white_wool', 'minecraft:rabbit_hide', 'minecraft:rabbit_foot', 'minecraft:egg', 'minecraft:feather','farmindustry:valine_3g','minecraft:melon', 'minecraft:pumpkin']
    const ingotmaterial =['#forge:ingots/bronze','#forge:ingots/steel','#forge:ingots/refined_obsidian','#forge:ingots/refined_glowstone','#forge:ingots/osmium','#forge:ingots/tin','#forge:ingots/lead','#forge:ingots/uranium']
    const mcingotmaterial = ['#forge:ingots/iron','#forge:ingots/copper','#forge:ingots/gold','#forge:ingots/netherite']
    for (let i = 0; i < normalmaterial.length; i++) {
        compress(normalmaterial[i],64,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_single_compressed'))
        compress(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_single_compressed',64,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_double_compressed'))
        compress(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_double_compressed',64,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_triple_compressed'))
        compress(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_triple_compressed',64,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quadruple_compressed'))
        compress(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quadruple_compressed',64,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quintuple_compressed'))
        compress(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quintuple_compressed',16,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_singularity'))
    }
    for (let i = 0; i < ingotmaterial.length; i++) {
        tagcompress(ingotmaterial[i],64,ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_single_compressed')
        compress(ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_single_compressed',64,ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_double_compressed')
        compress(ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_double_compressed',64,ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_triple_compressed')
        compress(ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_triple_compressed',64,ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quadruple_compressed')
        compress(ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quadruple_compressed',64,ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quintuple_compressed')
        compress(ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quintuple_compressed',16,ingotmaterial[i].replace('#forge:ingots/','farmindustry:ingot_')+'_singularity')
    }
    for (let i = 0; i < mcingotmaterial.length; i++) {
        tagcompress(mcingotmaterial[i],64,mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_single_compressed')
        compress(mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_single_compressed',64,mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_double_compressed')
        compress(mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_double_compressed',64,mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_triple_compressed')
        compress(mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_triple_compressed',64,mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quadruple_compressed')
        compress(mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quadruple_compressed',64,mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quintuple_compressed')
        compress(mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quintuple_compressed',16,mcingotmaterial[i].replace('#forge:ingots/','farmindustry:')+'_ingot_singularity')
    }

ServerEvents.recipes(event=>{
//uncompress
function craft(to,amo,from) {
    event.shapeless(Item.of(to,amo),[from])   
}
for (let i = 0; i < normalmaterial.length; i++) {
    craft(normalmaterial[i],64,(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_single_compressed'))
    craft(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_single_compressed',64,normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_double_compressed')
    craft(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_double_compressed',64,normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_triple_compressed')
    craft(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_triple_compressed',64,normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quadruple_compressed')
    craft(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quadruple_compressed',64,normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quintuple_compressed')
    craft(normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_quintuple_compressed',16,normalmaterial[i].replace('minecraft','farmindustry').replace('farmersdelight','farmindustry').replace('mekanism','farmindustry')+'_singularity')
}
const uncompingot =  ['#forge:ingots/osmium','#forge:ingots/tin','#forge:ingots/lead','#forge:ingots/uranium']
for (let i = 0; i < uncompingot.length; i++) {
    craft(uncompingot[i].replace('#forge:ingots/','farmindustry:like_')+'_ingot',64,(uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_single_compressed'))
    craft((uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_single_compressed'),64,(uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_double_compressed'))
    craft((uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_double_compressed'),64,(uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_triple_compressed'))
    craft((uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_triple_compressed'),64,(uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quadruple_compressed'))
    craft((uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quadruple_compressed'),64,(uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quintuple_compressed'))
    craft((uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quintuple_compressed'),16,(uncompingot[i].replace('#forge:ingots/','farmindustry:ingot_')+'_singularity'))

}
const mcuncomping = ['#forge:ingots/iron','#forge:ingots/copper','#forge:ingots/gold','#forge:ingots/netherite']
for (let i = 0; i < mcuncomping.length; i++) {
    craft(mcuncomping[i].replace('#forge:ingots/','farmindustry:like_')+'_ingot',64,(mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_single_compressed'))
    craft(mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_single_compressed',64,mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_double_compressed')
    craft(mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_double_compressed',64,mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_triple_compressed')
    craft(mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_triple_compressed',64,mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quadruple_compressed')
    craft(mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quadruple_compressed',64,mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quintuple_compressed')
    craft(mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_quintuple_compressed',64,mcuncomping[i].replace('#forge:ingots/','farmindustry:')+'_ingot_singularity')
}
const cncompalloy = ['#forge:ingots/bronze','#forge:ingots/refined_obsidian','#forge:ingots/refined_glowstone']
for (let i = 0; i < cncompalloy.length; i++) {
    craft(cncompalloy[i].replace('#forge:ingots/','mekanism:ingot_'),64,(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_single_compressed'))
    craft(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_single_compressed',64,(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_double_compressed'))
    craft(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_double_compressed',64,(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_triple_compressed'))
    craft(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_triple_compressed',64,(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quadruple_compressed'))
    craft(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quadruple_compressed',64,(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quintuple_compressed'))
    craft(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_quintuple_compressed',64,(cncompalloy[i].replace('#forge:ingots/','farmindustry:ingot_')+'_singularity'))
}
craft('farmindustry:cocosteel_ingot',64,'farmindustry:ingot_steel_single_compressed')
craft('farmindustry:ingot_steel_single_compressed',64,'farmindustry:ingot_steel_double_compressed')
craft('farmindustry:ingot_steel_double_compressed',64,'farmindustry:ingot_steel_triple_compressed')
craft('farmindustry:ingot_steel_triple_compressed',64,'farmindustry:ingot_steel_quadruple_compressed')
craft('farmindustry:ingot_steel_quadruple_compressed',64,'farmindustry:ingot_steel_quintuple_compressed')
craft('farmindustry:ingot_steel_quintuple_compressed',16,'farmindustry:ingot_steel_singularity')
    //recipe 
event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_farm_tier1"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'#forge:chests',
      B:'#forge:ingots/iron',
      C:'#forge:ingots/copper',
      D:'minecraft:dirt'
  })
})
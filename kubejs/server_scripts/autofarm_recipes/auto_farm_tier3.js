function grow(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 5)
            .requireItem(itemIn).chance(0)
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',50))
            .requireEnergyPerTick(320)
            .produceItem(Item.of(itemOut,8))
            .resetOnError()
    })
}
   for (let i = 0; i < crop.length; i++) {
        grow(crop[i],crop[i])
   }
    grow('minecraft:wheat_seeds', 'minecraft:wheat')
    grow('minecraft:beetroot_seeds', 'minecraft:beetroot')
    grow('minecraft:pumpkin_seeds', 'minecraft:pumpkin')
    grow('minecraft:melon_seeds', 'minecraft:melon')
    grow('farmersdelight:rice', 'farmersdelight:rice_panicle')
    grow('farmersdelight:tomato_seeds', 'farmersdelight:tomato')
    grow('farmersdelight:cabbage_seeds', 'farmersdelight:cabbage')
 //animal
 ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:chicken').chance(0)
        .produceItem('16x minecraft:chicken').produceItem('8x minecraft:egg').produceItem('8x minecraft:feather')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:beef').chance(0)
        .produceItem('16x minecraft:beef').produceItem('16x minecraft:leather')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:porkchop').chance(0)
        .produceItem('32x minecraft:porkchop')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:rabbit').chance(0)
        .produceItem('16x minecraft:rabbit').produceItem('8x minecraft:rabbit_hide').produceItem('8x minecraft:rabbit_foot')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:mutton').chance(0)
        .produceItem('16x minecraft:mutton').produceItem('16x minecraft:white_wool')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:cod').chance(0)
        .produceItem('32x minecraft:cod')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier3", 20)
        .requireItem('minecraft:salmon').chance(0)
        .produceItem('32x minecraft:salmon')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
    ServerEvents.recipes(event=>{
        event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_farm_tier3"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'#forge:chests',
      B:'#mekanismadditions:plastic_blocks/plastic',
      C:'#forge:storage_blocks/refined_glowstone',
      D:'minecraft:dirt'
  })
})
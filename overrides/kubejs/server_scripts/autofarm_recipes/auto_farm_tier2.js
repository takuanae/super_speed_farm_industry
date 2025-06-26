function grow(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 20)
            .requireItem(itemIn).chance(0)
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',50))
            .requireEnergyPerTick(20)
            .produceItem(Item.of(itemOut,2))
            .resetOnError()
    })
}
   //const crop =['minecraft:potato','minecraft:carrot','minecraft:sugar_cane','minecraft:sweet_berries','minecraft:glow_berries','minecraft:apple','minecraft:kelp','farmersdelight:onion','minecraft:cocoa_beans']
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
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:chicken').chance(0)
            .produceItem('4x minecraft:chicken').produceItem('2x minecraft:egg').produceItem('2x minecraft:feather')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',50))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:beef').chance(0)
            .produceItem('4x minecraft:beef').produceItem('4x minecraft:leather')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',50))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:porkchop').chance(0)
            .produceItem('8x minecraft:porkchop')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',200))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:rabbit').chance(0)
            .produceItem('4x minecraft:rabbit').produceItem('2x minecraft:rabbit_hide').produceItem('2x minecraft:rabbit_foot')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',200))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:mutton').chance(0)
            .produceItem('4x minecraft:mutton').produceItem('4x minecraft:white_wool')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',200))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:cod').chance(0)
            .produceItem('8x minecraft:cod')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',200))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier2", 80)
            .requireItem('minecraft:salmon').chance(0)
            .produceItem('8x minecraft:salmon')
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',200))
            .requireEnergyPerTick(20)
            .resetOnError()
    })
    ServerEvents.recipes(event=>{
        event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_farm_tier2"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'#forge:chests',
      B:'#forge:ingots/steel',
      C:'#forge:ingots/netherite',
      D:'minecraft:dirt'
  })
})
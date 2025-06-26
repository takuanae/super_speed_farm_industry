function grow(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 1)
            .requireItem(itemIn).chance(0)
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',50))
            .requireEnergyPerTick(256000)
            .produceItem(Item.of(itemOut,64))
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
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:chicken').chance(0)
        .produceItem('128x minecraft:chicken').produceItem('64x minecraft:egg').produceItem('64x minecraft:feather')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:beef').chance(0)
        .produceItem('128x minecraft:beef').produceItem('128x minecraft:leather')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:porkchop').chance(0)
        .produceItem('256x minecraft:porkchop')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:rabbit').chance(0)
        .produceItem('128x minecraft:rabbit').produceItem('64x minecraft:rabbit_hide').produceItem('64x minecraft:rabbit_foot')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:mutton').chance(0)
        .produceItem('128x minecraft:mutton').produceItem('128x minecraft:white_wool')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:cod').chance(0)
        .produceItem('256x minecraft:cod')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier4", 4)
        .requireItem('minecraft:salmon').chance(0)
        .produceItem('256x minecraft:salmon')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',200))
        .requireEnergyPerTick(320)
        .resetOnError()
})
    ServerEvents.recipes(event=>{
        event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_farm_tier4"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'#mekanism:personal_storage',
      B:'mekanismgenerators:fusion_reactor_frame',
      C:'#forge:pellets/polonium',
      D:'mekanism:qio_drive_array'
  })
})
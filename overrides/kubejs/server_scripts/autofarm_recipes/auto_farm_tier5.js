function grow(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 1)
            .requireItem(itemIn).chance(0)
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',50))
            .requireEnergyPerTick(10000000)
            .produceItem(Item.of(itemOut,1))
            .resetOnError()
    })
}
    const cmp2crop= ['farmindustry:carrot_double_compressed', 'farmindustry:potato_double_compressed', 'farmindustry:glow_berries_double_compressed', 'farmindustry:onion_double_compressed', 'farmindustry:sweet_berries_double_compressed', 'farmindustry:sugar_cane_double_compressed', 'farmindustry:apple_double_compressed', 'farmindustry:kelp_double_compressed','farmindustry:cocoa_beans_double_compressed']
   for (let i = 0; i < crop.length; i++) {
        grow(cmp2crop[i],cmp2crop[i])
   }
    grow('farmindustry:wheat_seeds_double_compressed', 'farmindustry:wheat_double_compressed')
    grow('farmindustry:beetroot_seeds_double_compressed', 'farmindustry:beetroot_double_compressed')
    grow('farmindustry:pumpkin_seeds_double_compressed', 'farmindustry:pumpkin_double_compressed')
    grow('farmindustry:melon_seeds_double_compressed', 'farmindustry:melon_double_compressed')
    grow('farmindustry:rice_double_compressed', 'farmindustry:rice_panicle_double_compressed')
    grow('farmindustry:tomato_seeds_double_compressed', 'farmindustry:tomato_double_compressed')
    grow('farmindustry:cabbage_seeds_double_compressed', 'farmindustry:cabbage_double_compressed')
 //animal
 ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('farmindustry:chicken_double_compressed').chance(0)
        .produceItem('2x farmindustry:chicken_double_compressed').produceItem('farmindustry:egg_double_compressed').produceItem('farmindustry:feather_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('minecraft:beef').chance(0)
        .produceItem('2x farmindustry:beef_double_compressed').produceItem('2x farmindustry:leather_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('farmindustry:porkchop_double_compressed').chance(0)
        .produceItem('4x farmindustry:porkchop_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('farmindustry:rabbit_double_compressed').chance(0)
        .produceItem('2x farmindustry:rabbit_double_compressed').produceItem('farmindustry:rabbit_hide_double_compressed').produceItem('farmindustry:rabbit_foot_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('farmindustry:mutton_double_compressed').chance(0)
        .produceItem('2x farmindustry:mutton_double_compressed').produceItem('2x farmindustry:white_wool_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('farmindustry:cod_double_compressed').chance(0)
        .produceItem('4x farmindustry:cod_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier5", 4)
        .requireItem('farmindustry:salmon_double_compressed').chance(0)
        .produceItem('4x farmindustry:salmon_double_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
    ServerEvents.recipes(event=>{
        event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_farm_tier5"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'#mekanism:personal_storage',
      B:'mekanism:sps_casing',
      C:'minecraft:echo_shard',
      D:'mekanism:qio_drive_array'
  })
})
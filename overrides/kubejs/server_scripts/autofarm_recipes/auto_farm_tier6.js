function grow(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 1)
            .requireItem(itemIn).chance(0)
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',50))
            .requireEnergyPerTick(1000000)
            .produceItem(Item.of(itemOut,1))
            .resetOnError()
    })
}
    const cmp4crop= ['farmindustry:carrot_quadruple_compressed', 'farmindustry:potato_quadruple_compressed', 'farmindustry:glow_berries_quadruple_compressed', 'farmindustry:onion_quadruple_compressed', 'farmindustry:sweet_berries_quadruple_compressed', 'farmindustry:sugar_cane_quadruple_compressed', 'farmindustry:apple_quadruple_compressed', 'farmindustry:kelp_quadruple_compressed','farmindustry:cocoa_beans_quadruple_compressed']
   for (let i = 0; i < crop.length; i++) {
        grow(cmp4crop[i],cmp4crop[i])
   }
    grow('farmindustry:wheat_seeds_quadruple_compressed', 'farmindustry:wheat_quadruple_compressed')
    grow('farmindustry:beetroot_seeds_quadruple_compressed', 'farmindustry:beetroot_quadruple_compressed')
    grow('farmindustry:pumpkin_seeds_quadruple_compressed', 'farmindustry:pumpkin_quadruple_compressed')
    grow('farmindustry:melon_seeds_quadruple_compressed', 'farmindustry:melon_quadruple_compressed')
    grow('farmindustry:rice_quadruple_compressed', 'farmindustry:rice_panicle_quadruple_compressed')
    grow('farmindustry:tomato_seeds_quadruple_compressed', 'farmindustry:tomato_quadruple_compressed')
    grow('farmindustry:cabbage_seeds_quadruple_compressed', 'farmindustry:cabbage_quadruple_compressed')
 //animal
 ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('farmindustry:chicken_quadruple_compressed').chance(0)
        .produceItem('2x farmindustry:chicken_quadruple_compressed').produceItem('farmindustry:egg_quadruple_compressed').produceItem('farmindustry:feather_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('minecraft:beef').chance(0)
        .produceItem('2x farmindustry:beef_quadruple_compressed').produceItem('2x farmindustry:leather_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('farmindustry:porkchop_quadruple_compressed').chance(0)
        .produceItem('4x farmindustry:porkchop_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('farmindustry:rabbit_quadruple_compressed').chance(0)
        .produceItem('2x farmindustry:rabbit_quadruple_compressed').produceItem('farmindustry:rabbit_hide_quadruple_compressed').produceItem('farmindustry:rabbit_foot_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('farmindustry:mutton_quadruple_compressed').chance(0)
        .produceItem('2x farmindustry:mutton_quadruple_compressed').produceItem('2x farmindustry:white_wool_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('farmindustry:cod_quadruple_compressed').chance(0)
        .produceItem('4x farmindustry:cod_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
        .requireItem('farmindustry:salmon_quadruple_compressed').chance(0)
        .produceItem('4x farmindustry:salmon_quadruple_compressed')
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',200))
        .requireEnergyPerTick(1000000)
        .resetOnError()
})
//tier6liquid
function grow2(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 1)
            .requireItem(itemIn).chance(0)
            .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',50))
            .requireEnergyPerTick(100000000)
            .produceItem(Item.of(itemOut,1))
            .resetOnError()
    })
}
const cmp6crop= ['farmindustry:carrot_singularity', 'farmindustry:potato_singularity', 'farmindustry:glow_berries_singularity', 'farmindustry:onion_singularity', 'farmindustry:sweet_berries_singularity', 'farmindustry:sugar_cane_singularity', 'farmindustry:apple_singularity', 'farmindustry:kelp_singularity','farmindustry:cocoa_beans_singularity']
for (let i = 0; i < crop.length; i++) {
     grow2(cmp6crop[i],cmp6crop[i])
}
 grow2('farmindustry:wheat_seeds_singularity', 'farmindustry:wheat_singularity')
 grow2('farmindustry:beetroot_seeds_singularity', 'farmindustry:beetroot_singularity')
 grow2('farmindustry:pumpkin_seeds_singularity', 'farmindustry:pumpkin_singularity')
 grow2('farmindustry:melon_seeds_singularity', 'farmindustry:melon_singularity')
 grow2('farmindustry:rice_singularity', 'farmindustry:rice_panicle_singularity')
 grow2('farmindustry:tomato_seeds_singularity', 'farmindustry:tomato_singularity')
 grow2('farmindustry:cabbage_seeds_singularity', 'farmindustry:cabbage_singularity')
//animal
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('farmindustry:chicken_singularity').chance(0)
     .produceItem('2x farmindustry:chicken_singularity').produceItem('farmindustry:egg_singularity').produceItem('farmindustry:feather_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('minecraft:beef').chance(0)
     .produceItem('2x farmindustry:beef_singularity').produceItem('2x farmindustry:leather_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('farmindustry:porkchop_singularity').chance(0)
     .produceItem('4x farmindustry:porkchop_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('farmindustry:rabbit_singularity').chance(0)
     .produceItem('2x farmindustry:rabbit_singularity').produceItem('farmindustry:rabbit_hide_singularity').produceItem('farmindustry:rabbit_foot_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('farmindustry:mutton_singularity').chance(0)
     .produceItem('2x farmindustry:mutton_singularity').produceItem('2x farmindustry:white_wool_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('farmindustry:cod_singularity').chance(0)
     .produceItem('4x farmindustry:cod_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
ServerEvents.recipes(event => {
 event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier6", 4)
     .requireItem('farmindustry:salmon_singularity').chance(0)
     .produceItem('4x farmindustry:salmon_singularity')
     .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',200))
     .requireEnergyPerTick(100000000)
     .resetOnError()
})
    ServerEvents.recipes(event=>{
        event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_farm_tier6"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'#mekanism:personal_storage',
      B:'mekanism:pellet_antimatter',
      C:'#forge:pellets/polonium',
      D:'mekanism:qio_drive_array'
  })
})
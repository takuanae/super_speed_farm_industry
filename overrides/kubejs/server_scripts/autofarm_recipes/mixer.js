ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
        .requireItem(Item.of('minecraft:kelp',2))
        .requireItem(Item.of('farmersdelight:rice_panicle',2))
        .requireFluid(Fluid.of('minecraft:water',1000))
        .requireEnergyPerTick(20)
        .produceFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',500))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
        .requireItem(Item.of('farmindustry:melon_ingot_base',4))
        .requireItemTag('#forge:dusts/iron',4)
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier1',1000))
        .requireEnergyPerTick(320)
        .produceFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',500))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
        .requireItem(Item.of('farmersdelight:shepherds_pie_block',6))
        .requireItem(Item.of('minecraft:cake',6))
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier2',1000))
        .requireFluid(Fluid.of('minecraft:milk',8000))
        .requireEnergyPerTick(6400)
        .produceFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',500))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
        .requireItem(Item.of('farmindustry:many_kinds_of_bread',1))
        .requireItem(Item.of('farmindustry:sea_food_rice',1))
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier3',1000))
        .requireFluid(Fluid.of('farmindustry:hot_chocolate',8000))
        .requireEnergyPerTick(8000)
        .produceFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',500))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
        .requireItem(Item.of('farmindustry:eatable_server',1))
        .requireItem(Item.of('farmindustry:living_bowl',1))
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier4',1000))
        .requireFluid(Fluid.of('mekanism:nutritional_paste',16000))
        .requireEnergyPerTick(16000)
        .produceFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',500))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
        .requireItem(Item.of('farmindustry:ultimate_valine_3g_ingot',6))
        .requireItem(Item.of('farmindustry:devil_valine_3g_ingot',6))
        .requireFluid(Fluid.of('farmindustry:liquid_fertilizer_tier5',1000))
        .requireFluid(Fluid.of('mekanismgenerators:fusion_fuel',16000))
        .requireEnergyPerTick(16000)
        .produceFluid(Fluid.of('farmindustry:liquid_fertilizer_tier6',500))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer",1)
        .requireEnergyPerTick(20)
        .requireItem(Item.of('2x minecraft:beef'))
        .produceFluid(Fluid.of('minecraft:milk',1000))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer",1)
        .requireEnergyPerTick(20)
        .requireItem(Item.of('minecraft:cocoa_beans',4))
        .requireFluid(Fluid.of('minecraft:milk',1000))
        .produceFluid(Fluid.of('farmindustry:liquid_chocolate',1000))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer",1)
        .requireEnergyPerTick(20)
        .requireItem(Item.of('4x minecraft:apple'))
        .requireFluid(Fluid.of('minecraft:water',1000))
        .produceFluid(Fluid.of('farmindustry:apple_juice',1000))
        .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer",1)
        .requireEnergyPerTick(20)
        .requireFluid(Fluid.of('farmindustry:hot_chocolate',1000))
        .requireFluidTag('#minecraft:water',1000)
        .produceItem('minecraft:obsidian')
        .resetOnError()
    
})
ServerEvents.recipes(event=>{
    event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:mixer"}'),
[
  'BCB',
  'DAD',
  'BCB'
],
{
  A:'mekanism:basic_fluid_tank',
  B:'#forge:ingots/iron',
  C:'#forge:ingots/osmium',
  D:'#forge:dusts/redstone'
})
})
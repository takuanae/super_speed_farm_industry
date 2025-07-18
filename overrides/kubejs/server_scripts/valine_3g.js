ServerEvents.recipes(event=>{
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmindustry:valine_3g"}},"mainOutput":{"count":2,"item":"farmindustry:half_valine_3g"}})
    event.recipes.mekanism.enriching('farmindustry:valine_3g','64x farmindustry:tiny_valine_3g')
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
    .requireItem(Item.of('16x farmindustry:beef_quadruple_compressed'))
    .requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
    .requireEnergyPerTick(64000)
    .produceItem(Item.of('farmindustry:tiny_valine_3g'))
    .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
    .requireItem(Item.of('16x farmindustry:porkchop_quadruple_compressed'))
    .requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
    .requireEnergyPerTick(64000)
    .produceItem(Item.of('farmindustry:tiny_valine_3g'))
    .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
    .requireItem(Item.of('16x farmindustry:mutton_quadruple_compressed'))
    .requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
    .requireEnergyPerTick(64000)
    .produceItem(Item.of('farmindustry:tiny_valine_3g'))
    .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
    .requireItem(Item.of('16x farmindustry:rabbit_quadruple_compressed'))
    .requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
    .requireEnergyPerTick(64000)
    .produceItem(Item.of('farmindustry:tiny_valine_3g'))
    .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer", 1)
    .requireItem(Item.of('16x farmindustry:chicken_quadruple_compressed'))
    .requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
    .requireEnergyPerTick(64000)
    .produceItem(Item.of('farmindustry:tiny_valine_3g'))
    .resetOnError()
    event.recipes.custommachinery.custom_machine("autofarms:mixer",1)
    .requireItem(Item.of('farmindustry:half_valine_3g'))
    .requireFluid(Fluid.of('mekanism:nutritional_paste',1))
    .requireEnergyPerTick(32000)
    .produceItem(Item.of('farmindustry:valine_3g'))
    .resetOnError()
//super mixer
event.recipes.custommachinery.custom_machine("autofarms:super_mixer", 1)
.requireItem(Item.of('16x farmindustry:beef_quadruple_compressed'))
.requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
.requireEnergyPerTick(64000)
.produceItem(Item.of('farmindustry:tiny_valine_3g'))
.resetOnError()
event.recipes.custommachinery.custom_machine("autofarms:super_mixer", 1)
.requireItem(Item.of('16x farmindustry:porkchop_quadruple_compressed'))
.requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
.requireEnergyPerTick(64000)
.produceItem(Item.of('farmindustry:tiny_valine_3g'))
.resetOnError()
event.recipes.custommachinery.custom_machine("autofarms:super_mixer", 1)
.requireItem(Item.of('16x farmindustry:mutton_quadruple_compressed'))
.requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
.requireEnergyPerTick(64000)
.produceItem(Item.of('farmindustry:tiny_valine_3g'))
.resetOnError()
event.recipes.custommachinery.custom_machine("autofarms:super_mixer", 1)
.requireItem(Item.of('16x mindustry:rabbit_quadruple_compressed'))
.requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
.requireEnergyPerTick(64000)
.produceItem(Item.of('farmindustry:tiny_valine_3g'))
.resetOnError()
event.recipes.custommachinery.custom_machine("autofarms:super_mixer", 1)
.requireItem(Item.of('16x farmindustry:chicken_quadruple_compressed'))
.requireFluid(Fluid.of('mekanism:sulfuric_acid',8000))
.requireEnergyPerTick(64000)
.produceItem(Item.of('farmindustry:tiny_valine_3g'))
.resetOnError()
event.recipes.custommachinery.custom_machine("autofarms:super_mixer",1)
.requireItem(Item.of('farmindustry:half_valine_3g',10))
.requireFluid(Fluid.of('mekanism:nutritional_paste',10))
.requireEnergyPerTick(320000)
.produceItem(Item.of('farmindustry:valine_3g',10))
.resetOnError()
//valinegas
event.custom({
  "type": "mekanism:oxidizing",
  "input": {
    "ingredient": {
      "item": "farmindustry:valine_3g"
    }
  },
  "output": {
    "amount": 100,
    "gas": "farmindustry:valine_3g_gas"
  }
})
//valine gen
event.recipes.custommachinery.custom_machine("autofarms:valine_generator", 1)
.requireGas('farmindustry:valine_3g_gas 1')
.produceEnergy(2147483647)
.resetOnError()
    event.custom({"type":"mekanism:reaction","duration":1,"fluidInput":{"amount":100,"fluid":"mekanism:nutritional_paste"},"gasInput":{"amount":100,"gas":"mekanism:hydrofluoric_acid"},"itemInput":{"amount":1,"ingredient":{"item":"farmindustry:half_valine_3g"}},"itemOutput":{"count":64,"item":"farmindustry:valine_3g"}})
    event.custom({type:'mekanism:infusion_conversion',input:{'ingredient':{'tag':'forge:dusts/valine_3g'}},output:{'infuse_type':'farmindustry:valine_3g','amount':1}})
    event.recipes.mekanism.crushing('farmindustry:valine_3g_dusts','farmindustry:valine_3g')
    event.recipes.mekanism.metallurgic_infusing('farmindustry:enriched_valine_3g','farmindustry:valine_3g','100x mekanism:fungi')
    event.recipes.mekanism.metallurgic_infusing('farmindustry:valine_3g_ingot','farmindustry:enriched_valine_3g','64x farmindustry:valine_3g')
})
ServerEvents.recipes(event=>{
    event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:valine_generator"}'),
[
  'BCB',
  'DAD',
  'BCB'
],
{
  A:'mekanismgenerators:gas_burning_generator',
  B:'farmindustry:valine_3g',
  C:'mekanismgenerators:fission_reactor_casing',
  D:'mekanismgenerators:fusion_reactor_frame'
})
})
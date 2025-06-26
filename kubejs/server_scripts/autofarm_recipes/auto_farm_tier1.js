function grow(itemIn,itemOut){

    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 160)
            .requireItem(itemIn).chance(0)
            .produceItem(itemOut)
            .resetOnError()
    })
}
    /*
    ['minecraft:wheat','minecraft:carrot',"minecraft:potato"].forEach(crop => {
        grow(40, crop, '2x minecraft:wheat') 
    })*/
   const crop =['minecraft:potato','minecraft:carrot','minecraft:sugar_cane','minecraft:sweet_berries','minecraft:glow_berries','minecraft:apple','minecraft:kelp','farmersdelight:onion','minecraft:cocoa_beans']
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
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:chicken').chance(0)
            .produceItem('2x minecraft:chicken').produceItem('minecraft:egg').produceItem('minecraft:feather')
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:beef').chance(0)
            .produceItem('2x minecraft:beef').produceItem('2x minecraft:leather')
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:porkchop').chance(0)
            .produceItem('4x minecraft:porkchop')
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:rabbit').chance(0)
            .produceItem('2x minecraft:rabbit').produceItem('minecraft:rabbit_hide').produceItem('minecraft:rabbit_foot')
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:mutton').chance(0)
            .produceItem('2x minecraft:mutton').produceItem('2x minecraft:white_wool')
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:cod').chance(0)
            .produceItem('4x minecraft:cod')
            .resetOnError()
    })
    ServerEvents.recipes(event => {
        event.recipes.custommachinery.custom_machine("autofarms:auto_farm_tier1", 640)
            .requireItem('minecraft:salmon').chance(0)
            .produceItem('4x minecraft:salmon')
            .resetOnError()
    })

    ServerEvents.recipes(event=>{
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
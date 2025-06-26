function pot(fluid,bowl, Output, Input1, Input2, Input3, Input4, Input5, Input6) {
    ServerEvents.recipes(event => {
        const recipe = event.recipes.custommachinery.custom_machine("autofarms:auto_cooking_pot", 1)
            .requireEnergy(200)
            .produceItem(Output)
            .resetOnError();

        if (fluid =='none'){}else{recipe.requireFluid(fluid)};
        if (Input1!=null){
            if(Input1.includes('#')){
                recipe.requireItemTag(Input1)
            }
            else{
                recipe.requireItem(Input1)
            }
        };
        if (Input2!=null){if(Input2.includes('#')){recipe.requireItemTag(Input2)}else{recipe.requireItem(Input2)}};
        if (Input3!=null){if(Input3.includes('#')){recipe.requireItemTag(Input3)}else{recipe.requireItem(Input3)}};
        if (Input4!=null){if(Input4.includes('#')){recipe.requireItemTag(Input4)}else{recipe.requireItem(Input4)}};
        if (Input5!=null){if(Input5.includes('#')){recipe.requireItemTag(Input5)}else{recipe.requireItem(Input5)}};
        if (Input6!=null){if(Input6.includes('#')){recipe.requireItemTag(Input6)}else{recipe.requireItem(Input6)}};
        if (bowl!='none') recipe.requireItem(bowl,'bowl');
    });
}
pot('none','minecraft:bowl','farmersdelight:baked_cod_stew', '#forge:raw_fishes/cod', 'minecraft:potato', 'minecraft:egg', 'farmersdelight:tomato');
pot('none','minecraft:bowl','farmersdelight:cooked_rice','farmersdelight:rice');
pot('none','minecraft:bowl','farmersdelight:squid_ink_pasta','#forge:raw_fishes','farmersdelight:raw_pasta','farmersdelight:tomato','minecraft:ink_sac')
pot('none','minecraft:bowl','farmersdelight:bone_broth','minecraft:bone','#forge:mushrooms')
pot('none','minecraft:bowl','minecraft:rabbit_stew','minecraft:rabbit','minecraft:carrot','#forge:mushrooms')
pot('none','none','farmersdelight:cabbage_rolls','#forge:salad_ingredients','#farmersdelight:cabbage_roll_ingredients')
pot('none','minecraft:bowl','farmersdelight:beef_stew','#forge:raw_beef','minecraft:carrot','minecraft:potato')
pot('none','minecraft:bowl','farmersdelight:mushroom_rice','minecraft:brown_mushroom','minecraft:red_mushroom','farmersdelight:rice','minecraft:potato')
pot('none','minecraft:bowl','farmersdelight:vegetable_noodles','minecraft:carrot','minecraft:brown_mushroom','farmersdelight:raw_pasta','#forge:salad_ingredients','#forge:vegetables')
pot('none','none','2x farmersdelight:dumplings','farmersdelight:wheat_dough','#forge:salad_ingredients','farmersdelight:onion','minecraft:porkchop')
pot('none','minecraft:bowl','farmersdelight:fried_rice','farmersdelight:rice','minecraft:egg','minecraft:carrot','farmersdelight:onion')
pot('none','minecraft:bowl','minecraft:mushroom_stew','minecraft:brown_mushroom','minecraft:red_mushroom')
pot('none','minecraft:pumpkin','farmersdelight:stuffed_pumpkin_block','farmersdelight:rice','farmersdelight:onion','minecraft:brown_mushroom','minecraft:potato','#minecraft:fox_food','#forge:vegetables')
pot('none','minecraft:bowl','farmersdelight:pasta_with_meatballs','farmersdelight:minced_beef','farmersdelight:raw_pasta','farmersdelight:tomato_sauce')
pot('none','minecraft:bowl','farmersdelight:chicken_soup','#forge:raw_chicken','minecraft:carrot','#forge:salad_ingredients','#forge:vegetables')
pot('none','minecraft:bowl','farmersdelight:tomato_sauce','farmersdelight:tomato','farmersdelight:tomato')
pot('minecraft:milk','minecraft:glass_bottle','farmersdelight:glow_berry_custard','minecraft:glow_berries','minecraft:egg','minecraft:sugar')
pot('none','minecraft:bowl','farmersdelight:dog_food','minecraft:rotten_flesh','minecraft:bone_meal','#minecraft:wolf_prey','farmersdelight:rice')
pot('none','minecraft:bowl','minecraft:beetroot_soup','minecraft:beetroot','minecraft:beetroot','minecraft:beetroot')
pot('none','minecraft:bowl','farmersdelight:pasta_with_mutton_chop','#forge:raw_mutton','farmersdelight:raw_pasta','farmersdelight:tomato_sauce')
pot('none','minecraft:bowl','farmersdelight:ratatouille','farmersdelight:tomato','farmersdelight:onion','minecraft:beetroot','#forge:vegetables')
pot('minecraft:milk','minecraft:bowl','farmersdelight:pumpkin_soup','farmersdelight:pumpkin_slice','#forge:salad_ingredients','#forge:raw_pork')
pot('none','minecraft:glass_bottle','farmersdelight:apple_cider','minecraft:apple','minecraft:apple','minecraft:sugar')
pot('minecraft:milk','minecraft:glass_bottle','farmersdelight:hot_cocoa','minecraft:sugar','minecraft:cocoa_beans','minecraft:cocoa_beans')
pot('none','minecraft:bowl','farmersdelight:noodle_soup','farmersdelight:raw_pasta','farmersdelight:fried_egg','minecraft:dried_kelp','#forge:raw_pork')
pot('none','minecraft:bowl','farmersdelight:fish_stew','#forge:raw_fishes','farmersdelight:tomato_sauce','farmersdelight:onion')
pot('none','minecraft:bowl','farmersdelight:vegetable_soup','minecraft:carrot','minecraft:potato','minecraft:beetroot','#forge:salad_ingredients')


ServerEvents.recipes(event=>{
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmersdelight:wheat_dough"}},"mainOutput":{"item":"farmersdelight:raw_pasta"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"minecraft:cake"}},"mainOutput":{"count": 7,"item":"farmersdelight:cake_slice"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmersdelight:sweet_berry_cheesecake"}},"mainOutput":{"count": 4,"item":"farmersdelight:sweet_berry_cheesecake_slice"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmersdelight:apple_pie"}},"mainOutput":{"count": 4,"item":"farmersdelight:apple_pie_slice"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmersdelight:chocolate_pie"}},"mainOutput":{"count": 4,"item":"farmersdelight:chocolate_pie_slice"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmersdelight:kelp_roll"}},"mainOutput":{"count": 3,"item":"farmersdelight:kelp_roll_slice"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"minecraft:pumpkin"}},"mainOutput":{"count": 4,"item":"farmersdelight:pumpkin_slice"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"farmersdelight:cabbage"}},"mainOutput":{"count": 2,"item":"farmersdelight:cabbage_leaf"}})
    event.recipes.mekanism.combining('farmersdelight:ham','minecraft:porkchop','minecraft:bone')
    event.recipes.mekanism.combining('4x farmersdelight:honey_glazed_ham','farmersdelight:honey_glazed_ham_block','minecraft:bowl')
    event.recipes.mekanism.combining('4x farmersdelight:roast_chicken','farmersdelight:roast_chicken_block','minecraft:bowl')
    event.recipes.mekanism.combining('4x farmersdelight:shepherds_pie','farmersdelight:shepherds_pie_block','minecraft:bowl')
    event.recipes.mekanism.combining('4x farmersdelight:stuffed_pumpkin','farmersdelight:stuffed_pumpkin_block','minecraft:bowl')

    
event.shaped(Item.of('custommachinery:custom_machine_item','{machine:"autofarms:auto_cooking_pot"}'),
  [
      'CBC',
      'BAB',
      'BDB'
  ],
  {
      A:'farmersdelight:cooking_pot',
      B:'minecraft:bricks',
      C:'#forge:ingots/iron',
      D:'mekanism:basic_energy_cube'
  })
})
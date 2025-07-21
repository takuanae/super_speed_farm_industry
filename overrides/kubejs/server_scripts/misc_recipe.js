ServerEvents.recipes(event=>{
    event.replaceInput({input: 'minecraft:quartz' },'minecraft:quartz','#forge:gems/quartz')
    event.shaped(
        Item.of('minecraft:oak_log',32),
        [
            'AA ',
            'AA '
        ],
        {
            A:'minecraft:hay_block'
        }
    ),
    event.shaped(
        Item.of('minecraft:crafting_table'),
        [
            'AA ',
            'AA '
        ],
        {
            A:'minecraft:wheat'
        }
    ),
    event.shaped(
        Item.of('minecraft:dirt',16),
        [
            'AA ',
            'AA '
        ],
        {
            A:'minecraft:potato'
        }
    ),
    event.shaped(
        Item.of('minecraft:cobblestone',16),
        [
            'AA ',
            'AA '
        ],
        {
            A:'farmersdelight:rice'
        }
    ),
    event.shaped(Item.of('ring_of_growth:ring_of_growth'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A:'minecraft:wheat',
            B:'minecraft:wheat_seeds'
        }
    ),
    event.shaped(Item.of('minecraft:yellow_bed'),
    [
        'AAA',
        'BBB'
    ],
    {
        A:'minecraft:paper',
        B:'minecraft:hay_block'
    }
),
event.shaped(Item.of('minecraft:string',3),
[
    'AAA'
],
{
    A:'farmersdelight:rice_panicle',
}
),
event.shaped(Item.of('minecraft:bamboo',12),
[
    'A',
    'A',
    'A'
],
{
    A:'minecraft:sugar_cane',
}
)
/*
event.shaped(Item.of(),
[
    '   ',
    '   ',
    '   '
],
{
    A:,
}
)
*/
event.shaped(Item.of('minecraft:bone'),
[
    'A',
    'A',
    'A'
],
{
    A:'minecraft:bone_meal'
}
)
event.shaped(Item.of('minecraft:blaze_rod'),
[
    'A',
    'A',
    'A'
],
{
    A:'minecraft:baked_potato'
}
)
//infwand
event.remove({id:'constructionwand:infinity_wand'})
    event.shaped(
        Item.of('constructionwand:infinity_wand'),
        [
            '  A',
            ' B ',
            'B  '
        ],
        {
            A:'#mekanism:alloys/atomic',
            B:'#forge:rods/wooden'
        }
),
//angelring
event.remove({id:'angelring:diamond_ring'})
event.remove({id:'angelring:angel_ring'})
event.remove({id:'angelring:energetic_angel_ring'})
event.remove({id:'constructionwand:infinity_wand'})
    event.shaped(
        Item.of('angelring:energetic_angel_ring'),
        [
            'ABA',
            'EDE',
            'ACA'
        ],
        {
            A:'#mekanism:alloys/infused',
            B:'mekanism:jetpack',
            C:'mekanism:free_runners',
            D:'mekanism:ultimate_control_circuit',
            E:'mekanism:electrolytic_separator'
        }
),
//flux
event.recipes.mekanism.metallurgic_infusing('fluxnetworks:flux_dust','#forge:dusts/redstone','10x mekanism:carbon')
event.recipes.mekanism.metallurgic_infusing('minecraft:ender_pearl','#forge:dusts/emerald','40x mekanism:refined_obsidian')
event.recipes.mekanism.metallurgic_infusing('minecraft:amethyst_shard','#forge:gems/quartz','40x mekanism:refined_obsidian')
event.recipes.mekanism.metallurgic_infusing('minecraft:snowball','minecraft:egg','10x mekanism:tin')
event.recipes.mekanism.metallurgic_infusing('2x minecraft:clay','#minecraft:wool','10x mekanism:bio')
event.recipes.mekanism.metallurgic_infusing('minecraft:nether_wart','minecraft:sweet_berries','10x mekanism:redstone')
event.recipes.mekanism.enriching('minecraft:ice','snowball')
event.smelting('4x minecraft:glass','minecraft:hay_block')
event.custom({"type":"mekanism:nucleosynthesizing","duration":1250,"gasInput":{"amount":5,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"item":"farmersdelight:glow_berry_custard"}},"output":{"item":"minecraft:nether_star"}})
event.custom({"type":"mekanism:nucleosynthesizing","duration":1250,"gasInput":{"amount":5,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"tag":"forge:gems/amethyst"}},"output":{"item":"minecraft:echo_shard"}})
event.recipes.mekanism.injecting('minecraft:ghast_tear','minecraft:blue_ice','200x mekanism:hydrogen_chloride')
event.recipes.mekanism.injecting('minecraft:chorus_fruit','minecraft:apple','100x mekanism:ethene')
event.recipes.mekanism.sawing('minecraft:brown_mushroom','minecraft:dirt','minecraft:red_mushroom')
event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"minecraft:dirt"}},"mainOutput":{"item":"minecraft:brown_mushroom"},"secondaryChance":1.0,"secondaryOutput":{"item":"minecraft:red_mushroom"}})
event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"minecraft:netherrack"}},"mainOutput":{"item":"minecraft:warped_fungus"},"secondaryChance":1.0,"secondaryOutput":{"item":"minecraft:crimson_fungus"}})
event.shaped(Item.of('minecraft:shulker_shell'),
[
    'AAA',
    'ABA'
],
{
    A:'minecraft:purpur_block',
    B:'minecraft:egg'
}
)
event.shaped(Item.of('minecraft:netherite_upgrade_smithing_template'),
[
    'AAA',
    'ABA',
    'AAA'
],
{
    A:'#forge:ingots/netherite',
    B:'#forge:gems/diamond'
}
)
event.shaped(Item.of('minecraft:elytra'),
[
    'BAB',
    'BBB',
    'C C'
],
{
    A:'farmindustry:ultimate_control_circuit_single_compressed',
    B:'#forge:ingots/tin',
    C:'farmindustry:alloy_atomic_single_compressed'
}
)
event.recipes.mekanism.metallurgic_infusing('2x minecraft:bee_nest','minecraft:bee_nest','10x mekanism:bio')
event.recipes.mekanism.crushing('minecraft:honey_block','minecraft:bee_nest')
event.recipes.mekanism.metallurgic_infusing('minecraft:spider_eye','#forge:ender_pearls','10x mekanism:fungi')
event.recipes.mekanism.metallurgic_infusing('minecraft:rotten_flesh','minecraft:porkchop','10x mekanism:fungi')
event.custom({"type":"mekanism:nucleosynthesizing","duration":20,"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"item":"minecraft:potato"}},"output":{"item":"minecraft:poisonous_potato"}})
event.recipes.mekanism.combining('minecraft:pufferfish','#minecraft:fishes','minecraft:poisonous_potato')
event.recipes.mekanism.combining('minecraft:tropical_fish', '#minecraft:fishes', 'ae2:controller')
event.smelting('farmindustry:hot_chocolate_bucket','farmindustry:liquid_chocolate_bucket')
event.recipes.mekanism.crushing('minecraft:netherrack',[Item.of('minecraft:beef',4),Item.of('minecraft:chicken',4),Item.of('minecraft:porkchop',4),Item.of('minecraft:rabbit',4),Item.of('minecraft:mutton',4)])
event.recipes.mekanism.compressing('minecraft:prismarine_shard','minecraft:amethyst_shard','1x mekanism:osmium')
event.recipes.mekanism.metallurgic_infusing('minecraft:prismarine_crystals','#forge:dusts/prismarine','mekanism:gold')
event.custom({'type':'mekanism:evaporating','input':{'amount':10,'fluid':'farmindustry:liquid_chocolate'},'output':{'amount':10,'fluid':'farmindustry:hot_chocolate'}})
//oredic
const oredic1 = ['minecraft:iron_ingot', 'minecraft:copper_ingot', 'minecraft:gold_ingot', 'minecraft:netherite_ingot', 'minecraft:glowstone_dust', 'minecraft:lapis_block', 'minecraft:diamond_block', 'minecraft:iron_block', 'minecraft:redstone','minecraft:redstone_block']
const oredic2 = ['#forge:ingots/iron','#forge:ingots/copper','#forge:ingots/gold','#forge:ingots/netherite','#forge:dusts/glowstone','#forge:storage_blocks/lapis','#forge:storage_blocks/diamond','#forge:storage_blocks/iron','#forge:dusts/redstone','#forge:storage_blocks/redstone']
for (let i = 0; i < oredic1.length; i++) {
    event.replaceInput({input:oredic1[i]},oredic1[i],oredic2[i])
}
event.shapeless(Item.of('minecraft:farmland'),
        ['minecraft:dirt','#minecraft:hoes']
    ).damageIngredient('#minecraft:hoes')
event.smelting('minecraft:bread','farmindustry:flour').xp(0.35),
event.smoking('minecraft:bread','farmindustry:flour').xp(0.35),
event.campfireCooking('minecraft:bread','farmindustry:flour').xp(0.35)
//apple_juice replace water
const slurry = ['iron','gold','copper','osmium','lead','tin','uranium']
for (let i = 0; i < slurry.length; i++) {
    event.remove({id:'mekanism:processing/'+slurry[i]+'/slurry/clean'})
    event.custom({"type":"mekanism:washing","fluidInput":{"amount":5,"fluid":"farmindustry:apple_juice"},"output":{"amount":1,"slurry":"mekanism:clean_"+slurry[i]+""},"slurryInput":{"amount":1,"slurry":"mekanism:dirty_"+slurry[i]}})
}
event.remove({id:'mekanism:separator/water'})
event.custom({"type":"mekanism:separating","input":{"amount":2,"fluid":"farmindustry:apple_juice"},"leftGasOutput":{"amount":2,"gas":"mekanism:hydrogen"},"rightGasOutput":{"amount":1,"gas":"mekanism:oxygen"}})
event.remove({id:'mekanism:evaporating/brines'})
event.custom({'type':'mekanism:evaporating','input':{'amount':10,'fluid':'farmindustry:apple_juice'},'output':{'amount':10,'fluid':'mekanism:brine'}})
event.remove({id:'mekanism:reaction/substrate/water_ethene'})
event.custom({"type":"mekanism:reaction","duration":400,"energyRequired":200,"fluidInput":{"amount":200,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":100,"gas":"mekanism:ethene"},"gasOutput":{"amount":10,"gas":"mekanism:oxygen"},"itemInput":{"ingredient":{"item":"mekanism:substrate"}},"itemOutput":{"count":8,"item":"mekanism:substrate"}})
event.remove({id:'mekanism:reaction/substrate/water_hydrogen'})
event.custom({"type":"mekanism:reaction","duration":100,"fluidInput":{"amount":10,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":100,"gas":"mekanism:hydrogen"},"gasOutput":{"amount":100,"gas":"mekanism:ethene"},"itemInput":{"amount":2,"ingredient":{"tag":"forge:fuels/bio"}},"itemOutput":{"item":"mekanism:substrate"}})
event.remove({id:'mekanism:reaction/coal_gasification/blocks_coals'})
event.custom({"type":"mekanism:reaction","duration":900,"fluidInput":{"amount":1000,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":1000,"gas":"mekanism:oxygen"},"gasOutput":{"amount":1000,"gas":"mekanism:hydrogen"},"itemInput":{"ingredient":[{"tag":"forge:storage_blocks/coal"},{"tag":"forge:storage_blocks/charcoal"}]},"itemOutput":{"count":9,"item":"mekanism:dust_sulfur"}})
event.remove({id:'mekanism:reaction/coal_gasification/coals'})
event.custom({"type":"mekanism:reaction","duration":100,"fluidInput":{"amount":100,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":100,"gas":"mekanism:oxygen"},"gasOutput":{"amount":100,"gas":"mekanism:hydrogen"},"itemInput":{"ingredient":{"tag":"minecraft:coals"}},"itemOutput":{"item":"mekanism:dust_sulfur"}})
event.remove({id:'mekanism:reaction/coal_gasification/dusts_coals'})
event.custom({"type":"mekanism:reaction","duration":100,"fluidInput":{"amount":100,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":100,"gas":"mekanism:oxygen"},"gasOutput":{"amount":100,"gas":"mekanism:hydrogen"},"itemInput":{"ingredient":[{"tag":"forge:dusts/coal"},{"tag":"forge:dusts/charcoal"}]},"itemOutput":{"item":"mekanism:dust_sulfur"}})
event.remove({id:'mekanism:processing/lategame/polonium_pellet/from_reaction'})
event.custom({"type":"mekanism:reaction","duration":100,"fluidInput":{"amount":1000,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":1000,"gas":"mekanism:polonium"},"gasOutput":{"amount":1000,"gas":"mekanism:spent_nuclear_waste"},"itemInput":{"ingredient":{"tag":"forge:dusts/fluorite"}},"itemOutput":{"item":"mekanism:pellet_polonium"}})
event.remove({id:'mekanism:processing/lategame/plutonium_pellet/from_reaction'})
event.custom({"type":"mekanism:reaction","duration":100,"fluidInput":{"amount":1000,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":1000,"gas":"mekanism:plutonium"},"gasOutput":{"amount":1000,"gas":"mekanism:spent_nuclear_waste"},"itemInput":{"ingredient":{"tag":"forge:dusts/fluorite"}},"itemOutput":{"item":"mekanism:pellet_plutonium"}})
event.remove({id:'mekanism:enriching/dye/small_red'})
event.remove({id:'mekanism:enriching/dye/brown'})
event.remove({id: 'mekanism:processing/uranium/yellow_cake_uranium'})
event.recipes.mekanism.enriching('mekanism:yellow_cake_uranium','#forge:dusts/uranium')
})

//apple_juice replace water
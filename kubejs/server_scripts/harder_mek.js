ServerEvents.recipes(event=>{
    event.remove({id:'mekanism:control_circuit/basic'})
    event.remove({id:'mekanism:control_circuit/advanced'})
    event.remove({id:'mekanism:control_circuit/elite'})
    event.remove({id:'mekanism:control_circuit/ultimate'})
    event.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit','4x #forge:ingots/osmium','80x mekanism:redstone')
    event.remove({id:'mekanism:crusher'})
    event.shaped(Item.of('mekanism:crusher'),
    [
        'BDB',
        'CAC',
        'BDB'
    ],
    {
    A:'mekanism:steel_casing',
    B:'#mekanism:alloys/basic',
    C:['minecraft:lava_bucket','farmindustry:hot_chocolate_bucket'],
    D:'mekanism:basic_control_circuit'
    }
    ),
    event.shaped(Item.of('mekanism:advanced_control_circuit'),
        [
            'BAB',
            'A A',
            'BAB'
        ],
        {
        A:'#mekanism:alloys/infused',
        B:'mekanism:basic_control_circuit'
        }
    ),
    event.shaped(Item.of('mekanism:elite_control_circuit'),
    [
        'BAB',
        'A A',
        'BAB'
    ],
    {
        A:'#mekanism:alloys/reinforced',
        B:'mekanism:advanced_control_circuit'
    }
    )
    event.shaped(Item.of('mekanism:ultimate_control_circuit'),
    [
        'BAB',
        'A A',
        'BAB'
    ],
    {
        A:'#mekanism:alloys/atomic',
        B:'mekanism:elite_control_circuit'
    }
    )
    event.remove({id:'mekanismgenerators:fission_reactor/casing'})
    event.shaped(Item.of('mekanismgenerators:fission_reactor_casing',4),
    [
        'CBC',
        'BAB',
        'CBC'
    ],
    {
        A:'mekanism:steel_casing',
        B:'#forge:ingots/lead',
        C:'#forge:dusts/lithium'
    }
    )
    //event.custom({"type":"mekanism:reaction","duration":1,"fluidInput":{"amount":1,"fluid":"farmindustry:apple_juice"},"gasInput":{"amount":1000,"gas":"mekanism:ethene"},"gasOutput":{"amount":2000,"gas":"farmindustry:ethene"},"itemInput":{"ingredient":{"item":"mekanism:bio_fuel"}},"itemOutput":{"count":1,"item":"mekanism:bio_fuel"}})
    //alloy
    event.remove({id:'mekanism:metallurgic_infusing/alloy/atomic'})
    event.remove({id:'mekanism:metallurgic_infusing/alloy/reinforced'})
    event.remove({id:'mekanism:metallurgic_infusing/alloy/infused'})
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_atomic','4x #mekanism:alloys/reinforced','160x mekanism:refined_obsidian')
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_reinforced','4x #mekanism:alloys/infused','80x mekanism:diamond')
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused','4x #forge:ingots/iron','40x mekanism:redstone')
    event.remove({id:'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'})
    event.remove({id:'mekanism:processing/refined_obsidian/ingot/from_dust'})
    event.recipes.mekanism.metallurgic_infusing('mekanism:dust_refined_obsidian','mekanism:dust_obsidian','80x mekanism:diamond')
    event.recipes.mekanism.compressing('mekanism:ingot_refined_obsidian','mekanism:dust_refined_obsidian','4x mekanism:osmium')
    //storage
    event.remove({id:'mekanism:qio_drive_base'})
    event.remove({id:'mekanism:qio_drive_hyper_dense'})
    event.remove({id:'mekanism:qio_drive_time_dilating'})
    event.remove({id:'mekanism:qio_drive_supermassive'})
    function storage(output,center,disk,ingot,ae) {
        event.shaped(Item.of(output),
        [
            'CBD',
            'BAB',
            'DBC'
        ],
        {
            A:center,
            B:disk,
            C:ingot,
            D:ae
        }
        )
    }
    storage('mekanism:qio_drive_base','#forge:pellets/polonium','mekanism:ultimate_control_circuit', '#forge:ingots/lead', 'ae2additions:super_cell_component_256k')
    storage('mekanism:qio_drive_hyper_dense', 'ae2:matter_ball', 'mekanism:qio_drive_base', 'farmindustry:copper_ingot_single_compressed', 'ae2additions:super_cell_component_1024k')
    storage('mekanism:qio_drive_time_dilating', 'ae2:singularity', 'mekanism:qio_drive_hyper_dense', 'farmindustry:ingot_steel_double_compressed', 'ae2additions:super_cell_component_4096k')
    storage('mekanism:qio_drive_supermassive', 'mekanism:ultimate_induction_provider', 'mekanism:qio_drive_time_dilating', 'farmindustry:alloy_atomic_triple_compressed', 'ae2additions:super_cell_component_65m')
//nuclear
event.custom({"type":"mekanism:centrifuging","input":{"amount":5,"gas":"mekanism:spent_nuclear_waste"},"output":{"amount":1,"gas":"mekanism:fissile_fuel"}})
})
ItemEvents.tooltip(event => {
      event.add('ae2:inscriber', Text.red('このパックではinscriberは使用できません。代わりにmekanismのcombinerでAE2のcircuit類が作成できます。'))
      event.add('minecraft:bee_nest',('苗木の隣に花がある状態で木が成長すると5%の確率で生成されます。      '))
      event.add('pipez:infinity_upgrade',Text.red('過剰に使用するとワールドを破壊する恐れのあるUltimate Upgradeより上位のアイテムです。よく考えて使いましょう。'))
})
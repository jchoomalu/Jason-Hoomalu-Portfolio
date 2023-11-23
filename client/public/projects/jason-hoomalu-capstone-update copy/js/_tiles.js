let tileData = {
    getSrcById: function (id) {
        return this.tiles[id].src
    },
    getOpenById: function (id) {
        return this.tiles[id].open
    },
    getFrontById: function (id) {
      return this.tiles[id].front
    },
    findById: function (id) {
        return this.tiles.find(e => e.id === id)
    },
    tiles: [
        {
            id: 0,
            open: true,
            src: "images/landscape/grass0.png",
        },
        {
            id: 1,
            open: true,
            src: "images/landscape/darkgrass0.png",
        },
        {
            id: 2,
            open: true,
            src: "images/landscape/grass1.png",
        },
        {
            id: 3,
            open: false,
            src: "images/landscape/grass2.png",
        },
        {
            id: 4,
            open: false,
            src: "images/landscape/grass3.png",
        },
        {
            id: 5,
            open: true,
            front: true,
            src: "images/landscape/bigTree0.png",
        },
        {
            id: 6,
            open: true,
            front: true,
            src: "images/landscape/bigTree1.png",
        },
        {
            id: 7,
            open: false,
            src: "images/landscape/bigTree2.png",
        },
        {
            id: 8,
            open: false,
            src: "images/landscape/bigTree3.png",
        },
        {
            id: 9,
            open: false,
            src: "images/landscape/roundTree.png",
        },
        {
            id: 10,
            open: false,
            src: "images/landscape/palmTree.png",
        },
        {
            id: 11,
            open: false,
            src: "images/landscape/pineTree.png",
        },
        {
            id: 12,
            open: true,
            front: true,
            src: "images/landscape/pineGroup0.png",
        },
        {
            id: 13,
            open: true,
            front: true,
            src: "images/landscape/pineGroup1.png",
        },
        {
            id: 14,
            open: false,
            src: "images/landscape/pineGroup2.png",
        },
        {
            id: 15,
            open: false,
            src: "images/landscape/pineGroup3.png",
        },
        {
            id: 16,
            open: false,
            src: "images/landscape/brickDoor0.png",
        },
        {
            id: 17,
            open: false,
            src: "images/landscape/brickDoor1.png",
        },
        {
            id: 18,
            open: false,
            src: "images/landscape/brickDoor2.png",
        },
        {
            id: 19,
            open: false,
            src: "images/landscape/brickDoor3.png",
        },
        {
            id: 20,
            open: false,
            src: "images/landscape/roof11.png",
        },
        {
            id: 21,
            open: false,
            src: "images/landscape/roof12.png",
        },
        {
            id: 22,
            open: false,
            src: "images/landscape/roof13.png",
        },
        {
            id: 23,
            open: false,
            src: "images/landscape/trim0.png",
        },
        {
            id: 24,
            open: false,
            src: "images/landscape/trim1.png",
        },
        {
            id: 25,
            open: false,
            src: "images/landscape/trim2.png",
        },
        {
            id: 26,
            open: false,
            src: "images/landscape/trim3.png",
        },
        {
            id: 27,
            open: false,
            src: "images/landscape/shadow0.png",
        },
        {
            id: 28,
            open: false,
            src: "images/landscape/shadow1.png",
        },
        {
            id: 29,
            open: false,
            src: "images/landscape/shadow2.png",
        },
        {
            id: 30,
            open: false,
            src: "images/landscape/shadow3.png",
        },
        {
            id: 31,
            open: false,
            src: "images/npc/_0snake.png",
        },
        {
            id: 32,
            open: false,
            src: "images/npc/_1skeeter.png",
        },
        {
            id: 33,
            open: false,
            src: "images/npc/_2mink.png",
        },
        {
            id: 34,
            open: false,
            src: "images/npc/_3worb.png",
        },
        {
            id: 35,
            open: false,
            src: "images/npc/_4sissix.png",
        },
        {
            id: 36,
            open: false,
            src: "images/npc/_5kraus.png",
        },
        {
            id: 37,
            open: false,
            src: "images/npc/_6kat.png",
        },
        {
            id: 38,
            open: false,
            src: "images/npc/_7marine.png",
        },
        {
            id: 39,
            open: false,
            src: "images/npc/_8zealot.png",
        },
        {
            id: 40,
            open: false,
            src: "images/npc/_9zealot.png",
        },
        {
            id: 41,
            open: false,
            src: "images/npc/_10becky.png",
        },
        {
            id: 42,
            open: false,
            src: "images/npc/_11garret.png",
        },
        {
            id: 43,
            open: false,
            src: "images/npc/_12sarah.png",
        },
        {
            id: 44,
            open: false,
            src: "images/npc/_13hydralisk.png",
        },
        {
            id: 45,
            open: false,
            src: "images/npc/_14altar.png",
        },
        {
            id: 46,
            open: false,
            src: "images/npc/_15banth.png",
        },
        {
            id: 47,
            open: false,
            src: "images/npc/_16banth.png",
        },
        {
            id: 48,
            open: false,
            src: "images/npc/_17cody.png",
        },
        {
            id: 49,
            open: false,
            src: "images/npc/_18zorah.png",
        },
        {
            id: 50,
            open: false,
            src: "images/npc/_19redfield.png",
        },
        {
            id: 51,
            open: false,
            src: "images/npc/_20cortana.png",
        },
        {
            id: 52,
            open: false,
            src: "images/npc/_21eevee.png",
        },
        {
            id: 53,
            open: false,
            src: "images/npc/_22flynn.png",
        },
        {
            id: 54,
            open: false,
            src: "images/npc/_23mali.png",
        },
        {
            id: 55,
            open: false,
            src: "images/npc/_24oro.png",
        },
        {
            id: 56,
            open: false,
            src: "images/npc/_25raynor.png",
        },
        {
            id: 57,
            open: false,
            src: "images/npc/_26voldo.png",
        },
        {
            id: 58,
            open: false,
            src: "images/npc/_27spren.png",
        },
        {
            id: 59,
            open: false,
            src: "images/npc/_28wyatt.png",
        },
        {
            id: 60,
            open: false,
            src: "images/npc/_29birdo.png",
        },
        {
            id: 61,
            open: false,
            src: "images/npc/_30girl.png",
        },
        {
            id: 62,
            open: false,
            src: "images/npc/_31appa.png",
        },
        {
            id: 63,
            open: false,
            src: "images/npc/_32bane.png",
        },
        {
            id: 64,
            open: false,
            src: "images/npc/_33charlie.png",
        },
        {
            id: 65,
            open: false,
            src: "images/npc/_34princess.png",
        },
        {
            id: 66,
            open: false,
            src: "images/npc/_35feather.png",
        },
        {
            id: 67,
            open: false,
            src: "images/npc/_36thief.png",
        },
        {
            id: 68,
            open: false,
            src: "images/npc/_37dez.png",
        },
        {
            id: 69,
            open: false,
            src: "images/npc/_38bosco.png",
        },
        {
            id: 70,
            open: false,
            src: "images/npc/_39willy.png",
        },
        {
            id: 71,
            open: false,
            src: "images/npc/_40elena.png",
        },
        {
            id: 72,
            open: false,
            src: "images/npc/_41guile.png",
        },
        {
            id: 73,
            open: false,
            src: "images/npc/_42girl.png",
        },
        {
            id: 74,
            open: false,
            src: "images/npc/_43jak.png",
        },
        {
            id: 75,
            open: false,
            src: "images/npc/_44kano.png",
        },
        {
            id: 76,
            open: false,
            src: "images/npc/_45kirby.png",
        },
        {
            id: 77,
            open: false,
            src: "images/npc/_46lawson.png",
        },
        {
            id: 78,
            open: false,
            src: "images/npc/_47pax.png",
        },
        {
            id: 79,
            open: false,
            src: "images/npc/_48princess.png",
        },
        {
            id: 80,
            open: false,
            src: "images/npc/_49puff.png",
        },
        {
            id: 81,
            open: false,
            src: "images/npc/_50mew.png",
        },
        {
            id: 82,
            open: false,
            src: "images/npc/_51pik.png",
        },
        {
            id: 83,
            open: false,
            src: "images/npc/_52po.png",
        },
        {
            id: 84,
            open: false,
            src: "images/npc/_54pele.png",
        },
        {
            id: 85,
            open: false,
            src: "images/npc/_55kerrigan.png",
        },
        {
            id: 86,
            open: false,
            src: "images/npc/_56scorpion.png",
        },
        {
            id: 87,
            open: false,
            src: "images/npc/_57mordith.png",
        },
        {
            id: 88,
            open: false,
            src: "images/npc/_58wind.png",
        },
        {
            id: 89,
            open: false,
            src: "images/npc/_59thief.png",
        },
        {
            id: 90,
            open: false,
            src: "images/npc/_60icer.png",
        },
        {
            id: 91,
            open: false,
            src: "images/npc/_61zangief.png",
        },
        {
            id: 92,
            open: false,
            src: "images/npc/_62tux.png",
        },
        {
            id: 93,
            open: false,
            src: "images/npc/_63protoss.png",
        },
        {
            id: 94,
            open: false,
            src: "images/npc/_64satellite.png",
        },
        {
            id: 95,
            open: false,
            src: "images/landscape/grass5.png",
        },
        {
            id: 96,
            open: false,
            src: "images/landscape/water0.png",
        },
        {
            id: 97,
            open: false,
            src: "images/landscape/waterLight0.png",
        },
        {
            id: 109,
            open: false,
            src: "images/landscape/waterLight1.png",
        },
        {
            id: 99,
            open: false,
            src: "images/landscape/waterLight2.png",
        },
        {
            id: 100,
            open: false,
            src: "images/landscape/waterLight3.png",
        },
        {
            id: 101,
            open: false,
            src: "images/landscape/waterLight4.png",
        },
        {
            id: 102,
            open: false,
            src: "images/landscape/waterLight5.png",
        },
        {
            id: 103,
            open: false,
            src: "images/landscape/stone0.png",
        },
        {
            id: 104,
            open: false,
            src: "images/landscape/stone1.png",
        },
        {
            id: 105,
            open: false,
            src: "images/landscape/stone2.png",
        },
        {
            id: 106,
            open: false,
            src: "images/landscape/stone3.png",
        },
        {
            id: 107,
            open: false,
            src: "images/landscape/stone4.png",
        },
        {
            id: 108,
            open: false,
            src: "images/landscape/stone5.png",
        },
        {
            id: 109,
            open: false,
            src: "images/landscape/concrete0.png",
        },
        {
            id: 110,
            open: false,
            src: "images/landscape/concrete1.png",
        },
        {
            id: 111,
            open: false,
            src: "images/landscape/concrete2.png",
        },
        {
            id: 112,
            open: false,
            src: "images/landscape/concrete3.png",
        },
        {
            id: 113,
            open: false,
            src: "images/landscape/concrete4.png",
        },
        {
            id: 114,
            open: false,
            src: "images/landscape/concrete5.png",
        },
        {
            id: 115,
            open: false,
            src: "images/landscape/concrete6.png",
        },
        {
            id: 116,
            open: false,
            src: "images/landscape/concrete7.png",
        },
        {
            id: 117,
            open: false,
            src: "images/landscape/concrete8.png",
        },
        {
            id: 118,
            open: false,
            src: "images/landscape/concrete9.png",
        },
        {
            id: 119,
            open: false,
            src: "images/landscape/concrete10.png",
        },
        {
            id: 120,
            open: false,
            src: "images/landscape/concrete11.png",
        },
        {
            id: 121,
            open: false,
            src: "images/landscape/concrete12.png",
        },
        {
            id: 122,
            open: false,
            src: "images/landscape/concrete13.png",
        },
        {
            id: 123,
            open: false,
            src: "images/landscape/concrete14.png",
        },
        {
            id: 124,
            open: false,
            src: "images/landscape/concrete15.png",
        },
        {
            id: 125,
            open: false,
            src: "images/landscape/concrete16.png",
        },
        {
            id: 126,
            open: false,
            src: "images/landscape/dirt1H.png",
        },
        {
            id: 127,
            open: false,
            src: "images/landscape/dirt1V.png",
        },
        {
            id: 128,
            open: false,
            src: "images/landscape/dirtgrassTop.png",
        },
        {
            id: 129,
            open: false,
            src: "images/landscape/dirtgrassBottom.png",
        },
        {
            id: 130,
            open: false,
            src: "images/landscape/dirtgrassLeft.png",
        },
        {
            id: 131,
            open: false,
            src: "images/landscape/dirtgrassRight.png",
        },
         {
            id: 132,
            open: false,
            src: "images/landscape/dirt2H.png",
        },
        {
            id: 133,
            open: false,
            src: "images/landscape/dirt2V.png",
        },
        {
            id: 134,
            open: false,
            src: "images/landscape/dirtgrass2top.png",
        },
        {
            id: 135,
            open: false,
            src: "images/landscape/dirtgrass2bottom.png",
        },
        {
            id: 136,
            open: false,
            src: "images/landscape/dirtgrass2Left.png",
        },
        {
            id: 137,
            open: false,
            src: "images/landscape/dirtgrass2Right.png",
        },
        {
            id: 138,
            open: false,
            src: "images/landscape/dirtH.png",
        },
        {
            id: 139,
            open: false,
            src: "images/landscape/dirtV.png",
        },
        {
            id: 140,
            open: false,
            src: "images/landscape/castle0.png",
        },
        {
            id: 141,
            open: false,
            src: "images/landscape/castle1.png",
        },
        {
            id: 142,
            open: false,
            src: "images/landscape/castle2.png",
        },
        {
            id: 143,
            open: false,
            src: "images/landscape/castle3.png",
        },
        {
            id: 144,
            open: false,
            src: "images/landscape/castle4.png",
        },
        {
            id: 145,
            open: false,
            src: "images/landscape/castle5.png",
        },
        {
            id: 146,
            open: false,
            src: "images/landscape/castle6.png",
        },
        {
            id: 147,
            open: false,
            src: "images/landscape/castle7.png",
        },
        {
            id: 148,
            open: false,
            src: "images/landscape/castle8.png",
        },
        {
            id: 149,
            open: false,
            src: "images/landscape/castle9.png",
        },
        {
            id: 150,
            open: false,
            src: "images/landscape/castle10.png",
        },
        {
            id: 151,
            open: false,
            src: "images/landscape/castle11.png",
        },
        {
            id: 152,
            open: false,
            src: "images/landscape/castle12.png",
        },
        {
            id: 153,
            open: false,
            src: "images/landscape/castle13.png",
        },
        {
            id: 154,
            open: false,
            src: "images/landscape/castle14.png",
        },
        {
            id: 155,
            open: false,
            src: "images/landscape/castle15.png",
        },
        {
            id: 156,
            open: false,
            src: "images/landscape/castle16.png",
        },
        {
            id: 157,
            open: false,
            src: "images/landscape/castle17.png",
        },
        {
            id: 158,
            open: false,
            src: "images/landscape/castle18.png",
        },
        {
            id: 159,
            open: false,
            src: "images/landscape/castle19.png",
        },
         {
            id: 160,
            open: false,
            src: "images/landscape/castle20.png",
        },
        {
            id: 161,
            open: false,
            src: "images/landscape/castle21.png",
        },
        {
            id: 162,
            open: false,
            src: "images/landscape/castle22.png",
        },
        {
            id: 163,
            open: false,
            src: "images/landscape/castle23.png",
        },
        {
            id: 164,
            open: false,
            src: "images/landscape/castle24.png",
        },
        {
            id: 165,
            open: false,
            src: "images/landscape/castle25.png",
        },
        {
            id: 166,
            open: false,
            src: "images/landscape/castle26.png",
        },
        {
            id: 167,
            open: false,
            src: "images/landscape/castle27.png",
        },
        {
            id: 168,
            open: false,
            src: "images/landscape/castle28.png",
        },
        {
            id: 169,
            open: false,
            src: "images/landscape/castle29.png",
        },
        {
            id: 170,
            open: false,
            src: "images/landscape/castle30.png",
        },
        {
            id: 171,
            open: false,
            src: "images/landscape/castle31.png",
        },
        {
            id: 172,
            open: false,
            src: "images/landscape/castle32.png",
        },
        {
            id: 173,
            open: false,
            src: "images/landscape/castle33.png",
        },
        {
            id: 174,
            open: false,
            src: "images/landscape/castle34.png",
        },
        {
            id: 175,
            open: false,
            src: "images/landscape/castle35.png",
        },
        {
            id: 176,
            open: false,
            src: "images/landscape/castle36.png",
        },
        {
            id: 177,
            open: false,
            src: "images/landscape/castle37.png",
        },
        {
            id: 178,
            open: false,
            src: "images/landscape/castle38.png",
        },
        {
            id: 179,
            open: false,
            src: "images/landscape/castle38.png",
        },
        {
            id: 180,
            open: false,
            src: "images/landscape/house0.png",
        },
        {
            id: 181,
            open: false,
            src: "images/landscape/house1.png",
        },
        {
            id: 182,
            open: false,
            src: "images/landscape/house2.png",
        },
        {
            id: 183,
            open: false,
            src: "images/landscape/house3.png",
        },
        {
            id: 184,
            open: false,
            src: "images/landscape/houseTree0.png",
        },
        {
            id: 185,
            open: false,
            src: "images/landscape/houseTree1.png",
        },
        {
            id: 186,
            open: false,
            src: "images/landscape/houseTree2.png",
        },
        {
            id: 187,
            open: false,
            src: "images/landscape/houseTree3.png",
        },
        {
            id: 188,
            open: false,
            src: "images/landscape/graywood0.png",
        },
        {
            id: 189,
            open: false,
            src: "images/landscape/gravel0.png",
        },
        {
            id: 190,
            open: false,
            src: "images/landscape/books0.jpg",
        },
        {
            id: 191,
            open: false,
            src: "images/landscape/books1.png",
        },
        {
            id: 192,
            open: false,
            src: "images/landscape/grass9.png",
        },
        {
            id: 193,
            open: false,
            src: "images/landscape/grass10.png",
        },
        {
            id: 194,
            open: false,
            src: "images/landscape/grass11.png",
        },
        {
            id: 195,
            open: false,
            src: "images/landscape/grass12.png",
        },
        {
            id: 196,
            open: false,
            src: "images/landscape/grass13.png",
        },
        {
            id: 197,
            open: false,
            src: "images/landscape/grass14.png",
        },
        {
            id: 198,
            open: false,
            src: "images/landscape/grass15.png",
        },
        {
            id: 199,
            open: false,
            src: "images/landscape/graves0.png",
        },
        {
            id: 200,
            open: false,
            src: "images/landscape/wall0.png",
        },
        {
            id: 201,
            open: false,
            src: "images/landscape/stonewall1.png",
        },
        {
            id: 202,
            open: false,
            src: "images/landscape/stonewall0.png",
        },
        {
            id: 203,
            open: false,
            src: "images/landscape/roof0.png",
        },
        {
            id: 204,
            open: false,
            src: "images/landscape/roof1.png",
        },
        {
            id: 205,
            open: false,
            src: "images/landscape/roof2.png",
        },
        {
            id: 206,
            open: false,
            src: "images/landscape/floor0.png",
        },
        {
            id: 207,
            open: false,
            src: "images/landscape/brick0.png",
        },
        {
            id: 208,
            open: false,
            src: "images/landscape/brick1.png",
        },
        {
            id: 209,
            open: false,
            src: "images/landscape/brick2.png",
        },
        {
            id: 210,
            open: false,
            src: "images/landscape/brick3.png",
        },
        {
            id: 211,
            open: false,
            src: "images/landscape/brick4.png",
        },
        {
            id: 212,
            open: false,
            src: "images/landscape/mosaic0.png",
        },
        {
            id: 213,
            open: false,
            src: "images/landscape/mosaic1.png",
        },
        {
            id: 214,
            open: false,
            src: "images/landscape/mosaic2.png",
        },
        {
            id: 215,
            open: false,
            src: "images/landscape/mosaic3.png",
        },
        {
            id: 216,
            open: false,
            src: "images/landscape/mosaic4.png",
        },
        {
            id: 217,
            open: true,
            front: true,
            src: "images/monarchValley/butterflyLG0.png",
        },
        {
            id: 218,
            open: true,
            front: true,
            src: "images/monarchValley/butterflyLG1.png",
        },
        {
            id: 219,
            open: false,
            src: "images/monarchValley/butterflyLG2.png",
        },
        {
            id: 220,
            open: false,
            src: "images/monarchValley/butterflyLG3.png",
        },
        {
            id: 221,
            open: false,
            src: "images/monarchValley/butterfly0.png",
        },
        {
            id: 222,
            open: false,
            src: "images/monarchValley/butterfly1.png",
        },
        {
            id: 223,
            open: false,
            src: "images/monarchValley/butterfly2.png",
        },
        {
            id: 224,
            open: false,
            src: "images/monarchValley/butterfly3.png",
        },
        {
            id: 225,
            open: false,
            src: "images/monarchValley/butterfly4.png",
        },
        {
            id: 226,
            open: false,
            src: "images/monarchValley/butterfly5.png",
        },
        {
            id: 227,
            open: false,
            src: "images/monarchValley/butterfly6.png",
        },
        {
            id: 228,
            open: false,
            src: "images/monarchValley/mushroomLG0.png",
        },
        {
            id: 229,
            open: false,
            src: "images/monarchValley/mushroomLG1.png",
        },
        {
            id: 230,
            open: false,
            src: "images/monarchValley/mushroomLG2.png",
        },
        {
            id: 231,
            open: false,
            src: "images/monarchValley/mushroomLG3.png",
        },
        {
            id: 232,
            open: false,
            src: "images/monarchValley/plantLG0.png",
        },
        {
            id: 233,
            open: false,
            src: "images/monarchValley/plantLG1.png",
        },
        {
            id: 234,
            open: false,
            src: "images/monarchValley/shroom0.png",
        },
        {
            id: 235,
            open: false,
            src: "images/monarchValley/shroom1.png",
        },
        {
            id: 236,
            open: false,
            src: "images/monarchValley/shroom2.png",
        },
        {
            id: 237,
            open: false,
            src: "images/monarchValley/shroom3.png",
        },
        {
            id: 238,
            open: false,
            src: "images/monarchValley/shroom4.png",
        },
        {
            id: 239,
            open: false,
            src: "images/monarchValley/shroom5.png",
        },
        {
            id: 240,
            open: false,
            src: "images/monarchValley/shroom6.png",
        },
        {
            id: 241,
            open: false,
            src: "images/monarchValley/shroom7.png",
        },
        {
            id: 242,
            open: false,
            src: "images/monarchValley/flower0.png",
        },
        {
            id: 243,
            open: false,
            src: "images/monarchValley/flower1.png",
        },
        {
            id: 244,
            open: true,
            src: "images/monarchValley/allBlack0.png",
        },
        {
            id: 245,
            open: true,
            src: "images/monarchValley/allBlue0.png",
        },
        {
            id: 246,
            open: true,
            src: "images/monarchValley/allBlue1.png",
        },
        {
            id: 247,
            open: true,
            src: "images/monarchValley/allBlue2.png",
        },
        {
            id: 248,
            open: true,
            src: "images/monarchValley/allBrown0.png",
        },
        {
            id: 249,
            open: true,
            src: "images/monarchValley/allBrown1.png",
        },
        {
            id: 250,
            open: true,
            src: "images/monarchValley/allBrown2.png",
        },
        {
            id: 251,
            open: true,
            src: "images/monarchValley/dl0.png",
        },
        {
            id: 252,
            open: true,
            src: "images/monarchValley/dl1.png",
        },
        {
            id: 253,
            open: true,
            src: "images/monarchValley/dl2.png",
        },
        {
            id: 254,
            open: true,
            src: "images/monarchValley/dl3.png",
        },
        {
            id: 255,
            open: true,
            src: "images/monarchValley/dl4.png",
        },
        {
            id: 256,
            open: true,
            src: "images/monarchValley/dl5.png",
        },
        {
            id: 257,
            open: true,
            src: "images/monarchValley/dl6.png",
        },
        {
            id: 258,
            open: true,
            src: "images/monarchValley/dl7.png",
        },
        {
            id: 259,
            open: true,
            src: "images/monarchValley/dl8.png",
        },
        {
            id: 260,
            open: true,
            src: "images/monarchValley/ld0.png",
        },
        {
            id: 261,
            open: true,
            src: "images/monarchValley/ld1.png",
        },
        {
            id: 262,
            open: true,
            src: "images/monarchValley/ld2.png",
        },
        {
            id: 263,
            open: true,
            src: "images/monarchValley/ld3.png",
        },
        {
            id: 264,
            open: true,
            src: "images/monarchValley/ld4.png",
        },
        {
            id: 265,
            open: true,
            src: "images/monarchValley/ld5.png",
        },
        {
            id: 266,
            open: true,
            src: "images/monarchValley/ld6.png",
        },
        {
            id: 267,
            open: true,
            src: "images/monarchValley/ld7.png",
        },
        {
            id: 268,
            open: true,
            src: "images/monarchValley/ld8.png",
        },
        {
            id: 269,
            open: false,
            src: "images/monarchValley/mushroomLG4.png",
        },
        {
            id: 270,
            open: false,
            src: "images/monarchValley/mushroomLG5.png",
        },
        {
            id: 271,
            open: false,
            src: "images/monarchValley/mushroomLG6.png",
        },
        {
            id: 272,
            open: false,
            src: "images/monarchValley/mushroomLG7.png",
        },
             {
            id: 273,
            open: false,
            src: "images/npc/_66rat.png",
        },
        {
            id: 274,
            open: false,
            src: "images/npc/_67ratR.png",
        },
        {
            id: 275,
            open: false,
            src: "images/landscape/transparent.png",
        },
        {
            id: 276,
            open: false,
            src: "images/npc/_68poL.png",
        },
        {
            id: 277,
            open: false,
            src: "images/npc/_82scrodent.png",
        },
        {
            id: 278,
            open: false,
            src: "images/landscape/tile6.png",
        },
        {
            id: 279,
            open: false,
            src: "images/landscape/tile7.png",
        },
        {
            id: 280,
            open: false,
            src: "images/landscape/tileBlack1.png",
        },
        {
            id: 281,
            open: false,
            src: "images/landscape/tileblue0.png",
        },
        {
            id: 282,
            open: false,
            src: "images/landscape/tileblue1.png",
        },
        {
            id: 283,
            open: false,
            src: "images/landscape/tileblue2.png",
        },
        {
            id: 284,
            open: false,
            src: "images/landscape/tilecream0.png",
        },
        {
            id: 285,
            open: false,
            src: "images/landscape/tilegreen0.png",
        },
        {
            id: 286,
            open: false,
            src: "images/landscape/tilegrey0.png",
        },
        {
            id: 287,
            open: false,
            src: "images/landscape/tilegrey1.png",
        },
        {
            id: 288,
            open: false,
            src: "images/landscape/tilegrey2.png",
        },
        {
            id: 289,
            open: false,
            src: "images/landscape/tilepurp0.png",
        },
        {
            id: 290,
            open: false,
            src: "images/landscape/tilered0.png",
        },
        {
            id: 291,
            open: false,
            src: "images/landscape/tilered1.png",
        },
        {
            id: 292,
            open: false,
            src: "images/landscape/trail0.png",
        },
        {
            id: 293,
            open: false,
            src: "images/landscape/trail1.png",
        },
        {
            id: 294,
            open: false,
            src: "images/landscape/trail2.png",
        },
        {
            id: 295,
            open: false,
            src: "images/landscape/trail3.png",
        },
        {
            id: 296,
            open: false,
            src: "images/landscape/trail4.png",
        },
        {
            id: 297,
            open: false,
            src: "images/landscape/trail5.png",
        },
        {
            id: 298,
            open: false,
            src: "images/landscape/trail6.png",
        },
        {
            id: 299,
            open: false,
            src: "images/landscape/trail7.png",
        },
        {
            id: 300,
            open: false,
            src: "images/landscape/trail8.png",
        },
        {
            id: 301,
            open: false,
            src: "images/landscape/trail9.png",
        },
        {
            id: 302,
            open: false,
            src: "images/landscape/trail10.png",
        },
        {
            id: 303,
            open: false,
            src: "images/landscape/trail11.png",
        },
        {
            id: 304,
            open: false,
            src: "images/landscape/wood10.png",
        },
        {
            id: 305,
            open: false,
            src: "images/landscape/wood11.png",
        },
        {
            id: 306,
            open: false,
            src: "images/landscape/wood12.png",
        },
        {
            id: 307,
            open: false,
            src: "images/landscape/wood13.png",
        },
        {
            id: 308,
            open: false,
            src: "images/landscape/wood14.png",
        },
        {
            id: 309,
            open: false,
            src: "images/landscape/wood15.png",
        },
        {
            id: 310,
            open: false,
            src: "images/landscape/wood16.png",
        },
        {
            id: 311,
            open: false,
            src: "images/landscape/wood17.png",
        },
        {
            id: 312,
            open: false,
            src: "images/landscape/wood18.png",
        },
        {
            id: 313,
            open: false,
            src: "images/landscape/wood19.png",
        },
        {
            id: 314,
            open: false,
            src: "images/landscape/wood20.png",
        },
        {
            id: 315,
            open: false,
            src: "images/landscape/wood21.png",
        },
        {
            id: 316,
            open: false,
            src: "images/landscape/wood22.png",
        },
        {
            id: 317,
            open: false,
            src: "images/landscape/wood23.png",
        },
        {
            id: 318,
            open: false,
            src: "images/landscape/wood24.png",
        },
        {
            id: 319,
            open: false,
            src: "images/landscape/treeBack.png",
        },
        {
            id: 320,
            open: false,
            src: "images/landscape/roundBush.png",
        },
        {
            id: 321,
            open: false,
            src: "images/landscape/bush2.png",
        },
        {
            id: 322,
            open: false,
            src: "images/npc/_69astaroth.png",
        },
        {
            id: 323,
            open: false,
            src: "images/npc/_100kaball.png",
        },
        {
            id: 324,
            open: false,
            src: "images/npc/_70blue.png",
        },
        {
            id: 325,
            open: false,
            src: "images/npc/_71clay.png",
        },
        {
            id: 326,
            open: false,
            src: "images/npc/_72dante.png",
        },
        {
            id: 327,
            open: false,
            src: "images/npc/_73geese.png",
        },
        {
            id: 328,
            open: false,
            src: "images/npc/_74sheerer.png",
        },
        {
            id: 329,
            open: false,
            src: "images/npc/_75leon.png",
        },
        {
            id: 330,
            open: false,
            src: "images/npc/_76modok.png",
        },
        {
            id: 331,
            open: false,
            src: "images/npc/_77nako.png",
        },
        {
            id: 332,
            open: false,
            src: "images/npc/_78rera.png",
        },
        {
            id: 333,
            open: false,
            src: "images/npc/_79ryu.png",
        },
        {
            id: 334,
            open: false,
            src: "images/npc/_80terry.png",
        },
        {
            id: 335,
            open: false,
            src: "images/npc/_81mack.png",
        },
        {
            id: 336,
            open: false,
            src: "images/npc/_82mirth.png",
        },
        {
            id: 337,
            open: false,
            src: "images/npc/_83rayne.png",
        },
        {
            id: 338,
            open: false,
            src: "images/npc/_84drake.png",
        },
        {
            id: 339,
            open: false,
            src: "images/npc/_85harper.png",
        },
        {
            id: 340,
            open: false,
            src: "images/npc/_86sabat.png",
        },
        {
            id: 341,
            open: false,
            src: "images/npc/_87SylviaNXT.png",
        },
        {
            id: 342,
            open: false,
            src: "images/npc/_88dragon.png",
        },
        {
            id: 343,
            open: false,
            src: "images/npc/_89amy.png",
        },
        {
            id: 344,
            open: false,
            src: "images/npc/_90erica.png",
        },
        {
            id: 345,
            open: false,
            src: "images/npc/_91yuna.png",
        },
        {
            id: 346,
            open: false,
            src: "images/npc/_92wardroff.png",
        },
        {
            id: 347,
            open: false,
            src: "images/npc/_93shock.png",
        },
        {
            id: 348,
            open: false,
            src: "images/npc/_94orc.png",
        },
        {
            id: 349,
            open: false,
            src: "images/npc/_95psylock.png",
        },
        {
            id: 350,
            open: false,
            src: "images/npc/_96witch.png",
        },
        {
            id: 351,
            open: false,
            src: "images/npc/_97wargirl.png",
        },
        {
            id: 352,
            open: false,
            src: "images/npc/_98roth.png",
        },
        {
            id: 353,
            open: false,
            src: "images/npc/_99tira.png",
        },
        {
            id: 354,
            open: false,
            src: "images/landscape/door0.png",
        },
        {
            id: 355,
            open: false,
            src: "images/landscape/door1.png",
        },
        {
            id: 356,
            open: false,
            src: "images/landscape/door2.png",
        },
        {
            id: 357,
            open: false,
            src: "images/landscape/bed0.png",
        },
        {
            id: 358,
            open: false,
            src: "images/landscape/bed1.png",
        },
        {
            id: 359,
            open: false,
            src: "images/landscape/poster1.png",
        },
    ]
}

let tempMapXCoordinates = []
let tempMapYCoordinates = []
let tileMaps = {
    getMapById: function (id) { return this.levels[id].map },
    getXById: function (id) { return this.levels[id].mapX },
    getYById: function (id) { return this.levels[id].mapY },
    setXCoordinates: function (id) {
        this.levels[id].map.forEach((a, b) => {
            tempMapXCoordinates.push((b) % this.getXById(id))
        })
    },
    setYCoordinates: function (id) {
        this.levels[id].map.forEach((a, b) => {
            tempMapYCoordinates.push(Math.floor(b / this.getXById(id)))
        })
    },
    findById: function(id) {
        return this.levels.find(e => e.id === id);
    },
    clear: function () {$(".mapimg").remove()},
    levels: [
        {
            id: 0,
            map: [],//GENERATE DO NOT USE
            mapX: 30,
            mapY: 30,
        },

        {
            id: 1,
            map:[0, 0, [0, 11], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 12], [0, 13], 0, 0, 0, 0, [0, 12], [0, 13], 0, [0, 12], [0, 13], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 11], 0, 0, [0, 14], [0, 15, 12], [0, 13], 0, [0, 11], 0, 0, [0, 15], 0, [0, 3, 14], [0, 2, 15], 0, 0, 0, [0, 11], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 14], [0, 15], [0, 3, 11], 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 11], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 5], [0, 6], 0, 0, 0, 0, [0, 5], [0, 6, 5], [0, 6], 0, [0, 9], 0, 0, 0, [0, 5], [0, 6], [0, 9], [0, 11], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 7], [0, 8, 11], 0, 0, 0, 0, [0, 7], [0, 8, 7], [0, 8, 12], [0, 13], [0, 11], 0, 0, 0, [0, 7], [0, 9, 8], [0, 11], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 11], [0, 11], 0, 0, 0, 0, 0, 0, [0, 14], [0, 15], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 11], 0, [0, 38], [0, 37], [0, 38], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 11], [0, 12], [0, 13], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [0, 11], [0, 14], [0, 15], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            mapX: 40,
            mapY: 40,
        },
         {
          id: 2,
          name: "Monarch Valley",
          position: "Center",
          map:[[244, 241, 244, 12], [244, 241, 244, 13, 275], [244, 11, 244, 254, 14, 12], [244, 264, 255, 15, 232, 12, 13], [244, 264, 13, 275], [244, 264], [244, 264, 255], [244, 241, 256], [244, 12], [244, 13], [244, 11, 243, 12, 226], [244, 236, 13], [244, 11, 244], [244, 254, 11, 244, 254, 230], [244, 264, 231, 12], [244, 264, 13], [244, 264, 14], [244, 264, 15, 14, 11], [244, 264, 15], [244, 264, 271], [244, 264, 272], [244, 264, 14], [244, 264, 15], [244, 264, 14, 238], [244, 264, 15], [244, 264, 14], [244, 265, 11, 256, 233, 15], [244, 12], [244, 13], [244, 11, 242, 12], [244, 13, 12], [244, 236, 11, 13], [244, 232, 12], [244, 13], [244, 228, 244, 232, 228], [244, 229, 12, 244, 243, 229, 12], [244, 13], [244, 232, 12], [244, 13], [244, 236, 11], [244, 241, 244, 14, 13], [244, 11, 244, 233, 15], [244, 11, 244, 11, 266, 257, 14], [244, 267, 233, 14, 15], [244, 267, 233, 15], [244, 267], [244, 267], [244, 259], [244, 14], [244, 15], [244, 236, 14, 12], [244, 11, 244, 233, 15, 13, 225], [244, 11, 244, 241], [244, 254], [244, 264, 14], [244, 264, 233, 15], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 265], [244, 14], [244, 15], [244, 14], [244, 233, 15, 14, 11], [244, 15, 234], [244, 14], [244, 15, 236, 12, 275], [244, 13, 230, 13, 12, 244, 230, 13, 12], [244, 231, 14, 11, 244, 13, 231, 15, 13, 244, 233, 231, 13, 14, 13], [244, 15], [244, 14], [244, 233, 15, 12, 226], [244, 236, 243, 13], [244, 11, 244, 233, 15], [244, 11, 244, 11], [244, 228], [244, 229], 244, 244, 244, 244, [244, 11], [244, 12], [244, 13, 14, 13], [244, 11, 233, 15], [244, 11], [244, 254, 274, 263, 274], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264, 11, 255], [244, 264], [244, 264], [244, 264, 228], [244, 264, 232, 229], [244, 264], [244, 265], 244, 244, 244, 244, 244, 244, [244, 233, 14], [244, 15, 14], [244, 11, 244, 15, 236], [244, 12], [244, 13], [244, 14, 12], [244, 15, 13], [244, 11, 244, 242, 228], [244, 242, 229], [244, 230], [244, 231], 244, 244, [244, 12], [244, 243, 13, 222], [244, 11], [244, 11, 14], [244, 15], 244, [244, 241], [244, 254, 234, 11], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264, 255], [244, 264, 236, 12], [244, 264, 243, 13], [244, 264, 230, 242, 12], [244, 264, 233, 231, 13, 12, 226], [244, 264, 13], [244, 265], 244, 244, 244, 244, 244, 244, 244, [244, 241], [244, 241], [244, 14, 217], [244, 233, 15, 218], [244, 14], [244, 233, 15], [244, 230], [244, 233, 231], 244, [244, 239], [244, 240, 244], 244, [244, 14], [244, 11, 15, 11], [244, 11, 12], [244, 236, 243, 13, 12], [244, 232, 13, 217], [244, 241, 218], [244, 12], [244, 257, 266, 12, 13], [244, 258, 267, 242, 13, 275], [244, 258, 258, 267], [244, 258, 267], [244, 258, 267], [244, 258, 267], [244, 258, 267], [244, 267, 258], [244, 266, 267, 258, 266, 267, 14, 241, 12, 275], [244, 264, 233, 15, 13], [244, 264, 14, 232, 12, 226], [244, 264, 233, 15, 232, 13, 225, 14, 255, 13, 12, 255, 13, 14, 13], [244, 264, 15, 255, 15, 238, 236], [244, 265, 12], [244, 13], 244, 244, 244, 244, 244, 244, [244, 241], [244, 273], [244, 232, 269, 219], [244, 243, 243, 270, 220], [244, 243, 11], [244, 243, 11], [244, 252, 261, 244], [244, 252, 261, 244], [244, 252, 261, 244], [244, 252, 261, 244], [244, 252, 261, 244], [244, 228, 253, 261, 244], [244, 261, 244], [244, 261, 244, 12], [244, 261, 14, 232, 12, 13, 12], [244, 251, 15, 13, 14, 13], [244, 253, 15, 12, 219], [244, 236, 13, 220], [244, 233, 14], [244, 14, 233, 15], [244, 233, 15], 244, 244, 244, 244, 244, [244, 11, 228], [244, 266, 244, 14, 229], [244, 258, 267, 233, 15, 12], [244, 258, 267, 233, 14, 236, 13], [244, 258, 267, 233, 15, 269], [244, 258, 267, 270], [244, 268, 14], [244, 15], 244, 244, 244, 244, 244, 244, 244, 244, [244, 271], [244, 272, 228], [244, 229], [244, 241], [244, 258, 244], [244, 258, 244], [244, 258, 244], [244, 258, 244], [244, 258, 244], [244, 259, 258, 244], [244, 258, 258, 244], [244, 258, 244, 14], [244, 258, 233, 14, 233, 15, 14], [244, 257, 233, 15, 12], [244, 259, 13, 14, 13], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, 244, [244, 11, 230], [244, 231, 11], [244, 241, 14, 11], [244, 233, 15, 12, 275], [244, 271, 13], [244, 272, 12], [244, 243, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 236], [244, 230], [244, 233, 231, 12], [244, 243, 13], [244, 11, 236, 12], [244, 241, 242, 13], 244, [244, 11, 244], 244, [244, 243, 11, 244, 237, 244], 244, 244, 244, [244, 233, 14], [244, 12, 244, 15, 12], [244, 232, 13], 244, 244, 244, 244, [244, 11, 244], [244, 11, 244], 244, 244, [244, 241, 244], [244, 11, 244], [244, 11, 244, 241], [244, 241, 14, 12, 275], [244, 233, 15, 243, 13], [244, 14], [244, 268, 244, 233, 15], [244, 11], [244, 236, 243, 12], [244, 13, 225, 275], 244, 244, 244, 244, 244, 244, [244, 240], [244, 12, 236, 12, 275, 275], [244, 14, 13], [244, 233, 15], [244, 14], [244, 11, 244, 233, 15, 228], [244, 11, 244, 229], 244, [244, 243, 11, 244], [244, 12, 226], [244, 243, 13, 244, 13], 244, 244, 244, [244, 14], [244, 15, 12], [244, 243, 13], 244, 244, 244, [244, 11, 244], [244, 11, 244], 244, 244, 244, 244, 244, [244, 14], [244, 241, 15, 12, 275], [244, 235, 13], [244, 228], [244, 229], [244, 11, 14, 232, 12], [244, 233, 15, 13, 275, 275], 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 15, 228], [244, 241, 11, 15, 244, 232, 229], [244, 250, 261], [244, 241, 244, 250, 261, 233, 230], [244, 269, 219, 244, 256, 262, 233, 231, 269], [244, 270, 220, 244, 244, 244, 243, 270], [244, 234], [244, 14, 11], [244, 15, 11, 244, 233, 15], 244, 244, 244, 244, [244, 251, 14], [244, 253, 15], 244, 244, 244, 244, [244, 11, 244], [244, 11, 244, 232], 244, 244, 244, 244, 244, [244, 14], [244, 11, 233, 14, 15, 244, 233, 15], [244, 230, 11], [244, 231, 12, 275], [244, 233, 14, 13], [244, 233, 15], [244, 241], 244, 244, 244, 244, 244, 244, [244, 12, 275], [244, 230, 13], [244, 233, 231], [244, 250], [244, 250, 12], [244, 271, 244, 256, 271, 13], [244, 272, 244, 233, 272], [244, 243, 12], [244, 243, 13, 244, 13, 275], 244, 244, 244, 244, [244, 242, 228], [244, 257, 232, 229], [244, 259, 12], [244, 13], 244, 244, 244, [244, 243, 269], [244, 11, 244, 233, 270], [244, 11, 244, 232, 225, 244, 232, 227], 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 15, 12, 275], [244, 243, 13], [244, 236, 12, 226], [244, 232, 13, 275], 244, 244, 244, 244, [244, 243, 269, 224], [244, 14, 243, 232, 270], [244, 233, 15, 242, 12], [244, 236, 13], [244, 250, 234, 12], [244, 250, 14, 232, 243, 13], [244, 256, 233, 15, 12], [244, 232, 13, 275], [244, 14], [244, 15], [244, 239, 244], 244, 244, 244, [244, 230], [244, 233, 231], [244, 14], [244, 15], 244, 244, [244, 228], [244, 271, 243, 229], [244, 272], [244, 11, 244, 233, 217], [244, 11, 244, 228, 228, 220, 244, 218], [244, 229, 220, 244], 244, 244, 244, 244, 244, 244, [244, 14], [244, 15], [244, 239, 11, 244, 14], [244, 233, 15], 244, 244, 244, 244, [244, 251, 271], [244, 252, 252, 272, 239], [244, 14, 251, 252, 14, 236], [244, 15, 252, 15, 243, 12], [244, 235, 244, 267, 14], [244, 267, 233, 15], [244, 268, 14, 12], [244, 233, 13, 15, 13, 275], 244, 244, 244, 244, 244, [244, 241, 244], 244, [244, 243, 12], [244, 13], 244, 244, 244, [244, 230], [244, 233, 231], [244, 236], [244, 241, 225, 244, 241, 219], [244, 11, 244, 220, 244, 269, 220], [244, 11, 244, 270], 244, [244, 228], [244, 251, 260, 251, 232, 243, 229], [244, 252], [244, 253, 252, 261], [244, 253, 262, 253, 252, 261], [244, 252, 261, 232, 242, 12, 275], [244, 11, 262, 232, 13], [244, 240], [244, 11], 244, 244, 244, 244, [244, 254], [244, 255], [244, 255, 241], [244, 241, 255, 233, 14], [244, 11], [244, 11], [244, 233, 14], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, [244, 233, 14], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, [244, 271], [244, 11, 244, 272, 221], [244, 11, 244, 241], [244, 233, 230], [244, 254, 233, 231, 232, 243, 228], [244, 252, 255, 229], [244, 256, 255], [244, 256, 262, 256, 255], [244, 255, 233, 14], [244, 265, 233, 15, 236, 12, 275], [244, 11, 13], [244, 243, 12], [244, 236, 13, 275], 244, 244, 244, [244, 254], [244, 255], [244, 255], [244, 255], [244, 11], [244, 11, 12], [244, 13, 275], 244, 244, 244, 244, [244, 11, 244], 244, 244, 244, [244, 11, 244], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 257, 230], [244, 258, 233, 231], [244, 259, 258, 241], [244, 259, 259, 260, 259, 267], [244, 267], [244, 268, 14], [244, 233, 15], [244, 14, 241, 12, 275], [244, 233, 15, 13], [244, 12, 275], [244, 241, 13, 241, 13, 275, 275], 244, [244, 254], [244, 255], [244, 255], [244, 255], [244, 243, 12], [244, 14, 241, 13], [244, 233, 15], 244, 244, 244, 244, [244, 11, 244, 232, 11], [244, 12], [244, 13], [244, 234, 228], [244, 229], [244, 11, 244], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 241], [244, 238], [244, 241, 244, 238], [244, 260, 244], [244, 261, 244], [244, 262, 244], 244, [244, 14], [244, 233, 15, 269, 224], [244, 14, 270], [244, 233, 15], 244, [244, 254], [244, 255, 255], [244, 255], [244, 255, 11], [244, 251, 261, 14, 13], [244, 253, 261, 233, 15], [244, 261], [244, 261], [244, 261], [244, 261, 232, 12], [244, 253, 243, 13], [244, 240], [244, 14, 12], [244, 233, 15, 241, 13], [244, 233, 230], [244, 233, 231], [244, 232, 11], [244, 11], [244, 11], [244, 242, 228], [244, 229], 244, 244, [244, 12], [244, 13], 244, 244, 244, 244, 244, 244, [244, 263, 244], 244, 244, 244, 244, [244, 271], [244, 272, 241, 12], [244, 13], [244, 260, 251, 12, 275], [244, 261, 243, 13, 254, 232, 13, 275], [244, 261, 255], [244, 261, 255, 11, 12], [244, 261, 255, 255, 232, 243, 13], [244, 266, 255, 15, 13], [244, 259, 255], [244, 255], [244, 255], [244, 255], [244, 255, 14, 242, 12], [244, 256, 15, 12, 13], [244, 241, 13], [244, 236, 244, 233, 14], [244, 233, 15, 234, 12], [244, 243, 13], [244, 11], [244, 243, 12], [244, 13], 244, [244, 263, 260, 230], [244, 252, 262, 261, 233, 231], [244, 252, 261], [244, 252, 261], [244, 252, 261, 14], [244, 262, 15, 269], [244, 270], 244, 244, 244, [244, 12], [244, 267, 251, 251, 242, 13], [244, 261], [244, 261], [244, 261], [244, 261], [244, 261, 243, 12], [244, 253, 232, 13], [244, 14], [244, 15], [244, 263, 14], [244, 264, 233, 15, 12], [244, 264, 13], [244, 264, 264, 14], [244, 264, 15, 12], [244, 255, 15, 11, 13], [244, 255], [244, 255], [244, 255], [244, 255, 12, 275], [244, 255, 14, 234, 13], [244, 255, 256, 233, 14, 15, 14], [244, 233, 15], [244, 228], [244, 14, 243, 229], [244, 15], [244, 232, 12], [244, 14, 236, 13], [244, 15, 12], [244, 232, 13], [244, 263], [244, 255], [244, 255], [244, 255], [244, 255], [244, 265, 271], [244, 272, 12], [244, 13], [244, 232, 228], [244, 232, 229], [244, 14], [244, 263, 233, 15, 12], [244, 264, 236, 13, 275], [244, 264], [244, 264], [244, 264], [244, 264, 14], [244, 256, 233, 15, 228], [244, 229, 243, 229], [244, 243, 12], [244, 263, 13], [244, 264, 14], [244, 264, 15, 269], [244, 264, 270], [244, 264, 14, 236], [244, 255, 15, 234], [244, 255], [244, 255], [244, 255], [244, 255, 14, 243, 12], [244, 255, 233, 15, 13], [244, 255, 256, 241], [244, 236, 11], [244, 233, 230], [244, 233, 231, 12], [244, 13], [244, 233, 14], [244, 233, 15], [244, 233, 14], [244, 15, 244, 233, 15, 12], [244, 263, 15, 263, 13], [244, 255], [244, 255], [244, 255], [244, 255], [244, 265], [244, 14, 240], [244, 15, 12], [244, 233, 230, 13], [244, 233, 231], [244, 241], [244, 257, 14], [244, 267, 233, 15, 12], [244, 267, 13], [244, 267], [244, 267], [244, 267], [244, 259, 233, 230], [244, 233, 231, 12], [244, 14, 13], [244, 263, 233, 15], [244, 264], [244, 264, 271], [244, 264, 272, 11], [244, 264]],
          mapX: 40,
          mapY: 20,
        },
        {
            id: 3,
            name: "Monarch Valley",
            position: "Top",
            map:[[244, 14], [244, 269, 15, 269], [244, 271, 270], [244, 272], 244, [244, 12], [244, 14, 243, 13, 275], [244, 15], [244, 230], [244, 231], [244, 14], [244, 15], [244, 14, 236], [244, 15, 12, 275], [244, 14, 232, 13], [244, 15], [244, 271], [244, 272], [244, 14], [244, 233, 15], [244, 241], [244, 14], [244, 14, 15], [244, 15, 240], [244, 251, 236, 12, 275], [244, 252, 14, 13], [244, 252, 14, 252, 233, 15], [244, 252, 228], [244, 253, 14, 243, 229], [244, 12, 15, 12], [244, 269], [244, 271, 270], [244, 272], [244, 12], [244, 242, 13, 275, 275], [244, 14], [244, 233, 15], 244, 244, 244, 244, 244, 244, [244, 14, 240], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 254, 14], [244, 255, 233, 15], [244, 255], [244, 255, 230], [244, 256, 233, 231], [244, 14], [244, 269, 244, 271, 239, 271], [244, 232, 272, 12], [244, 13, 275], [244, 14], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 232], [244, 234, 12], [244, 13, 275], 244, 244, 244, 244, [244, 254], [244, 255], [244, 255], [244, 255], [244, 256, 273], [244, 236, 243, 12], [244, 11], [244, 14], [244, 15, 239], [244, 11], 244, 244, 244, 244, [244, 12, 275], [244, 232, 13, 275], [244, 12, 275], [244, 236, 13, 275], 244, 244, 244, 244, [244, 236, 243, 12], [244, 233, 13], [244, 12, 244, 14], [244, 233, 15, 228], [244, 229], 244, 244, 244, [244, 257], [244, 257, 258], [244, 258], [244, 258], [244, 232, 12, 259, 232, 12, 275], [244, 14, 13], [244, 236, 12], [244, 13, 275], 244, 244, 244, 244, 244, 244, [244, 228, 244, 14, 269, 227], [244, 231, 244, 233, 15, 270], [244, 14, 232], [244, 233, 15], [244, 243, 12, 275], [244, 13, 275], [244, 270, 244, 241], [244, 236], [244, 14], [244, 233, 15], [244, 242, 269, 227], [244, 230, 270], [244, 233, 231], 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 15], [244, 233, 14, 13], [244, 15], 244, 244, 244, 244, 244, [244, 12, 275], [244, 271, 232, 13], [244, 272], [244, 233, 228], [244, 243, 229], [244, 251, 14, 232, 228], [244, 261, 233, 15, 232, 229], [244, 261, 234], [244, 261, 243, 228], [244, 253, 241, 229], [244, 235], [244, 271], [244, 272, 232, 12], [244, 13, 275], 244, 244, 244, 244, 244, 244, 244, [244, 236, 12, 275], [244, 13], [244, 233, 15], [244, 12, 275, 275], [244, 13, 275], 244, 244, 244, 244, [244, 14], [244, 15], [244, 240], [244, 230], [244, 231, 217], [244, 254, 233, 230, 269, 218], [244, 255, 233, 231, 232, 270], [244, 255, 232], [244, 255, 230], [244, 256, 233, 231, 12], [244, 13, 275], [244, 234, 244, 241], [244, 14, 232], [244, 233, 15], 244, 244, 244, 244, 244, 244, [244, 12, 275], [244, 14, 243, 13], [244, 233, 15], [244, 243, 233, 228], [244, 14, 243, 229], [244, 233, 15], 244, 244, 244, [244, 12, 275], [244, 13, 225, 275], [244, 232, 221, 244, 243, 232], [244, 234], 244, [244, 269, 219], [244, 266, 257, 271, 270, 220], [244, 258, 233, 272], [244, 258, 233], [244, 258, 243, 12], [244, 259, 14, 13], [244, 233, 15], [244, 232, 12], [244, 233, 13, 275], [244, 240], 244, 244, 244, 244, 244, 244, [244, 14, 234], [244, 15], [244, 12], [244, 230, 13], [244, 233, 231, 232], 244, 244, 244, 244, [244, 14, 239], [244, 251, 15], [244, 261, 233, 252, 233], [244, 261, 232], [244, 261, 243, 232], [244, 253, 271], [244, 272, 232, 228], [244, 229], [244, 240], [244, 14, 228], [244, 233, 15, 243, 229], 244, [244, 14, 234, 269], [244, 15, 270, 275], 244, 244, 244, 244, 244, 244, 244, 244, [244, 243, 232, 12, 275], [244, 14, 13], [244, 15, 13], [244, 233, 12], [244, 13, 275], 244, 244, 244, 244, [244, 263, 234], [244, 264, 243, 228], [244, 264, 233, 229, 217], [244, 264, 233, 218], [244, 265], [244, 230], [244, 233, 231], [244, 11, 269], [244, 230, 243, 270], [244, 233, 231], [244, 241], [244, 271, 232], [244, 272, 236, 243, 12, 275], [244, 232, 13, 225, 275], 244, 244, 244, 244, 244, 244, 244, [244, 14, 243, 12, 275], [244, 15, 13], [244, 233, 15], [244, 14, 240], [244, 233, 15], 244, 244, 244, [244, 12, 275], [244, 263, 13, 275], [244, 264, 230], [244, 264, 233, 231, 269, 219], [244, 264, 270, 269, 220], [244, 265, 270], [244, 235, 243, 232, 12], [244, 239, 13], [244, 269, 244, 271, 236], [244, 270, 244, 272, 232, 228], [244, 243, 229], [244, 12], [244, 233, 13, 275], [244, 14, 234], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, [244, 14, 237], [244, 233, 15], [244, 243, 13], 244, 244, 244, 244, 244, [244, 14, 240], [244, 266, 257, 233, 15], [244, 267, 228], [244, 267, 271, 243, 229], [244, 267, 272, 271], [244, 268, 259, 272], [244, 14], [244, 233, 15, 236, 12, 275], [244, 235, 232, 13, 275], [244, 228, 244, 230], [244, 233, 231, 11], [244, 14, 234], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 12, 244], [244, 232, 12, 275], [244, 15], 244, 244, 244, 244, 244, 244, 244, [244, 230], [244, 233, 231], [244, 241], 244, 244, [244, 14, 239], [244, 15], [244, 244, 241], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 243, 12, 275], [244, 13, 275], [244, 244, 236, 12, 275], [244, 233, 14, 13], [244, 270], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 242, 12], [244, 13], [244, 241], [244, 14, 232], [244, 233, 15], [244, 14], [244, 233, 15], [244, 272], 244, 244, 244, 244, [244, 12], [244, 13], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 243, 12], [244, 232, 13], [244, 228], [244, 14, 232, 231, 14, 232, 229], [244, 233, 15], [244, 12], [244, 233, 13], [244, 241], 244, [244, 228], [244, 12], [244, 232, 243, 13], 244, 244, 244, [244, 14], [244, 15, 236, 12], [244, 13], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 233, 15], [244, 230], [244, 233, 231], [244, 241], [244, 14], [244, 233, 15], [244, 232, 12], [244, 243, 13], [244, 230], [244, 260, 251, 14, 13], [244, 261, 15], [244, 261], [244, 261], [244, 261], [244, 262, 253, 261, 243, 12], [244, 253, 14, 13], [244, 233, 15], [244, 236, 243, 12, 275], [244, 13], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 241], [244, 232], [244, 241], 244, 244, [244, 12], [244, 14, 13], [244, 233, 15], 244, [244, 263, 15, 269], [244, 264, 270], [244, 264], [244, 264, 261, 264], [244, 264], [244, 265, 264, 14], [244, 265, 233, 15], 244, [244, 14], [244, 233, 15], [244, 243, 236, 12], [244, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 12], [244, 233, 13], 244, 244, [244, 269], [244, 14, 270], [244, 233, 15], [244, 12], [244, 13], [244, 263, 271, 239, 224, 250, 263, 271], [244, 264, 272, 232, 12], [244, 264, 13], [244, 264], [244, 264], [244, 265, 264], [244, 265, 232, 12], [244, 13], [244, 239, 12], [244, 13], [244, 14], [244, 233, 15, 12], [244, 13], [244, 11], [244, 240], 244, 244, 244, [244, 12], [244, 13], [244, 11], [244, 14, 234], [244, 233, 15], 244, 244, [244, 271], [244, 271, 272, 232], 244, [244, 14, 11], [244, 15], [244, 263, 12], [244, 264, 14, 13], [244, 264, 233, 15], [244, 264], [244, 264], [244, 265, 264], [244, 265, 14], [244, 233, 15], [244, 14], [244, 233, 15], [244, 240], [244, 14, 234], [244, 233, 15, 12], [244, 232, 13], 244, [244, 236, 12, 275], [244, 13, 12, 275], [244, 243, 13, 275], [244, 14], [244, 240, 233, 15], [244, 12, 240, 244, 12], [244, 13], 244, 244, 244, [244, 12], [244, 233, 13], [244, 11], 244, [244, 239]],
            mapX: 30,
            mapY: 20,
        },
        {
            id: 4,
            name: "Monarch Valley",
            position: "Bottom",
            map: [[244, 264, 13], [244, 264], [244, 264], [244, 265, 14, 255, 14], [244, 15, 233, 15, 265, 233, 15, 12, 275], [244, 254, 232, 12, 13], [244, 255, 13], [244, 255], [244, 255], [244, 255, 12, 275, 275], [244, 256, 11, 14, 13], [244, 240, 232, 236, 244, 236, 11, 12, 15, 12], [244, 13], [244, 228], [244, 229], [244, 254, 12], [244, 255, 232, 13, 275], [244, 255], [244, 255], [244, 256, 243, 12, 275], [244, 13], [244, 264, 233, 15], [244, 264], [244, 264], [244, 265, 255, 273], [244, 265, 14, 12, 275, 275, 275], [244, 254, 14, 12, 15, 13, 275], [244, 255, 233, 15, 243, 13], [244, 255], [244, 255], [244, 255, 14], [244, 256, 12, 15, 233, 15, 12, 275], [244, 236, 13, 14, 12, 275], [244, 15, 232, 13], [244, 230], [244, 12, 231, 12], [244, 254, 14, 243, 13, 275], [244, 255, 233, 15], [244, 255], [244, 255], [244, 256, 14, 236, 12, 275], [244, 233, 15, 13], [244, 264, 13], [244, 264], [244, 264], [244, 265, 255, 236, 12, 275], [244, 12, 265, 14, 232, 12, 13, 275], [244, 257, 266, 257, 14, 243, 13, 15, 13], [244, 258, 233, 15], [244, 258], [244, 258], [244, 258, 12], [244, 259, 14, 242, 13], [244, 233, 15, 14], [244, 233, 15], [244, 241], [244, 14], [244, 257, 15, 12], [244, 258, 236, 13, 275], [244, 258], [244, 258], [244, 259, 232, 14, 12, 226, 275], [244, 15, 13], [244, 267, 269, 15, 271, 261, 267, 15, 269], [244, 267, 242, 270], [244, 267, 241], [244, 268, 228, 267, 14, 243, 228], [244, 14, 232, 229, 259, 14, 233, 15, 229], [244, 233, 15, 15], 244, 244, 244, [244, 14], [244, 233, 15, 232, 12], [244, 243, 13], [244, 241, 11], [244, 241, 244], 244, [244, 14], [244, 233, 15], 244, 244, [244, 14, 235], [244, 15, 240], [244, 271, 242, 228], [244, 272, 232, 229], [244, 228], [244, 230, 242, 229], [244, 231], 244, 244, 244, 244, 244, [244, 14], [244, 233, 15, 228], [244, 243, 229, 222], 244, 244, 244, 244, 244, 244, 244, [244, 11], [244, 230], [244, 233, 231], [244, 230], [244, 233, 231], 244, 244, [244, 217], [244, 240, 218], [244, 241], 244, 244, [244, 230], [244, 233, 231], 244, 244, 244, 244, 244, 244, 244, [244, 12, 275], [244, 13, 11, 232, 13], 244, 244, 244, 244, 244, [244, 241, 219], [244, 234, 220, 236, 220], [244, 238, 223], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 217], [244, 218], [244, 14, 275], [244, 15, 11, 15, 11, 232, 12], [244, 243, 13], 244, 244, 244, 244, 244, [244, 234], [244, 240], 244, 244, 244, 244, 244, 244, 244, 244, [244, 243, 12], [244, 232, 13, 219], [244, 232, 220], [244, 243, 232], [244, 13, 11, 13, 14, 13], [244, 233, 15], [244, 241], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 12], [244, 260, 14, 236, 13], [244, 261, 233, 15, 239], [244, 261, 233, 228], [244, 261, 233, 229], [244, 15, 11], 244, 244, 244, 244, [244, 11, 12, 226], [244, 11, 236, 13], 244, 244, 244, 244, [244, 12, 275], [244, 243, 13, 275], 244, 244, 244, [244, 14], [244, 263, 15], [244, 264], [244, 264, 230], [244, 264, 231], [244, 11, 243, 13, 275], 244, 244, 244, [244, 12], [244, 11, 14, 243, 13], [244, 233, 15, 11], [244, 11], [244, 11, 12], [244, 243, 13], [244, 241], [244, 11, 14, 12], [244, 11, 233, 15, 13], [244, 236, 12], [244, 13, 225], 244, 244, [244, 263], [244, 264], [244, 264], [244, 264], [244, 11, 233, 15], 244, 244, 244, [244, 14, 232, 228], [244, 11, 233, 15, 11, 229, 224], [244, 251, 241, 228], [244, 252, 261, 243, 229], [244, 252, 261, 14, 234], [244, 11, 262, 253, 233, 15], [244, 11], [244, 14, 236], [244, 15], [244, 11, 233, 14, 11], [244, 11, 233, 15, 11], [244, 232, 12, 275], [244, 243, 13, 275], [244, 263], [244, 264], [244, 264], [244, 264], [244, 11], 244, 244, [244, 240, 244, 12], [244, 11, 230, 243, 12, 13, 13, 13, 12], [244, 233, 231, 13], [244, 263, 234, 254, 230], [244, 250, 233, 231], [244, 250], [244, 265], 244, 244, 244, 244, 244, [244, 11, 14, 11], [244, 11, 233, 15, 11, 241, 15, 11], [244, 263, 228], [244, 264, 232, 243, 229], [244, 264], [244, 264], [244, 11], 244, 244, [244, 239, 244, 14, 269, 222], [244, 11, 14, 11, 15, 270], [244, 15, 232, 12], [244, 263, 13], [244, 250], [244, 250, 274], [244, 265], 244, 244, 244, 244, 244, 244, 244, [244, 266, 230], [244, 267, 231, 242, 228], [244, 267, 232, 229, 12, 275], [244, 267, 13, 275], [244, 11], 244, 244, [244, 271], [244, 272], [244, 11, 14, 236, 12], [244, 263, 233, 15, 13], [244, 250], [244, 250], [244, 265], [244, 12], [244, 241, 13], [244, 11, 12], [244, 11, 13], 244, 244, 244, 244, [244, 230], [244, 233, 231, 14, 12], [244, 15, 13], [244, 11, 12, 275], [244, 13, 222], 244, 244, [244, 239], [244, 11, 14, 243, 12], [244, 257, 266, 254, 257, 236, 233, 266, 257, 233, 15, 13], [244, 267, 238], [244, 267], [244, 268, 259, 239], [244, 11, 14], [244, 11, 243, 233, 15, 12], [244, 14, 13], [244, 11, 233, 15, 11, 228], [244, 243, 229], 244, 244, 244, [244, 241], [244, 14, 12], [244, 15, 236, 13], [244, 11, 14, 12], [244, 236, 15, 13, 275], 244, 244, 244, [244, 14, 234], [244, 11, 15, 11], [244, 11, 232, 228], [244, 11, 229], [244, 11], 244, [244, 14], [244, 233, 15], [244, 230], [244, 11, 244, 233, 231], 244, 244, 244, 244, [244, 14], [244, 15, 11], [244, 11, 14, 11], [244, 233, 15], [244, 228], [244, 229], 244, 244, 244, [244, 230], [244, 233, 231], 244, 244, 244, 244, 244, 244, 244, [244, 217], [244, 218], 244, [244, 240], [244, 11], [244, 12], [244, 236, 13], [244, 230], [244, 233, 231], 244, 244, 244, 244, 244, 244, 244, [244, 232, 12, 226, 275], [244, 242, 13], 244, 244, 244, [244, 219], [244, 220, 238, 220, 244, 232, 220], [244, 12], [244, 243, 13, 12], [244, 236, 13, 222], [244, 11, 14, 11], [244, 11, 11, 233, 15, 11], [244, 11, 12], [244, 11, 236, 13, 12], [244, 11, 13, 275], [244, 11, 243, 12, 226, 275], [244, 11, 232, 13, 275], [244, 11, 12, 275], [244, 11, 13, 275], [244, 11, 12, 275], [244, 11, 232, 13, 275], [244, 11, 14, 11, 275], [244, 11, 233, 15, 11, 12], [244, 11, 243, 13, 275], [244, 11], [244, 11, 12], [244, 11, 236, 13], [244, 11, 244, 233, 12], [244, 14, 11, 13], [244, 233, 15, 14, 11, 232, 12], [244, 233, 15, 11, 13]],
            mapX: 21,
            mapY: 20,
        },
        {
          id: 5,
          name: "Monarch Valley",
          position: "Right",
          map: [[244, 261, 233, 15, 13], [244, 261, 12, 275, 275], [244, 261, 13, 275, 275], [244, 261, 14], [244, 261, 233, 15], [244, 261, 14], [244, 253, 15, 243, 12, 275], [244, 236, 13], 244, [244, 271], [244, 272], [244, 14], [244, 15, 14], [244, 15, 243, 12, 275], [244, 13], [244, 11], [244, 271], [244, 236], [244, 12, 244, 14, 12], [244, 233, 15, 14, 238, 13], [244, 233, 15, 243, 12, 275], [244, 232, 13, 275], [244, 241, 12], [244, 14, 13, 275], [244, 233, 15], [244, 14, 240], [244, 233, 15], [244, 233, 14], [244, 15, 12], [244, 230, 13], [244, 233, 231, 243, 228], [244, 232, 229], [244, 230], [244, 233, 231, 12, 275], [244, 13, 275], [244, 11], [244, 232, 12, 275], [244, 232, 13, 275], [244, 241], [244, 14], [244, 15], [244, 12, 275], [244, 243, 13, 275], [244, 14, 240], [244, 233, 15], [244, 239], [244, 14], [244, 15, 242, 12, 275], [244, 13], 244, [244, 11], 244, [244, 243, 12], [244, 14, 13, 275], [244, 15], [244, 230], [244, 231, 12, 275, 275], [244, 14, 13], [244, 233, 15], [244, 12], [244, 264, 15], [244, 264, 14, 240], [244, 264, 15], [244, 264], [244, 264], [244, 264], [244, 256, 14], [244, 15, 12, 275], [244, 232, 13], [244, 11], 244, 244, 244, [244, 14], [244, 233, 15, 275], 244, [244, 236, 244], 244, [244, 14, 241], [244, 15], [244, 14, 234], [244, 15], [244, 14, 241], [244, 233, 15], 244, 244, 244, 244, [244, 14, 275], [244, 15, 12, 275], [244, 228, 244, 230, 13, 275], [244, 233, 231], [244, 11], [244, 14], [244, 233, 15], 244, [244, 14], [244, 15], 244, 244, 244, [244, 14], [244, 233, 15], 244, 244, 244, 244, [244, 14, 275], [244, 233, 15, 12, 275], [244, 243, 13], [244, 12, 275], [244, 13, 275], [244, 14, 275], [244, 15], [244, 274], 244, [244, 14], [244, 15, 242, 12, 275], [244, 13], [244, 14], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 264], [244, 256], [244, 14], [244, 233, 15, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 233, 15, 275], [244, 14, 239], [244, 15], 244, 244, 244, 244, 244, [244, 14], [244, 233, 15], 244, [244, 267, 264], [244, 267, 264], [244, 267, 255], [244, 267, 255], [244, 267, 255], [244, 267, 255], [244, 268, 259, 265], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 40], 244, [244, 273], 244, 244, [244, 273], 244, [244, 242, 12, 275], [244, 13], [244, 255, 228, 255], [244, 255, 229, 255], [244, 255], [244, 255, 12, 275], [244, 255, 232, 13, 275], [244, 255], [244, 265], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 40], 244, 244, 244, 244, [244, 273], 244, [244, 14, 236, 12, 275], [244, 233, 15, 13], [244, 258, 228, 267, 242, 228], [244, 258, 229, 267, 232, 229], [244, 258, 12, 275], [244, 258, 14, 243, 13], [244, 258, 233, 15], [244, 258, 228], [244, 268, 259, 243, 229], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 228], [244, 243, 229], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 43], 244, 244, [244, 40], 244, 244, 244, [244, 242, 12], [244, 13, 275, 275], [244, 14], [244, 233, 15], [244, 230], [244, 243, 12, 231, 243, 12], [244, 14, 232, 13], [244, 233, 15], [244, 241], [244, 230], [244, 231, 232, 228], [244, 243, 229], 244, [244, 232], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 269], [244, 230, 243, 270], [244, 233, 231, 228], [244, 243, 229], [244, 232], 244, 244, [244, 228], [244, 242, 229], [244, 232, 244], 244, 244, 244, [244, 12, 275], [244, 243, 13, 275], 244, [244, 12], [244, 243, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 40], 244, [244, 274], [244, 11], [244, 14, 238], [244, 233, 15], [244, 232, 12], [244, 13], [244, 15, 244, 13, 275], [244, 14, 240], [244, 233, 15], 244, 244, [244, 243, 12, 275, 275], [244, 230, 13], [244, 233, 231], [244, 232], [244, 233, 228], [244, 229], [244, 240], [244, 232], 244, 244, 244, 244, 244, 244, 244, 244, [244, 217], [244, 218], 244, [244, 271], [244, 11, 244, 272], [244, 230], [244, 233, 231], [244, 233], 244, [244, 241], [244, 230], [244, 232, 244, 242, 244, 233, 231, 232], [244, 233, 11, 244], [244, 232], [244, 232, 12, 275], [244, 13, 275], [244, 14], [244, 15, 232], [244, 12, 275], [244, 14, 243, 13, 275, 275], [244, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 12], [244, 13, 275], [244, 11], 244, [244, 228], [244, 233, 14, 229], [244, 15, 12], [244, 15, 270], 244, 244, 244, 244, [244, 14, 243, 12, 275, 275], [244, 15, 13], [244, 243, 11], [244, 233], [244, 230], [244, 231], [244, 241], [244, 233], [244, 232], 244, 244, [244, 12], [244, 13], [244, 232], 244, [244, 232], [244, 232, 219], [244, 232, 220], [244, 241], [244, 11], [244, 232], [244, 243, 11], [244, 12], [244, 269, 13], [244, 270], [244, 269], [244, 270], [244, 233, 12], [244, 243, 13, 12, 275], [244, 233, 13], [244, 233, 14, 236], [244, 15], [244, 241, 12, 275], [244, 233, 13, 275], [244, 14], [244, 233, 15], [244, 228], [244, 243, 229], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14, 275], [244, 15], [244, 232, 12], [244, 13], [244, 230, 12], [244, 231, 13], [244, 14], [244, 272], 244, 244, 244, 244, [244, 14, 236], [244, 233, 15], [244, 12], [244, 232, 13], [244, 241], [244, 11], [244, 234, 243, 234, 11], [244, 236, 234, 236], [244, 233, 269], [244, 270], [244, 11, 241, 244, 232], [244, 14, 240], [244, 15, 241, 236], [244, 233, 228], [244, 229], [244, 233, 11], [244, 233, 228], [244, 233, 229], [244, 241], [244, 241], [244, 233, 236], [244, 232], [244, 14], [244, 271, 13, 15, 12], [244, 272, 13], [244, 271, 236], [244, 272], [244, 14], [244, 15, 14, 236], [244, 15], 244, [244, 241], [244, 14, 241], [244, 233, 15], 244, 244, [244, 230], [244, 231], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 11], 244, [244, 12, 275], [244, 14, 243, 13, 275], [244, 15], [244, 14], [244, 15], [244, 242, 12], [244, 13], [244, 241], 244, 244, 244, [244, 243, 228], [244, 243, 229], [244, 14, 240], [244, 233, 14, 244, 233, 15, 243, 11], [244, 237], [244, 228], [244, 229, 11, 229], [244, 269], [244, 271, 270], [244, 272, 11], [244, 232, 233, 232], [244, 12], [244, 13], [244, 230], [244, 231, 12], [244, 241, 13], [244, 230], [244, 231], [244, 11], [244, 228], [244, 229, 243, 228], [244, 233, 229, 12], [244, 15, 13, 244, 13], [244, 14], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 15], [244, 232, 12], [244, 13, 275], [244, 269], [244, 14, 270], [244, 15], [244, 242, 12, 275], [244, 13, 275], 244, 244, [244, 230], [244, 233, 231, 243, 228], [244, 243, 229], 244, 244, [244, 230], [244, 231, 243, 11, 12, 275], [244, 271, 13, 275], [244, 272], 244, [244, 233], [244, 14, 241], [244, 15, 236], 244, [244, 14], [244, 15], 244, 244, 244, [244, 230, 11], [244, 231, 230], [244, 233, 231, 14, 12, 275], [244, 15, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 232, 12, 275], [244, 13, 275], 244, 244, [244, 242, 14, 275], [244, 15, 12], [244, 269, 244, 271, 13, 275], [244, 272], [244, 241], [244, 14, 228], [244, 233, 15, 243, 229], 244, 244, 244, [244, 230, 11], [244, 233, 231], 244, 244, 244, [244, 14], [244, 233, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 15], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14, 240], [244, 233, 15], [244, 241], 244, 244, [244, 14], [244, 15, 275], [244, 242, 12], [244, 261, 242, 11], [244, 261, 230, 11], [244, 262, 253, 233, 231], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 11], [244, 243, 12, 275], [244, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 232, 12, 275, 275], [244, 13, 275], [244, 228], [244, 232, 229], [244, 242, 12], [244, 13], 244, 244, [244, 233, 14, 275], [244, 264], [244, 264], [244, 265], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 11], 244, [244, 14, 236], [244, 233, 15, 12], [244, 13], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 233, 15], [244, 230, 230], [244, 231, 12], [244, 14, 13], [244, 15], 244, 244, 244, [244, 264], [244, 264], [244, 265], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 232, 12, 275], [244, 13], 244, [244, 14], [244, 233, 15, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 233, 15], [244, 241], 244, 244, [244, 228], [244, 264], [244, 264], [244, 265], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 12, 275], [244, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 241], [244, 14, 236, 12, 275], [244, 233, 233, 15, 13], [244, 12], [244, 236, 13], [244, 241], [244, 12], [244, 243, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 12], [244, 242, 13, 275, 275, 275], [244, 230], [244, 264, 13, 275], [244, 264], [244, 265], 244, [244, 12, 275], [244, 232, 13, 275], 244, 244, [244, 239], 244, 244, [244, 240], [244, 12, 275], [244, 243, 13, 275], 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 14], [244, 233, 15, 232, 228], [244, 243, 229], 244, 244, 244, 244, 244, 244, 244, 244, [244, 12], [244, 243, 13, 275, 275], [244, 14], [244, 15, 12], [244, 14, 13], [244, 233, 15], 244, [244, 14, 275], [244, 15], [244, 228], [244, 243, 229], 244, 244, 244, 244, 244, 244, 244, 244, 244, [244, 232, 12, 275], [244, 13, 275], [244, 14, 236], [244, 233, 15], 244, [244, 264, 15], [244, 264, 232, 228], [244, 265, 229], [244, 12, 275], [244, 14, 243, 13], [244, 233, 14, 244, 233, 15], [244, 11], 244, 244, [244, 269], [244, 270], 244, [244, 14], [244, 233, 15], 244, [244, 11], 244, 244, [244, 12, 275], [244, 243, 13, 275], 244, 244, [244, 15, 244, 228], [244, 229], [244, 11], [244, 230], [244, 233, 231], [244, 11], 244, 244, 244, 244, [244, 12, 275], [244, 13, 275], [244, 240], [244, 14], [244, 15, 232, 12], [244, 13], [244, 14], [244, 15, 243, 12], [244, 13], [244, 11], 244, 244, [244, 230], [244, 233, 231], 244, 244, [244, 232, 12, 275], [244, 13, 275], 244, 244, 244, 244, 244, [244, 14], [244, 15], [244, 232, 12], [244, 13], [244, 242, 12], [244, 267, 241], [244, 267, 230], [244, 267, 268, 259, 233, 231], [244, 14], [244, 15, 12], [244, 242, 13], 244, [244, 228], [244, 242, 229], [244, 271], [244, 272], 244, [244, 11], [244, 12], [244, 232, 13, 12, 275], [244, 13, 275], [244, 11], [244, 12, 275], [244, 14, 13, 275], [244, 233, 15], [244, 12, 275], [244, 13, 275], [244, 230], [244, 231, 242, 12], [244, 13], 244, [244, 228], [244, 229], [244, 12, 275], [244, 236, 13, 275], [244, 12, 275], [244, 13, 275], [244, 14, 269], [244, 15, 270], 244, 244, [244, 14], [244, 15], [244, 243, 12], [244, 14, 13], [244, 233, 15], 244, [244, 269], [244, 270], 244, [244, 12], [244, 13, 275], [244, 12, 275], [244, 14, 13], [244, 233, 15], [244, 269], [244, 270], [244, 11, 12, 275], [244, 228, 13], [244, 229], [244, 241], [244, 12], [244, 14, 13], [244, 15], [244, 14]],
          mapX: 60,
          mapY: 20,
        },
        {
          id: 6,
          name: "new",
          position: "center",
          map: [],
          mapX: 70,
          mapY: 40,
        }
    ]
}



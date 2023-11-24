let currentMaster
let questTracker = 0
let questTrue = false
let currentQuest = "I am waiting for you at the temple rift. We need to discuss what's next for you. Please come and talk to me."
let currentLevel
let mapLevel = 0

const levels = [
  {
    getXY: function () {
      let x = player.x.toString()
      let y = player.y.toString()
      return x + ',' + y
    },
    id: 1,
    name: "Monarch Valley",
    quests: [],
    description: "Monarch Valley is an enchanted forest full or rare creatures, beautiful plants and scenery, and as you may have guessed, butterflies. The area is well known, as many of the animals there carry valuable spheres, and a few somehow infuse the spheres with light. We beleive the light is the same light emitted by my portals. There are likely other people present, some may be hostile so use your best judgement. The wildlife will only pose a slight threat, nothing you can't handle. If you need to return use your comms device it will most likely work although there is touble between the rifts. Off you go!",
    questID: [1,2],
    battleSrc: "images/backgrounds/monarchValley.jpg",
    npcID: [9, 12, 66, 67],
    areas: [
      {
        id: 1, //tileMaps 2
        name: "Monarch Valley Center",
        mapStartLeft: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(2)
        moveScreen(0,0)
        moveScreenX = 0
        moveScreenY = 0
        movePlayer(0,5)
        enableKeys()
        },
        mapTop: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(2)
        moveScreen(0,0)
        moveScreenX = 0
        moveScreenY = 0
        movePlayer(6,0)
        enableKeys()
        },
        mapBottomLeft: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(2)
        moveScreen(0,500)
        moveScreenX = 0
        moveScreenY = 500
        movePlayer(2,19)
        enableKeys()
        },
        mapBottomCenter: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(2)
        moveScreen(550,500)
        moveScreenX = 550
        moveScreenY = 500
        movePlayer(18,19)
        enableKeys()
        },
        mapBottomRight: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(2)
        moveScreen(1050,500)
        moveScreenX = 1050
        moveScreenY = 500
        movePlayer(30,19)
        enableKeys()
        },
        mapRight: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(2)
        moveScreen(1300,400)
        moveScreenX = 1300
        moveScreenY = 400
        movePlayer(39,13)
        enableKeys()
        },
         triggers: function () {
           console.log(levels[0].getXY())
          switch (levels[0].getXY()) {
            case '4,1': {
              levels[0].areas[1].map()
              break;
            }
            case '5,0': {
              levels[0].areas[1].map()
              break;
            }
            case '6,0': {
              levels[0].areas[1].map()
              break;
            }
            case '7,0': {
              levels[0].areas[1].map()
              break;
            }
            case '1,19': {
              levels[0].areas[2].mapTopLeft()
              break;
            }
            case '2,19': {
              levels[0].areas[2].mapTopLeft()
              break;
            }
            case '3,19': {
              levels[0].areas[2].mapTopLeft()
              break;
            }
            case '15,19': {
              levels[0].areas[2].mapTopCenter()
              break;
            }
            case '16,19': {
              levels[0].areas[2].mapTopCenter()
              break;
            }
            case '17,19': {
              levels[0].areas[2].mapTopCenter()
              break;
            }
            case '18,19': {
              levels[0].areas[2].mapTopCenter()
              break;
            }
            case '19,19': {
              levels[0].areas[2].mapTopCenter()
              break;
            }
            case '20,19': {
              levels[0].areas[2].mapTopCenter()
              break;
            }
            case '28,19': {
              levels[0].areas[2].mapTopRight()
              break;
            }
            case '29,19': {
              levels[0].areas[2].mapTopRight()
              break;
            }
            case '30,19': {
              levels[0].areas[2].mapTopRight()
              break;
            }
            case '31,19': {
              levels[0].areas[2].mapTopRight()
              break;
            }
            case '39,13': {
              levels[0].areas[3].mapTop()
              break;
            }
            case '39,14': {
              levels[0].areas[3].mapTop()
              break;
            }
          }
        },
      },
      {
        id: 2, //tileMaps 3 areas 1
        name: "Monarch Valley Top",
        map: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(3)
        moveScreen(0,500)
        moveScreenX = 0
        moveScreenY = 500
        movePlayer(4,19)
        enableKeys()
        },
        triggers: function () {
          switch (levels[0].getXY()) {
            case '3,19': {
              levels[0].areas[0].mapTop()
              break;
            }
            case '4,19': {
              levels[0].areas[0].mapTop()
              break
            }
            case '5,19': {
              levels[0].areas[0].mapTop()
              break
            }
          }
        },
      },
      {
        id: 3, //tileMaps 4 areas 2
        name: "Monarch Valley Bottom",
        mapTopLeft: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(4)
        moveScreen(0,0)
        moveScreenX = 0
        moveScreenY = 0
        movePlayer(1,0)
        enableKeys()
        },
        mapTopCenter: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(4)
        moveScreen(50,0)
        moveScreenX = 50
        moveScreenY = 0
        movePlayer(8,0)
        enableKeys()
        },
        mapTopRight: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(4)
        moveScreen(350,0)
        moveScreenX = 350
        moveScreenY = 0
        movePlayer(17,0)
        enableKeys()
        },
        mapRight: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(4)
        moveScreen(350,200)
        moveScreenX = 350
        moveScreenY = 200
        movePlayer(20,10)
        enableKeys()
        },
        triggers: function () {
          switch (levels[0].getXY()) {
           case '1,0': {
            levels[0].areas[0].mapBottomLeft()
            break;
          }
          case '2,0': {
            levels[0].areas[0].mapBottomLeft()
            break;
          }
          case '8,0': {
            levels[0].areas[0].mapBottomCenter()
            break;
          }
          case '7,0': {
            levels[0].areas[0].mapBottomCenter()
            break;
          }
          case '17,0': {
            levels[0].areas[0].mapBottomRight()
            break;
          }
          case '18,0': {
            levels[0].areas[0].mapBottomRight()
            break;
          }
          case '20,10': {
            levels[0].areas[3].mapBottom()
            break;
          }
          case '20,11': {
            levels[0].areas[3].mapBottom()
            break;
          }
          case '20,12': {
            levels[0].areas[3].mapBottom()
            break;
          }
        }
        }
      },
      {
        id:4, //tileMaps 5 areas 3
        name: "Monarch Valley Right",
        mapTop: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(5)
        moveScreen(0,0)
        moveScreenX = 0
        moveScreenY = 0
        movePlayer(0,3)
        enableKeys()
        },
        mapBottom: function () {
        tileMaps.clear()
        $doc.off().keydown(() => {this.triggers()})
        renderMap(5)
        moveScreen(0,450)
        moveScreenX = 0
        moveScreenY = 450
        movePlayer(0,15)
        enableKeys()
        },
        triggers: function () {
          switch (levels[0].getXY()) {
          case '0,2': {
            levels[0].areas[0].mapRight()
            break;
          }
          case '0,3': {
            levels[0].areas[0].mapRight()
            break;
          }
          case '0,4': {
            levels[0].areas[0].mapRight()
            break;
          }
          case '0,14': {
            levels[0].areas[2].mapRight()
            break;
          }
          case '0,15': {
            levels[0].areas[2].mapRight()
            break;
          }
          case '0,16': {
            levels[0].areas[2].mapRight()
            break;
          }
          }
        },
}

  ],
  setLevel: function () {
  renderMenus()
  renderItems()
  levels[0].areas[0].mapStartLeft()
  $battleBackground.css({"backgroundImage": `url(${this.battleSrc})`})
  $map.fadeIn(2000)
  $game.append($portal)
  $portal.hide()
  $player.hide()
  $portal.show(1200)
  $player.show(1700)
  setTimeout(() => {movePlayer(1,5,true)}, 2000)
  spinPortal()
  $portal.fadeOut(3500)
  $popBtn.show()
  setTimeout(() => {popup("none", "none", "Monarch Valley", "Wow this place is fantastic! I better be careful while I explore. There could be monsters hiding anywhere. Master Wynn said I need to find five infused spheres. I think the scrodents hide them in their dens.", 'I can use the arrow keys to move.','none', 'none', 'Continue')}, 4000)
    $popBtn.off().click(() => {
    $popContent.text("A good soldier will always maintain his arms, his equipment, and himself. I should check my inventory and status before I get too far.")
    teachBtns()
    function teachBtns () {
      $sideBtns.show()
      $popBtn.hide()
      $(".communication-info").hide()
      $(".menu-info").hide()
      let glowOn = setInterval(() => {
        $(".player-info").addClass("side-btn-glow")
        $(".inventory-info").addClass("side-btn-glow")
      }, 500)
      let glowOff = setInterval(() => {
        $(".player-info").removeClass("side-btn-glow")
        $(".inventory-info").removeClass("side-btn-glow")
      }, 1000)
      setTimeout(() => {clearInterval(glowOn); clearInterval(glowOff); $popBtn.show()}, 3000)
      $popBtn.off().click(() => {
        $(".communication-info").show()
        $(".menu-info").show()
        $popContent.text("I can contact SYMBOL using my X-300 communication device. Doctor Bosco mentioned that it doesn't work well between the portal rifts. This new prototype seems promising, I hope it works because this is the only way to contact Master Spren. Without him there is no way to open a portal back to the temple. I should also keep a log of my adventures so that SYMBOL can track all the amazing things happening between the worlds, or in case something happens to me...")
        let glowOn = setInterval(() => {
        $(".communication-info").addClass("side-btn-glow")
        $(".menu-info").addClass("side-btn-glow")
      }, 500)
      let glowOff = setInterval(() => {
        $(".communication-info").removeClass("side-btn-glow")
        $(".menu-info").removeClass("side-btn-glow")
      }, 1000)
      setTimeout(() => {clearInterval(glowOn); clearInterval(glowOff); $popBtn.off().show().click(() => {$popup.hide()})}, 3000)
      })
    }
  })
  $doc.keydown(() => {randomEncounter(40)})
}
  }
  ]
  
  
let quests = [
  {
    id: "quest0",
    name: "Find 5 Gem Spheres.",
    area: "Monarch Valley",
    areaImage: "images/backgrounds/monarchValley.jpg",
    count: 5,
    quest: `I should try and find 5 Infused gem spheres. I think the Scrodents collect them in thier dens.`,
    help: "I can use the arrow keys to move. I'm sure I can find some gem spheres.",
    comms: "Just a reminder, Doctor Bosco is working to eliminate the negative effects of the portals on the human mind. We hope, if this is accomplished, the Masters can join you on your excursions against INDUSTRY. Without our help I fear we may not be strong enough to defeat them. We need 5 INFUSED GEM SPHERES from the Monarch Valley. Fierce rodents seem to be gathering them in their dens. It is said they sit on them like a mother gooose. Strange creatures. Please hurry the faster we can join you in battle the better.",
    explain: "find five infused gem spheres for Dr. Bosco's experiments with the portals.",
    experience: 275,
    completed: false,
    count: 5,
    openMap: function () {levels[0].setLevel()}
  },
]

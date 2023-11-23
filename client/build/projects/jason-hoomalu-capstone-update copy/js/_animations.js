//INTRO SCREEN GRAPHICS
function startScreen() {
  $(".blade-cross").css("background-color", "white")
  $(".blade-handle").css("background-color", "white")
  $(".title").css("color", "slategrey")
  anime({
    targets: '.blade-handle',
    translateX: 2,
    translateY: -145,
    height: '80px',
    width: '60px',
    direction: 'center',
    loop: false,
    easing: 'easeInOutSine'
  })
  anime({
    targets: '.blade-cross',
    translateX: 2,
    translateY: -140,
    height: '40px',
    width: '220px',
    direction: 'center',
    loop: false,
    easing: 'easeInOutSine'
  })
  anime({
    targets: '.blade-left',
    translateX: 2,
    translateY: -170,
    width: '40px',
    height: '320px',
    direction: 'left',
    loop: false,
    easing: 'easeInOutSine'
  })
  anime({
    targets: '.blade-right',
    translateX: 2,
    translateY: -170,
    height: '320px',
    width: '40px',
    direction: 'right',
    loop: false,
    easing: 'easeInOutSine'
  })
}

//BATTLE ANIMATIONS//BATTLE ANIMATIONS

const enemySway = anime({
  targets: "#enemy-battle-img",
  translateX: 10,
  delay: function (el, i) { return i * 100; },
  direction: "alternate",
  loop: true,
  easing: "easeInOutSine"
});
const playerSway = anime({
  targets: ".player-battle-img",
  translateX: 10,
  delay: function (el, i) { return i * 100; },
  direction: "alternate",
  loop: true,
  easing: "easeInOutSine"
});
//END STATIC ANIMATIONS

//DISTANCE FOR ATTACK MOVEMENT
// invoked by playerAttackMovement enemyAttackMovement//

let attackDistanceWidth
let attackDistanceHeight
function attackDistanceCalculate() {
  if (window.innerWidth <= 400) {
    attackDistanceWidth = -20
    attackDistanceHeight = -260
  } else if (window.innerWidth <= 800) {
    attackDistanceWidth = window.innerWidth / 4 * -1
    attackDistanceHeight = window.innerHeight / 3 * -1
  } else if (window.innerWidth <= 1200) {
    attackDistanceWidth = window.innerWidth / 2.5 * -1
    attackDistanceHeight = window.innerHeight / 3 * -1
  } else if (window.innerWidth > 1200)
    attackDistanceWidth = window.innerWidth / 2 * -1
  attackDistanceHeight = window.innerHeight / 3 * -1
}

//ATTACK MOVEMENT
function playerAttackMovement() {
  attackDistanceCalculate()
  anime({
    targets: ".player-battle-img",
    translateX: [attackDistanceWidth, 0], // from 100 to 250
    translateY: [attackDistanceHeight, 0],
    //easing: "easeInOutSine",
    delay: 1000,
    direction: "alternate",
    loop: false,
  });
}

//ENEMY ATTACK MOVEMENT
function enemyAttackMovement() {
  attackDistanceCalculate()
  anime({
    targets: "#enemy-battle-img",
    translateX: [attackDistanceWidth * -1, 0], // from 100 to 250
    translateY: [attackDistanceHeight * -1, 0],
    //easing: "easeInOutSine",
    delay: 1000,
    direction: "alternate",
    loop: false,
  });
}



//SPINS PORTAL SMALL
function spinPortal() {
  anime({
    targets: '.map-portal',
    scale: 1.1,
    rotate: {
      value: [1000, 20000],
      duration: 3000,
      easing: 'easeInOutSine',
    },
  });
}

//SPINS PORTAL SMALL
function spinPortalLarge() {
  $(".portal-player").show().fadeOut(4000)
  $(".portal-portal").show().fadeOut(4000)
  anime({
    targets: '.portal-portal',
    rotate: {
      value: [1000, 20000],
      duration: 5000,
      easing: 'easeInOutSine',
    },
  });
  anime({
    targets: '.portal-player',
    scale: [1, 0],
    easing: 'easeInOutSine',
    loop: 2,
    duration: 4000,
  });
}


//attack ANIMATION
function attackAnimation(user, success) {
  let hit
  success ? hit = true : hit = false
  let slashLeft = $(`<img id="slashLeft" class="slashLeft" src="images/spells/slashLeft.png">`)
  let slashRight = $(`<img id="slashRight" class="slashRight" src="images/spells/slashRight.png">`)
  let hitBar = $(`<div class="hit"></div>`)
    if (user === player) {
        this.damage = player.magic + Math.ceil(Math.random() * player.magic)
        $enemySpellBox.append(slashLeft, hitBar, slashRight)
      } else {
        $playerSpellBox.append(slashLeft, hitBar, slashRight)
      }
      setTimeout(() => {
        $playerSpellBox.empty().css("backgroundImage", "none")
        $enemySpellBox.empty().css("backgroundImage", "none")
      },1000)
  anime({
    targets: '#slashLeft',
    height: '2px',
    width: '100px',
    direction: 'center',
    duration: 300,
    easing: "easeInOutSine",
    loop: 1,
  });
  anime({
    targets: '#slashRight',
    height: '2px',
    width: '100px',
    direction: 'center',
    duration: 300,
    easing: "easeInOutSine",
    loop: 1,
  })
  if (hit) {
  anime({
    targets: '.hit',
    height: '4px',
    skew: '180deg',
    width: '100px',
    direction: 'center',
    duration: 300,
    easing: "easeInOutSine",
    loop: 1,
  })
  }
}



//SLASH ANIMATION
function slash(user) {
  let slashLeft = $(`<img id="slashLeft" class="slashLeft" src="images/spells/slashLeft.png">`)
  let slashRight = $(`<img id="slashRight" class="slashRight" src="images/spells/slashRight.png">`)
  let hit = $(`<div class="hit"></div>`)
  if (user === player) {
    $playerSpellBack.css("backgroundImage", `url("${abilities.getById(0).backingSrc}")`)
    $enemySpellBox.append(slashLeft, hit, slashRight)
  } else {
    $enemySpellBack.css("backgroundImage", `url("${abilities.getById(0).backingSrc}")`)
    $playerSpellBox.append(slashLeft, hit, slashRight)
  }
  anime({
    targets: '#slashLeft',
    height: '5px',
    width: '260px',
    rotate: Math.ceil(Math.random() * 360) + 'deg',
    direction: 'center',
    duration: 300,
    easing: "easeInOutSine",
    loop: 4,
  });
  anime({
    targets: '#slashRight',
    height: '5px',
    width: '260px',
    rotate: Math.ceil(Math.random() * 360) + 'deg',
    direction: 'center',
    duration: 300,
    easing: "easeInOutSine",
    loop: 4,
  })
  anime({
    targets: '.hit',
    height: '8px',
    width: '200px',
    direction: 'center',
    duration: 300,
    easing: "easeInOutSine",
    loop: 4,
  })
  setTimeout(() => {
        $playerSpellBack.empty().css("backgroundImage", "none")
        $enemySpellBack.empty().css("backgroundImage", "none")
        $playerSpellBox.empty().css("backgroundImage", "none")
        $enemySpellBox.empty().css("backgroundImage", "none")
      },1500)
}

function harness (user) {
  if (user === player) {
      $playerSpellBack.css("backgroundImage", `url("${abilities.getById(1).backingSrc}")`)
      let graphic = $(`<img src="images/spells/spellHarness.png">`)
      $enemySpellBox.append(graphic)
      attackAnimation(player, true)
  } else {
      $enemySpellBack.css("backgroundImage", `url("${abilities.getById(1).backingSrc}")`)
      let graphic = $(`<img src="images/spells/spellHarness.png">`)
      $playerSpellBox.append(graphic)
      attackAnimation(enemy, true)
  }
  setTimeout(() => {
        $playerSpellBack.empty().css("backgroundImage", "none")
        $enemySpellBack.empty().css("backgroundImage", "none")
        $playerSpellBox.empty().css("backgroundImage", "none")
        $enemySpellBox.empty().css("backgroundImage", "none")
      },1000)
}


function drain(user) {
  let centerGraphic = $(`<img id="drainSpell" src="images/spells/spellDrain.png">`)
      for (let i = 0; i < 12; i++) {
      let top = Math.floor(Math.random() * 100)
      let left = Math.floor(Math.random() * 100)
      let dot = $(`<div class="dot red"></div>`).css({"top": `${top}px`, "left": `${left}px`, "opacity": ".8"})
      user === player ? $enemySpellBox.append(dot) : $playerSpellBox.append(dot)
      $centerSpellBox.append(centerGraphic)
  anime({
    targets: '#drainSpell',
    width: '250px',
    skew: 500,
    duration: 500,
    rotate: 1080,
    endDelay: 600,
    easing: "easeInOutSine",
    direction: "alternate",
  })
    let tl = anime.timeline({
    targets: '.dot',
    delay: function (el, i) { return i * 100 },
    height: "50px",
    duration: 500,
    width: "50px",
  });
  if (user === player) {
    $playerSpellBack.css("backgroundImage", `url("${abilities.getById(3).backingSrc}")`)
  tl
    .add({
      translateX: window.innerWidth / 3,
      translateY: 150,
      scale: 0,
      easing: 'easeInOutSine',
    })
    .add({
      delay: 500,
      delay: function (el, i) { return i * 100 },
      scale: .5,
      opacity: .6,
      height: "20px",
      width: "20px",
      translateX: window.innerWidth / 1.45,
      translateY: window.innerHeight / 2,
      easing: 'easeInOutSine',
    })
    .add({
      scale: 0,
      easing: 'easeInOutSine',
    })
    .add({ targets: '.dot', background: 'rgb(65,255,25)' }, 2000)
    .add({ targets: '.dot', background: 'rgb(255,0,0)' }, 5000)
} else {
    $enemySpellBack.css("backgroundImage", `url("${abilities.getById(3).backingSrc}")`)
  tl
    .add({
      translateX: (window.innerWidth / 4) * -1,
      translateY: -100,
      scale: 0,
      easing: 'easeInOutSine',
    })
    .add({
      delay: 500,
      delay: function (el, i) { return i * 100 },
      scale: .5,
      opacity: .6,
      height: "20px",
      width: "20px",
      translateX: (window.innerWidth / 1.8) * -1,
      translateY: (window.innerHeight / 2.8) *-1,
      easing: 'easeInOutSine',
    })
    .add({
      scale: 0,
      easing: 'easeInOutSine',
    })
    .add({ targets: '.dot', background: 'rgb(65,255,25)' }, 2000)
    .add({ targets: '.dot', background: 'rgb(255,0,0)' }, 5000)
}
}
setTimeout(() => {
        $centerSpellBox.empty()
        $playerSpellBack.empty().css("backgroundImage", "none")
        $enemySpellBack.empty().css("backgroundImage", "none")
        $playerSpellBox.empty().css("backgroundImage", "none")
        $enemySpellBox.empty().css("backgroundImage", "none")
      },5500)
}


function buckshot (user) {
  let shots
  for (let i = 0; i < 25; i++) {
      let top = Math.floor(Math.random() * 150)
      let left = Math.floor(Math.random() * 200)
      let shots = $(`<img class="dot" src="images/spells/buckshot.png">`).css({"top": `${top}px`, "left": `${left}px`, "opacity": "1"})
      user === player ? $enemySpellBox.append(shots) : $playerSpellBox.append(shots)
  }
  if (user === player) {
    $playerSpellBack.css("backgroundImage", `url("${abilities.getById(2).backingSrc}")`)
  } else {
    $enemySpellBack.css("backgroundImage", `url("${abilities.getById(3).backingSrc}")`)
  }
  anime({
    targets: ".dot",
    easing: "easeInOutQuad",
    delay: anime.stagger(100),
    width: ["25px", "0px"],
    height: ["25px", "0px"],
  })
  setTimeout(() => {
    $playerSpellBox.empty()
    $enemySpellBox.empty()
    $playerSpellBack.empty().css("backgroundImage", "none")
    $enemySpellBack.empty().css("backgroundImage", "none")
    $playerSpellBox.empty().css("backgroundImage", "none")
    $enemySpellBox.empty().css("backgroundImage", "none")
  }, 2500)
}




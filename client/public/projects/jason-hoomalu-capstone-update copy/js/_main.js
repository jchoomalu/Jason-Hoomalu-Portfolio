//GAMEPLAY AND MAP VARIABLES
const $game = $(".game");
const $map = $(".map");
const $sideBtns = $(".side-btns");
const $doc = $(document);
//POPUP DIALOG VARIABLES
const $popup = $("#popup");
const $popImgPlayer = $("#popup-img-player");
const $popImgNpc = $("#popup-img-npc");
const $popName1 = $("#popup-name1");
const $popName2 = $("#popup-name2");
const $popTitle = $("#popup-title");
const $popContent = $("#popup-content");
const $popRes1 = $("#popup-response1");
const $popRes2 = $("#popup-response2");
const $popRes3 = $("#popup-response3");
const $popBtn = $("#popup-btn").click(() => {
  $popup.hide();
});
//HOME PAGE VARIABLES
const $dialogBox = $(".dialog-box");
const $dialogText = $(".dialog-text");
const $dialogBtn = $(".dialog-btn");
const $response1 = $("#response-one");
const $response2 = $("#response-two");
const $response3 = $("#response-three");
const $masterImg = $(".master-image");
const $nav = $(".nav-box");
const $npc = $(".npc-box");
const $homePage = $(".home-page");
//PORTAL PAGE
const $portalPage = $(".portal-page");
//BATTLE PAGE ACTION VARIABLES
const $battlePage = $(".battle-page");
const $gameOverPage = $(".gameover-page");
const $battleAlert = $(".alert-battle");
const $battleBackground = $(".enemyWrapper");
const $portal = $('<img class="map-portal" src="images/game/portal.png">');

$(".start-new-game").click(() => {
  $(".game-btns").fadeOut(2000);
  setTimeout(startScreen, 2000);
  $(".title").addClass("title-full");
  setTimeout(showNextBtn, 3000);
  localStorage.clear();
});

//NEXT BTN AND PAGE TRACKING USES SECTION ID NUMBER
function showNextBtn() {
  $(".next-btn").toggleClass("hidden");
}

//NEXT BTN LOGIC AND PAGE FLIP
let pageID = 0;
$(".next-btn").click((e) => {
  $("body").addClass("game-start");
  pageID++;
  $(e.target).parent().hide("fast");
  $(`#page${pageID}`).show("slow");
  if (pageID === 5) {
    $(`#page${pageID}`).hide(1400);
    $(".character-select").show(2000);
  }
});

$(".character-carousel-inner").click((e) => {
  if ($(e.target).attr("src").includes("milo")) {
    player = players.playable[0];
  }
  if ($(e.target).attr("src").includes("ling")) {
    player = players.playable[1];
  }
  if ($(e.target).attr("src").includes("beaux")) {
    player = players.playable[2];
  }
  if ($(e.target).attr("src").includes("alisa")) {
    player = players.playable[3];
  }
  renderMenus();
  $(".card").css("background-image", "url(" + player.srcFL + ")");
  $(".character-select").hide();
  $(".character-cards").show();
});

//CAROUSEL BTNS BACK OR SELECT
$(".card-back").click((e) => {
  e.preventDefault();
  $(".character-cards").hide(500);
  $(".character-select").show(1000);
});

//PLAYER NAME VALIDATION
$("#submit-name").click(() => {
  //ASK TO USE DEFAULT NAME
  if ($("#character-name").val().length === 0) {
    // $("#submit-name").attr("data-bs-dismiss", "modal")
    $(".character-cards").hide("fast");
    $popImgPlayer.attr("src", player.srcSR);
    popup(
      "none",
      "none",
      `${player.name}`,
      `Would you like to use the default name ${player.name}`,
      "yes",
      "no",
      "none"
    );
    $("#char-name").removeClass("show");
    $popRes1.off().click(() => {
      $popup.hide();
      $homePage.show();
      // $(".modal-backdrop").hide()
      renderMenus();
    });
    $popRes2.off().click(() => {
      $popup.hide();
      $("#char-name").addClass("show");
      $("#validate-name").text("Please enter a name");
    });
  }
  if ($("#character-name").val().length < 3) {
    $("#validate-name").text("Please enter at least 3 characters");
  } else if ($("#character-name").val().length > 12) {
    $("#validate-name").text("Please enter less than 12 characters");
  } else {
    player.name = $("#character-name").val();
    // $("#submit-name").attr("data-bs-dismiss", "modal")
    $(".character-cards").hide("fast");
    // $("#char-name").removeClass("show")
    // $(".modal-backdrop").hide()
    $homePage.show();
    renderMenus();
  }
});

$(".quest-btn").click(() => {
  if (!questTrue) {
    return;
  }
  renderMenus();
  $(".comms-messages").text(currentQuest.comms);
  setActiveCommunicator("wynn");
});

function setActiveCommunicator(contact) {
  $(".comms-img")
    .toArray()
    .forEach((a) => {
      a.classList.remove("comms-active");
      if (a.getAttribute("src").toLowerCase().includes(contact)) {
        a.classList.add("comms-active");
      }
    });
}

function getIndexByCoordinates() {
  return player.y * currentMap.mapX + player.x;
}

//uses src img number to identify NPC
let currentEncounterHTML;

function getTileInfo(x) {
  if ($(`#${x}`).data("open") === false && $(`#${x}`).data("npc") === true) {
    let npcID = $(`#${x}`).attr("src");
    npcID = npcID.match(/\d+/)[0];
    currentEncounterHTML = $(`#${x}`);
    console.log(npcID);
    npc.greetById(npcID);
    return false;
  }
  if ($(`#${x}`).data("open") === false) {
    return false;
  }
}

let currentMap;

function renderMap(id) {
  tempMapXCoordinates = []; //adjustments for different size maps
  tempMapYCoordinates = []; //adjustments for different size maps
  currentMap = tileMaps.levels[id];
  const mapContent = currentMap.map;
  let imgID = 0;
  tileMaps.setXCoordinates(id);
  tileMaps.setYCoordinates(id);
  for (let i = 0; i < mapContent.length; i++) {
    let left = `${tempMapXCoordinates[i] * 50}px`;
    let top = `${tempMapYCoordinates[i] * 50}px`;
    if (
      typeof mapContent[i] === "object" &&
      mapContent[i].length >= 2 &&
      tileData
        .getSrcById(mapContent[i][mapContent[i].length - 1])
        .includes("npc")
    ) {
      mapContent[i].forEach((a, b) => {
        let length = mapContent[i].length - 1;
        let open = tileData.getOpenById(mapContent[i][b]);
        let tile = $(
          `<img class="mapimg" data-open="${open}" src="${tileData.getSrcById(
            mapContent[i][b]
          )}">`
        ).css({ left: left, top: top });
        if (b === length) {
          tile.attr("data-npc", "true");
          tile.attr("data-open", `${open}`);
          tile.attr("id", `${imgID}`);
        }
        $(".game").append(tile);
      });
    } else if (typeof mapContent[i] === "object") {
      mapContent[i].forEach((a, b) => {
        let front = tileData.getFrontById(mapContent[i][b]);
        let length = mapContent[i].length - 1;
        let open = tileData.getOpenById(mapContent[i][b]);
        let tile = $(
          `<img class="mapimg" data-open="${open}" src="${tileData.getSrcById(
            mapContent[i][b]
          )}">`
        ).css({ left: left, top: top });
        if (b === length) {
          tile.attr("id", `${imgID}`);
        }
        if (front) {
          tile.attr("data-front", "true");
        }
        $(".game").append(tile);
      });
    } else {
      let tile = $(
        `<img id="${imgID}" class="tile mapimg" src="${tileData.getSrcById(
          mapContent[i]
        )}">`
      ).css({ left: left, top: top });
      $(".game").append(tile);
    }
    imgID++;
  }
}

//MOVE AND CENTERING FUNCTIONS ARROW KEYS
let moveScreenY = 0;
let moveScreenX = 0;

function moveDown() {
  let checksquare = currentMap.mapX * player.y + player.x + currentMap.mapX;
  if (getTileInfo(checksquare) === false) {
    return;
  }
  if (player.y < currentMap.mapY - 1) {
    player.y++;
    $player.animate({ top: `${player.y * 50}px` }, 200);
  }
}
function moveUp() {
  let checksquare = currentMap.mapX * player.y + player.x - currentMap.mapX;
  if (getTileInfo(checksquare) === false) {
    return;
  }
  if (player.y > 0) {
    player.y--;
    $player.animate({ top: `${player.y * 50}px` }, 200);
  }
}
function moveLeft() {
  $player.attr("src", player.srcL);
  let checksquare = currentMap.mapX * player.y + player.x - 1;
  if (getTileInfo(checksquare) === false) {
    return;
  }
  if (player.x > 0) {
    player.x--;
    $player.animate({ left: `${player.x * 50}px` }, 200);
  }
}
// let x = 0
function moveRight() {
  $player.attr("src", player.srcR);
  let checksquare = currentMap.mapX * player.y + player.x + 1;
  if (getTileInfo(checksquare) === false) {
    return;
  }
  if (player.x < currentMap.mapX - 1) {
    player.x++;
    $player.animate({ left: `${player.x * 50}px` }, 200);
  }
}

function centerPlayer() {
  const left = player.x * 50;
  const top = player.y * 50;
  let scrLeft = left - $game.innerWidth() / 2;
  let scrTop = top - $game.innerHeight() / 2;
  $game.animate(
    {
      scrollLeft: scrLeft,
      scrollTop: scrTop,
    },
    200
  );
}
//KEYPRESS FUNCTIONALITY
function enableKeys() {
  $doc.keydown((e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        moveUp();
        centerPlayer();
        break;
      case "ArrowRight":
        e.preventDefault();
        moveRight();
        centerPlayer();
        break;
      case "ArrowDown":
        e.preventDefault();
        moveDown();
        centerPlayer();
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveLeft();
        centerPlayer();
        break;
    }
  });
}

//DISABLE MOVEMENT FOR CINEMTAICS
function disableKeys() {
  $doc.keyup().off();
}

//MANUAL MOVEMENT TO COORDINATES
function movePlayer(x, y, a) {
  if (a) {
    player.x = x;
    player.y = y;
    $player.animate({ left: `${player.x * 50}px` });
    $player.animate({ top: `${player.y * 50}px` });
  } else {
    player.x = x;
    player.y = y;
    $player.css({ left: `${player.x * 50}px` });
    $player.css({ top: `${player.y * 50}px` });
  }
}
function movePlayer2(x, y, a) {
  if (a) {
    player2.x = x;
    player2.y = y;
    $player2.animate({ left: `${player2.x * 50}px` });
    $player2.animate({ top: `${player2.y * 50}px` });
  } else {
    player2.x = x;
    player2.y = y;
    $player2.css({ left: `${player2.x * 50}px` });
    $player2.css({ top: `${player2.y * 50}px` });
  }
}

function moveScreen(x, y) {
  $game.scrollLeft(x);
  $game.scrollTop(y);
}

function renderMenus() {
  renderItems();
  renderBattleMagic();
  renderBattleItems();
  //CHARACTER CARDS
  $(".character-type").text(player.type);
  $(".character-race").text(player.race);
  $(".character-decription").text(player.description);
  $(".character-ability-decription").text(player.abilityDesctiption);
  //PLAYER MODAL AND MENU MODAL
  const getAbilityList = (player) => {
    const abilityList = player.abilities.map(
      (ability) => abilities.getById(ability).name
    );
    return abilityList.map((name) => $(`<p>${name}</p>`));
  };
  let list = getAbilityList(player);
  const $abilityItems = $(".ability-list-item");
  if ($abilityItems.children().length === 0) {
    $abilityItems.eq(0).append(list); // Append the joined HTML string to the first element with the class `ability-list-item`
  }
  $(".player-mod-name").text(player.name);
  $(".player-mod-type").text(player.type);
  $(".player-mod-level").text(`Level: ${player.level}`);
  $(".player-mod-experience").text(`XP: ${player.experience}`);
  $(".player-mod-spheres").text(`Spheres: ${player.spheres}`);
  $(".player-mod-attack").text(player.attack);
  $(".player-mod-defense").text(player.defense);
  $(".player-mod-intelligence").text(player.intelligence);
  $(".player-mod-magic").text(player.magic);
  $(".player-mod-dexterity").text(player.dexterity);
  $(".player-mod-strength").text(player.strength);
  $(".player-mod-quest").text(`Quest: ${currentQuest.name}`);
  //INVENTORY MODAL
  $(".bonus-attack").text(`Atk: ${player.attack}`);
  $(".bonus-defense").text(`Def: ${player.defense}`);
  $(".bonus-magic").text(`MP: ${player.MP}`);
  $(".bonus-health").text(`HP: ${player.HP}`);
  //MENU MODAL
  $(".popup-img").attr("src", player.srcSR);
  $(".menu-img").attr("src", player.srcSR);
  //HOME PAGE
  $(".story-board-home").css("background-image", "url(" + player.srcFL + ")");
  currentMaster = masters[0];
  $dialogText.text(currentMaster[`dialog${questTracker}`].greet);
  $masterImg.attr("src", "images/npc/npcMain/masterWynn.png");
  $npc.click();
  //PORTAL PAGE
  $(".portal-player").attr("src", player.srcL);
  //MAP PAGE
  $("#player").attr("src", player.srcR);
  $(".player-info")
    .css("background-image", "url(" + player.srcSL + ")")
    .click(() => {
      renderMenus();
    });
  //BATTLE-PAGE
  $(".player-battle-img").attr("src", player.srcL);
}

//NPC MASTER SELECT AND DIALOG LOOP
$npc.click((e) => {
  $dialogBtn.show();
  hideDialog();
  if ($(e.target).attr("id") === "wynn") {
    currentMaster = masters[0];
    loopGreet();
    $masterImg.attr("src", "images/npc/npcMain/masterWynn.png");
  }
  if ($(e.target).attr("id") === "spren") {
    currentMaster = masters[1];
    loopGreet();
    $masterImg.attr("src", "images/npc/npcMain/spren.png");
  }
  if ($(e.target).attr("id") === "bosco") {
    player.HP = player.health;
    player.MP = player.mana;
    currentMaster = masters[2];
    loopGreet();
    $masterImg.attr("src", "images/npc/npcMain/drBosco.png");
  }
  if ($(e.target).attr("id") === "kalii") {
    currentMaster = masters[3];
    loopGreet();
    $masterImg.attr("src", "images/npc/npcMain/kalii.png");
  }
});

//HIDES ALL PREVIOUS TEXT
function hideDialog() {
  $response1.hide();
  $response2.hide();
  $response3.hide();
}

//RETURNS TO  MASTERS ORIGINAL STATEMENT LISTED IN MASTERS DIALOG
function loopGreet() {
  hideDialog();
  $dialogText.text(currentMaster[`dialog${questTracker}`].greet);
  $dialogBtn.show();
}
$dialogBtn.click(() => {
  hideDialog();
  if ($masterImg.attr("src").includes("Wynn")) {
    dialogLoop(questTracker);
  }
  if ($masterImg.attr("src").includes("spren")) {
    dialogLoop(questTracker);
  }
  if ($masterImg.attr("src").includes("Bosco")) {
    dialogLoop(questTracker);
  }
  if ($masterImg.attr("src").includes("kalii")) {
    dialogLoop(questTracker);
  }
});

function dialogLoop(questTracker) {
  $dialogBtn.hide();
  if (questTrue) {
    $dialogText.text(currentMaster[`dialog${questTracker}`].questAccepted);
  }
  if (!questTrue) {
    $dialogText.text(currentMaster[`dialog${questTracker}`].questOffered);
  }
  $response1.text(currentMaster[`response${questTracker}`].accept).show();
  $response2.text(currentMaster[`response${questTracker}`].ask).show();
  $response3.text(currentMaster[`response${questTracker}`].loop).show();
  $response1.click(() => {
    if (!questTrue) {
      $dialogText.text(currentMaster[`dialog${questTracker}`].questOffered);
      $response1.text(currentMaster[`response${questTracker}`].accept).hide();
      $response2.text(currentMaster[`response${questTracker}`].ask).hide();
    } else {
      $dialogText.text(currentMaster[`dialog${questTracker}`].questAccepted);
      $response1.text(currentMaster[`response${questTracker}`].accept).hide();
      $response2.text(currentMaster[`response${questTracker}`].ask).hide();
    }
    if (currentMaster.name === "Master Wynn") {
      $dialogText.text(currentMaster[`dialog${questTracker}`].questAccepted);
      questTrue = true;
      currentQuest = quests[`${questTracker}`];
    }
    if (currentMaster.name === "Master Spren") {
      if (questTrue === false) {
        $dialogText.text(`I cannot open a portal for you now.`);
      } else if (questTrue === true) {
        currentLevel = levels[mapLevel];
        $homePage.hide();
        $portalPage.show();
        $(".portal-box").text(currentLevel.description);
      }
    }
    if (currentMaster.name === "Doctor Bosco") {
      if (questTrue === false) {
        $dialogText.text(
          `I can only sell you items if you are on business for SYMBOL.`
        );
      }
      if (questTrue === true) {
        $homePage.hide();
        $shopPage.show();
      }
    }
    if (currentMaster.name === "Master Kalii") {
      if (questTrue === false && questTracker === 0) {
        $dialogText.text(
          `I gotta check wit da boss first, check back with me lata.`
        );
      } else if (questTrue === false && questTracker === 1) {
        $dialogText.text(
          `Okay, I teach you something now, when you have the answer, I teach you more. What do the trees say?`
        );
      }
    }
  });
  $response2.click(() => {
    $dialogText.text(currentMaster[`dialog${questTracker}`].info);
    hideDialog();
    $response3.show();
  });
  $response3.click(() => {
    loopGreet(currentMaster[`dialog${questTracker}`].greet);
  });
  if (questTracker === 2) {
    hideDialog();
    $response2.show();
  }
}

//////////////////////////////////PORTAL PAGE////////////////////////////////////////
$(".portal-btn").click((e) => {
  $(".portal-box").hide();
  $(".portal-btn").hide();
  spinPortalLarge();
  setTimeout(() => {
    currentLevel.setLevel();
    $portalPage.hide();
    $map.show();
  }, 4000);
});

///////////////////////////////////BOOTSTRAP FUNCTIONALITY///////////////////////////////////////
//ENABLE TOOLTIPS
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//ENABLE POPOVERS
let popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

function popup(npcimg, npcname, title, content, res1, res2, res3, btn) {
  $popup.show();
  npcimg === "none" ? $popImgNpc.hide() : $popImgNpc.attr("src", npcimg);
  $popName1.text(player.name);
  npcname === "none" ? $popName2.text("") : $popName2.text(npcname);
  $popTitle.text(title);
  $popContent.text(content);
  res1 === "none" ? $popRes1.hide() : $popRes1.text(res1).show();
  res2 === "none" ? $popRes2.hide() : $popRes2.text(res2).show();
  res3 === "none" ? $popRes3.hide() : $popRes3.text(res3).show();
  btn === "none" ? $popBtn.hide() : $popBtn.text(btn);
}

function clearPopup() {
  $popRes1.off();
  $popRes2.off();
  $popRes3.off();
}

//GENERTATES TWO RANDOM NUMBERS IF THEY MATCH TRIGGER BATTLE
function randomEncounter(num) {
  let randomNumber = Math.floor(Math.random() * (num || 10)) + 1;
  let randomNumber2 = Math.floor(Math.random() * (num || 10)) + 1;
  console.log(randomNumber, randomNumber2);
  if (randomNumber === randomNumber2) {
    startBattle();
  }
}

let mapEncounter = false;
//BATTLE SCENES AND ENEMY CONSTRUCTORS
//ENEMY DECLARATIONS
let worb, cody, eevee, rat;

let enemyArray = [];

class LowLevelEnemy {
  constructor(name, image, HP, attack, dexterity, defense, experience) {
    this.src = image;
    this.name = name;
    this.HP = HP;
    this.attack = attack;
    this.dexterity = dexterity;
    this.defense = defense;
    (this.experience = experience),
      (this.damage =
        Math.floor(Math.random() * 5) + this.attack + this.dexterity);
    this.spheres = Math.floor(Math.random() * 10) + 5;
  }
}

//CREATE NEW ARRAY EACH TIME AND SELECT ONE RANDOMLY BASED ON CHARACTER LEVEL USES SET ENEMY FUNCTION 1266
function createLowEnemies() {
  worb = new LowLevelEnemy(
    "Butterfly Collector",
    "images/npc/_3worb.png",
    30,
    58,
    3,
    100,
    25
  );
  cody = new LowLevelEnemy(
    "Cody-Boy",
    "images/npc/_17cody.png",
    30,
    58,
    3,
    108,
    20
  );
  eevee = new LowLevelEnemy(
    "Fluffy-Fox",
    "images/npc/_21eevee.png",
    20,
    58,
    4,
    62,
    10
  );
  rat = new LowLevelEnemy(
    "Deranged-Rat",
    "images/npc/_51pik.png",
    20,
    58,
    4,
    62,
    10
  );
  enemyArray = [];
  enemyArray.push(worb, cody, eevee, rat);
}

//BATTLE PAGE DECLARATIONS
let enemyBattleImg = $("#enemy-battle-img");

//MUST SET ENEMY LIST FIRST WITH CREATE ENEMY FUNCTIONS ABOVE START 240
let enemy;
function setEnemy(enemyArray) {
  if (enemyArray.length > 1) {
    enemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
  } else {
    enemy = enemyArray[0];
    mapEncounter = true;
  }
  enemy.health = enemy.HP;
  updateHealth();
  enemyBattleImg.attr("src", enemy.src);
  $battleAlert.text(`You encountered ${enemy.name}`);
}

function startBattle() {
  createLowEnemies();
  setEnemy(enemyArray);
  $map.hide(1000);
  $battlePage.show(2000);
  showSpellBoxes();
}

function showSpellBoxes() {
  $playerSpellBack = $(".player-spell-back").show();
  $enemySpellBack = $(".enemy-spell-back").show();
  $playerSpellBox = $(".player-spell-box").show();
  $enemySpellBox = $(".enemy-spell-box").show();
  $centerSpellBox = $(".center-spell-box").show();
}

//////////////////////////////////PLAYER ATTACK////////////////////////////////////////////////
let attackBtn = $(".attack-btn");
attackBtn.click(() => {
  let hitGraphic = false;
  playerAttackMovement();
  let damage =
    Math.floor(Math.random() * enemy.dexterity) +
    (player.strength + Math.floor(Math.random() * player.dexterity));
  let attackChance = Math.floor(player.attack);
  let blockChance = enemy.defense;
  let chanceCheck = Math.ceil(Math.random() * 100);
  // console.log(blockChance)
  // console.log((attackChance + chanceCheck), blockChance)
  //COMPARE FOR HIT / MISS
  if (attackChance + chanceCheck > blockChance) {
    battleLog(`You hit ${enemy.name} for ${damage} HP!`);
    enemy.HP -= damage;
    hitGraphic = true;
    updateHealth();
  } else {
    battleLog(`You miss ${enemy.name}!`);
  }
  attackAnimation(player, hitGraphic);
  disableBattleButtons();
  setTimeout(() => {
    enemyAttack();
  }, 2200);
});

function enemyAttack() {
  let hitGraphic = false;
  if (enemy.HP >= 1) {
    enemyAttackMovement();
    let damage =
      Math.floor(Math.random() * player.dexterity) +
      player.strength +
      Math.floor(Math.random() * enemy.dexterity);
    let attackChance = Math.floor(enemy.attack);
    let blockChance = player.defense;
    let chanceCheck = Math.ceil(Math.random() * 100);
    console.log(blockChance);
    console.log(attackChance + chanceCheck, blockChance);
    if (attackChance + chanceCheck > blockChance) {
      battleLog(`${enemy.name} hit you for ${damage} HP!`);
      player.HP -= damage;
      updateHealth();
      hitGraphic = true;
    } else {
      battleLog(`${enemy.name} misses!`);
    }
    attackAnimation(enemy, hitGraphic);
  }
  setTimeout(() => {
    enableBattleButtons();
  }, 2200);
}

function battleLog(text) {
  $battleAlert.slideUp();
  $battleAlert.text(text);
  $battleAlert.slideDown();
}

function battleReview() {
  //FOR SPECIAL FIGHTS NOT RANDOM MONSTERS
  if (mapEncounter) {
    if (currentQuest.id === "quest0") {
      currentQuest.count--;
    }
    popup(
      enemy.src,
      "none",
      `${enemy.name} Defeated!`,
      `${enemy.description}`,
      `You've earned ${enemy.experience} XP!`,
      `You found ${enemy.spheres} spheres!`,
      `none`,
      "Continue"
    );
    $popBtn
      .off()
      .click(() => {
        $popup.hide();
        enemyBattleImg.removeClass("death");
        $battlePage.hide();
        $map.show();
      })
      .show();
    currentEncounterHTML.remove();
    player.questItems.push(enemy.items);
    mapEncounter = false;
    player.experience += enemy.experience;
    player.spheres += enemy.spheres;
    player.killCount++;
  } else {
    popup(
      enemy.src,
      "none",
      `${enemy.name} Defeated!`,
      `Well done! You have won the battle.`,
      `You've earned ${enemy.experience} XP!`,
      `You found ${enemy.spheres} spheres!`,
      "none",
      "Continue"
    );
    $popImgNpc.show();
    $popBtn
      .off()
      .click(() => {
        $popup.hide();
        enemyBattleImg.removeClass("death");
        $battlePage.hide();
        $map.show();
      })
      .show();
    player.experience += enemy.experience;
    player.spheres += enemy.spheres;
    player.killCount++;
  }
  $doc.on("animationend", () => {
    enemy = {};
  });
}

function disableBattleButtons() {
  $(".battle-btn").attr("disabled", true);
}
function enableBattleButtons() {
  $(".battle-btn").attr("disabled", false);
}

//////////////////////////////////HEALTH BAR LOGIC////////////////////////////////////////////////

function updateHealth() {
  //HEALTH IS TOTAL CONSTITUTION HP IS VARIABLE THAT CHANGES
  $(".enemy-health")
    .removeClass("red")
    .removeClass("yellow")
    .removeClass("green");
  $(".player-health")
    .removeClass("red")
    .removeClass("yellow")
    .removeClass("green");
  $(".player-magic").removeClass("red").removeClass("blue");
  let playerHealth = Math.floor((player.HP * 100) / player.health);
  let enemyHealth = Math.floor((enemy.HP * 100) / enemy.health);
  let playerMana = Math.floor((player.MP * 100) / player.mana);
  $(".enemy-health").css("width", enemyHealth + "%");
  $(".player-health").css("width", playerHealth + "%");
  $(".player-magic").css("width", playerMana + "%");
  //LOGIC FOR COLOR CHANGES
  if (enemyHealth <= 0) {
    enemyBattleImg.addClass("death");
    $doc.on("animationend", () => {
      battleReview();
    });
  }
  if (enemyHealth >= 60) {
    $(".enemy-health").addClass("green");
  } else if (enemyHealth >= 40 && enemyHealth < 60) {
    $(".enemy-health").addClass("yellow");
  } else {
    $(".enemy-health").addClass("red");
  }
  if (playerHealth >= 60) {
    $(".player-health").addClass("green");
  } else if (playerHealth >= 40 && playerHealth < 60) {
    $(".player-health").addClass("yellow");
  } else {
    $(".player-health").addClass("red");
  }
  if (playerMana >= 50) {
    $(".player-magic").addClass("blue");
  } else {
    $(".player-magic").addClass("red");
  }
}

player = players.playable[0];
createLowEnemies();
setEnemy(enemyArray);
levels[0].setLevel(); // force start for demo

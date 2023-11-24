let $imgs;

const items = {
  getById: function (id) {
    return this.items[id];
  },
  useById: function (id) {
    return this.items[id].use();
  },
  equipById: function (id) {
    let current = this.getById(id);
    // console.log(current)
    switch (current.type) {
      case "helm":
        player.equipped[0] = current.id;
        player.helmBonus = current.helmBonus;
        $(".equipped-helm").empty().css("backgroundImage", "none");
        $(".equipped-helm").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}" height="70px" width="70px">`
        );
        break;
      case "amulet":
        player.equipped[1] = current.id;
        player.amuletBonus = current.amuletBonus;
        $(".equipped-amulet").empty().css("backgroundImage", "none");
        $(".equipped-amulet").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}">`
        );
        break;
      case "weapon":
        player.equipped[2] = current.id;
        player.weaponBonus = current.weaponBonus;
        $(".equipped-weapons").empty().css("backgroundImage", "none");
        $(".equipped-weapons").append(
          `<img data-id="${current.id} "data-equipped="true" src="${current.src}" height="150px" width="100px">`
        );
        break;
      case "armor":
        player.equipped[3] = current.id;
        player.armorBonus = current.armorBonus;
        $(".equipped-armor").empty().css("backgroundImage", "none");
        $(".equipped-armor").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}">`
        );
        break;
      case "shield":
        player.equipped[4] = current.id;
        player.shieldBonus = current.shieldBonus;
        $(".equipped-shield").empty().css("backgroundImage", "none");
        $(".equipped-shield").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}">`
        );
        break;
      case "belt":
        player.equipped[5] = current.id;
        player.beltBonus = current.beltBonus;
        $(".equipped-velt").empty().css("backgroundImage", "none");
        $(".equipped-velt").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}">`
        );
        break;
      case "ring":
        player.equipped[6] = current.id;
        player.ringBonus = current.ringBonus;
        $(".equipped-ring").empty().css("backgroundImage", "none");
        $(".equipped-ring").append(
          `<img data-id="${current.id} class="my-1" data-equipped="true" src="${current.src}" height="50px" width="50px">`
        );
        break;
      case "boots":
        player.equipped[7] = current.id;
        player.bootsBonus = current.bootsBonus;
        $(".equipped-boots").empty().css("backgroundImage", "none");
        $(".equipped-boots").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}" height="90px" width="80px">`
        );
        break;
      case "gloves":
        player.equipped[8] = current.id;
        player.glovesBonus = current.glovesBonus;
        $(".equipped-gloves").empty().css("backgroundImage", "none");
        $(".equipped-gloves").append(
          `<img data-id="${current.id} data-equipped="true" src="${current.src}" height="90px" width="80px">`
        );
        break;
    }
    renderMenus();
  },
  items: [
    {
      id: 0,
      name: "Minor Healing Potion",
      type: "potion",
      description: "Restores 15 HP",
      src: "images/items/consumables/potionHealing.png",
      use: function () {
        usePotion(player, "heal", 15);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(0), 1);
      },
    },
    {
      id: 1,
      name: "Healing Potion",
      type: "potion",
      description: "Restores 35 HP",
      src: "images/items/consumables/potionHealing.png",
      use: function () {
        usePotion(player, "heal", 35);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(1), 1);
      },
    },
    {
      id: 2,
      name: "Full Healing Potion",
      type: "potion",
      get amount() {
        return player.health;
      },
      description: "Restores all HP",
      src: "images/items/consumables/potionHealing.png",
      use: function () {
        usePotion(player, "heal", this.amount);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(2), 1);
      },
    },
    {
      id: 3,
      name: "Minor Mana Potion",
      type: "potion",
      description: "Restores 10 MP",
      src: "images/items/consumables/potionMagic.png",
      use: function () {
        usePotion(player, "mana", 10);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(3), 1);
      },
    },
    {
      id: 4,
      name: "Mana Potion",
      type: "potion",
      description: "Restores 25 MP",
      src: "images/items/consumables/potionMagic.png",
      use: function () {
        usePotion(player, "mana", 25);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(4), 1);
      },
    },
    {
      id: 5,
      name: "Full Mana Potion",
      type: "potion",
      description: "Restores all MP",
      get amount() {
        return player.mana;
      },
      src: "images/items/consumables/potionMagic.png",
      use: function () {
        usePotion(player, "mana", this.amount);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(5), 1);
      },
    },
    {
      id: 6,
      name: "Minor Restore Potion",
      type: "potion",
      description: "Restores 15 HP - 15 MP",
      src: "images/items/consumables/potionRestore.png",
      use: function () {
        usePotion(player, "restore", 15);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(6), 1);
      },
    },
    {
      id: 7,
      name: "Restore Potion",
      type: "potion",
      description: "Restores 30 HP - 30 MP",
      src: "images/items/consumables/potionRestore.png",
      use: function () {
        usePotion(player, "restore", 30);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(7), 1);
      },
    },
    {
      id: 8,
      name: "Full Restore Potion",
      type: "potion",
      description: "Restores 100 HP - 100 MP",
      src: "images/items/consumables/potionRestore.png",
      use: function () {
        usePotion(player, "restore", 100);
        $battleAlert.text(`${this.name} ${this.description}`);
        player.items.splice(player.items.indexOf(8), 1);
      },
    },
    {
      id: 9,
      name: "Miners Pick",
      type: "weapon",
      description: "Tool Low Quality",
      weaponBonus: 1,
      src: "images/items/weapons/minersPick.png",
    },
    {
      id: 10,
      name: "Rusted Long Sword",
      type: "weapon",
      description: "Sword Low Quality",
      weaponBonus: 2,
      src: "images/items/weapons/swordRusted.png",
    },
    {
      id: 11,
      name: "Cracked Long Sword",
      type: "weapon",
      description: "Sword Low Quality",
      weaponBonus: 2.5,
      src: "images/items/weapons/swordCracked.png",
    },
    {
      id: 12,
      name: "Long Sword",
      type: "weapon",
      description: "Sword Standard Quality",
      weaponBonus: 3,
      src: "images/items/weapons/weaponSword.png",
    },
    {
      id: 13,
      name: "Rusted Ninto",
      type: "weapon",
      description: "Sword Low Quality",
      weaponBonus: 2,
      src: "images/items/weapons/nintoRusty.png",
    },
    {
      id: 14,
      name: "Cracked Ninto",
      type: "weapon",
      description: "Sword Low Quality",
      weaponBonus: 2.5,
      src: "images/items/weapons/nintoCracked.png",
    },
    {
      id: 15,
      name: "Ninto",
      type: "weapon",
      description: "Sword Standard Quality",
      weaponBonus: 4,
      src: "images/items/weapons/ninto.png",
    },
    {
      id: 16,
      name: "Poison Ninto",
      type: "weapon",
      description: "Magic Blade / Poison",
      weaponBonus: 5,
      src: "images/items/weapons/nintoPoison.png",
    },
    {
      id: 17,
      name: "Butcher's Knife",
      type: "weapon",
      description: "Blade",
      weaponBonus: 1,
      src: "images/items/weapons/butchersKnife.png",
    },
    {
      id: 18,
      name: "Rusted Shield",
      type: "shield",
      description: "Shield Low Quality",
      shieldBonus: 1,
      src: "images/items/shields/shieldRusted.png",
    },
    {
      id: 19,
      name: "Cracked Shield",
      type: "shield",
      description: "Shield Low Quality",
      shieldBonus: 2,
      src: "images/items/shields/shieldCracked.png",
    },
    {
      id: 20,
      name: "Shield",
      type: "shield",
      description: "Shield Standard Quality",
      shieldBonus: 3,
      src: "images/items/shields/shield.png",
    },
    {
      id: 21,
      name: "Rusted Titanium Shield",
      type: "shield",
      description: "Shield Low Quality",
      shieldBonus: 3,
      src: "images/items/shields/shieldRustedTitanium.png",
    },
    {
      id: 22,
      name: "Cracked Titanium Shield",
      type: "shield",
      description: "Shield Low Quality",
      shieldBonus: 4,
      src: "images/items/shields/shieldCrackedTitanium.png",
    },
    {
      id: 23,
      name: "Titanium Shield",
      type: "shield",
      description: "Shield Standard Quality",
      shieldBonus: 5,
      src: "images/items/shields/shieldTitanium.png",
    },
    {
      id: 24,
      name: "Holy Shield Of Light",
      type: "shield",
      description: "Magic Shield",
      shieldBonus: 8,
      src: "images/items/shields/shieldOfLight.png",
    },
    {
      id: 25,
      name: "Odin's Shield Of Power",
      type: "shield",
      description: "Magic Shield",
      shieldBonus: 8,
      src: "images/items/shields/shieldOfPower.png",
    },
    {
      id: 26,
      name: "Thor's Sword Of Lightning",
      type: "weapon",
      description: "Magic Sword",
      weaponBonus: 8,
      src: "images/items/weapons/swordOfShock.png",
    },
    {
      id: 27,
      name: "Elven Wooden Ring",
      type: "ring",
      description: "Inscribed Ring",
      ringLBonus: 1, /////////////////////////HOW DOES THIS WORK?
      src: "images/items/rings/ringWood.png",
    },
    {
      id: 28,
      name: "Elven Gold Ring",
      type: "ring",
      description: "Inscribed Ring",
      shieldBonus: 1, /////////////////////////HOW DOES THIS WORK?
      src: "images/items/rings/ringGold.png",
    },
    {
      id: 29,
      name: "Kevlar Body Armor",
      type: "armor",
      description: "Kevlar Armor",
      armorBonus: 8,
      src: "images/items/armor/armorKevlar.png",
    },
    {
      id: 30,
      name: "Heavy Duster",
      type: "armor",
      description: "Heavy Long Coat",
      armorBonus: 3,
      src: "images/items/armor/armorLongCoat.png",
    },
    {
      id: 31,
      name: "Light Duster",
      type: "armor",
      description: "Light Long Coat",
      armorBonus: 2,
      src: "images/items/armor/armorLongCoatB.png",
    },
    {
      id: 32,
      name: "Cloth Shirt",
      type: "armor",
      description: "Cloth Shirt",
      armorBonus: 1,
      src: "images/items/armor/armorShirt.png",
    },
    {
      id: 33,
      name: "Rusted Armor Plate",
      type: "armor",
      description: "Low Quality Plate",
      armorBonus: 4,
      src: "images/items/armor/armorPlateRusted.png",
    },
    {
      id: 34,
      name: "Armor Plate",
      type: "armor",
      description: "Standard Plate",
      armorBonus: 5,
      src: "images/items/armor/armorPlate.png",
    },
    {
      id: 35,
      name: "Diamond Ring",
      type: "ring",
      description: "High Quality Ring",
      ringBonus: 3, //HOW DOES THIS WORK
      src: "images/items/rings/ringDiamond.png",
    },
    {
      id: 36,
      name: "Hiking Boots",
      type: "boots",
      description: "Heavy Boots",
      bootsBonus: 3,
      src: "images/items/boots/bootsHiking.png",
    },
    {
      id: 37,
      name: "Classic Addidas Sneakers",
      type: "boots",
      description: "Light Shoes",
      bootsBonus: 2,
      src: "images/items/boots/bootsSneaker.png",
    },
    {
      id: 38,
      name: "Army Combat Boots",
      type: "boots",
      description: "High Quality Boots",
      bootsBonus: 4,
      src: "images/items/boots/bootsCombat.png",
    },
    {
      id: 39,
      name: "Wool Mittens",
      type: "gloves",
      description: "Ugly Light Gloves",
      glovesBonus: 1,
      src: "images/items/gloves/glovesMittens.png",
    },
    {
      id: 40,
      name: "Bio-Mech Upgrade",
      type: "gloves",
      description: "Bio-Mechanical Enhancement Type-One",
      glovesBonus: 8,
      src: "images/items/gloves/glovesBio1.png",
    },
    {
      id: 41,
      name: "Nomex Gloves",
      type: "gloves",
      description: "High Quality Fire-Proof Gloves",
      glovesBonus: 3,
      src: "images/items/gloves/glovesBattle.png",
    },
    {
      id: 42,
      name: "Baseball Hat",
      type: "helm",
      description: "Standard Quality Hat",
      helmBonus: 1,
      src: "images/items/helm/helmBallcap.png",
    },
    {
      id: 43,
      name: "Gemmed Crown",
      type: "helm",
      description: "Low Quality Crown",
      helmBonus: 1,
      src: "images/items/helm/helmCrownLQ.png",
    },
    {
      id: 44,
      name: "Leather Mask",
      type: "helm",
      description: "Low Quality Mask",
      helmBonus: 1,
      src: "images/items/helm/helmMask.png",
    },
    {
      id: 45,
      name: "Ornate Ceremonial Spear",
      type: "weapon",
      description: "Ceremonial Spear",
      weaponBonus: 1,
      src: "images/items/weapons/ornateSpear.png",
    },
    {
      id: 46,
      name: "Buster Sword",
      type: "weapon",
      description: "Standard Quality Sword",
      weaponBonus: 5,
      src: "images/items/weapons/busterSword.png",
    },
    {
      id: 47,
      name: "Short Bow",
      type: "weapon",
      description: "Standard Quality Bow",
      weaponBonus: 3,
      src: "images/items/weapons/shortBow.png",
    },
    {
      id: 48,
      name: "Taurus Arm Cannon",
      type: "weapon",
      description: "Low Quality Arm Cannon",
      weaponBonus: 3,
      src: "images/items/weapons/taurusCannon.png",
    },
    {
      id: 49,
      name: "Hammer",
      type: "weapon",
      description: "Tool",
      weaponBonus: 1,
      src: "images/items/weapons/hammer.png",
    },
    {
      id: 50,
      name: "wrench",
      type: "weapon",
      description: "Tool",
      weaponBonus: 1,
      src: "images/items/weapons/wrench.png",
    },
    {
      id: 51,
      name: "Rusted Buster Sword",
      type: "weapon",
      description: "Low Quality Sword",
      weaponBonus: 3,
      src: "images/items/weapons/busterSwordRusted.png",
    },
    {
      id: 52,
      name: "Cracked Buster Sword",
      type: "weapon",
      description: "Low Quality Sword",
      weaponBonus: 2,
      src: "images/items/weapons/busterSwordCracked.png",
    },
    {
      id: 53,
      name: "Poison Buster Sword",
      type: "weapon",
      description: "Magic Sword",
      weaponBonus: 6,
      src: "images/items/weapons/busterSwordPoison.png",
    },
    {
      id: 54,
      name: "Buster Sword Of Light",
      type: "weapon",
      description: "Magic Sword",
      weaponBonus: 8,
      src: "images/items/weapons/busterSwordOfLight.png",
    },
  ],
};

let $playerSpellBack = $(".player-spell-back").hide();
let $enemySpellBack = $(".enemy-spell-back").hide();
let $playerSpellBox = $(".player-spell-box").hide();
let $enemySpellBox = $(".enemy-spell-box").hide();
let $centerSpellBox = $(".center-spell-box").hide();
const abilities = {
  getById: function (id) {
    return this.abilities[id];
  },
  useById: function (id, user) {
    return this.abilities[id].use(user);
  },
  abilities: [
    {
      id: 0,
      name: "Slash",
      backingSrc: "images/spells/spellAttack.png",
      description: "Slash your enemies repeatedly in a frenzied melee.",
      cost: 10,
      damage: 0,
      use: function (user) {
        this.damage = user.magic + Math.ceil(Math.random() * user.magic);
        user.MP -= this.cost;
        $battleAlert.text(
          `${user.name} casts ${this.name} for ${this.damage} HP`
        );
        user === player
          ? (enemy.HP -= this.damage)
          : (player.HP -= this.damage);
        slash(user);
        updateHealth();
      },
    },
    {
      id: 1,
      name: "Harness",
      backingSrc: "images/spells/spellChi.png",
      description: "Harness your inner power to release a powerful psi attack.",
      cost: 20,
      //NO ENEMY SPELL
      use: function (user) {
        harness(user);
        this.damage = user.magic + Math.ceil(Math.random() * user.magic + 15);
        user.MP -= this.cost;
        $battleAlert.text(
          `${user.name} casts ${this.name} for ${this.damage} HP`
        );
        user === player
          ? (enemy.HP -= this.damage)
          : (player.HP -= this.damage);
        updateHealth();
      },
    },
    {
      id: 2,
      name: "Buckshot",
      backingSrc: "images/spells/spellAttack.png",
      description: "Fire spreading projectiles at your enemy.",
      damage: 0,
      cost: 10,
      use: function (user) {
        this.damage = user.magic + Math.ceil(Math.random() * user.magic);
        $battleAlert.text(
          `${user.name} casts ${this.name} for ${this.damage} HP`
        );
        if (this.damage + user.HP > user.health) {
          user.HP = user.health;
        } else {
          user.HP += this.damage;
        }
        user === player
          ? (enemy.HP -= this.damage)
          : (player.HP -= this.damage);
        user.MP -= this.cost;
        buckshot(user);
        updateHealth();
      },
    },
    {
      id: 3,
      name: "Drain",
      backingSrc: "images/spells/spellRift.png",
      description: "Drain the life from your opponent while healing yourself.",
      cost: 20,
      damage: 0,
      use: function (user) {
        this.damage = user.magic + Math.ceil(Math.random() * user.magic);
        $battleAlert.text(
          `${user.name} casts ${this.name} for ${this.damage} HP`
        );
        if (this.damage + user.HP > user.health) {
          user.HP = user.health;
        } else {
          user.HP += this.damage;
        }
        user === player
          ? (enemy.HP -= this.damage)
          : (player.HP -= this.damage);
        user.MP -= this.cost;
        drain(user);
        updateHealth();
      },
    },
  ],
};

const $inventory = $(".item-list");
const $equipment = $(".equipment");

const $battleItemsBtn = $("#items-btn").click(() => {
  renderMenus();
});
const $inventoryBtn = $(".inventory-info").click(() => {
  renderMenus();
});

function renderItems() {
  // renderBattleMagic()
  // renderBattleItems()
  $inventory.empty();
  player.items.forEach((a) => {
    let tempText = items.getById(a).name;
    let tempSrc = items.getById(a).src;
    let tempType = items.getById(a).type;
    let tempDesc = items.getById(a).description;
    let itemHTML = $(
      `<div data-id="${a}" data-type="${tempType}" class="item-square mr-4" data-bs-toggle="tooltip" data-bs-placement="top" title="${tempDesc}">${tempText}</div>`
    ).appendTo($inventory);
    let itemIMG = $(`<img class="item-icon" src="${tempSrc}">`).appendTo(
      itemHTML
    );
  });
}

function renderBattleItems() {
  $(".items-battle").empty();
  player.items.forEach((a) => {
    let tempText = items.getById(a).name;
    let tempSrc = items.getById(a).src;
    let tempType = items.getById(a).type;
    let tempDesc = items.getById(a).description;
    if (items.getById(a).src.includes("consumables")) {
      let itemHTML = $(
        `<div data-id="${a}" class="item-square use-item" data-bs-toggle="tooltip" data-bs-placement="top" title="${tempDesc}">${tempText}</div>`
      ).appendTo($(".items-battle"));
      let itemIMG = $(
        `<img class="item-icon use-item" src="${tempSrc}">`
      ).appendTo(itemHTML);
    }
  });
  $(".use-item").click((e) => {
    let HTML = e.target;
    let id = $(e.target).data("id");
    let item = items.getById(id);
    popup(
      "none",
      "none",
      item.name,
      item.description,
      "Use Item",
      "Cancel",
      "none"
    );
    $popRes1
      .off()
      .click(() => {
        items.useById(id, player);
        HTML.remove();
        $popup.hide();
        $(".battle-items").hide();
        $(".modal-backdrop").hide();
        clearPopup();
      })
      .show();
    $popRes2
      .off()
      .click(() => {
        $popup.hide();
        clearPopup();
      })
      .show();
  });
}

function renderBattleMagic() {
  $(".magic-battle").empty();
  player.abilities.forEach((a) => {
    // console.log(abilities.getById(a))
    let tempText = abilities.getById(a).name;
    let tempDesc = abilities.getById(a).description;
    let tempCost = abilities.getById(a).cost;
    let itemHTML = $(
      `<div data-id="${a}" class="item-square use-magic" data-bs-toggle="tooltip" data-bs-placement="top" title="${tempDesc}">${tempText}</div>`
    ).appendTo($(".magic-battle"));
  });
  $(".use-magic").click((e) => {
    let id = $(e.target).data("id");
    let spell = abilities.getById(id);
    popup(
      "none",
      "none",
      spell.name,
      spell.description,
      `Cast Spell --- ${spell.cost} MP`,
      "Cancel",
      "none",
      "none"
    );
    $popRes1
      .off()
      .click(() => {
        abilities.useById(id, player);
        $popup.hide();
        updateHealth();
        $(".battle-magic").hide();
        $(".modal-backdrop").hide();
        clearPopup();
      })
      .show();
    $popRes2
      .off()
      .click(() => {
        $popup.hide();
        clearPopup();
      })
      .show();
  });
}

$inventory.click((e) => {
  $equipment.off();
  $(e.target).siblings().removeClass("golden-border");
  $equipment.removeClass("golden-border");
  let selected;
  if ($(e.target).hasClass("item-icon")) {
    selected = $(e.target).parent();
  } else {
    selected = $(e.target);
  }
  let selectedID = selected.data("id");
  if ($(e.target).hasClass("item-square")) {
  $(e.target).addClass("golden-border");
  $equipment.toArray().forEach((a) => {
    if (a.getAttribute("data-type") === selected.data("type")) {
      a.classList.add("golden-border");
    }
  });
}
  $equipment.off().click((e) => {
    $(".item-icon").removeClass("golden-border");
    $(".item-square").removeClass("golden-border");
    if (
      $(e.target).hasClass("golden-border") ||
      $(e.target).parent().hasClass("golden-border")
    ) {
      $(e.target).empty();
      $(e.target).removeAttr("data-equipped");
      items.equipById(selectedID);
      $(e.target).removeClass("golden-border");
    }
  });
});

function usePotion(user, type, amount) {
  let graphic;
  switch (user) {
    case player:
      graphic = $(".player-spell-box");
      user = player;
      break;
    case enemy:
      graphic = $(".enemy-spell-box");
      user = enemy;
      break;
  }
  switch (type) {
    case "heal":
      user.HP + amount <= user.health
        ? (user.HP += amount)
        : (user.HP = user.health);
      type = "red";
      break;
    case "mana":
      user.MP + amount <= user.mana
        ? (user.MP += amount)
        : (user.MP = user.mana);
      type = "blue";
      break;
    case "restore":
      user.HP + amount <= user.health
        ? (user.HP += amount)
        : (user.HP = user.health);
      user.MP + amount <= user.mana
        ? (user.MP += amount)
        : (user.MP = user.mana);
      type = "green";
  }
  updateHealth();
  for (let i = 0; i < 25; i++) {
    let top = Math.floor(Math.random() * 100);
    let left = Math.floor(Math.random() * 100);
    let dot = $(`<div class="dot ${type}"></div>`).css({
      top: `${top}px`,
      left: `${left}px`,
    });
    graphic.append(dot);
  }
  anime({
    targets: ".dot",
    scale: [
      { value: 0.5, easing: "easeOutSine", duration: 1100 },
      { value: 5, easing: "easeInOutQuad", duration: 1000 },
      { value: 0, easing: "easeInOutQuad", duration: 1000 },
    ],
    delay: anime.stagger(0, { grid: [14, 7], from: "center" }),
  });
  setTimeout(() => {
    $(".dot").remove();
  }, 3000);
}

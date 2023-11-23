const $player = $("#player")
const $player2 = $("#player2")
let player = {}

let players = {
    playable: [
    {
    x: 0,
    y: 0,
    name: "Milo",
    id: 0,
    race: "Human",
    type: "Warrior / Meta",
    description: "A young warrior that has developed a strong desire to fight against INDUSTRY and for a noble cause. Nobody is sure of his exact age or details of his background as both of his parents were killed in an INDUSTRY ordered drone strike sixteen years ago. Rescued by Master Wynn, and raised in the SYMBOL Temple, he has become restless and wants to travel out of the Rift and explore that worlds he has heard so much about. During his time in the Temple Rift he has become exceedingly close to Master Kalii and wants nothing more than to prove himself, earning Kalii's respect and hopefully his training.",
    abilityDesctiption: "while at the temple he has developed some mental abilities allowing him insight and glimpses into the future. He has a knack for getting into trouble and is a good thief and charasmatic maipulator.",
    level: 1,
    experience: 0,
    spheres: 50,
    intelligence: 5,
    wisdom: 3,
    strength: 6,
    dexterity: 5,
    get baseAttack () {return this.level + 1 + this.strength + 50},
    get baseDefense () {return this.level + this.dexterity + 100},
    get attack () {return this.baseAttack + this.weaponBonus},
    get defense () {return this.baseDefense +  this.strength + this.shieldBonus + this.armorBonus + this.helmBonus + this.glovesBonus + this.bootsBonus},
    get magic () {return Math.floor(this.intelligence + this.wisdom)},
    abilityBonus: 0,
    amuletBonus: 0,
    armorBonus: 0,
    beltBonus: 0,
    bootsBonus: 0,
    glovesBonus: 0,
    helmBonus: 0,
    ringBonus: 0,
    shieldBonus: 0,
    weaponBonus: 0,
    HP: 70,
    health: 70,
    MP: 20,
    mana: 20,
    srcR: "images/playable/miloR.png",
    srcL: "images/playable/miloL.png",
    srcSR: "images/playable/miloSR.png",
    srcSL: "images/playable/miloSL.png",
    srcFR: "images/playable/miloFR.png",
    srcFL: "images/playable/miloFL.png",
    items: [0,1,6,7, 5,0, 9,10,11, 12, 17, 13, 19, 28, 24, 29 ,38, 51,52,53,54],
    equipped: ["none", "none", "none", "none", "none", "none","none", "none", "none", "none"],
    abilities: [0,1,2,3],
    killCount: 0,
    questsCompleted: 0,
    questItems: [],
    },
    {
    x: 0,
    y: 0,
    name: "Ling",
    id: 1,
    race: "Human",
    type: "Spirit Sorceress",
    description: "Formerly a member a different temple rift she has had a difficult time adjusting to life with SYMBOL. Strong willed and opinionated she bumps heads with almost everyone. She calls herself fiercly independent while others call her disrespectful. Master Wynn recognizes her abilities but fears her undisciplined nature and built up anger she refuses to acknowledge. She seems to have the stongest bond with Master Wynn, although you wouldn't notice by observing them.",
    abilityDesctiption: "Taking Eastern tradition to a whole new level, she can harness her Chi and release powerful meta attacks on her opponents. Her inner spirit seems the the catalyst for her abilities and her mood effects the power of her spells. Being only 18 years of age she is no short supply of moods. After becoming a member of SYMBOL her powers seemed to increase dramatically and it is beleived that her inner anger is the cause. This is concerning to the Masters who know how destructive fury magic can be.",
    level: 1,
    experience: 0,
    spheres: 50,
    intelligence: 6,
    wisdom: 6,
    strength: 3,
    dexterity: 5,
    get baseAttack () {return this.level * .75  + 1 + this.strength + 50},
    get baseDefense () {return this.level * .75 + this.dexterity + 100},
    get attack () {return Math.floor(this.baseAttack + this.weaponBonus)},
    get defense () {return this.baseDefense + this.strength + this.shieldBonus + this.armorBonus + this.helmBonus + this.glovesBonus + this.bootsBonus},
    get magic () {return Math.floor(this.intelligence + this.wisdom)},
    abilityBonus: 0,
    amuletBonus: 0,
    armorBonus: 0,
    beltBonus: 0,
    bootsBonus: 0,
    glovesBonus: 0,
    helmBonus: 0,
    ringBonus: 0,
    shieldBonus: 0,
    weaponBonus: 0,
    HP: 50,
    health: 50,
    MP: 40,
    mana: 40,
    srcR: "images/playable/lingR.png",
    srcL: "images/playable/lingL.png",
    srcSR: "images/playable/lingSR.png",
    srcSL: "images/playable/lingSL.png",
    srcFR: "images/playable/lingFR.png",
    srcFL: "images/playable/lingFL.png",
    items: [0, 5],
    equipped: ["none", "none", "none","none", "none", "none","none", "none", "none", "none"],
    abilities: [0,1,2,3],
    killCount: 0,
    questsCompleted: 0,
    questItems: [],
    },
    {
    x: 0,
    y: 0,
    name: "Beaux",
    id: 2,
    race: "Tajin",
    type: "Bionic / Destroyer",
    description: "The Tajin are a race of bionic beings created by INDUSTRY to travel the portals without harm. As they became damaged the bio-mass / technology ratios gradually decrease and now the Tajin are more robot than human. Somehow even with only trace amounts of original bio-mass intact the Tajin remain sentient individuals clinging to their former selves. Found crying over the ashes and destruction of a battlefield he was brought to the SYMBOL Temple where he quickly became part of the team, as it seems he was always part of the cause.",
    abilityDesctiption: "A destroyer class Tajin has many built in weapons and strength far exceeding that of a human. Their main weapon being the arm-cannon allows for long range attacks. Tajin are known for their memory being 100% accurate and being able to withstand enormous amounts of damage. However,they are not known for their speed, and are rarely described as friendly. Their abilities are dependent on the available tech and skill of the engineers at hand.",
    level: 1,
    experience: 0,
    spheres: 50,
    intelligence: 7,
    wisdom: 2,
    strength: 8,
    dexterity: 3,
    get baseAttack () {return this.level + 1 + this.strength + 50},
    get baseDefense () {return this.level + 1 + this.dexterity + 100},
    get attack () {return Math.floor(this.baseAttack + this.weaponBonus)},
    get defense () {return this.baseDefense + this.strength + this.shieldBonus + this.armorBonus + this.helmBonus + this.glovesBonus + this.bootsBonus},
    get magic () {return Math.floor(this.intelligence + this.wisdom)},
    abilityBonus: 0,
    amuletBonus: 0,
    armorBonus: 0,
    beltBonus: 0,
    bootsBonus: 0,
    glovesBonus: 0,
    helmBonus: 0,
    ringBonus: 0,
    shieldBonus: 0,
    weaponBonus: 0,
    HP: 100,
    health: 100,
    MP: 20,
    mana: 20,
    srcR: "images/playable/beauxR.png",
    srcL: "images/playable/beauxL.png",
    srcSR: "images/playable/beauxSR.png",
    srcSL: "images/playable/beauxSL.png",
    srcFR: "images/playable/beauxFR.png",
    srcFL: "images/playable/beauxFL.png",
    items: [0, 0, 0,],
    equipped: ["none", "none", "none","none", "none", "none","none", "none", "none", "none"],
    abilities: [0,1,2,3],
    killCount: 0,
    questsCompleted: 0,
    questItems: [],
    },
    {
    x: 0,
    y: 0,
    name: "Alisa",
    id: 3,
    race: "Fae",
    type: "Enchantress / Sorceress",
    description: "She was found trapped in a giant mountain spider's web and was rescued by Master Spren. After being brought to the SYMBOL Temple to heal and Dr. Bosco helped her to fly again by reinforcing her wings using the very same strands of spider web that she had been trapped in. Master Spren, certainly known as a recluse has befriended her and marvels at her abilities. To Master Wynn's dismay Spren often shares secrets with her about his own abilities, and teaches her things Wynn believes she is not ready for.",
    abilityDesctiption: "The Fae of the post-INDUSRTY fiction have manifested themselves into reality. She calls on the power of nature for her strength, and relies on knowledge that seems to be invisible to but her kind. With strong healing powers and the ability to curse her opponents she is powerful in combat, slowing them and tearing them apart with her speed. She is quick to learn new things and always seems to have an intuitive sense of right and wrong.",
    level: 1,
    experience: 0,
    spheres: 50,
    intelligence: 7,
    wisdom: 5,
    strength: 2,
    dexterity: 6,
    get baseAttack () {return this.level * .5  + 1 + this.strength + 50},
    get baseDefense () {return this.level * .5 + this.dexterity + 100},
    get attack () {return Math.floor(this.baseAttack + this.weaponBonus)},
    get defense () {return this.baseDefense + this.strength + this.shieldBonus + this.armorBonus + this.helmBonus + this.glovesBonus + this.bootsBonus},
    get magic () {return Math.floor(this.intelligence + this.wisdom)},
    abilityBonus: 0,
    amuletBonus: 0,
    armorBonus: 0,
    beltBonus: 0,
    bootsBonus: 0,
    glovesBonus: 0,
    helmBonus: 0,
    ringBonus: 0,
    shieldBonus: 0,
    weaponBonus: 0,
    HP: 60,
    health: 60,
    MP: 40,
    mana: 40,
    srcR: "images/playable/alisaR.png",
    srcL: "images/playable/alisaL.png",
    srcSR: "images/playable/alisaSR.png",
    srcSL: "images/playable/alisaSL.png",
    srcFR: "images/playable/alisaFR.png",
    srcFL: "images/playable/alisaFL.png",
    items: [2, 0, 6, 6, 0,8],
    equipped: ["none", "none", "none","none", "none", "none","none", "none", "none", "none"],
    abilities: [0,1,2,3],
    killCount: 0,
    questsCompleted: 0,
    questItems: [],
    },
    ]
}

let player2 = {
  x: 0,
  y: 0,
  name: "Ariana",
  race: "Human",
  srcR: "images/playable/arianaR.png",
  srcL: "images/playable/arianaL.png",
  srcSR: "images/playable/arianaSR.png",
  srcSL: "images/playable/arianaSL.png",
  append: function (src) {let playerImg = $(`<img src="${src}" class="players" id="player">`)
      $game.append(playerImg)
    },
}




let masters = [
  {
    name: "Master Wynn",
    dialog0: {
      greet: `It is time to begin our war on INDUSTRY. I am Master Wynn, here to guide you on your journey to becoming one of SYMBOLS great warriors. INDUSTRY has waged war on our planet for too long. Now we will wage war on them, we have a long journey ahead so we must prepare. Have you spoken with the other masters yet?`,
      questAccepted: `May Pele protect you on your journey. Talk to Master Spren to travel to Monarch Valley. You must find five scrodents and collect their gem spheres.`,
      questOffered: `You are not ready to face INDUSTRY yet. I have a small task for you. Doctor Bosco needs gem spheres from the Monarch Valley. The large rodents there seem to hide them in their dens. Will you go to the valley and find five infused gem spheres?`,
      questComplete: `Well done, I knew I was not mistaken to bring you into SYMBOL. Bring those gem spheres to Dr. Bosco as soon as you can. He is working on something rather important.`,
      info: `I am Master Wynn, leader of SYMBOL. That large islander is Master Kakoa Kalii, he is SYMBOLS Battle Master. He can teach you to be deadly in almost any art, in any situation. Don't let his size or speech fool you, he is a master spell binder as well. Master Spren is our portal weaver she is quite fiesty at times, and Dr. Bosco is...well a doctor he can usually provide you with various items.`,
    },
    response0: {
      accept: `Alright, I will get the gem spheres, anything for SYMBOL!`,
      ask: `What can you tell me about the other masters?`,
      loop: `What do I need to do again?`
    },
    dialog1: {
      greet: `Welcome back to the temple. The gem spheres you collected will help Master Spren with his weavings for some time. Doctor Bosco is attempting to find a way for the masters to travel once more.`,
      questAccepted: `May Pele protect you on your next quest, Master Spren will weave you a portal when you have prepared. Please be quick about it, the droid is very valuable to SYMBOL.`,
      questOffered: `I have an important issue that requires someone trustworthy`,
      info: `Doctor Bosco built Sylvia many years ago, before we came to the temple. She is unaffected by traveling the portals, so we can send her through countless times to gather information without risking the health of our memebers.`
    },
    response1: {
      accept: `Sure, I will go get Sylvia.`,
      ask: `Why is the droid so important?`,
      loop: `What do I need to do again?`
    },
    dialog2: {
      greet: `Thanks for making me a character in you awesome game! There are no more quests for now, keep up the good work! There is plenty more to learn but this is a good start! Turns out Javascript is hard! But once you get going it is rather intuitive.`,
      questAccepted: ``,
      questOffered: ``,
      info: `This is the first project dreamed up and implemented by yours truly. I worked hard on this and hope one day I can look back and see how primitive it is. But for now this is like...top of the line...Elon Musk typa stuff. For me at least!`,
    },
    response2: {
      accept: `Make more stuff!`,
      ask: `What's on your mind?`,
      loop: `Go back!`
    },
  },
  {
    name: "Master Spren",
    dialog0: {
      greet: `Ahhh...I was told a young warrior had joined SYMBOL. We will see how long you can withstand the portals. hehehe. I am Spren, these people insist on calling me MASTER spren. How obtuse. What can I do for you today young warrior?`,
      questAccepted: `Ahhh...it's a weaving you wish for! I hear you wish to see the monarchs. I will send you on your way, but remember, if you get hurt return to the temple and Doctor Bosco can heal you. Also don't forget to stop by his store if you need anything before you go.`,
      questOffered: `I am not able to open a portal without the masters approval. Talk to the others and see if they have any tasks for you.`,
      questComplete: `Ahh what beautiful spheres. Monarch Valley is always a good place to treasure hunt, although I hear it get more dangerous by the day.`,
      info: `I have the ability to open portals and send you instantly across worlds. There is a price, however, the portals take a toll on the mind over time. That is why the masters rarely travel. The more you travel the worse it becomes. Not to worry! I will let you know when there is danger.`,
    },
    response0: {
      accept: `I wish to travel to Monarch Valley.`,
      ask: `What can you tell me about portals?`,
      loop: `What do I need to do again?`
    },
    dialog1: {
      greet: `Sylvia seems to be malfunctioning again. Drat. Her and I seem to have a lot in common. Humans are so fragile. Although, maybe reliance on machines is the way humans ended up in this mess to begin with.`,
      questAccepted: `Time to go play fetch? Well good luck Sylvia is uncooperative at the best of times. She seems to think shes a Wood Nymph. You never know where these old computers were salvaged. Seems that her programming has the remnants of a personailty.`,
      questOffered: `I can only open portals with the masters approval. Do you have any SYMBOL busniness at hand?`,
      questComplete: `Ah Sylvia, how we love the little girl. Playful as ever I see. Reminds me of the Scuttles back on Lahar.`,
      info: `As you well know, good and evil are real and powerful entities, I believe they reside in the souls of men and women. It seems that the portals somehow magnify the evil inside of you. It is like feeding a demon. It will grow and eventually consume you.`,
    },
    response1: {
      accept: `I wish to travel find Sylvia.`,
      last: `I wish to travel to Monarch Valley.`,
      ask: `Why are the portals so dangerous?`,
      loop: `What do I need to do again?`
    },
    dialog2: {
      greet: `Well...That was interesting...It seems you have made something to be proud of...Thanks for dreaming me up (after borrowing me of course). I know I was an uncooperative character, but we did it!`,
      questAccepted: ``,
      questOffered: ``,
      info: `Master Spren was a headache. The portal page and animations seemed to give me a lot of trouble. But what a cool character! I found the image on wikipedia (which is hard) and decided he had to be the portal master! He looked like a little aztec god or something and it sparked my imagination.`,
    },
    response2: {
      accept: `Keep working hard on this!`,
      ask: `What's hard about this game?`,
      loop: `Go back!`
    },
  },
  {
    name: "Doctor Bosco",
    dialog0: {
      greet: `Yikes! you startled me. I was just considering the gentic differences between humans and toads! I beleive I could create a hybrid...Anyhow, let me have a look at you. Kind of scrawny for a warrior aren't you? I am Dr. Bosco my talents are mostly wasted working with items when really I should be working with humans. My research is tricky...anywho...What can I do for you?`,
      questOffered: `I hear you are going to be working for SYMBOL. Great news! Be careful and listen to Master Wynn, smartest person I know, well, besides myself...and perhaps Master Kalii...THIRD smartest person I know! If you get hurt come back here and I will take care of you, otherwise I have some potions in my store.`,
      questAccepted: `I hear you will be going to Monarch Valley. Fascinating! I've been there myself many years ago, butterflys as big as eagles. They have some type of psi powers I beleive. Watch out for the scrodents though, mean little devils. I need at least five gem spheres for my reseach.`,
      questComplete: `Excellent! These gem spheres are just what I've been needing for my harm reduction protocol, I have been attempting to harness the energy inside of these gem spheres to protect the spirit when traveling the portals! What? Nobody mentioned the damage the portals cause? Absurd. Anyhow, whenever you find gem spheres I would be happy to trade with you.`,
      info: `My research revolves around the evolution of our species of course. The drastic changes we caused in our environment by releasing greenhouse gases and all types of pollution, mixed with the nuclear consequences had amazing effects on people! I am trying to catalog and track what's been happening. Fascinating stuff.`

    },
    response0: {
      accept: `Do you have any items to trade?`,
      ask: `What kind of research?`,
      loop: `What were you saying?`
    },
    dialog1: {
      greet: `This is terrible. How can I focus on my research in these conditions. Oh, my! I didn't see you there. What can I do for you?`,
      questOffered: `Well it appears my darling Sylvia is lost again. I told Master Wynn she's too young and fragile to be off on her own. I have been working on her for years. Built her myself, she's like daughter to me.`,
      questAccepted: `Please you must find my darling! She's the closest thing to a child that I have. I programmed her to be playful and if she's malfunctioning she might think she's playing a game! Please find her!`,
      questComplete: `Sylvia my darling Sylvia! How can I ever repay you. Thank you. Thank you!`,
      info: `My research shows that the high level of greenhouse gases mixed with the radiation from the war has had an entirely unexpected effect on living creatures. All things have begun to evolve and that is what led us to the discovery of other worlds. The portals allow us to travel to them without even knowing where they are in the universe! We can travel to places in our own world, or to others in the blink of an eye. Fascinating stuff.`

    },
    response1: {
      accept: `Do you have any items to trade?`,
      ask: `Why were those rats so big?`,
      loop: `What were you saying?`
    },
    dialog2: {
      greet: `Well I dont know why I had to the doctor! Was it the lab coat?`,
      questAccepted: `No more for now`,
      questOffered: ``,
      info: `Creating the actual characters was a blast! Think eccentric! That was my idea for Dr. Bosco and I wish I had more of a platform for character development, I have pages and pages of dialog and backgrounds for each master that I didn't have time to use. And lets face it, You are clearly a doctor, with or without the labcoat. Mahalo!`,
    },
    response2: {
      accept: `Good Work!`,
      ask: `What about me?`,
      loop: `Go back!`
    },
  },
  {
    name: "Master Kalii",
    dialog0: {
      greet: `Hey you, get ova here a minute, Kalii wanna meet the new one they be talkin bout. I sposa teach you how to make big hurt on the bad guy at INDUSTRY. They no be doing good things to the planet. Masta Wynn say without them things be much mo betta. Ha! We'll see. My names Kakoa, that's island talk for tough guy, but round here they call me Masta Kalii.`,
      questOffered: `I no think you ready but Masta Wynn say different. I hear they got some things for you to do to prove you got what it takes to be in SYMBOL.`,
      questAccepted: `Hey now, you ready to go to the pretty Valley with all da flutta-bys? When Masta Wynn said you were gonna fight, Kalii worry, Now I know where you go, I think you be A-OK. Maybe get some potions from da doc before you go huh?`,
      questComplete: `Aloha! eh you found em? Good goin kid, maybe Kalii underthink about you huh? Ha! we'll see. Da Doc be waitin bring those gems to him.`,
      info: `I used to live on a pretty island with lots time to train and read books. When the world took a turn, my people were that last ones to be changed. We started to pull fish outa the ocean that look kinda crazy, no good I tell ya. When we eat them we get sick at first, but then we started to change. Anyhow SYMBOL came for me cuz me know lotsa things, maybe all of da things. Maybe I teach you some huh? We'll see.`
    },
    response0: {
      accept: `Can you teach me something?`,
      ask: `What can yo tell me about SYMBOL?`,
      loop: `I don't understand you, what was that?`
    },
    dialog1: {
      greet: `Ohoa Ohana, How you be lil warrior? You be doing great things for da people I hear, Kalii hear a lot too. I got da big ears to go wit da big...brain!`,
      questOffered: `I been thinkin' me an you needa sit down and talk about what kinda warrior you wanna be. Kalii masta of all things and he teach you what you wanna know. Think about it huh? You hear that da lil robo twerp went missin. You betta talk to Wynn.`,
      questAccepted: `You go find dat lil bugga then we talk about teaching you some real stuff. If you have time try and reflect on the life in all things around you. Sound silly? Ha! Kalii know a lil about a lot. Just trust me. Power comes from life.`,
      questComplete: `Good job lil warrior, dat bugga very valuable to SYMBOl.`,
      info: `As it turns out, magic is real and it ain't jus by accident, people been doin magic for thousands of years and if you study hard you can learn too. Kalii know all kinds of magic, just by sitting down and listening to the world you can learn things. All things have something to say if we just be calm and listen. Life is precious and life holds all the energy we need to harness big power. Maybe thats why I so good, I got a BIG life in me. That means a BIG power. Ha!`

    },
    response1: {
      accept: `Is there anything you can teach me?`,
      ask: `What can you tell me about magic?`,
      loop: `I don't understand you?`
    },
    dialog2: {
      greet: `Aloha lil warrior! You did a good job man! Creatin a game ain't no easy task but you did it eh? Seems dat you had no trouble at all writing me! Why is that?`,
      questAccepted: ``,
      questOffered: ``,
      info: `Master Kalii is basicallly a mix of my uncle Tim, and my father Rory. They are old school Hawaiians that always wanna teach me to be better through knowledge. All I had to do was slightly exagerate their speech. (2nd genertation Hawaiians) and there you have it. Heres to you Dad!`,
    },
    response2: {
      accept: `Capstone Complete`,
      ask: `Why was I easy?`,
      loop: `Go back!`
    },
  },
]


class mapEnemy {
  constructor(name, image, description, strength, damage, HP, attack, dexterity, defense, spheres, experience) {
    this.src = image;
    this.name = name;
    this.description = description
    this.HP = HP;
    this.attack = attack;
    this.dexterity = dexterity;
    this.strength = strength;
    this.defense = defense;
    this.damage = damage;
    this.spheres = spheres;
    this.experience = experience;
  }
}


let npc = {
  greetById: function (id) {this.characters[id].greeting()},
  getById: function (id) {return this.characters[id]},
  characters: [
  {
    id: 0,
    name: "snake",
    type: "Animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 1,
    name: "skeeter",
    type: "Animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 2,
    name: "mink",
    type: "Tujin",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 3,
    map: 1,
    name: "Worb",
    type: "Alien",
    dialog1: `Eh...A ${player.race}? Strange times we live in! You look like a fit young warrior, maybe you would like to help me?`,
    dialog2: `this is number 2`,
    greeting: function () {alert("worb worb")}
    },
    {
    id: 4,
    name: "Sissix",
    type: "Reptilian",
    greeting: function () {alert("I am a reptile man")}
  },
  {
    id: 5,
    name: "Kraus",
    type: "Human",
    role: "Karinian Captain",
    greeting: function () {alert("Get in line recruit and pay attention.")}
  },
  {
    id: 6,
    name: "Katrina",
    type: "Human",
    role: "Karinian Captain",
    src: "images/npc/npcSmall/_6katS.png",
    greeting: function () {console.log(this.src)}
  },
  {
    id: 7,
    name: "Marine",
    type: "Human",
    role: "Soldier",
    greeting: function () {alert("thsi is the guy")}
  },
  {
    id: 8,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 9,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 10,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 11,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 12,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 13,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 14,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 15,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 16,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 17,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 18,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 19,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 20,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 21,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 22,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 23,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 24,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 25,
    map: 1,
    name: "Worb",
    type: "alien",
    dialog1: `Eh...A ${player.race}? Strange times we live in! You look like a fit young warrior, maybe you would like to help me?`,
    dialog2: `this is number 2`,
    greeting: function () {alert("worb worb")}
    },
    {
    id: 26,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 27,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 28,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 29,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 30,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 31,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 32,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 33,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 34,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 35,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 36,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 37,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 38,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 39,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 40,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 41,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 42,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 43,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 44,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 45,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 46,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 47,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 48,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 49,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 50,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 51,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 52,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 53,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 54,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 55,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 56,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 57,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 58,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 59,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 60,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 61,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 62,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 63,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 64,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 65,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 66,
    name: "Scrodent",
    description: `Well done! you have defeated a Scrodent. You kick the creature aside and discover a glowing sphere. These must be what the masters are looking for. The strange light seems to have a familiar feel.`,
    src: "images/npc/_82scrodent.png",
    HP: 50,
    attack: 40,
    dexterity: 13,
    defense: 60,
    strength: 4,
    get damage () {return this.strength * Math.floor(Math.random() * this.dexterity)},
    magic: 6,
    experience: 80,
    items: "Ruby Sphere",
    spheres: Math.floor(Math.random() * 15),
    type: "pack-rat",
    greeting: function () {
      console.log(currentEncounterHTML)
      this.fight()
    },
    fight: function () {
      enemyArray = []
      mapEncounter = true
       let scrodent = new mapEnemy(this.name, this.src, this.description, this.strength, this.damage, this.HP, this.attack, this.dexterity, this.defense, this.spheres, this.experience)
      enemyArray.push(scrodent)
      setEnemy(enemyArray)
      $map.hide(1000)
      $battlePage.show(2000)
      showSpellBoxes()
    }
  },
  {
    id: 67,
    name: "Scrodent",
    description: `Well done! you have defeated a Scrodent. You search the mangled body and find a glowing Sphere! The strange light emmiting from within the jewel reminds you of your journey through the rift. These must be what the Masters are looking for.`,
    direction: "right",
    src: "images/npc/_82scrodent.png",
    HP: 50,
    attack: 40,
    dexterity: 13,
    defense: 60,
    strength: 4,
    get damage () {return this.strength * Math.floor(Math.random() * this.dexterity)},
    magic: 6,
    experience: 80,
    items: "Ruby Sphere",
    spheres: Math.floor(Math.random() * 15),
    type: "pack-rat",
    greeting: function () {
      this.fight()
    },
    fight: function () {
      enemyArray = []
      mapEncounter = true
      let scrodent = new mapEnemy(this.name, this.src, this.description, this.strength, this.damage, this.HP, this.attack, this.dexterity, this.defense, this.spheres, this.experience)
      enemyArray.push(scrodent)
      setEnemy(enemyArray)
      $map.hide(1000)
      $battlePage.show(2000)
      showSpellBoxes()
    }
  },
  {
    id: 68,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 69,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 70,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 71,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 72,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 73,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 74,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 75,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 76,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 77,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 78,
    map: 1,
    name: "Worb",
    type: "alien",
    dialog1: `Eh...A ${player.race}? Strange times we live in! You look like a fit young warrior, maybe you would like to help me?`,
    dialog2: `this is number 2`,
    greeting: function () {alert("worb worb")}
    },
    {
    id: 79,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 80,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 81,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 82,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 83,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 84,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 85,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 86,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 87,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 88,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 89,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 90,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 91,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 92,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 93,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 94,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 95,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 96,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 97,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 98,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 99,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 100,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 101,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 102,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 103,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 104,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 105,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 106,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 107,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 108,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  {
    id: 109,
    name: "snake",
    type: "animal",
    greeting: function () {alert("sssss sssssss")}
  },
  {
    id: 110,
    name: "skeeter",
    type: "animal",
    greeting: function () {alert("buzzzzz")}
  },
  {
    id: 111,
    name: "mink",
    type: "robot",
    greeting: function () {alert("zzzzt malfunction")}
  },
  ]
  }
  

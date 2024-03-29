import { gameTwo, gameOne } from "./games";
import { GameStep, Zombie } from "./types";


export let gameSteps: GameStep[] = [
  {
    id: 1,
    question: "Du har knappt vaknat och ligger och surplar på dagens första kopp kaffe i sängen. Det är inte förrän efter din andra kopp kaffe som du brukar bli människa igen och dina ögon är fortfarande lite grumliga. Men under din pågående mysiga morgonrutin ser du något ovanligt i den normalt sett vackra fönstervyn från sovrummet. Det är en man precis utanför på gårdsplanen. Han är hukad, står på alla fyra och gnager på ett ben. Ett mänskligt ben. Och det har fortfarande en sko på sig.. ",
    optional: {
      image: "window.jpg",
    },
    choices: [{
      text: "Gå vidare", 
      id: 2
      },
    ],
  },
  {
  id: 2,
  question: "Du har svårt att ta in den bild du ser framför dig och fryser till is. Mannen som gnager på det mänskliga benet slutar plötsligt tugga, som om något ljud stör honom. Han tittar sakta upp från sin måltid. Hans ögon blinkar inte och de verkar vara för stora för hans ansikte. Munnen hänger öppen och blodet rinner längs hans haka. Han ser dig. Precis i det ögonblicket skymtar du samtidigt en ”flock” av fler som honom med glassplitter överallt på deras kroppar som påvisar tydligt att de inte haft några problem att komma in i tidigare hus om de velat. Nu är de på väg mot ditt. <br><br> Vad gör du?",
  optional: {
    image: "scary_zombie.webp",
    sound: "short.mp3"
  },
  choices: [
    {
      text: "Går ut genom sidodörren och försöker smyga förbi dem till din bil, medan de alla är upptagna med ben och huvuddörren", 
      id: 3
    },
    {
      text: "Du springer ner i din källare, barrikaderar dörren och hoppas på att de inte förstår att du är där", 
      id: 4
    },
  ],
},
{
  id: 3,
  question: "Du har smygt ut som en ninja. De tio steg det tog dig för att nå bilen var de tio mest nervkittlande i hela ditt liv. Men du lyckades vara tillräckligt tyst – härvan av zombies på din gårdsplan ser inte upp förrän dunsen från den stängande förarsidans dörr. <br> De börjar springa mot bilen samtidigt som du får i gång den och ställer dig på gasen. (Du tänker också samtidigt, vilken jäkla tur att ja alltid har på mig bilnycklarna och att bilen är nytankad, vad är oddsen?). Du kör över och på en massa zombies och tar dig ifrån platsen. ",
  optional: {
    image: "car_drive.jpg",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 5
    },
  ],
},
{
  id: 4,
  question: "Du sitter i källaren så långt in i ett hörn man kan komma. De har förstått att du är där och ljud av flera hammare mot källardörren blir allt tydligare som ett bevis på att nu är det inte långt kvar innan de är igenom.  . <br><br> Vad gör du?",
  optional: {
    image: "door.jpeg",
    sound:"Banging-On-Wooden-Door.mp3",
  },
  choices: [
    {
      text: "Du tar till dig en spade och gör dig redo", 
      id: 27
    },
    {
      text: "Du försöker fly genom ytterkällardörren", 
      id: 28
    },
  ],
},
{
  id: 5,
  question: "Vi tar en liten snabb paus innan du får köra vidare. Vi har ju glömt att fråga vad du heter. <br><br> Vad heter du? ",
  optional: {
  input: true,
  image: "question.png",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 6
    },
  ],
}
,
{
  id: 6,
  question: `Du åker igenom staden och ser fruktansvärda syner. Människor rycks ut från kaféer och pizzerior och hinner knappt dö innan de själva förvandlas till monster. ”Är det en tröst? Att det kanske går fort?”  Dina tankar skiftar fokus och du tvingar dig själv att bara tänka på en sak. Stanna inte. Stannar du så är det kört. ` ,
  optional: {
  image: "zombies_street.png",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 19
    },
  ],
},
{
  id: 7,
  question: "Du har from NU 20 sekunder på dig att skriva hela alfabetet, avsluta med Enter, annars dör ni båda två..",
  optional: {
    input: true,
    sound: "Heartbeat-Getting-Faster.mp3",
    function: {
      gameTwo
    },
  },
  choices: [
    {
      text: "", 
      id: 17
    },
    {
      text: "", 
      id: 18
    },
  ],
} ,
{
  id: 8,
  question: "Tråkigt men sant. Ingen mening med att ni båda blir zombiemat. <br><br> Du trampar ner på gaspedalen och fortsätter. Barnets skräckslagna ansikte blinkar förbi och trädet blir mindre och mindre i backspegeln.. ",
  optional: {
    image: "sidemirror.webp",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 10
    },
  ],
},
{
  id: 9,
  question: "Flickan är skärrad och får inte ur sig ett ljud. Du försöker fråga henne om hennes föräldrar utan resultat. <br><br> Ni har kört ett tag, det är vidöppna vyer överallt och inte en zombie så långt ögat kan nå. Du börjar fundera på vad ditt nästa steg är. Vart är ni väg? Radion tjuter till i samma stund och ett extrainsatt meddelande till allmänheten läses upp. En seriös röst från högtalaren berättar om vilka ställen som är säkra i landet. <br> ”.. Anders Personsgata 18 i Göteborg ..” Är inte det? Jo! Din skola!  Du bestämmer dig för att åka dit.",
  optional: {
  image: "girl_car.jpg",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 14
    },
  ],
}
,
{
  id: 10,
  question: "Du har kört ett tag, det är vidöppna vyer överallt och inte en zombie så långt ögat kan nå. Du börjar fundera på vad ditt nästa steg är. Vart är du på väg? Radion tjuter till i samma stund och ett extrainsatt meddelande till allmänheten läses upp. En seriös röst från högtalaren berättar om vilka ställen som är säkra i landet. <br> ”.. Anders Personsgata 18 i Göteborg ..” Är inte det? Jo! Din skola!  Du bestämmer dig för att åka dit.",
  optional: {
    image: "car_road.webp",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 16
    },
  ],
},
{
  id: 12,
  question: "Det var inte en av dina bästa idéer tyvärr.. De tar över bilen och dödar dig på kuppen.",
  optional: {
    image: "skull.png",
    sound: "Zombie-Breath.mp3"
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    },
  ],
}
,
{
  id: 13,
  question: "Du klarade dig och är på en säker plats! GRATTIS!",
  optional: {
    image: "minions.gif",
    sound: "happyminions.mp3",
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    },
  ],
},
{
  id: 14,
  question: "Ni kommer till staden och du känner inte igen de vyer du har framför dig. Det är tyst, grått, dimmigt och regnet ligger i luften (nästan så att man kan tro man är i Bollebygd). Det finns inte ett enda helt fönster på vare sig bilar eller hus. Ni närmar er skolan och ser en hel här av zombies utanför entrén. <br><br> Skit. Vad är din plan? ",
  optional: {
  image: "dark_city.jpg",
  },
  choices: [
    {
      text: "Du ser mirakulöst ett laddat gevär vid vägkanten. Du väljer att chansa skjuta zombiesarna med risk att du träffar och förstör entrén som riskerar livet på samtliga inomhus. ", 
      id: 24 
    },
    {
      text: "Du chansar på att gasa in med bilen i hären och hoppas på att du kan köra ihjäl alla innan du själv fastnar.", 
      id: 25 
    },
  ],
},
{
  id: 15,
  question: " Du kommer till utkanten av staden och började precis tänka på att ”Ååh, vad skönt, har inte sett några zombies eller människor på ett tag nu”. Jinx på det! <br><br> Till vänster av vägkanten ser du tre zombies vid roten av ett stort träd. De sträcker sig mot kronorna som om det är något de vill ha där uppe. Och det stämmer. Det sitter en liten flicka på en gren. Hon ser livrädd ut och du förstår att det bara en tidsfråga innan hon faller ner. Hon får ögonkontakt med dig. <br><br> Vad gör du?",
  optional: {
  image: "tree.jpg",
  },
  choices: [
    {
      text: "Du kommer göra allt för att rädda flickan! ", 
      id: 7
    },
    {
      text: "Det finns inget du kan göra. Det är en alldeles för stor risk för er båda. Du kör vidare.",
      id: 8
    },
  ],

},
{
  id: 16,
  question: "Du kommer till staden och känner inte igen de vyer du har framför dig. Det är tyst, grått, dimmigt och regnet ligger i luften (nästan så att man kan tro man är i Bollebygd). Det finns inte ett enda helt fönster på vare sig bilar eller hus. Du närmar dig skolan och ser en hel här av zombies utanför entrén. <br><br> Skit. Vad är din plan? ",
  optional: {
    image: "dark_city.jpg"
  },
  choices: [
    {
      text: "Du ser mirakulöst ett laddat gevär vid vägkanten. Du väljer att chansa skjuta zombiesarna med risk att du träffar och förstör entrén som riskerar livet på samtliga inomhus. ", 
      id: 31
    },
    {
      text: "Du chansar på att gasa in med bilen i hären och hoppas på att du kan köra ihjäl alla innan du själv fastnar.", 
      id: 12
    },
  ],
},
{
  id: 17,
  question: "Grattis! Du har räddat flickan!",
  optional: {
     image: "tumme.png",
     sound: "yay.mp3",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 9
    },
  ],
},
{
  id: 18,
  question: "Du var så nära! Men... Zombiesarna dödade dig :(  Rest In Piece.",
  optional: {
    image: "skull.png",
    sound: "Zombie-Breath.mp3",
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    }
  ],
},
{
  id: 19,
  question: "Du sätter på radion för att få lite distraktion. Vilken kanal väljer du? ",
  optional: {
    image: "radio.png"
  },
  choices: [
    {
      text: "P3", 
      id: 20,
    },
    {
      text: "Rockklassiker", 
      id: 21,
    },
    {
      text: "Rix FM", 
      id: 22,
    },
    {
      text: "Lugna favoriter", 
      id: 23,
    },
  ],
},
{
  id: 20,
  question: "För i...",
  optional: {
    image: "judge.jpg",
    sound: "hells.mp3",
  },
  choices: [
    {
      text: "Byt radiokanal", 
      id: 19,
    },{
      text: "Gå vidare", 
      id: 15,
    }
  ],
},
{
  id: 21,
  question: "...! ",
  optional: {
    image: "zombie.webp",
    sound: "zombieinspelning.mp3"
  },
  choices: [
    {
      text: "Byt radiokanal", 
      id: 19,
    },
    {
      text: "Gå vidare", 
      id: 15,
    }

  ],
},
{
  id: 22,
  question: "... ",
  optional: {
    image: "bomb.jpg",
    sound: "under.mp3"
  },
  choices: [
    {
      text: "Byt radiokanal", 
      id: 19,
    },
    {
      text: "Gå vidare", 
      id: 15,
    },
  ],
},
{
  id: 23,
  question: ":) ",
  optional: {
    image: "happy.png",
    sound: "happy.mp3",
  },
  choices: [
    {
      text: "Byt radiokanal", 
      id: 19,
    },
    {
      text: "Gå vidare", 
      id: 15
    }
  ],
},
{
  id: 24,
  question: "You know what to do!",
  optional: {
    function: {
      gameOne,
      zombieIdStart: 5,
      zombieIdEnd: 11,
      nextStep: 26,
    },
  },
  choices: [
    {
      text: "", 
      id: 1
    },
    {
      text: "", 
      id: 1
    },
  ],
},
{
  id: 25,
  question: "Det var inte en av dina bästa idéer tyvärr.. De tar över bilen och dödar er på kuppen.",
  optional: {
    image: "skull.png",
    sound: "Zombie-Breath.mp3"
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    },
  ],
},
{
  id: 26,
  question: "Ni klarade er och är på en säker plats! GRATTIS! PS. Flickans föräldrar var på medieinstitutet också så det blev en lycklig återförening (Varför de separerade från första början lämnar vi över till nästa kapitel..)",
  optional: {
    image: "minions.gif",
    sound: "happyminions.mp3",
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    },
  ],
},
{
  id: 27,
  question: "Klicka på zombiesarna direkt när de dyker upp i rutan, om du missar en är det kört.. ",
  optional: {
    function: {
      gameOne,
      zombieIdStart: 1,
      zombieIdEnd: 4,
      nextStep: 30,
    },
  },
  choices: [
    {
      text: "Åhnej", 
      id: 29
    },
    {
      text: "Gå vidare", 
      id: 6
    },
  ],
},
{
  id: 28, 
  question: "Källardörren är låst och du fumlar med låset! De hinner ta sig in och du brottas med dem till ditt sista andetag. Rest in peace. ",
  optional: {
    image: "skull.png",
    sound: "Zombie-Breath.mp3"
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    }
  ],
},
{
  id: 29,
  question: "Åhnej! - Du slåss heroiskt och tar död på flera stycken, men till slut övermanövrerar de dig och du tar ditt sista andetag. <br><br> Rest In Peace.",
  optional: {
    image: "skull.png",
    sound: "Zombie-Breath.mp3"
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    },
  ],
},
{
  id: 30,
  question: "WOW vilken insats! Alla zombies är döda! <br><br> Du springer ut till bilen fort som satan och åker därifrån ",
  optional: {
    image: "tumme.png",
    sound: "yay.mp3",
  },
  choices: [
    {
      text: "Gå vidare", 
      id: 5
    },
  ],
},
{
  id: 31,
  question: "You know what to do!",
  optional: {
    function: {
      gameOne,
      zombieIdStart: 12,
      zombieIdEnd: 18,
      nextStep: 13,
    },
  },
  choices: [
    {
      text: "", 
      id: 1
    }
  ],
},
{
  id: 32,
  question: "Ååhnej! Skotten hinner ta slut och Zombiesarna belägrar bilen.. You know the rest :( ",
  optional: {
    image: "skull.png",
    sound: "Zombie-Breath.mp3"
  },
  choices: [
    {
      text: "Börja om", 
      id: 1
    },
  ],
},


]






export let zombieList: Zombie[] = [
  {
    id: 1,
    image: "zombie_shot.png",
    class: "zombie1",
    sound: "shovel.wav",
    cursor: "shovel",
    next: 2
  },
  {
    id: 2,
    image: "zombie_shot.png",
    class: "zombie2",
    sound: "shovel.wav",
    cursor: "shovel",
    next: 3
  },
  {
    id: 3,
    image: "zombie_w.png",
    class: "zombie3",
    sound: "shovel.wav",
    cursor: "shovel",
    next: 4
  },
  {
    id: 4,
    image: "zombie_shot.png",
    class: "zombie4",
    sound: "shovel.wav",
    sound2: "Zombie-Breath.mp3",
    cursor: "shovel",
    next: 0
  },
  {
    id: 5,
    image: "zombie_shot.png",
    class: "zombie5",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 6
  },
  {
    id: 6,
    image: "zombie_shot.png",
    class: "zombie6",
    sound: "shot.mp3",
    sound2: "Zombie-Breath.mp3",
    cursor: "sniper",
    next: 7
  }, {
    id: 7,
    image: "zombie_w.png",
    class: "zombie7",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 8
  }, {
    id: 8,
    image: "zombie_w.png",
    class: "zombie8",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 9
  }, {
    id: 9,
    image: "zombie_shot.png",
    class: "zombie9",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 10
  }, {
    id: 10,
    image: "zombie_shot.png",
    class: "zombie10",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 11
  },
  {
    id: 11,
    image: "zombie_shot.png",
    class: "zombie11",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 0
  },
  {
    id: 12,
    image: "zombie_shot.png",
    class: "zombie12",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 13
  },
  {
    id: 13,
    image: "zombie_shot.png",
    class: "zombie13",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 14
  }, {
    id: 14,
    image: "zombie_shot.png",
    class: "zombie14",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 15
  }, {
    id: 15,
    image: "zombie_w.png",
    class: "zombie15",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 16
  }, {
    id: 16,
    image: "zombie_shot.png",
    class: "zombie16",
    sound: "shot.mp3",
    sound2: "Zombie-Breath.mp3",
    cursor: "sniper",
    next: 17
  }, {
    id: 17,
    image: "zombie_shot.png",
    class: "zombie17",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 18
  },
  {
    id: 18,
    image: "zombie_shot.png",
    class: "zombie18",
    sound: "shot.mp3",
    cursor: "sniper",
    next: 0
  },
]

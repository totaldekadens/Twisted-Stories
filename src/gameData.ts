import { GameStep } from "./types";


export let gameSteps: GameStep[] = [
  {
    id: 1,
    question: "Du har knappt vaknat än och ligger och surplar på dagens första kopp kaffe i sängen. Det är inte förrän efter din andra kopp kaffe som du verkligen börjar bli människa igen och dina ögon är fortfarande lite grumliga. Men under din pågående mysiga morgonrutin ser du något ovanligt i den vackra fönstervyn du är van vid från sovrummet. Det är en man precis utanför på gårdsplanen. Han är hukad och står på alla fyra och gnager på ett ben. Ett mänskligt ben. Definitivt. Och den har fortfarande en sko på sig.. ",
    input: false,
    image: "",
    sound: "",
    choices: {
      left: {text: "", id: 1},
      right: {text: "Gå vidare", id: 2},
    }
  },
  {
  id: 2,
  question: "Du har svårt att ta in den bild du ser framför dig och fryser till is. Mannen som gnager på det mänskliga benet slutar plötsligt tugga, som om något ljud stör honom. Han tittar sakta upp från sin måltid. Hans ögon blinkar inte och de verkar vara för stora för hans ansikte. Munnen hänger öppen och blodet rinner längs hans haka. Han ser dig. Precis i det ögonblicket skymtar du samtidigt i ögonvrån en ”flock” av fler som honom med glassplitter överallt på deras kroppar som påvisar tydligt att de inte haft några problem att komma in i tidigare hus om de velat. Nu är de på väg mot ditt. <br><br> Vad gör du?",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Går ut genom sidodörren och försöker smyga förbi dem till din bil, medan de alla är upptagna med ben och fönster", id: 3},
    right: {text: "Du springer ner i din källare, barrikaderar dörren och hoppas på att de inte förstår att du är där", id: 4},
  }
},
{
  id: 3,
  question: "Du har smygt ut som en ninja. De tio steg det tog dig för att nå bilen var de tio mest nervkittlande i hela ditt liv. Men du lyckades vara tillräckligt tyst – härvan av zombies på din gårdsplan ser inte upp förrän dunsen från den stängande förarsidans dörr. <br> De börjar springa mot bilen samtidigt som du får i gång den och ställer dig på gasen. (Du tänker samtidigt, vilken jäkla tur att ja alltid har på mig bilnycklarna och att bilen är nytankad, vad är oddsen?). Du kör över och på en massa zombies och tar dig ifrån platsen. ",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "", id: 0},
    right: {text: "...", id: 5},
  }
},
{
  id: 4,
  question: "Du sitter i källaren så långt in i ett hörn man kan komma. De har förstått att du är i källaren och ljud av flera hammare mot källardörren blir allt tydligare som ett bevis på att nu är det inte långt kvar innan de är igenom.  Du tar till dig en spade och förstår vad du har framför dig. <br><br> De tar sig in och du slåss heroiskt. Du tar död på flera stycken, men till slut övermanövrerar de dig och du tar ditt sista andetag. <br><br> Rest In Peace.",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Börja om", id: 1},
    right: {text: "", id: 0},
  }
},
{
  id: 5,
  question: "Vi tar en liten snabb paus innan du får köra vidare. Vi har ju glömt att fråga vad du heter. Oförskämt av oss.. <br><br> Vad heter du? ",
  input: true,
  image: "",
  sound: "",
  choices: {
    left: {text: "", id: 0},
    right: {text: "...", id: 6},
  }
}
,
{
  id: 6,
  question: `Du åker igenom staden och ser fruktansvärda syner. Människor rycks ut från kaféer och pizzerior och hinner knappt dö innan de själva förvandlas till monster. ”Är det en tröst? Att det kanske går fort?”  Dina tankar skiftar fokus och du tvingar dig själv att bara tänka på en sak. Stanna inte. Stannar du så är det kört. ` ,
  input: false,
  image: "zombies_street.png",
  sound: "",
  choices: {
    left: {text: "", id: 0},
    right: {text: "...", id: 15},
  }
},
/* {
  id: 7,
  question: "Du har from NU 20 sekunder på dig att skriva hela alfabetet, avsluta med Enter, annars händer något väldigt tråkigt..",
  input: true,
  choices: {
    left: {text: "Börja om", id: 1},
    right: {text: "Gå vidare", id: 9},
  }
} ,*/
{
  id: 8,
  question: "Tråkigt men sant. Ingen mening med att ni båda är zombiemat. <br><br> Du trampar ner på gaspedalen och fortsätter. Barnets skräckslagna ansikte blinkar förbi. Du tittar i backspegeln ett par gånger och trädet krymper sakta men säkert.",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "", id: 0},
    right: {text: "...", id: 10},
  }
},
{
  id: 9,
  question: "Flickan är skärrad och får inte ur sig ett ljud. Du försöker fråga henne om hennes föräldrar utan resultat. Ni har kört ett tag, det är vidöppna vyer överallt och inte en zombie så långt ögat kan nå. Du börjar fundera på vad ditt nästa steg är. Vart är ni väg? Du sätter på radion och i samma stund du gör det så berättar en oerhört seriös röst från högtalaren om vilka ställen som är säkra i landet. <br> ”.. Anders Personsgata 18 i Göteborg ..” Är inte det? Jo! Din skola!  Du bestämmer dig för att åka dit.",
  input: false,
  image: "girl_car.jpg",
  sound: "",
  choices: {
    left: {text: "", id: 0 },
    right: {text: "...", id: 14 },
  }
}
,
{
  id: 10,
  question: "Du har kört ett tag, det är vidöppna vyer överallt och inte en zombie så långt ögat kan nå. Du börjar fundera på vad ditt nästa steg är. Vart är du på väg? Du sätter på radion och i samma stund du gör det så berättar en oerhört seriös röst från högtalaren om vilka ställen som är säkra i landet. <br> ”.. Anders Personsgata 18 i Göteborg ..” Är inte det? Jo! Din skola!  Du bestämmer dig för att åka dit. <br><br> Du kommer till staden och känner inte igen de vyer du har framför dig. Det är tyst, grått, dimmigt och regnet ligger i luften (nästan så att man kan tro att man är i Bollebygd). Det finns inte ett enda helt fönster på vare sig bilar eller hus. Du närmar dig skolan och ser en hel här av zombies utanför entrén. <br><br> Skit. Vad är din plan? ",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Du ser mirakulöst en AK47 vid vägkanten och ser att den är laddad med massor av skott. Du väljer att chansa skjuta zombiesarna med risk att du träffar och förstör entrén som riskerar livet på samtliga inomhus.", id: 11},
    right: {text: "Du chansar på att gasa in med bilen i hären och hoppas på att du kan köra ihjäl alla innan du själv fastnar.", id: 12},
  }
},
{
  id: 11,
  question: "Samtidigt som skotten peppras mot zombiesarna, skapar du oönskad uppmärksamhet. Du märker att de börjar flocka sig mot bilen från annat håll <br><br> Vad gör du?",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Jag går och lägger mig, det är ju fan helt omöjligt att rädda sitt liv - Ändra denna text sen", id: 1},
    right: {text: "Fortsätter peppra på vinst eller förlust - Ändra denna text sedan", id: 13},
  }
},
{
  id: 12,
  question: "Du dör på kuppen och hyllas som en hjälte.",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Börja om", id: 1},
    right: {text: "", id: 0},
  }
}
,
{
  id: 13,
  question: "Du klarade dig och är på en säker plats! GRATTIS!",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Börja om", id: 1},
    right: {text: "", id: 0},
  }
},
{
  id: 14,
  question: "Ni kommer till staden och känner inte igen de vyer du har framför dig. Det är tyst, grått, dimmigt och regnet ligger i luften (nästan så att man kan tro att man är i Bollebygd). Det finns inte ett enda helt fönster på vare sig bilar eller hus. Ni närmar dig skolan och ser en hel här av zombies utanför entrén. <br><br> Skit. Vad är din plan? ",
  input: false,
  image: "",
  sound: "",
  choices: {
    left: {text: "Du ser mirakulöst en AK47 vid vägkanten och ser att den är laddad med massor av skott. Du väljer att chansa att skjuta zombiesarna med risk att du träffar och förstör entrén som riskerar livet på samtliga inomhus. – Till skjutspel!", id: 11}, /* Skicka till nytt id? */
    right: {text: "Du chansar på att gasa in med bilen i hären och hoppas på att du kan köra ihjäl alla innan du själv fastnar.", id: 12 }, /* Skicka till nytt id? */
  }
},
{
  id: 15,
  question: " Du kommer till utkanten av staden och började precis tänka på att ”Ååh, vad skönt, har inte sett några zombies eller människor på ett tag nu”. Jinx på det! <br><br> Till vänster av vägkanten ser du tre zombies vid roten av ett stort träd. De sträcker sig mot kronorna som om det är något de vill ha där uppe. Och det stämmer. Det sitter en liten flicka på en gren. Hon ser livrädd ut och du förstår att det bara en tidsfråga innan hon faller ner. Hon får ögonkontakt med dig. <br><br> Vad gör du?",
  input: false,
  image: "tree.jpg",
  sound: "",
  choices: {
    left: {text: "Du kommer göra allt för att rädda flickan! ", id: 9},
    right: {text: "Det finns inget du kan göra. Det är en alldeles för stor risk för er båda. Du kör vidare.", id: 8},
  }
}



]
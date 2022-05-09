import { gameStep } from "./interfaces";


// Exempelfrågor under tiden jag testar funktionerna
export let gameSteps: gameStep[] = [{
    id: 1,
    question: "Vad heter du?",
    input: true,
    choices: {
      left: {text: "Avslöjar jag aldrig", id: 1},
      right: {text: "Fortsätt", id: 2}
    }
  },
  {
    id: 2,
    question: "Är du en bra människa?",
    input: false,
    choices: {
      left: {text: "Nej", id: 1},
      right: {text: "Ja", id: 3},
    }
  },
  {
    id: 3,
    question: "Välj ett spel",
    input: false,
    choices: {
      left: {text: "snart ett spel", id: 1},
      right: {text: "Alfabetet", id: 4},
    }
  },
  {
    id: 4,
    question: "Du har from NU 20 sekunder på dig att skriva hela alfabetet, avsluta med Enter, annars händer något väldigt tråkigt..",
    input: true,
    choices: {
      left: {text: "Börja om", id: 1},
      right: {text: "Fortsätt", id: 5},
    }
  }
  
  ]
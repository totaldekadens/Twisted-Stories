import { GameStep } from "./types";
import { gameSteps } from "./gameData";
import { input, zombieCont, app } from "./games";




// HTML-Element
export let welcome = document.querySelector(".welcome") as HTMLDivElement
export let contInputField = document.querySelector(".inputField") as HTMLDivElement
export let imgCont = document.querySelector(".imgCont") as HTMLDivElement
let buttons = document.querySelector(".buttons") as HTMLDivElement
let question = document.querySelector(".question") as HTMLDivElement





// Render current step
export const renderStep: (gameStep: GameStep) => void = (gameStep) => {
  
  buttons.innerHTML= "";
  imgCont.innerHTML=""; 
  zombieCont.innerHTML=""; 

  // removes special cursors from game
  app.classList.remove("shovel")
  app.classList.remove("sniper")

  // sound
  const sound = new Audio("./src/assets/sound/" + gameStep.optional?.sound);

  if (gameStep.optional?.sound) {
    sound.play();
  }
 
  // input
  let yourName = input?.value

  if (gameStep.id == 6) {
    question.innerHTML = "Tack " + yourName + "! <br><br>" + gameStep.question
  } else {
    question.innerHTML = gameStep.question
  }

  input!.value ="" // because of game function

  if (gameStep.optional?.input) {
    contInputField.classList.remove("none")
  } else {
    contInputField.classList.add("none")
  }

  // games/challenges
  if (gameStep.optional?.function?.gameOne) {
    gameStep.optional?.function?.gameOne(gameStep, gameStep.optional.function.zombieIdStart!, gameStep.optional.function.zombieIdEnd!, gameStep.optional.function.nextStep!)
    return
  }

  if (gameStep.optional?.function?.gameTwo) {
    gameStep.optional.function.gameTwo!(gameStep, sound)
    return
  }  

  // images
  if (gameStep.optional?.image) {
    let image = document.createElement("img") as HTMLImageElement
    image.classList.add("image")
    image.src = "./src/assets/images/" + gameStep.optional?.image
    imgCont.append(image)
  }


  // Render button(s)
  eventListener(gameStep, sound);

}






// Sending next step to renderStep
export const nextStep: (id: number, sound?: HTMLAudioElement) => void = (id, sound) => {

  if(sound) {
    sound.pause();
  }
  
  let nextStep = gameSteps.find(step => step.id == id)!

  renderStep(nextStep)

}






// Render button(s) for current step and clickevent
export const eventListener: (gameStep : GameStep, sound? : HTMLAudioElement) => void = (gameStep, sound) => {

  for (let i = 0; i < gameStep.choices.length; i++) {
    
    const choice = gameStep.choices[i];

    let newBtn = document.createElement("div") as HTMLDivElement
    newBtn.classList.add("button")
    newBtn.innerText = choice.text
    buttons.append(newBtn)

    newBtn.addEventListener("click", () => {
      
      // Inputfield-step condition
      if((gameStep.optional?.input)) {

        let yourName = input?.value

        if (!yourName) {
          alert("Fyll i ditt namn!")
          return
        }
      }
      
      nextStep(choice.id, sound!)
    
    })
  }
}


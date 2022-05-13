import { GameStep } from "./types";
import { gameSteps } from "./gameData";


// HTML-Element
export let welcome = document.querySelector(".welcome") as HTMLDivElement
let question = document.querySelector(".question") as HTMLDivElement
let contInputField = document.querySelector(".inputField") as HTMLInputElement
let input = document.getElementById('firstName') as HTMLInputElement | null;
let imgCont = document.querySelector(".imgCont") as HTMLDivElement
let buttons = document.querySelector(".buttons") as HTMLDivElement








// Render current step
export const renderStep: (gameStep: GameStep) => void = (gameStep) => {

  buttons.innerHTML= "";
  imgCont.innerHTML="";
  imgCont.classList.remove("none") // adds none in game-function
  input?.classList.remove("none") // adds none in game-function


  // Alphabet challenge
  if (gameStep.id == 7) {
    gameOne(gameStep);
    return
  } 


  // Value from Input
  let yourName = input?.value

  if (gameStep.id == 6) {
    question.innerHTML = "Tack " + yourName + "! <br><br>" + gameStep.question
  } else {
    question.innerHTML = gameStep.question
  }

  input!.value ="" // because of game function



  // Input
  if (gameStep.optional?.input) {
    contInputField.classList.remove("none")
  } else {
    contInputField.classList.add("none")
  }


  // Image
  if (gameStep.optional?.image) {
    let image = document.createElement("img") as HTMLImageElement
    image.classList.add("image")
    image.src = "./src/assets/images/" + gameStep.optional?.image
    imgCont.append(image)
  }


 // Sound
  const sound = new Audio("./src/assets/sound/" + gameStep.optional?.sound);
  
  if (gameStep.optional?.sound) {
    sound.play();
  }


  // Buttons
  eventListener(gameStep, sound);

}






// Sending next step to renderStep
const nextStep: (id: number, sound: HTMLAudioElement) => void = (id, sound) => {

  sound.pause();

  let nextStep = gameSteps.find(step => step.id == id)!

  renderStep(nextStep)

}






// Alphabet challenge
function gameOne(step: GameStep) :void {
    
  input!.style.width = "60vw"
  input!.style.height = "150px"
  input!.style.fontSize = "30px"

  imgCont.classList.add("none")

  question.innerText = step.question

  let button = document.getElementById('continue') as HTMLInputElement 
  contInputField.classList.remove("none")

  input!.value =""
  const myTimeout = setTimeout(timesUp, 20000);

  input?.addEventListener("keypress", (event) => {

    if(event.key == "Enter") {

      event.preventDefault

      let answer: string | undefined = input?.value

      button.click();

      const alfa: string = "abcdefghijklmnopqrstuvxyzåäö"

      if(answer == alfa) {
        clearTimeout(myTimeout);

        contInputField.classList.add("none")

        for (let i = 0; i < gameSteps.length; i++) {
          const step = gameSteps[i];
          
          if(step.id == 17) {

            question.innerHTML = step.question

            eventListener(step);

          }
        }
      } 
      else {
        clearTimeout(myTimeout);

        contInputField.classList.add("none")

        for (let i = 0; i < gameSteps.length; i++) {
          const step = gameSteps[i];
          
          if(step.id == 18) {

            question.innerHTML = step.question

            eventListener(step);

          }

        }
      }
    }
  })
}



function timesUp() {

  contInputField.classList.add("none")

  for (let i = 0; i < gameSteps.length; i++) {
    const step = gameSteps[i];
    
    if(step.id == 18) {

      question.innerHTML = step.question

      eventListener(step);

    }

  }
}   






function eventListener(gameStep : GameStep, sound? : HTMLAudioElement) {

  for (let i = 0; i < gameStep.choices.length; i++) {
    
    const choice = gameStep.choices[i];

    let newBtn = document.createElement("div") as HTMLDivElement
    newBtn.classList.add("button")
    newBtn.innerText = choice.text
    
    buttons.append(newBtn)

    newBtn.addEventListener("click", () => {
      
      if((gameStep.id == 5)) {

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



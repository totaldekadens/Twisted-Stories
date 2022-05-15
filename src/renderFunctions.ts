import { GameStep } from "./types";
import { gameSteps, zombieList } from "./gameData";


// HTML-Element
export let welcome = document.querySelector(".welcome") as HTMLDivElement
let question = document.querySelector(".question") as HTMLDivElement
let contInputField = document.querySelector(".inputField") as HTMLInputElement
let input = document.getElementById('firstName') as HTMLInputElement | null;
let imgCont = document.querySelector(".imgCont") as HTMLDivElement
let buttons = document.querySelector(".buttons") as HTMLDivElement
let app = document.querySelector("#app") as HTMLDivElement







// Render current step
export const renderStep: (gameStep: GameStep) => void = (gameStep) => {

  buttons.innerHTML= "";
  imgCont.innerHTML="";
  imgCont.classList.remove("none") // adds none in game-function
  input?.classList.remove("none") // adds none in game-function


   // Sound
   const sound = new Audio("./src/assets/sound/" + gameStep.optional?.sound);
  
   if (gameStep.optional?.sound) {
     sound.play();
   }
 

    // Alphabet challenge
    if (gameStep.id == 7) {
      gameOne(gameStep, sound);
      return
    } 

    // Shoot challenge
    if (gameStep.id == 27) {
      gameTwo(gameStep, sound, 1);
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


  // Buttons
  eventListener(gameStep, sound);

}






// Sending next step to renderStep
const nextStep: (id: number, sound?: HTMLAudioElement) => void = (id, sound) => {

  if(sound) {
    sound.pause();
  }
  
  let nextStep = gameSteps.find(step => step.id == id)!

  renderStep(nextStep)

}






// Alphabet challenge
const gameOne: (step: GameStep, sound: HTMLAudioElement) => void = (step, sound) => {
  
  input!.style.fontSize = "21px"

  imgCont.classList.add("none")

  question.innerText = step.question

  let button = document.getElementById('continue') as HTMLInputElement 
  contInputField.classList.remove("none")

  input!.value =""
  const myTimeout = setTimeout(timesUp, 20000);

  input?.addEventListener("keypress", (event) => {

    if(event.key == "Enter") {

      sound.pause();

      event.preventDefault

      let answer: string | undefined = input?.value

      button.click();

      const alfa: string = "abcdefghijklmnopqrstuvxyzåäö"

      if(answer == alfa) {
        buttons.innerHTML= "";
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
        buttons.innerHTML= "";
        console.log("Du förlora")
        clearTimeout(myTimeout);

        contInputField.classList.add("none")

        for (let i = 0; i < gameSteps.length; i++) {
          const step = gameSteps[i];
          
          if(step.id == 18) {

            clearTimeout(myTimeout);

            question.innerHTML = step.question

            eventListener(step);

          }

        }
      }
    }
  })
}



const timesUp: () => void = () => {

  contInputField.classList.add("none")

  for (let i = 0; i < gameSteps.length; i++) {
    const step = gameSteps[i];
    
    if(step.id == 18) {

      question.innerHTML = step.question

      eventListener(step);

    }

  }
}   




const eventListener: (gameStep : GameStep, sound? : HTMLAudioElement) => void = (gameStep, sound) => {

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





let zombieImg = document.createElement("img")

 // Shooting challenge - Fixa tiemrfunktionen. 
const gameTwo: (step: GameStep, sound: HTMLAudioElement, zombieId: number, stop?: number ) => void = (step, sound, zombieId, stop?) => {
  
  question.innerHTML = step.question

  app.append(zombieImg)

  let zombie = zombieList.find(zombie => zombie.id == zombieId)
  
  const shot = new Audio("./src/assets/sound/" + zombie!.sound);

  if(zombie?.id == 1) {
    stop = setTimeout(dead, 3000);
  } else {
    clearTimeout(stop);
    stop = undefined
  }
 
  zombieImg.src ="./src/assets/images/" + zombie!.image
  zombieImg.classList.add(zombie!.class)


  zombieImg.addEventListener("click", () => {
    
    clearTimeout(stop);
    stop = undefined

    if(zombie?.id == 3) {
      shot.play()
      clearTimeout(stop);
      stop = undefined
      zombieImg.classList.add("none")
      nextStep(30)

    } 
    
    else {
      shot.play()
      clearTimeout(stop);
      stop = undefined
      stop = setTimeout(dead, 9000);
      gameTwo(step, sound, zombie!.next, stop)
    }
    
  })
}



function dead() {

  nextStep(29)

}
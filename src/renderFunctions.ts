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
let zombieCont = document.createElement("div") as HTMLDivElement
app.append(zombieCont)






// Render current step
export const renderStep: (gameStep: GameStep) => void = (gameStep) => {
  
  buttons.innerHTML= ""; // Remove(s) child(s) of buttons (Previous created button(s))
  imgCont.innerHTML=""; // Remove child(s) of imgCont (Previous created image)
  imgCont.classList.remove("none") // adds none in game-function
  input?.classList.remove("none") // adds none in game-function


  // Sound
  const sound = new Audio("./src/assets/sound/" + gameStep.optional?.sound);

  if (gameStep.optional?.sound) {
    sound.play();
  }
 

  // Shooting challenge
  if (gameStep.id == 27) {
    gameOne(gameStep, 1);
    return
  } 

  if (gameStep.id == 24) {
    gameOne(gameStep, 5);
    return
  } 

  if (gameStep.id == 31) {
    gameOne(gameStep, 12);
    return
  } 

  // Alphabet challenge
  if (gameStep.id == 7) {
    gameTwo(gameStep, sound);
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
    renderImage(gameStep)
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


const renderImage: (gameStep: GameStep) => void = (gameStep) => {
  let image = document.createElement("img") as HTMLImageElement
  image.classList.add("image")
  image.src = "./src/assets/images/" + gameStep.optional?.image
  imgCont.append(image)
}



// Alphabet challenge
const gameTwo: (step: GameStep, sound: HTMLAudioElement) => void = (step, sound) => {
  
  // Render the instructions
  question.innerText = step.question

  // Adapts the alpahbet to inputfield with the right fontsize
  input!.style.fontSize = "21px"

  // Adds display none on imageContainer
  imgCont.classList.add("none")
  imgCont.innerHTML="";

  // Get the "Continue"-button
  let button = document.getElementById('continue') as HTMLInputElement 
  
  // Removes display none from container that holds the input field
  contInputField.classList.remove("none")

  // Removes previous value from input field
  input!.value =""

  // Timer. You have 20 seconds to complete the task
  const myTimeout = setTimeout(timesUp, 20000);


  // keypress - event
  input?.addEventListener("keypress", (event) => {

    if(event.key == "Enter") {

      sound.pause();

      event.preventDefault

      let answer: string | undefined = input?.value

      button.click();

      const alfa: string = "abcdefghijklmnopqrstuvxyzåäö"

      if(answer == alfa) {
        imgCont.innerHTML="";
        buttons.innerHTML= "";
        clearTimeout(myTimeout);
        contInputField.classList.add("none")

        for (let i = 0; i < gameSteps.length; i++) {
          const step = gameSteps[i];
          
          if(step.id == 17) {
            imgCont.classList.remove("none")
            renderImage(step)
            question.innerHTML = step.question
            eventListener(step);

          }
        }
      } 
      else {
        buttons.innerHTML= "";
        imgCont.innerHTML="";
        clearTimeout(myTimeout);
        contInputField.classList.add("none")

        for (let i = 0; i < gameSteps.length; i++) {
          const step = gameSteps[i];
          
          if(step.id == 18) {

            clearTimeout(myTimeout);
            imgCont.classList.remove("none")
            renderImage(step)
            question.innerHTML = step.question
            eventListener(step);

          }

        }
      }
    }
  })
}


// If you are too slow (gameOne)
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



// Create(s) button(s) for current step and clickevent
const eventListener: (gameStep : GameStep, sound? : HTMLAudioElement) => void = (gameStep, sound) => {

  for (let i = 0; i < gameStep.choices.length; i++) {
    
    const choice = gameStep.choices[i];

    // Creates new button
    let newBtn = document.createElement("div") as HTMLDivElement
    newBtn.classList.add("button")
    newBtn.innerText = choice.text
    buttons.append(newBtn)


    // Clickevent
    newBtn.addEventListener("click", () => {
      
      // Inputfield-step condition
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







 // Shooting challenge 
const gameOne: (step: GameStep, zombieId: number, stop?: number ) => void = (step, zombieId, stop?) => {

  // Render question
  question.innerHTML = step.question


  // Remove child(s) of ZombieCont (Previous created Zombie)
  zombieCont.innerHTML="";


  // Find current Zombie object
  let zombie = zombieList.find(zombie => zombie.id == zombieId)


  // Sound when clicked
  const shot = new Audio("./src/assets/sound/" + zombie!.sound);

  // Sound of last Zombie in line
  if(zombie!.id == 4 || zombie!.id == 11 || zombie!.id == 16) {
    const growl = new Audio("./src/assets/sound/" + zombie!.sound2);
    growl.play()
  }
  

  // Timer function. Resets and start again. You have 3 seconds 
  clearTimeout(stop);
  stop = undefined

  if(zombie!.id > 1 && zombie!.id <= 4 ) {
    stop = setTimeout(dead, 3000);
  } else if
  (zombie!.id > 5 && zombie!.id < 12 || zombie!.id > 12 ) {
    stop = setTimeout(dead2, 2000);
  }
  
  

  // Creates a Zombie
  let zombieImg = document.createElement("img") as HTMLImageElement
  zombieImg.src ="./src/assets/images/" + zombie!.image
  zombieImg.classList.add(zombie!.class)
  zombieCont.append(zombieImg)


  // Eventlistener
  zombieImg.addEventListener("click", () => {

    clearTimeout(stop);
    stop = undefined
    zombieCont.innerHTML="";
    shot.play()

    if(zombie?.id == 4 ) {
      nextStep(30)

    } else if(zombie?.id == 11 ) {
      nextStep(26)
    }
    else if(zombie?.id == 18 ) {
      nextStep(13)
    }
    else {
      gameOne(step, zombie!.next, stop)
    }
    
  })
}


// If you are too slow (gameOne) you'll be moved to step 29
const dead: () => void = () => {
  zombieCont.innerHTML="";
  nextStep(29)
}

const dead2: () => void = () => {
  zombieCont.innerHTML="";
  nextStep(32)
}
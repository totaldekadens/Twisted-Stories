import { GameStep } from "./types";
import { gameSteps, zombieList } from "./gameData";


// HTML-Element
export let welcome = document.querySelector(".welcome") as HTMLDivElement
let question = document.querySelector(".question") as HTMLDivElement
let contInputField = document.querySelector(".inputField") as HTMLDivElement
let input = document.getElementById('input') as HTMLInputElement | null;
let imgCont = document.querySelector(".imgCont") as HTMLDivElement
let buttons = document.querySelector(".buttons") as HTMLDivElement
let zombieCont = document.createElement("div") as HTMLDivElement
let app = document.querySelector("#app") as HTMLDivElement
app.append(zombieCont)









// Render current step
export const renderStep: (gameStep: GameStep) => void = (gameStep) => {
  
  buttons.innerHTML= "";
  imgCont.innerHTML=""; 

  // removes special cursors from game
  app.classList.remove("shovel")
  app.classList.remove("sniper")


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


  // Render image
  if (gameStep.optional?.image) {
    renderImage(gameStep)
  }

  // Render button(s)
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






// Render image
const renderImage: (gameStep: GameStep) => void = (gameStep) => {
  let image = document.createElement("img") as HTMLImageElement
  image.classList.add("image")
  image.src = "./src/assets/images/" + gameStep.optional?.image
  imgCont.append(image)
}






// Create(s) button(s) for current step and clickevent
const eventListener: (gameStep : GameStep, sound? : HTMLAudioElement) => void = (gameStep, sound) => {

  for (let i = 0; i < gameStep.choices.length; i++) {
    
    const choice = gameStep.choices[i];

    let newBtn = document.createElement("div") as HTMLDivElement
    newBtn.classList.add("button")
    newBtn.innerText = choice.text
    buttons.append(newBtn)

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

  

  question.innerHTML = step.question 

  zombieCont.innerHTML=""; 

  let zombie = zombieList.find(zombie => zombie.id == zombieId) 

  const shot = new Audio("./src/assets/sound/" + zombie!.sound);

  // Sound of chosen Zombie in line
  if(zombie!.id == 4 || zombie!.id == 11 || zombie!.id == 16) {
    const growl = new Audio("./src/assets/sound/" + zombie!.sound2);
    growl.play()
  }

  
  if(zombie!.id < 5) {
    app.classList.add("shovel")
  } else {
    app.classList.add("sniper")
  }



  // Timer. Resets and start again 
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







// If you are too slow (gameOne) you'll be moved to step 29 or 32
const dead: () => void = () => {
  zombieCont.innerHTML="";
  nextStep(29)
}


const dead2: () => void = () => {
  zombieCont.innerHTML="";
  nextStep(32)
}








// Alphabet challenge
const gameTwo: (step: GameStep, sound: HTMLAudioElement) => void = (step, sound) => {
  
  question.innerText = step.question 

  contInputField.classList.remove("none")
 
  input!.style.fontSize = "21px" 
  input!.value =""  

  imgCont.innerHTML="";  

  let button = document.getElementById('continue') as HTMLInputElement 

  const myTimeout = setTimeout(timesUp, 20000); 

  input?.addEventListener("keypress", (event) => {

    if(event.key == "Enter") {

      sound.pause(); // Ends the heartbeat

      event.preventDefault

      let answer: string | undefined = input?.value

      button.click();

      const alfa: string = "abcdefghijklmnopqrstuvxyzåäö"

      imgCont.innerHTML="";
      buttons.innerHTML= "";
      contInputField.classList.add("none")
      clearTimeout(myTimeout);

      if(answer == alfa) {
        loopNewStep(step.choices[0].id)
      } 
      else {
        loopNewStep(step.choices[1].id)
      }
    }
  })
}







// Loops new step (gameTwo)
const loopNewStep: (nextStepId: number) => void = (nextStepId) => {

  for (let i = 0; i < gameSteps.length; i++) {
    const newstep = gameSteps[i];
    
    if(newstep.id == nextStepId ) {
      renderImage(newstep)
      question.innerHTML = newstep.question
      eventListener(newstep);
    }
  }
}







// If you are too slow (gameTwo)
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

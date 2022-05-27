 
import { GameStep } from "./types";
import { zombieList } from "./gameData";
import { nextStep, imgCont} from "./renderFunctions";


// HTML element
export let input = document.getElementById('input') as HTMLInputElement;
export let zombieCont = document.createElement("div") as HTMLDivElement
export let app = document.querySelector("#app") as HTMLDivElement







// Shooting challenge 
export const gameOne: (step: GameStep, zombieId: number, stop?: number ) => void = (step, zombieId, stop?) => {
  
  
  zombieCont.innerHTML=""; 
  app.append(zombieCont)
  
  let zombie = zombieList.find(zombie => zombie.id == zombieId) 

  const growl = new Audio("./src/assets/sound/" + zombie!.sound2);
  const shot = new Audio("./src/assets/sound/" + zombie!.sound);

  // Sound of chosen Zombie in line
  if(zombie?.sound2) {
    growl.play()
  }

  // Adds special cursor
  app.classList.add(zombie!.cursor)

  // Timer. Resets and start again 
  clearTimeout(stop);
  stop = undefined

  if(zombie!.id > 1 && zombie!.id <= 4 ) {
    stop = setTimeout(dead, 3000);
  } 
  else if (zombie!.id > 5 && zombie!.id < 12 || zombie!.id > 12 ) {
    stop = setTimeout(dead2, 2000);
  }

  let zombieImg = document.createElement("img") as HTMLImageElement
  zombieImg.src ="./src/assets/images/" + zombie!.image
  zombieImg.classList.add(zombie!.class)
  zombieCont.append(zombieImg)

  zombieImg.addEventListener("click", () => {

    clearTimeout(stop);
    stop = undefined
    growl.pause()
    shot.play()

    if(zombie?.id == step.optional?.function?.zombieIdEnd ) {
      nextStep(step.optional!.function!.nextStep!)
    } 
    else {
      gameOne(step, zombie!.next, stop)
    }
  })
}


// If you are too slow (gameOne) you'll be moved to step 29 or 32
const dead: () => void = () => {
  nextStep(29)
}


const dead2: () => void = () => {
  nextStep(32)
}










// Alphabet challenge
export const gameTwo: (step: GameStep, sound: HTMLAudioElement) => void = (step, sound) => {

  input!.style.fontSize = "21px" 
  input!.value =""  

  imgCont.innerHTML="";  

  let button = document.getElementById('continue') as HTMLInputElement 

  const myTimeout = setTimeout(timesUp, 20000); 

  let newInput = input.cloneNode(true);
  input.parentNode!.replaceChild(newInput, input);
  input = newInput as HTMLInputElement

  input?.addEventListener("keypress", (event) => {

    if(event.key == "Enter") {
      event.preventDefault

      button.click();

      clearTimeout(myTimeout);

      sound.pause(); // Ends the heartbeat
  
      let answer: string = input?.value

      const alfa: string = "abcdefghijklmnopqrstuvwxyzåäö"

      if(answer == alfa) {
        nextStep(step.choices[0].id)
      } 
      else {
        nextStep(step.choices[1].id)
      }
    }
  })
}



// If you are too slow (gameTwo)
const timesUp: () => void = () => {
  nextStep(18)
}   

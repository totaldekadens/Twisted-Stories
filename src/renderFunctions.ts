import { GameStep } from "./types";
import { gameSteps } from "./gameData";


// HTML-Element
export let welcome = document.querySelector(".welcome") as HTMLDivElement
let image = document.createElement("img") as HTMLImageElement
image.classList.add("image")
let question = document.querySelector(".question") as HTMLDivElement
let contInputField = document.querySelector(".inputField") as HTMLInputElement
let input = document.getElementById('firstName') as HTMLInputElement | null;
let imgCont = document.querySelector(".imgCont") as HTMLDivElement
let buttons = document.querySelector(".buttons") as HTMLDivElement
let rightButton = document.createElement("div") as HTMLDivElement
let leftButton = document.createElement("div") as HTMLDivElement
rightButton.classList.add("right")
leftButton.classList.add("left")







// Renderar ut steget
export const renderStep: (gameStep: GameStep) => void = (gameStep) => {

  // Alphabet challenge
  if (gameStep.id == 7) {
    gameOne(gameStep);
    return
  } 


  // Value from Input

  
  input?.classList.remove("none") // because of game-function

  let yourName = input?.value

  if (gameStep.id == 6) {
    question.innerHTML = "Tack " + yourName + "! <br><br>" + gameStep.question
  } else {
    question.innerHTML = gameStep.question
  }

  input!.value ="" // because of game function

  // Buttons
  rightButton.classList.remove("none")

  if (!gameStep.choices.left) {
    leftButton.classList.add("none")
    rightButton.innerText = gameStep.choices.right.text
  } else {
    leftButton.classList.remove("none")
    rightButton.innerText = gameStep.choices.right.text
    leftButton.innerText = gameStep.choices.left.text
  }

  buttons.append(leftButton, rightButton)



  // Input
  if (gameStep.optional?.input) {
    contInputField.classList.remove("none")
  } else {
    contInputField.classList.add("none")
  }


  // Image
  if (!gameStep.optional?.image) {
    imgCont.classList.add("none")
  } else {
    imgCont.classList.remove("none")
    image.src = "./src/assets/" + gameStep.optional?.image
    imgCont.append(image)
  }


  // Sound
  if (gameStep.optional?.sound) {
    const sound = new Audio("./src/assets/" + gameStep.optional?.sound);
    sound.play();
  }



  // Eventlisteners
  var newLeftBtn = leftButton.cloneNode(true);
  leftButton.parentNode!.replaceChild(newLeftBtn, leftButton); 
  leftButton = newLeftBtn as HTMLDivElement

  if(gameStep.choices.left) {
    newLeftBtn.addEventListener("click", () => {
      nextStep(gameStep.choices.left!.id)
    })
  }

  var newRightBtn = rightButton.cloneNode(true);
  rightButton.parentNode!.replaceChild(newRightBtn, rightButton); 
  rightButton = newRightBtn as HTMLDivElement

  rightButton.addEventListener("click", () => {

    if((gameStep.id == 5)) {

      let yourName = input?.value

      if (!yourName) {
        alert("Fyll i ditt namn!")
        return
      }
    }
    nextStep(gameStep.choices.right.id)
  })

}





// Sending next step to renderStep
const nextStep: (id: number) => void = (id) => {

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
  rightButton.classList.add("none")
  leftButton.classList.add("none")
  input!.value =""
  const myTimeout = setTimeout(timesUp, 20000);

  input?.addEventListener("keypress", (event) => {

    if(event.key == "Enter") {

      event.preventDefault

      let answer: string | undefined = input?.value

      button.click();

      const alfa: string = "abcdefghijklmnopqrstuvxyzåäö"



      //  Gör nedan dynamisk

      if(answer == alfa) {
        clearTimeout(myTimeout);
        question.innerText = "Grattis!"
        rightButton.classList.remove("none")
        input?.classList.add("none")
        rightButton.innerText = step.choices.right.text
        rightButton.addEventListener("click", () => {nextStep(step.choices.right.id)} )

      } 
      else {
        clearTimeout(myTimeout);
        question.innerText = "Zombiesarna dödade dig :(  Rest In Piece. "
        leftButton.classList.remove("none")
        rightButton.classList.add("none")
        input?.classList.add("none")
        leftButton.innerText = step.choices.left!.text
        leftButton.addEventListener("click", () => {nextStep(step.choices.left!.id)} )
      }
    }
  })
}



function timesUp() {
  question.innerText = "Zombiesarna hann döda dig :(  Rest In Piece. "
  leftButton.classList.remove("none")
  rightButton.classList.add("none")
  input?.classList.add("none")
  leftButton.innerText = "Börja om"
  leftButton.addEventListener("click", () => {nextStep(1)} )
}   


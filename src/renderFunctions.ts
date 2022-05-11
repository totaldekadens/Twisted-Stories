import { GameStep } from "./types";
import { gameSteps  } from "./gameData";


// HTML-Element
let question = document.querySelector(".question") as HTMLDivElement
let rightButton = document.querySelector(".right") as HTMLDivElement
let leftButton = document.querySelector(".left") as HTMLInputElement
let contInputField = document.querySelector(".inputField") as HTMLInputElement
let input = document.getElementById('firstName') as HTMLInputElement | null;
export let welcome = document.querySelector(".welcome") as HTMLDivElement
let imgCont = document.querySelector(".imgCont") as HTMLDivElement
let image = document.createElement("img") as HTMLImageElement
image.classList.add("image")






export const renderStep : (gameStep: GameStep) => void = (gameStep) => {


    if(gameStep.id == 1 ) {
      input?.classList.remove("none")
    }
  
    let yourName = input?.value
  
    rightButton.classList.remove("none")
    leftButton.classList.remove("none")
  
    if(gameStep.choices.right.text == "") {
      rightButton.classList.add("none")
    }
    if(gameStep.choices.left.text == "") {
      leftButton.classList.add("none")
    }
  
    contInputField.classList.add("none") 
  
    if(gameStep.input) {
      contInputField.classList.remove("none")
    }
  
    if(gameStep.id == 6) {
      question.innerHTML = "Tack " + yourName + "! <br><br>" + gameStep.question
    } else {
      question.innerHTML = gameStep.question
    }

    if(gameStep.image == "" ) {
      imgCont.classList.add("none")
    } else {
      imgCont.classList.remove("none")
      image.src = "./src/assets/" + gameStep.image
      imgCont.append(image)
    }
    
    rightButton.innerText = gameStep.choices.right.text
    leftButton.innerText = gameStep.choices.left.text
  
  
    for (let i = 0; i < gameSteps.length; i++) {  
  
      const step = gameSteps[i];
  
      if(step.id == gameStep.id) {
  
        rightButton.addEventListener("click", () => { 
        
          nextStep(step.choices.right.id)
        
        })
  
        leftButton.addEventListener("click", () => { 
  
          nextStep(step.choices.left.id)
        
        })
  
      }
  
    }
  
}
  
  
  
  
export const nextStep : (id: number) => void = (id) => {

    for (let i = 0; i < gameSteps.length; i++) { 

        let step = gameSteps[i]

        if(step.id == id) {

            console.log(step)

            renderStep(step)

        }
    }
}






























/* 

 Lägger spelet på is lite. Lös det grundläggande först så får spelet bli en bonus om du hinner.



 Alfabetsutmaningen på is - Denna skall in i for-loopen sen

 if (id == 7 && step.id == 7) {
  gameOne(step);
  return
} 




  function gameOne(step: object) :void {

  console.log("Nu är du på alfabetsspelet")

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

      if(answer == alfa) {
        clearTimeout(myTimeout);
        question.innerText = "Grattis!"
        rightButton.classList.remove("none")
        input?.classList.add("none")
        rightButton.innerText = step.choices.right.text

      } 
      else {
        clearTimeout(myTimeout);
        question.innerText = "Ajdå"
        leftButton.classList.remove("none")
        rightButton.classList.add("none")
        input?.classList.add("none")
        leftButton.innerText = step.choices.left.text
      }

      input!.value =""

    }

  })
}



 function timesUp() {
  question.innerText = "SORRY"!!
  leftButton.classList.remove("none")
  rightButton.classList.add("none")
  input?.classList.add("none")
  leftButton.innerText = "Börja om"
}   

 */
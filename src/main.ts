import './style.css'
import { gameSteps  } from "./steps";

// HTML-Element
let question = document.querySelector(".question") as HTMLInputElement
let rightButton = document.querySelector(".right") as HTMLInputElement
let leftButton = document.querySelector(".left") as HTMLInputElement
let contInputField = document.querySelector(".inputField") as HTMLInputElement
let welcome = document.querySelector(".welcome") as HTMLInputElement
let input = document.getElementById('firstName') as HTMLInputElement | null;


// Start - Klicka för att köra igång
welcome.addEventListener( "click", () => {
  nextStep(1);
  welcome.classList.add("none");
})




// Rendera ut frågor/svar/spel och kalla på funktionen igen med nytt id
function nextStep(id: number) :void {

  console.log(id)

 if(id == 1 ) {
  input?.classList.remove("none")
  }
    // Om du vill använda namnet
  /* let yourName = input?.value */


  for (let i = 0; i < gameSteps.length; i++) {
    
    const step = gameSteps[i];

    // Alfabetsutmaningen
    if (id == 7 && step.id == 7) {

      gameOne(step);

      return
    }

    // Om input-id och id't på objektet stämmer rendera ut nedan
    if(id == step.id) {

      rightButton.classList.remove("none")
      leftButton.classList.remove("none")

      if(step.choices.right.text == "") {
        rightButton.classList.add("none")
      }
      if(step.choices.left.text == "") {
        leftButton.classList.add("none")
      }

      contInputField.classList.add("none") 

      if(step.input) {
        contInputField.classList.remove("none")
      }

      question.innerHTML = step.question
      /* question.innerText = step.question */
      rightButton.innerText = step.choices.right.text
      leftButton.innerText = step.choices.left.text
     
      rightButton.addEventListener("click", () => {nextStep(step.choices.right.id)})
      leftButton.addEventListener("click", () => {nextStep(step.choices.left.id)})

    }
    
  }

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
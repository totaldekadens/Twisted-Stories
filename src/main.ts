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
function nextStep(id: number) {

  let input = document.getElementById('firstName') as HTMLInputElement | null;

 if(id == 1 ) {
  input?.classList.remove("none")
}
    // Om du vill använda namnet
  /* let yourName = input?.value */


  for (let i = 0; i < gameSteps.length; i++) {
    
    const step = gameSteps[i];

    // Alfabetsutmaningen
    if (id == 4 && step.id == 4) {

      question.innerText = step.question
     
      let rightButton = document.querySelector(".right") as HTMLInputElement
      let leftButton = document.querySelector(".left") as HTMLInputElement
      let input = document.getElementById('firstName') as HTMLInputElement | null;
      let button = document.getElementById('continue') as HTMLInputElement 
      contInputField.classList.remove("none")
      rightButton.classList.add("none")
      leftButton.classList.add("none")
      input!.value =""
      const myTimeout = setTimeout(timesUp, 10000);

      input?.addEventListener("keypress", (event) => {

        if(event.key == "Enter") {

          event.preventDefault
          let input = document.getElementById('firstName') as HTMLInputElement | null;
          let character = input?.value

          button.click();

          const alfa: string = "abcdefghijklmnopqrstuvxyzåäö"

          if(character == alfa) {
            clearTimeout(myTimeout);
            question.innerText = "Grattis!"
            rightButton.classList.remove("none")
            input?.classList.add("none")
            rightButton.innerText = step.choices.right.text

          } 
          else {
            question.innerText = "Ajdå"
            leftButton.classList.remove("none")
            rightButton.classList.add("none")
            input?.classList.add("none")
            leftButton.innerText = step.choices.left.text
          }

          input!.value =""

        }

      })

      return
    }

    // Om input-id och id't på arrayen stämmer rendera ut nedan
    if(id == step.id) {

      question.innerText = step.question
      rightButton.innerText = step.choices.right.text
      rightButton.classList.remove("none")
      leftButton.innerText = step.choices.left.text
      leftButton.classList.remove("none")


      if(step.input) {

        contInputField.classList.remove("none")

        rightButton.addEventListener("click", () => {nextStep(step.choices.right.id)})
        leftButton.addEventListener("click", () => {nextStep(step.choices.left.id)})

        return
      }
     
      contInputField.classList.add("none") 

      rightButton.addEventListener("click", () => {nextStep(step.choices.right.id)})
      leftButton.addEventListener("click", () => {nextStep(step.choices.left.id)})

      return

    } else {

     /*  console.log("Hittade ingen fråga som matchade") */
      
    }
    
  }

}

function timesUp() {
  question.innerText = "SORRY"!!

  leftButton.classList.remove("none")
  rightButton.classList.add("none")
  input?.classList.add("none")
  leftButton.innerText = "Börja om"
}
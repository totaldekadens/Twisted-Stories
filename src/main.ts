import './style.css'
import { gameSteps  } from "./gameData";
import { welcome, renderStep,   } from "./renderFunctions";




// Start - Klicka för att köra igång
 welcome.addEventListener( "click", () => {
  renderStep(gameSteps[0])
  welcome.classList.add("none");
})


renderStep



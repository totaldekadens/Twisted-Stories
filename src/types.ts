export interface GameStep {
    id: number,
    question: string,
    optional?: Optional 
    choices: Choice[]
  }

interface Choice {
  text: string,
  id: number,
}

interface Optional {
    input?: boolean,
    image?: string,
    sound?: string,
    function?: {
      gameOne?: (gameStep: GameStep, zombieIdStart : number, stop?: number ) => void
      gameTwo?: (gameStep: GameStep, sound: HTMLAudioElement) => void
      zombieIdStart?: number
      zombieIdEnd?: number
      nextStep?: number
    }
  }

  export interface Zombie {
    id: number,
    image: string,
    class: string,
    sound: string,
    sound2?: string,
    cursor: string
    next: number
  }
export interface GameStep {
    id: number,
    question: string,
    input: boolean,
    image: string,
    sound: string,
    choices: {
      left: {text: string, id: number},
      right: {text: string, id: number}
    }
  
  }
  
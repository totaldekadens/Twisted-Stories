export interface gameStep {
    id: number,
    question: string,
    input: boolean,
    choices: {
      left: {text: string, id: number},
      right: {text: string, id: number}
    }
  
  }
  

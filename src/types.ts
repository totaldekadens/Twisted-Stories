export interface GameStep {
    id: number,
    question: string,
    optional?: optional 
    choices: {
      left?: buttonData,
      right: buttonData
    }
   
  }
  export interface buttonData {
    text: string, 
    id: number
  } 
  
  export interface optional {
    input?: boolean,
    image?: string,
    sound?: string,
  }
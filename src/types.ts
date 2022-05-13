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
  }


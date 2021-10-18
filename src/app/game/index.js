import CompetitiveGame from './classes/CompetitiveGame'
import PracticeGame from './classes/PracticeGame'

export default function createGame(options) {
  return {
    competitive: () => new CompetitiveGame(options),
    practice: () => new PracticeGame(options),
  }[options.type]()
}

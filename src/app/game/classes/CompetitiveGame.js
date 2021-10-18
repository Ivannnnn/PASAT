import { createTimeout } from '../helpers'
import Game from './Game'

export default class CompetitiveGame extends Game {
  constructor(config) {
    super(config)
    this.timeout = createTimeout()
  }

  get isRunning() {
    return this.data.status === 'running'
  }

  next() {
    if (this.round <= this.config.rounds) {
      super.next()
      this.timeout.start(this.next.bind(this), this.config.interval)
    } else {
      this.end()
    }
  }
}

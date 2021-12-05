import { randomBetween, merge, createEventBus } from '../helpers'
import { speak } from '@/game/speaker'

export default class Game {
  static defaultConfig = {
    n: 2,
    mode: 'visual',
  }

  data = {
    numbers: [],
    solutions: [],
    correct: 0,
    status: null,
  }

  constructor(config = {}) {
    this.config = merge(Game.defaultConfig, config)
    Object.assign(this, createEventBus())
  }

  _updateData(objOrFunc) {
    typeof objOrFunc === 'function'
      ? objOrFunc(this.data)
      : Object.assign(this.data, objOrFunc)
    this.emit('update:data')
  }

  start() {
    this._updateData({ status: 'running' })
    this.next()
  }

  end() {
    this.next = () => {}
    this._updateData({ status: 'ended' })
    this.emit('ended')
  }

  next() {
    const newNumber = randomBetween(1, 9)
    this._updateData((data) => {
      if (this._isSolutionCorrect(data.solutions.length - 1)) data.correct++
      data.solutions.push(null)
      data.numbers.push(newNumber)
    })

    if (this.config.mode === 'auditory') speak(newNumber)

    return newNumber
  }

  setSolution(num) {
    num = isNaN(parseInt(num)) ? null : parseInt(num)
    this._updateData((data) => {
      data.solutions[data.solutions.length - 1] = num
    })
  }

  _isSolutionCorrect(i) {
    const { solutions, numbers } = this.data
    return solutions[i] === numbers[i] + numbers[i - this.config.n]
  }

  get status() {
    return this.data.status
  }

  get lastWasCorrect() {
    return this._isSolutionCorrect(this.data.numbers.length - 2)
  }

  get currentNumber() {
    return this.data.numbers[this.data.numbers.length - 1]
  }

  get currentSolution() {
    return this.data.solutions[this.data.solutions.length - 1]
  }

  get ready() {
    return this.data.numbers.length > this.config.n
  }

  get round() {
    return this.ready ? this.data.numbers.length - this.config.n : 0
  }
}

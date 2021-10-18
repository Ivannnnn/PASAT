import one from './1.mp3'
import two from './2.mp3'
import three from './3.mp3'
import four from './4.mp3'
import five from './5.mp3'
import six from './6.mp3'
import seven from './7.mp3'
import eight from './8.mp3'
import nine from './9.mp3'

const audios = [one, two, three, four, five, six, seven, eight, nine].map(
  (file) => new Audio(file)
)

const skip = [1, 1, 0.7, 0.6, 0.7, 0.6, 0.6, 0.6, 0.6]

export function speak(number) {
  const audio = audios[number - 1]
  audio.currentTime = skip[number - 1]
  audio.play()
}

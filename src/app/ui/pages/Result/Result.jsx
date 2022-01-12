import ResultChart from './components/ResultChart/ResultChart'
import ButtonDisplay from '../components/ButtonDisplay'
import Gesture from '@/ui/components/Gesture'

export default function Result({ game, reset }) {
  function swipe({ direction }) {
    direction === 'Right' && reset()
  }

  return (
    <Gesture on="swipe" run={swipe}>
      <div className="p-4 bg-gray-200 h-screen flex flex-col items-center justify-center">
        <ButtonDisplay className="mb-16">
          <span className="text-green mr-1">{game.config.n}</span>
          <span className="text-gray-400">N</span>
        </ButtonDisplay>

        <ResultChart
          success={Math.round((game.data.correct / game.round) * 100)}
          gameType="Game"
          className="mb-16"
        />

        <ButtonDisplay>
          <span className="text-green mr-1">{game.data.correct}</span>
          <span className="text-gray-700 mr-1">/</span>
          <span className="text-gray-400">
            {game.round > 0 ? game.round - 1 : 0}
          </span>
        </ButtonDisplay>
      </div>
    </Gesture>
  )
}

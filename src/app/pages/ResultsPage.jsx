export default function ResultsPage({ game }) {
  return (
    <h2>
      {game.data.correct}/{game.round > 0 ? game.round - 1 : 0}
    </h2>
  )
}

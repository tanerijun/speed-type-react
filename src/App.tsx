import GameOver from "./components/GameOver";
import Reset from "./components/Reset";
import Timer from "./components/Timer";
import Typing from "./components/Typing";
import Words from "./components/Words";
import WordsContainer from "./components/WordsContainer";
import useGame from "./hooks/useGame";
import { calculateAccuracy } from "./utils/helpers";

function App() {
  const { state, words, timeLeft, typed, errors, restartGame, totalTyped } =
    useGame();

  return (
    <>
      <Timer timeLeft={timeLeft} />
      <WordsContainer>
        <Words words={words} />
        <Typing className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>
      <Reset
        onRestart={restartGame}
        className={"mx-auto mt-10 text-slate-500"}
      />
      <GameOver
        state={state}
        className={"mt-10"}
        errors={errors}
        accuracy={calculateAccuracy(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

export default App;

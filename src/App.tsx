import GameOver from "./components/GameOver";
import Reset from "./components/Reset";
import Timer from "./components/Timer";
import Typing from "./components/Typing";
import Words from "./components/Words";
import WordsContainer from "./components/WordsContainer";
import useGame from "./hooks/useGame";

function App() {
  const { state, words } = useGame();

  return (
    <>
      <Timer timeLeft={30} />
      <WordsContainer>
        <Words words={words} />
        <Typing className="absolute inset-0" userInput={words} />
      </WordsContainer>
      <Reset onRestart={() => {}} className={"mx-auto mt-10 text-slate-500"} />
      <GameOver className={"mt-10"} errors={10} accuracy={100} total={200} />
    </>
  );
}

export default App;

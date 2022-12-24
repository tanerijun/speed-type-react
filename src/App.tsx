import { faker } from "@faker-js/faker";
import GameOver from "./components/GameOver";
import Reset from "./components/Reset";
import Timer from "./components/Timer";
import Words from "./components/Words";

const words = faker.random.words(20);

function App() {
  return (
    <>
      <Timer timeLeft={30} />
      <Words words={words} />
      <Reset onRestart={() => {}} className={"mx-auto mt-10 text-slate-500"} />
      <GameOver className={"mt-10"} errors={10} accuracy={100} total={200} />
    </>
  );
}

export default App;

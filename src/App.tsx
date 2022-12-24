import { faker } from "@faker-js/faker";
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
    </>
  );
}

export default App;

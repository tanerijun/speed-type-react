import Caret from "./Caret";
import cn from "classnames";

interface Props {
  userInput: string;
  className: string;
  words: string;
}

export default function Typing({ userInput, className, words }: Props) {
  const chars = userInput.split("");

  return (
    <div className={className}>
      {chars.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
}

function Character({ actual, expected }: { actual: string; expected: string }) {
  const isEqual = actual === expected;
  const isWhitespace = expected === " ";

  return (
    <span
      className={cn({
        "text-red-500": !isEqual && !isWhitespace,
        "text-primary-400": isEqual && !isWhitespace,
        "bg-red-500/50": !isEqual && isWhitespace,
      })}
    >
      {expected}
    </span>
  );
}

import Caret from "./Caret";

interface Props {
  userInput: string;
  className: string;
}

export default function Typing({ userInput, className }: Props) {
  const chars = userInput.split("");

  return (
    <div className={className}>
      {chars.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
      <Caret />
    </div>
  );
}

function Character({ char }: { char: string }) {
  return <span className="text-primary-400">{char}</span>;
}

export default function Timer({ timeLeft }: { timeLeft: number }) {
  return <span className="text-primary-400 font-medium">Time: {timeLeft}</span>;
}

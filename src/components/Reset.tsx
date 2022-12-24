import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

export default function Reset({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    btnRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
}

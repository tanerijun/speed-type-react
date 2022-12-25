import { motion } from "framer-motion";
import { State } from "../hooks/useGame";
import { formatPercent } from "../utils/helpers";

interface Props {
  state: State;
  errors: number;
  accuracy: number;
  total: number;
  className?: string;
}

export default function GameOver({
  state,
  errors,
  accuracy,
  total,
  className,
}: Props) {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    state === "end" && (
      <ul
        className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
      >
        <motion.li
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 0 }}
          className="text-xl font-semibold"
        >
          Game Over
        </motion.li>
        <motion.li
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 0.5 }}
        >
          Accuracy: {formatPercent(accuracy)}
        </motion.li>
        <motion.li
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 1 }}
          className="text-red-500"
        >
          Errors: {errors}
        </motion.li>
        <motion.li
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 1.5 }}
        >
          Typed: {total}
        </motion.li>
      </ul>
    )
  );
}

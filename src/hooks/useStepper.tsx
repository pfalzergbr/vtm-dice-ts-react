import { useState } from 'react';

export const useStepper = (
  initialCount: number,
  maxCount: number
): { count: number; increaseCount: () => void; decreaseCount: () => void } => {
  const [count, setCount] = useState(initialCount);

  const increaseCount = (): void => {
    if (count < maxCount) {
      setCount((prevState) => prevState + 1);
    } else {
      setCount(0);
    }
  };

  const decreaseCount = (): void => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    } else {
      setCount(maxCount);
    }
  };

  return { count, increaseCount, decreaseCount };
};

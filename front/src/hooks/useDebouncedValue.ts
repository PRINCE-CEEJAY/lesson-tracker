import { useEffect, useState } from 'react';

export const useDebouncedValue = (text: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timerFn = setTimeout(() => {
      setDebouncedValue(text);
    }, delay);
    return () => clearTimeout(timerFn);
  }, [text, delay]);

  return debouncedValue;
};

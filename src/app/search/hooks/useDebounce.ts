import { useState, useEffect } from 'react';

export const useDebounce = (
  value: string,
  delay: number
): [string, boolean] => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    // valueが空文字の場合はdebounceしないで即時反映
    if(value === '') {
      setDebouncedValue('');
      setIsDebouncing(false);
      return;
    }

    setIsDebouncing(true);

    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value, delay]);

  return [debouncedValue, isDebouncing];
};

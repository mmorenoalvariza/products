import { useState, useCallback } from 'react';

const initSubTotal = (key: string, defaultValue: number) => () => {
  const st = localStorage.getItem('subTotal');
  if (st) {
    return Number.parseInt(st);
  }
  return defaultValue;
};

export default function useStateWithStorage(
  key: string,
  defaultValue: number
): [number, (newSubTotal: number) => void] {
  const [subTotal, setSubTotal] = useState(initSubTotal(key, defaultValue));

  const handleSubTotal = useCallback(
    (subTotal: number) => {
      localStorage.setItem(key, JSON.stringify(subTotal));
      setSubTotal(subTotal);
    },
    [key, setSubTotal]
  );

  return [subTotal, handleSubTotal];
}

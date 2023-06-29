import { useState, useEffect } from 'react';

const initSubTotal = (key: string, defaultValue: number) => () => {
  const st = localStorage.getItem(key);
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

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(subTotal));
  }, [key, subTotal]);

  return [subTotal, setSubTotal];
}

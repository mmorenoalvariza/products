import { renderHook, act } from '@testing-library/react';
import useStateWithStorage from '../useStateWithStorage';

const KEY = 'subtotal';
const SUB_TOTAL = 0;

describe('useStateWithStorage', () => {
  it('inits with default value', () => {
    renderHook(() => useStateWithStorage(KEY, SUB_TOTAL));
    expect(Number.parseInt(localStorage.getItem(KEY) || '0')).toEqual(
      SUB_TOTAL
    );
  });

  it('should set the default value from localStorage if it exists', () => {
    localStorage.setItem(KEY, JSON.stringify(SUB_TOTAL));

    const { result } = renderHook(() => useStateWithStorage(KEY, 0));
    const [value] = result.current;
    expect(value).toEqual(SUB_TOTAL);

    expect(Number.parseInt(localStorage.getItem(KEY) || '0')).toEqual(
      SUB_TOTAL
    );
  });

  it('should update localStorage when state changes', () => {
    const { result } = renderHook(() => useStateWithStorage(KEY, SUB_TOTAL));

    const [, setValue] = result.current;

    const newValue = 20;
    act(() => {
      setValue(newValue);
    });

    // localStorage should have updated to new value
    expect(Number.parseInt(localStorage.getItem(KEY) || '0')).toEqual(newValue);
  });
});

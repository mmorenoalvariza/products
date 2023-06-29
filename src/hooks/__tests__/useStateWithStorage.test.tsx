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
    // set the localStorage to the test value
    localStorage.setItem(KEY, JSON.stringify(SUB_TOTAL));

    // initialise with an empty object
    const { result } = renderHook(() => useStateWithStorage(KEY, 0));

    // check that the value is what is stored in localStorage (and not an empty object)
    const [value] = result.current;
    expect(value).toEqual(SUB_TOTAL);

    // expect value to be taken from localStorage (rather than empty object)
    expect(Number.parseInt(localStorage.getItem(KEY) || '0')).toEqual(
      SUB_TOTAL
    );
  });

  it('should update localStorage when state changes', () => {
    // initialise with test object
    const { result } = renderHook(() => useStateWithStorage(KEY, SUB_TOTAL));

    const [, setValue] = result.current;

    // set the state to something new
    const newValue = 20;
    act(() => {
      setValue(newValue);
    });

    // localStorage should have updated to new value
    expect(Number.parseInt(localStorage.getItem(KEY) || '0')).toEqual(newValue);
  });
});

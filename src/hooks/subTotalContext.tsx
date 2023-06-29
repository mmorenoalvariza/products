import { createContext } from 'react';
/**
 * Creates a context to be able to access the subtotal from the header.
 */
const SubTotalContext = createContext({
  subTotal: 0,
  setSubTotal: (subTotal: number) => {},
});

export default SubTotalContext;

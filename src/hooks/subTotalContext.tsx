import { createContext } from 'react';

const SubTotalContext = createContext({
  subTotal: 0,
  setSubTotal: (subTotal: number) => {},
});

export default SubTotalContext;

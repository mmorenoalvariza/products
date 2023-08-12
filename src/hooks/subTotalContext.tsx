import { FunctionComponent, createContext, useEffect, useState } from 'react';
/**
 * Creates a context to be able to access the subtotal from the header.
 */
const SubTotalContext = createContext({
  subTotal: 0,
  setSubTotal: (subTotal: number) => {},
});

export default SubTotalContext;

const ShoppingCartContext = (props: React.PropsWithChildren<{}>) => {
  useEffect(() => {
    console.log('load');
    return () => {
      console.log('unload');
    };
  }, []);
  const [subTotal, setSubTotal] = useState<number>(0);
  console.log(subTotal);
  return (
    <SubTotalContext.Provider value={{ subTotal, setSubTotal }}>
      {props.children}
    </SubTotalContext.Provider>
  );
};

export { ShoppingCartContext };

import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import SubTotalContext from './hooks/subTotalContext';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

function App() {
  const [subTotal, setSubTotal] = useState(0);

  return (
    <SubTotalContext.Provider value={{ subTotal, setSubTotal }}>
      <Header />
      <Wrapper>
        <ProductList />
      </Wrapper>
    </SubTotalContext.Provider>
  );
}

export default App;

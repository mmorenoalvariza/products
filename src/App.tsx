import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ShoppingCartContext } from './hooks/subTotalContext';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <ProductList />
      </Wrapper>
    </>
  );
}

export default App;

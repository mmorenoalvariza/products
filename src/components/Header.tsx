import { useContext, useEffect } from 'react';

import useStateWithStorage from '../hooks/useStateWithStorage';
import SubTotalContext from '../hooks/subTotalContext';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: lightgray;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const SubtotalWrapper = styled.div`
  justify-self: center;
  align-self: center;
  padding-right: 30px;
`;

export function Header() {
  const { subTotal: contextSubTotal } = useContext(SubTotalContext);

  const [subTotal, setSubTotal] = useStateWithStorage(
    'subtotal',
    contextSubTotal
  );

  useEffect(() => {
    if (contextSubTotal > 0) {
      setSubTotal(contextSubTotal);
    }
  }, [contextSubTotal, setSubTotal]);

  return (
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <SubtotalWrapper>
        <h3 style={{ color: '#2d2d2d' }}>Subtotal: $ {subTotal}</h3>
      </SubtotalWrapper>
    </StyledHeader>
  );
}

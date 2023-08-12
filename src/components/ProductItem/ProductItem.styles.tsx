import styled from 'styled-components';

const Article = styled.article`
  border: 1px solid black;
  width: 100%;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 3px 3px 11px 1px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: 3px 3px 11px 1px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 3px 3px 11px 1px rgba(0, 0, 0, 0.28);
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
`;
const ProductLeftWrapper = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

const ProductRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 16px 0px;
  justify-content: space-between;
`;

const StyledP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export { Article, Image, ProductLeftWrapper, ProductRightWrapper, StyledP };

import { FC } from 'react';
import { Product, ProductVariant } from '../__generated__/graphql';
import styled from 'styled-components';
type ProductItemType = {
  productVariant: ProductVariant;
  handleAdd: (id: string) => void;
};

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

const ProductItem: FC<ProductItemType> = ({ productVariant, handleAdd }) => {
  return (
    <Article>
      <ProductLeftWrapper>
        {productVariant.product.featuredAsset && (
          <Image
            src={productVariant.product.featuredAsset.source}
            alt={`${productVariant.name} picture`}
          />
        )}
      </ProductLeftWrapper>
      <ProductRightWrapper>
        <h4>{productVariant.name}</h4>
        <p>{productVariant.product.description}</p>
        <p>Price: $ {productVariant.price}</p>
        <div>
          <button onClick={() => handleAdd(productVariant.id)}>Buy</button>
        </div>
      </ProductRightWrapper>
    </Article>
  );
};

export default ProductItem;

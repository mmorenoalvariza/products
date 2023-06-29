import { FC } from 'react';
import { ProductVariant } from '../__generated__/graphql';
import {
  Article,
  Image,
  ProductLeftWrapper,
  ProductRightWrapper,
} from './ProductItem.styles';
type ProductItemType = {
  productVariant: ProductVariant;
  handleAdd: (id: string) => void;
};

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

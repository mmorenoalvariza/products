import { useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import SubTotalContext from '../hooks/subTotalContext';
import ProductItem from './ProductItem/ProductItem';
import {
  Product,
  ProductList as ProductListType,
} from '../__generated__/graphql';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: auto;
  @media (min-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 2200px) {
    grid-template-columns: auto auto auto;
  }
  gap: 10px;
  width: 90%;
`;
/**
 *
 * @returns The list of products
 */
export function ProductList() {
  //Fetches the list of products
  const { data, loading } = useQuery<{ products: ProductListType }>(
    GET_PRODUCTS
  );

  const [mutateFunction] = useMutation<{
    addItemToOrder: { subTotal: number };
  }>(ADD_ITEM_TO_ORDER);
  const { setSubTotal } = useContext(SubTotalContext);

  /**
   * Adds an item to the order
   * @param id Product id
   */
  const handleAdd = async (id: string) => {
    const result = await mutateFunction({ variables: { id, quantity: 1 } });

    const addItemToOrder = result.data?.addItemToOrder;

    if (addItemToOrder) {
      setSubTotal(addItemToOrder.subTotal);
    }
  };

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  //Flatmaps all the variants of each product
  const items = (data.products.items as Product[]).flatMap((p) => p.variants);

  return (
    <Section>
      {items.map((p) => (
        <ProductItem key={p.id} productVariant={p} handleAdd={handleAdd} />
      ))}
    </Section>
  );
}

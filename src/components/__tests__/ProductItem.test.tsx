import userEvent from '@testing-library/user-event';
import { ProductVariant } from '../../__generated__/graphql';
import ProductItem from '../ProductItem';
import { render, screen, waitFor } from '@testing-library/react';

const productVariant = {
  id: 99,
  name: 'Laptop',
  price: 1000,
  product: {
    description: 'Product description',
    featuredAsset: {
      source: 'public/logo192.png',
    },
  },
} as unknown as ProductVariant;

describe('ProductItem', () => {
  const addHandler = jest.fn();
  render(
    <ProductItem handleAdd={addHandler} productVariant={productVariant} />
  );

  it('Renders all data points', async () => {
    expect(screen.getByText(productVariant.name)).toBeVisible();
    expect(screen.getByText(productVariant.product.description)).toBeVisible();
    expect(screen.getByText('Price: $ 1000')).toBeVisible();
    userEvent.click(screen.getByText('Buy'));
    await waitFor(() =>
      expect(addHandler).toHaveBeenCalledWith(productVariant.id)
    );
  });
});

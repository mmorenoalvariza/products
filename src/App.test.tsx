import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { ProductList } from './components/ProductList';
import { GET_PRODUCTS } from './graphql/queries';

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: {
          items: [
            {
              id: '1',
              variants: [
                {
                  id: '1',
                  name: 'Laptop',
                  price: 1000,
                  product: {
                    description: 'Product description',
                    id: '1',
                    featuredAsset: {
                      id: '1',
                      source: 'public/logo192.png',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    },
  },
];

describe('ProductList', () => {
  it('renders the product list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );
    expect(screen.getByText('Loading...')).toBeVisible();
    await waitFor(() => expect(screen.getByText('Laptop')).toBeVisible());
  });
});

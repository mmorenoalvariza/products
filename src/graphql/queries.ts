// Here we put queries. Remove next line
import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        id
        variants {
          id
          price
          name
          product {
            description
            id
            featuredAsset {
              id
              source
            }
          }
        }
      }
    }
  }
`;

export { GET_PRODUCTS };

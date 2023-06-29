// Here we put mutations. Remove next line
import { gql } from '@apollo/client';

// Define mutation
const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($id: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $id, quantity: $quantity) {
      __typename
      ... on Order {
        id
        subTotal
        lines {
          id
          unitPrice
          featuredAsset {
            id
            name
            type
          }
        }
      }
      ... on OrderModificationError {
        errorCode
        message
      }
      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }
      ... on NegativeQuantityError {
        errorCode
        message
      }
      ... on InsufficientStockError {
        errorCode
        message
        quantityAvailable
      }
    }
  }
`;

export { ADD_ITEM_TO_ORDER };

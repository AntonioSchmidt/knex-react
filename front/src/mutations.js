import { gql } from '@apollo/client';

export const SEARCH_PRODUCT_MUTATION = gql`
    mutation getProduct($productReference: String!) {
        searchProduct(productReference: $productReference) {
            id
            rank
            dimensions
            name
            category
            reference
        }
    }
`

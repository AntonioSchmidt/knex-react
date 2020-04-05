const Types = `
    type Product {
        id: ID!
        name: String!
        rank: String!
        reference: String!
        dimensions: String!
        category: String!
    }
`

const Mutation = `
    searchProduct(productReference: String!): Product 
`

module.exports = {
    Types,
    Mutation
}

const { createTestClient } = require('apollo-server-testing')
const { Model } =require('objection')
const gql = require('graphql-tag');
const server = require('../')
const { RESOURCE_NOT_FOUND_CODE } = require('../../../commons/exceptions')


const { mutate } = createTestClient(server);

const SEARCH_PRODUCT_MUTATION = gql`
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

describe('search Product mutation', () => {

    afterAll(() => {
        server.stop()
    })
    describe('when product exists', () => {

        const productReference = 'B002QYW8LW'

        it('should return the product', async () => {
            const { data } = await mutate({ mutation: SEARCH_PRODUCT_MUTATION, variables: { productReference }})
            expect(data.searchProduct).not.toBeNull()
        })

    })

    describe('when product does not exists', () => {
        const productReference = 'ABDBADBAAAA'
        it('should return a not found error', async (done) => {
            const result = await mutate({ mutation: SEARCH_PRODUCT_MUTATION, variables: { productReference }})
            expect(result.errors[0].message).toEqual(RESOURCE_NOT_FOUND_CODE)
            done()
        })
    })
})

afterAll(async(done) => {
    const knex = Model.knex()
    await knex.destroy()
    done()
})

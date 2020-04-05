import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client'
import { Container } from '@material-ui/core'
import { Column } from './shared/Flexbox'
import NoContent from './shared/NoContent'
import { ProductCard } from './Product/Card'
import { InputContainer, ButtonContainer } from './Product/styles'
import Button from './shared/Button'
import Input from './shared/Input'
import { SEARCH_PRODUCT_MUTATION } from "./mutations"

function App() {
    const [productReference, setProductReference] = useState('')
    const [searchProduct, { data, loading, error }] = useMutation(SEARCH_PRODUCT_MUTATION);
    const getProduct = useCallback(() => {
        searchProduct({ variables: { productReference }, errorPolicy: 'all'})
    }, [productReference, searchProduct])
    const buttonLabel = loading? 'Searching' : 'Search'
    return (
    <Container>
        <Column>
            <InputContainer>
                <Input value={productReference} onChange={(e) => setProductReference(e.target.value)} label="Search product" disabled={loading}/>
                <ButtonContainer>
                    <Button variant="contained" color="primary" disabled={loading || productReference.length === 0} onClick={getProduct}>{buttonLabel}</Button>
                </ButtonContainer>
            </InputContainer>
        </Column>
        {error && <NoContent/>}
        {data && data.searchProduct && <ProductCard product={data.searchProduct} />}
    </Container>
    );
}

export default App;

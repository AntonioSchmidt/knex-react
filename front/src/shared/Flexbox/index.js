import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex: ${({ flex }) => flex || 1};
    justify-content: center;
`

export const Column = styled(Flex)`
    flex-direction: column;
    flex-grow: 1;
`

export const Row = styled(Flex)`
    flex-direction: row;
`

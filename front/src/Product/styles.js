import { Typography } from '@material-ui/core'
import { Row, Column } from '../shared/Flexbox'
import styled from 'styled-components'

export const CardRow = styled(Row)`
    justify-content: flex-start;
    padding: 5px;
`

export const Label = styled(Typography).attrs(() => ({ variant: 'body1'}))``
export const Value = styled(Typography).attrs(() => ({ variant: 'body1'}))``
export const CardContainer = styled(Row)``
export const InputContainer = styled(Column)`
    width: 50%;
    margin: 50px;
    align-self:center;
`
export const ButtonContainer = styled(Column)`
    width: 200px;
    align-self: center;
    margin-top: 20px;
`

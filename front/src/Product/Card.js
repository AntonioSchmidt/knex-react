import React from "react";
import { Card, CardContent } from '@material-ui/core'
import { CardRow, Label, Value } from "./styles";
import { Column, Row } from "../shared/Flexbox";

export const ProductCard = ({ product }) =>
    <Row>
        <Card variant="outlined">
            <CardContent>
                <Column>
                    <CardRow>
                        Name: {product.name}
                    </CardRow>
                    <CardRow>
                        Rank: {product.rank}
                    </CardRow>
                    <CardRow>
                        Reference: {product.reference}
                    </CardRow>
                    <CardRow>
                        <Label>Dimensions:</Label> <Value>{product.dimensions}</Value>
                    </CardRow>
                    <CardRow>
                        Category: {product.category}
                    </CardRow>
                </Column>
            </CardContent>
        </Card>
    </Row>

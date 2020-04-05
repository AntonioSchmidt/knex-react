import React from 'react'
import { Column } from "../Flexbox";

const NoContent = () =>
    <Column>
        <div>
            <iframe title="NotFound" src="https://giphy.com/embed/RjoLWhQBFEcHS" width="100%" height="100%"
                    frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
        <p><a href="https://giphy.com/gifs/RjoLWhQBFEcHS">via GIPHY</a></p>
    </Column>

export default NoContent

import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
    inverted?: boolean;
    content?: string;
}

export default ({inverted = true, content = 'Loading...'}) => {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}
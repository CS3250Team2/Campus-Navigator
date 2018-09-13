import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
    <Aux>
        <Toolbar />
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;
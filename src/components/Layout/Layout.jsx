
import React from 'react';
import Aux from '../../hoc/Aux';
import NavBar from '../Navigation/NavBar'
import './Layout.css'

const layout = (props) => (
    <Aux>
        <NavBar />
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;

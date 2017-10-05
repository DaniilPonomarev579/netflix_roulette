import React from 'react';
import {Link} from 'react-router-dom';

import './footer.less';

export class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <Link to='/' className='footer__title'>netflixroulette</Link>
            </div>
        );
    }
}
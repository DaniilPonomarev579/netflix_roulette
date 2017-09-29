import * as React from 'react';

import './not-found.less';

export class NotFound extends React.Component {

    render() {
        return (
            <span className='error'>Uuups, requested page does not exist</span>
        );
    }
}
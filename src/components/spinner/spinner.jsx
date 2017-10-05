import React from 'react';

import './spinner.less';

export class Spinner extends React.Component {
    render() {
        return (
            <div className='spinner'>
                <div className='spinner__bounce spinner__bounce--1'></div>
                <div className='spinner__bounce spinner__bounce--2'></div>
                <div className='spinner__bounce spinner__bounce--3'></div>
            </div>
        );
    };
}
import React from 'react';
import {Link} from 'react-router-dom'
import {Footer} from './footer/footer';
import '../common/reset.less';
import '../common/styles.less';

export class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
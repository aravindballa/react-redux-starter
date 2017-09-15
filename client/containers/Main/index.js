import React from 'react';
import { Link } from 'react-router';

import Home from '../Home';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">React Redux Starter</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
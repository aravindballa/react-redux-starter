import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">HELLO HOME</Link>
                </h1>
            </div>
        )
    }
});

export default Home;
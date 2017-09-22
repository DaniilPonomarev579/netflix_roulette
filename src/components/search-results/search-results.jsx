import React from 'react';

class searchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: true,
            c: 1
        };
    }

    toggleSmth() {
        this.setState((prevState) => ({
            liked: !prevState.liked,
            c: prevState.c++
        }));
    }

    componentDidMount() {
        this.c++;
    }

    componentWillUnmount() {
        this.c++;
    }

    render() {
        let buttonClass = this.state.liked ? 'active' : '';

        return (
            <div className='search-results'>
                <div className="search-results__top-panel">

                </div>
            </div>
        );
    };
}

export default searchResults;
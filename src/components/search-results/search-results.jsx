import React from 'react';

class searchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                {
                    cover: 'cover1',
                    title: 'title1',
                    year: 'year1',
                    genre: 'genre1'
                },
                {
                    cover: 'cover2',
                    title: 'title2',
                    year: 'year2',
                    genre: 'genre2'
                }
            ]
        };
    }

    toggleSmth() {
        this.setState((prevState) => ({
            results: prevState.results.push({
                cover: 'cover3',
                title: 'title3',
                year: 'year3',
                genre: 'genre3'
            })
        }));
    }

    componentDidMount() {
        this.results[0].title = 'titleeeee';
    }

    componentWillUnmount() {
        this.results[0].title = 'title';
    }

    render() {
        // let buttonClass = this.state.liked ? 'active' : '';

        return (
            <div className='search-results'>
                <div className="search-results__top-panel">
                    {this.state.results.length === 0 ? (null):(this.state.results.length)}
                </div>
            </div>
        );
    };
}

export default searchResults;
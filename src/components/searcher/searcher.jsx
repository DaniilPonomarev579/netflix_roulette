import React from 'react';

export default class Searcher extends React.Component {
    render() {
        return (
            <form className={'search-panel ' + this.props.classElement}>
                <h2 className='search-panel__title'>find your movie</h2>
                <div className="search-panel__input-wrapper">
                    <input type='text' className='search-panel__input' name='search-panel__input'/>
                    <button type='submit' className='search-panel__input-button'>⤶</button>
                </div>
                <span className='search-panel__filter-title'>search by</span>
                <input type='radio'
                       className='search-panel__filter-input radiobutton radiobutton--active'
                       name='search-panel__filter-input'
                       id='filter-title'
                       defaultChecked='true'/>
                <label className='search-panel__filter-label' htmlFor='filter-title'>
                    title
                </label>
                <input type='radio'
                       className='search-panel__filter-input radiobutton'
                       name='search-panel__filter-input'
                       id='filter-director'/>
                <label className='search-panel__filter-label' htmlFor="filter-director">
                    director
                </label>

                <button type='submit' className='search-panel__search-button button'>search</button>
            </form>
        );
    }
}
// const Searcher = () => (
//     <div className={'search-panel '}>
//         <h1 className='search-panel__title'>find your movie</h1>
//     </div>
// );
//
// export default Searcher;
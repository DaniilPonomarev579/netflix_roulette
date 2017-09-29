import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {Router, Route,} from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import ReactRouter from 'react-router';

import {App} from './components/app';
import {MainPage} from './components/main-page/main-page';
import {FilmPage} from './components/film-page/film-page';
import {SearchResults} from '../src/components/search-results/search-results';
import { NotFound } from './components/not-found/not-found';

window.currentFilms = [
    {
        show_id     : '70299043',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70299044',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70299045',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70299046',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70299047',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70299048',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70299049',
        show_title  : 'Attack on Titan',
        release_year: '2013',
        category    : 'Anime',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    },
    {
        show_id     : '70153391',
        show_title  : 'The Boondocks',
        release_year: '2005',
        category    : 'Comedies',
        poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
        rating      : '4.6',
        show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
        director    : 'Quentin Tarantino',
        summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
        runtime     : '120 min'
    }
];

// const browserHistory = createHistory();
{/*<Router history={browserHistory}>*/}

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/film/:film" component={FilmPage}/>
                <Route path="/search/:query" component={SearchResults}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </App>
    </Router>
), document.querySelector('#root'));

// export default () => (
//     <Router history={browserHistory}>
//         <div>
//             <Route path='/' component={MainPage}/>
//             <Route path='/Search' component={MainPage}/>
//         </div>
//     </Router>
// );
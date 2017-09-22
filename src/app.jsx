import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
// import Express from 'express';

// ReactDOM.render(
//     <AppRouter/>,
//     document.querySelector('#root')
// );

const render = (Component) =>
    ReactDOM.render(
        <Component/>,
        document.querySelector('#root')
    );

render(AppRouter);

// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         require('./routes');
//         render(AppRouter);
//     });
// }
import React from 'react';
import ReactDOM from 'react-dom';
import tasks from './reducers';
import App from './components/App';
import initialData from '../data';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

/*const App = () => {
    return <div> Hi!</div>
};*/

//ReactDOM.render(<App />, document.querySelector('#app'));

const store = createStore(
    tasks, // reducers
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app'),
);

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import '!style!css!./styles/index.css';
import store from './store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

// views
import App from './views/App/App.jsx';
import Movies from './views/Movies/Movies.jsx';
import AddMovie from './views/AddMovie/AddMovie.jsx';

const history = syncHistoryWithStore(hashHistory, store);

window.API_ENDPOINT = 'http://localhost:3001/api/movies';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Movies} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies/:id" component={Movies} />
        <Route path="/add-movie" component={AddMovie} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

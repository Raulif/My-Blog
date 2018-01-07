import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const router = (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/posts/new" component={PostsNew}/>
                  <Route path="/posts/:id" component={PostsShow} />
                  <Route path="/" component={App}/>
              </Switch>
          </div>
      </BrowserRouter>
    </Provider>
)

ReactDOM.render(
  router,
  document.querySelector('.container'));

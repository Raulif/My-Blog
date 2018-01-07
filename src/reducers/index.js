import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './reducer_posts';
import selectedPostIds from './reducer_selected_posts';

const rootReducer = combineReducers({
  posts,
  selectedPostsIds,
  form: formReducer
});

export default rootReducer;

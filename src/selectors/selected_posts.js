// Reselect selector
// Takes a list of posts and postIds and picks out the selected Posts

import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
// for this calculation

const postsSelector = state => state.posts
const selectedPostsSelector = state => state.selectedPostsIds

const getPosts = (posts, selectedPostsIds) => {
    // lodash filter() works like the js filter method for arrays
    // We pass the array of posts and on each post, we check if its id matches with
    // those contained on the array selectedPostsIds
    const selectedPosts = _.filter(
        posts,
        post => _.contains(selectedPostsIds, post.id)
    );

    // at the end we return the filtered selectedPosts
    return selectedPosts
}

export default createSelector(
    // first we pass a number of 'selecting state functions':
    postsSelector, // picks off a piece of state
    selectedPostsSelector, // picks off a piece of state
    // last argument is *always* the function that has our select logic
    getPosts
)

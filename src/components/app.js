import React, { Component } from 'react';
import Posts from './posts_list';
import SelectedPosts from './selected_posts_list';

export default () => {
    return(
        <div>
            <h4>Selected Posts</h4>
            <SelectedPosts />
            <hr />
            <h4>Posts</h4>
            <Posts />
        </div>
    )
}

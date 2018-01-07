import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom';
import SelectedPostsList from './selected_posts_list';


class PostsList extends Component {

    componentDidMount() {
        // We fetch the global object of posts on mount.
        this.props.fetchPosts();
    }

    handlePostSelect({ id }, event) {
        // action creators for selecting and deselecting the post are fired when
        // the content of the checkbox input changes (...when it is clicked)
        const { selectPost, deselectPost } = this.props;
        event.target.checked ? selectPost(id) : deselectPost(id);
    }

    renderPosts(post) {
        // checked is active if the id of the post is contained in the array of
        // selected posts
        return(
            <li className="list-group-item" key={post.id}>
                <input
                    type="checkbox"
                    checked={_.contains(this.props.selectedPostsIds, post.id)}
                    onChange={this.handlePostSelect.bind(this, post)}
                />
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        )
    }


    render() {
        // we map the object of posts with lodash-map. The renderPosts function
        // is run on each element (post) of the object. Each post is passed to
        // the function.
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add post
                    </Link>
                </div>
                <ul className="list-group">
                    {_.map(this.props.posts, this.renderPosts.bind(this))}
                </ul>
            </div>
        )
    }
}

export default connect(({posts, selectedPostsIds}) => ({posts, selectedPostsIds}), actions)(PostsList);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom';
import SelectedPostsList from './selected_posts_list';


class PostsList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts(post) {
            return(
                <li className="list-group-item" key={post.id}>
                    <input
                        type="checkbox"
                        checked={_.contains(this.props.selectedPostIds, post.id)}
                        onChange={this.handlePostSelect.bind(this, post)}
                    />
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            )
        })
    }

    handlePostSelect({ id }, event) {
        const { selectPost, deselectPost } = this.props;
        event.target.checked ? selectPost(id) : deselectPost(id)
    }



    render() {
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

export default connect(({posts, selectedPostIds}) => ({posts, selectedPostIds}), actions)(PostsList);

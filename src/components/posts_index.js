import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { fetchPosts } from '../actions/actions';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {

    renderPosts() {
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            )
        })
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

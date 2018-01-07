import React from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from '../selectors/Selected_posts';

const SelectedPostsList = (props) => {
    // Here props is the array of selected posts we get from the selector. It gets passed
    // as props, just like the Redux state.
    return(
        <ul className="list-group">
            {
                props.posts.map(post => {
                    return <li className="list-group-item" key={post.id}>{post.title}</li>
                })
            }
        </ul>
    )
}

const mapStateToProps = state => {
    //here is where we pass the state to the selector
    return {
        posts: SelectedPostsSelector(state)
    }
}

export default connect(mapStateToProps)(SelectedPosts)

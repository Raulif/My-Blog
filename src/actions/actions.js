import axios from 'axios';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=raulif123';
import {
    FETCH_POST,
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST,
    SELECT_POST,
    DESELECT_POST
} from './types';

// Actions
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback())

    return {
        type: CREATE_POST,
        payload: request
    }

}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

    return {
        type: FETCH_POST,
        payload: request
    }

}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback())

    return {
        type: DELETE_POST,
        payload: id
    }
}

export function selectPost(id) {
    return {
        type: SELECT_POST,
        payload: id
    }
}

export function deselectPost(id){
    return {
        type: DESELECT_POST,
        payload: id
    }
}

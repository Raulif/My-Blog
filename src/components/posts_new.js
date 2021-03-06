import React, { Component } from 'react';
import  { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push("/")
        });
    }

    render() {
        const { handleSubmit } = this.props

        return(
            <div>
                <h3>New post!</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>

                </form>
            </div>

        )
    }
}

function validate(values) {
    const errors = {};

    // "name" field of Field component links with the error property. They must match.

    if(!values.title) {
        errors.title = "Enter a title"
    }
    if(!values.categories) {
        errors.categories = "Enter a category"
    }
    if(!values.content) {
        errors.content = "Enter content"
    }

    return errors;
}

// If errors is empty, form is fine to submit.
// If errors has any property, form is not fine to submit
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
)

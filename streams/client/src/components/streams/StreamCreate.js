import React from 'react'
import {clearSubmitErrors, Field, formValues, reduxForm} from 'redux-form';

class  StreamCreate extends React.Component {

    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header"> {error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        console.log(meta)

        return (
        <div className="field">
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
        </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues)
    }

    render(){
        
        return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description"/> 
            <button className="ui button primary" >Submit</button>

        </form>)
    }
}

const validate = (formValues) => {
    const error = { }

    if (!formValues.title) {
        error.title = 'Enter title!';
    }

    if (!formValues.description) {
        error.description = 'Enter description!';
    }

    return error;
}


export default reduxForm({
    form: 'streamCreate',
    validate,
})(StreamCreate);
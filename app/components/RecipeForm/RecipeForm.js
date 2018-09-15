import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../LoadingIndicator';
import './style.scss';

export default class RecipeForm extends React.PureComponent {
  submitForm = (ev) => {
    ev.preventDefault();

    const data = {
      title: this.title.value,
      content: this.content.value,
    };
    if (this.props.mode === 'edit') {
      data.id = this.props.recipe.id;
    }

    this.props.saveRecipe(data);
  }

  componentDidUpdate = (prevProps) => {
    if (
      prevProps.loading &&
      !this.props.loading &&
      !this.props.error &&
      this.props.closeForm
    ) {
      this.props.closeForm();
    }
  }

  render() {
    const {
      loading, error, mode, recipe,
    } = this.props;

    return (
      <div className="recipe-form">
        { loading && <LoadingIndicator /> }
        { error && <p>{ error.message }</p> }
        { !loading &&
          <fieldset className="form-wrapper">
            <legend>{ mode === 'new' ? 'New' : 'Edit' }</legend>
            <form onSubmit={ this.submitForm }>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  ref={ title => this.title = title }
                  defaultValue={ recipe ? recipe.title : '' }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  className="form-control"
                  ref={ content => this.content = content }
                  defaultValue={ recipe ? recipe.content : '' }
                  required
                ></textarea>
              </div>
              <div className="form-group actions">
                <button className="button action-button">Save</button>
              </div>
            </form>
          </fieldset>
        }
      </div>
    );
  }
};

RecipeForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  saveRecipe: PropTypes.func.isRequired,
  mode: PropTypes.string,
  recipe: PropTypes.object,
  closeForm: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../LoadingIndicator';
import './style.scss';

export default class RecipeForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: props.recipe ? props.recipe.id : undefined,
      title: props.recipe ? props.recipe.title : '',
      content: props.recipe ? props.recipe.content : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleChange(ev) {
    ev.preventDefault();

    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.saveRecipe(this.state);

    // clear the form after creating a new recipe
    if (this.props.mode === 'new') {
      this.setState({
        id: undefined,
        title: '',
        content: '',
      });
    }
  }

  handleBack(ev) {
    ev.preventDefault();

    this.props.history.goBack();
  }

  render() {
    const {
      loading, mode,
    } = this.props;

    return (
      <div className="recipe-form">
        { loading && <LoadingIndicator /> }
        <form onSubmit={this.handleSubmit}>
          <fieldset className="form-wrapper">
            <legend>{ mode === 'new' ? 'New' : 'Edit' }</legend>
            <div className="form-group">
              <label htmlFor="title">
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
                Title
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="content">
                <textarea
                  id="content"
                  name="content"
                  className="form-control"
                  value={this.state.content}
                  onChange={this.handleChange}
                  required
                >
                </textarea>
                Content
              </label>
            </div>
            <div className="form-group actions">
              {
                mode === 'edit' &&
                <button className="button action-button" onClick={this.handleBack}>Back</button>
              }
              <button className="button action-button">Save</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

RecipeForm.propTypes = {
  loading: PropTypes.bool,
  saveRecipe: PropTypes.func.isRequired,
  mode: PropTypes.string,
  recipe: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  history: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LoadingIndicator from '../../components/LoadingIndicator';

export default class RecipeCard extends React.PureComponent {
  submitForm = (ev) => {
    ev.preventDefault();

    const data = {
      title: this.title.value,
      content: this.content.value,
    };
    this.props.saveRecipe(data);
  };
  
  render() {
    const {
      loading,
    } = this.props;

    return (
      <div className="new-recipe-form">
        { loading && <LoadingIndicator /> }
        { !loading &&
          <fieldset className="form-wrapper">
            <legend>Create New?</legend>
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  ref={title => this.title = title}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  className="form-control"
                  ref={content => this.content = content}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button className="button">Save</button>
              </div>
            </form>
          </fieldset>
        }
      </div>
    );
  }
};

RecipeCard.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  saveRecipe: PropTypes.func.isRequired,
};

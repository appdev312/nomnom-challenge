import PropTypes from 'prop-types';
import React from 'react';

import RecipeCard from '../../components/RecipeCard';
import LoadingIndicator from '../../components/LoadingIndicator';

import './style.scss';

export default class RecipeDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.onBack = this.onBack.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.props.loadRecipeDetail(this.props.match.params.id);
  }

  onBack() {
    this.props.history.push('/');
  }

  onDelete() {
    this.props.deleteRecipe(this.props.recipe.id);
  }

  render() {
    const {
      loading, error, recipe,
    } = this.props;

    return (
      <div className="container">
        { loading && <LoadingIndicator /> }
        <div className="recipe-detail">
          { recipe && <RecipeCard item={recipe} /> }
          <div className="actions">
            <button className="button action-button" onClick={this.onBack}>Back</button>
            <button className="button action-button">Edit</button>
            <button className="button action-button" onClick={this.onDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

RecipeDetail.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  recipe: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadRecipeDetail: PropTypes.func,
  deleteRecipe: PropTypes.func,
};

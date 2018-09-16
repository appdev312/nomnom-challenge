import PropTypes from 'prop-types';
import React from 'react';

import List from '../../components/List';
import LoadingIndicator from '../../components/LoadingIndicator';
import RecipeForm from '../RecipeForm';
import RecipeCard from '../../components/RecipeCard';

import './style.scss';

export default class RecipeList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadRecipeList();
  }

  render() {
    const {
      loading, recipeList,
    } = this.props;

    return (
      <div className="container">
        { loading && <LoadingIndicator /> }
        <RecipeForm mode="new" />
        {
          recipeList &&
          <div className="recipe-list">
            <List
              items={recipeList}
              component={RecipeCard}
            />
          </div>
        }
      </div>
    );
  }
}

RecipeList.propTypes = {
  loading: PropTypes.bool,
  recipeList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadRecipeList: PropTypes.func,
};

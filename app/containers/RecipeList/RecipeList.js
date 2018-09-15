import PropTypes from 'prop-types';
import React from 'react';

import List from '../../components/List';
import LoadingIndicator from '../../components/LoadingIndicator';
import NewRecipeForm from '../NewRecipeForm/Loadable';
import RecipeCard from '../../components/RecipeCard';

import './style.scss';

export default class RecipeList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadRecipeList();
  }

  render() {
    const {
      loading, error, recipeList,
    } = this.props;

    return (
      <div className="container">
        { loading && <LoadingIndicator /> }
        <NewRecipeForm />
        {
          recipeList &&
          <div className="recipe-list">
            <div className="recipe-list__top">
            </div>
            <div className="recipe-list__content">
              <List
                items={recipeList}
                component={RecipeCard}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

RecipeList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  recipeList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadRecipeList: PropTypes.func,
};

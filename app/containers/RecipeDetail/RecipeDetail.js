import PropTypes from 'prop-types';
import React from 'react';

import RecipeCard from '../../components/RecipeCard';
import RecipeForm from '../RecipeForm';
import LoadingIndicator from '../../components/LoadingIndicator';

import './style.scss';

export default class RecipeDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.onBack = this.onBack.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);

    this.state = {
      isEditing: false,
    };
  }

  componentDidMount() {
    this.props.loadRecipeDetail(this.props.match.params.id);
  }

  onBack() {
    this.props.history.push('/');
  }

  onDelete() {
    this.props.deleteRecipe(this.props.currentRecipe.id);
  }

  onEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    const {
      loading, error, currentRecipe,
    } = this.props;

    return (
      <div className="container">
        { loading && <LoadingIndicator /> }
        {
          this.state.isEditing &&
          <RecipeForm mode="edit" recipe={ currentRecipe } closeForm={ this.onEdit } />
        }
        { 
          !this.state.isEditing &&
          <div className="recipe-detail">
            { currentRecipe && <RecipeCard item={ currentRecipe } /> }
            <div className="actions">
              <button className="button action-button" onClick={ this.onBack }>Back</button>
              <button className="button action-button" onClick={ this.onEdit }>Edit</button>
              <button className="button action-button" onClick={ this.onDelete }>Delete</button>
            </div>
          </div>
        }
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
  currentRecipe: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadRecipeDetail: PropTypes.func,
  deleteRecipe: PropTypes.func,
};

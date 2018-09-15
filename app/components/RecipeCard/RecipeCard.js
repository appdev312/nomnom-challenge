import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './style.scss';

const RecipeCard = (props) => (
  <LazyLoad height="200">
    <div className="recipe-card">
      <Link className="link" to={`/${props.item.id}`}>
        <h3 className="recipe-card__title">{props.item.title}</h3>
      </Link>
      <p className="recipe-card__content">{props.item.content}</p>
    </div>
  </LazyLoad>
);

RecipeCard.propTypes = {
  item: PropTypes.any,
};

export default RecipeCard;

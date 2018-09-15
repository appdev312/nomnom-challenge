import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = (props) => {
  const ComponentToRender = props.component;
  const content = props.items
    .map((item, index) => (
      <ComponentToRender key={index} item={item} />
    ));

  return (
    <div className="list-wrapper">
      {content}
    </div>
  );
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;

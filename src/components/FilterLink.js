import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../modules/Button';
import { setVisibilityFilter } from '../redux/actions/todo';
const Link = ({ active, children, onClick, bgColor }) => {
  if (active) {
    return <Button title={children} bgColor="#303843" />;
  }
  return <Button title={children} onClick={onClick} bgColor={bgColor} />;
};
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;

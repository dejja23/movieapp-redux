import React from 'react';
import { connect } from 'react-redux';
import { searchbystar, newrating, editrating } from '../js/actions/action';

const Star = props => {
  let star = [];
  for (let i = 0; i < 5; i++) {
    i < props.rating ? star.push('★') : star.push('☆');
  }

  return (
    <div>
      {star.map((e, i) => (
        <span
          key={i}
          onClick={() => {
            props.search && props.searchbystar(i);
            props.newnew && props.newrating(i);
            props.edit && props.editrating(i);
          }}
        >
          {e}
        </span>
      ))}
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    // searchbystar: index => dispatch({ type: 'SEARCHBYSTAR', index }),
    searchbystar: index => dispatch(searchbystar(index)),
    // newrating: index => dispatch({ type: 'NEWERATING', rating: index + 1 })
    newrating: index => dispatch(newrating(index)),
    editrating: index => dispatch(editrating(index))
  };
};

export default connect(null, mapDispatchToProps)(Star);

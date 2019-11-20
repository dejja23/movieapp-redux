import React from 'react';
import Star from './star';
import { Link } from 'react-router-dom';
import './moviedescrip.css';
import { connect } from 'react-redux';
import { pathBack } from '../js/actions/action';

const MovieDescrip = props => {
  return (
    <div className="d-flex justify-content-center m-1 flex-wrap">
      <img className=" poster shadow " src={props.movie.img} alt="..." />
      <div className="d-flex flex-column justify-content-start w-50">
        <h2 className="title">{props.movie.title}</h2>
        <span className="star">
          <Star rating={props.movie.rating} />
        </span>
        <br />
        <br />
        <p className="descrip align-self-center">{props.movie.descrip}</p>
        <button
          className="btn btn-outline-danger btn-back align-self-end"
          onClick={() => props.pathBack()}
        >
          <Link to={{ pathname: '/' }}>Back</Link>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    pathBack: () => dispatch(pathBack())
  };
};

export default connect(null, mapDispatchToProps)(MovieDescrip);

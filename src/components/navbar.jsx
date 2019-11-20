import React, { Component } from 'react';
import Star from './star';
import './navbar.css';
import { connect } from 'react-redux';
import {
  searchbyname,
  searchbynameclick,
  newmovienamehandler,
  newmovieimghandler,
  newmoviedescriphandler,
  addmovie,
  closemodal
} from '../js/actions/action';
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar w-100 navbar-light bg-dark">
        <div className="d-flex align-items-center">
          <input
            className=" p-2  border border-danger rounded bg-light search-bar"
            type="text"
            placeholder="Enter movie name"
            onChange={event => this.props.searchbyname(event)}
            value={this.props.name}
          />
          <button
            className="btn btn-outline-danger pl-3 pr-3 p-2 m-2 mr-5 btn-gradient"
            onClick={this.props.searchbynameclick}
          >
            Search
          </button>
          <div className="star m-2" style={{ cursor: 'pointer' }}>
            <Star rating={this.props.rating} search={true} />
          </div>
        </div>
        <button
          className="btn btn-outline-danger  font-weight-bold btn-gradient"
          data-toggle="modal"
          data-target="#addmoviemodal"
        >
          +
        </button>
        <div
          className="modal fade"
          id="addmoviemodal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title modal-text"
                  id="exampleModalCenterTitle"
                >
                  Add new movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ outline: 'none' }}
                  onClick={this.props.closemodal}
                >
                  <span className="modal-text" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <h5 className="mt-2 modal-text">Movie name</h5>
                <input
                  type="text"
                  className="w-100 p-2 mt-2 border-danger rounded"
                  style={{ outline: 'none' }}
                  placeholder="Enter name"
                  onChange={event => this.props.newmovienamehandler(event)}
                  value={this.props.newmoviename}
                />
                <h5 className="mt-2 modal-text">Movie image</h5>
                <input
                  type="text"
                  className="w-100 p-2 mt-2 border-danger rounded"
                  style={{ outline: 'none' }}
                  placeholder="Enter image url"
                  onChange={event => this.props.newmovieimghandler(event)}
                  value={this.props.newmovieimg}
                />
                <h5 className="mt-2 modal-text">Movie Rating</h5>
                <div
                  className="star d-flex justify-content-center"
                  style={{ cursor: 'pointer' }}
                >
                  <Star rating={this.props.newmovierating} newnew={true} />
                </div>
                <h5 className="mt-2 modal-text">Movie Discreption</h5>
                <textarea
                  className="w-100 p-2 mt-2 border-danger rounded"
                  style={{ height: '125px' }}
                  onChange={event => this.props.newmoviedescriphandler(event)}
                  value={this.props.newmoviedescrip}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger col-2 font-weight-bold btn-gradient"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.addmovie}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies,
    rating: state.rating,
    name: state.moviename,
    newmoviename: state.newmoviename,
    newmovieimg: state.newmovieimg,
    newmovierating: state.newmovierating,
    newmoviedescrip: state.newmoviedescrip
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // searchbyname: event =>
    //   dispatch({ type: 'SEARCHBYNAME', name: event.target.value }),
    searchbyname: event => dispatch(searchbyname(event)),
    // searchbynameclick: () => dispatch({ type: 'SEARCHBYNAMECLICK' }),
    searchbynameclick: () => dispatch(searchbynameclick()),

    // newmovienamehandler: event =>
    //   dispatch({ type: 'NEWMOVIENAME', name: event.target.value }),
    newmovienamehandler: event => dispatch(newmovienamehandler(event)),
    // newmovieimghandler: event =>
    //   dispatch({ type: 'NEWMOVIEIMG', img: event.target.value }),
    newmovieimghandler: event => dispatch(newmovieimghandler(event)),
    // addmovie: () => dispatch({ type: 'ADDMOVIE' }),
    newmoviedescriphandler: event => dispatch(newmoviedescriphandler(event)),
    addmovie: () => dispatch(addmovie()),
    // closemodal: () => dispatch({ type: 'CLOSEMODAL' })
    closemodal: () => dispatch(closemodal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

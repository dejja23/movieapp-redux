import React, { Component } from 'react';
import Star from './star';
import './moviecard.css';
import { connect } from 'react-redux';
import {
  removeHandler,
  editHandler,
  saveedit,
  pathHandler,
  pathBack
} from '../js/actions/action';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  state = {
    editmoviename: '',
    editmovieimg: '',
    editmoviedescrip: ''
  };
  render() {
    return (
      <div className="container w-75 m-auto">
        <div className="row justify-content-center">
          {this.props.movies.map((e, i) => (
            <div key={i} className="card m-3 p-0 col-auto shadow">
              <div className="card-header bg-transparent p-0">
                <img
                  src={e.img}
                  style={{ width: '275px', height: '350px' }}
                  alt="..."
                />
              </div>
              <div className="grad">
                <div className="card-body d-flex flex-column align-items-center">
                  <h5>{e.title}</h5>
                  <span className="star">
                    <Star rating={e.rating} />
                  </span>
                  <span
                    className="see-more"
                    onClick={() => this.props.pathHandler(i)}
                  >
                    <Link to={{ pathname: '/' + e.title.replace(/ /g, '_') }}>
                      See more
                    </Link>
                  </span>
                </div>
                <div className="card-footer container">
                  <div className="row justify-content-between">
                    <button
                      className="btn btn-outline-danger m-2 col-4 btn-gradient"
                      onClick={() => {
                        this.props.removeHandler(i);
                        this.props.pathBack();
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-outline-danger m-2 col-4 btn-gradient"
                      data-toggle="modal"
                      data-target="#editmoviemodal"
                      onClick={() => {
                        this.props.editHandler(i);
                        this.setState({
                          editmoviename: this.props.movies[i].title,
                          editmovieimg: this.props.movies[i].img,
                          editmoviedescrip: this.props.movies[i].descrip
                        });
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="modal fade"
          id="editmoviemodal"
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
                  Edit movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ outline: 'none' }}
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
                  value={this.state.editmoviename}
                  onChange={event =>
                    this.setState({ editmoviename: event.target.value })
                  }
                />
                <h5 className="mt-2 modal-text">Movie image</h5>
                <input
                  type="text"
                  className="w-100 p-2 mt-2 border-danger rounded"
                  style={{ outline: 'none' }}
                  placeholder="Enter image url"
                  value={this.state.editmovieimg}
                  onChange={event =>
                    this.setState({ editmovieimg: event.target.value })
                  }
                />
                <h5 className="mt-2 modal-text">Movie Rating</h5>
                <div
                  className="star d-flex justify-content-center"
                  style={{ cursor: 'pointer' }}
                >
                  <Star rating={this.props.editmovierating} edit={true} />
                </div>
                <h5 className="mt-2 modal-text">Movie Discreption</h5>
                <textarea
                  className="w-100 p-2 mt-2 border-danger rounded"
                  style={{ height: '125px' }}
                  value={this.state.editmoviedescrip}
                  onChange={event =>
                    this.setState({ editmoviedescrip: event.target.value })
                  }
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger col-2 font-weight-bold btn-gradient"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    this.props.saveedit(
                      this.state.editmoviename,
                      this.state.editmovieimg,
                      this.state.editmoviedescrip
                    );
                    this.setState({
                      editmoviename: '',
                      editmovieimg: '',
                      editmoviedescrip: ''
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.displayedmovies,
    editmovierating: state.editmovierating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeHandler: index => dispatch(removeHandler(index)),
    editHandler: index => dispatch(editHandler(index)),
    saveedit: (name, img, descrip) => dispatch(saveedit(name, img, descrip)),
    pathHandler: index => dispatch(pathHandler(index)),
    pathBack: () => dispatch(pathBack())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

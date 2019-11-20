import '../Constants/action-types';
import {
  SEARCHBYSTAR,
  SEARCHBYNAME,
  SEARCHBYNAMECLICK,
  NEWMOVIENAME,
  NEWMOVIEIMG,
  NEWERATING,
  NEWMOVIEDESCRIP,
  ADDMOVIE,
  CLOSEMODAL,
  REMOVEHANDLER,
  EDITHANDLER,
  EDITRATING,
  SAVEEDIT,
  PATHHANDLER,
  PATHBACK
} from '../Constants/action-types';

import movielist from '../Constants/data';

const inialState = {
  movies: movielist,
  displayedmovies: movielist,
  rating: 0,
  moviename: '',
  newmoviename: '',
  newmovieimg: '',
  newmovierating: 0,
  newmoviedescrip: '',
  editmovierating: 0,
  editindex: -1,
  pathindex: 0
};
const reducer = (state = inialState, action) => {
  switch (action.type) {
    case SEARCHBYSTAR:
      return state.rating !== action.index + 1
        ? {
            ...state,
            displayedmovies: state.movies.filter(
              e => e.rating >= action.index + 1
            ),
            rating: action.index + 1
          }
        : { ...state, displayedmovies: state.movies, rating: 0 };
    case SEARCHBYNAME:
      return action.event.target.value !== ' '
        ? {
            ...state,
            displayedmovies: state.movies.filter(e =>
              e.title
                .toLowerCase()
                .includes(action.event.target.value.toLowerCase())
            ),
            moviename: action.event.target.value
          }
        : { ...state, moviename: '' };
    case SEARCHBYNAMECLICK:
      return {
        ...state,
        displayedmovies: state.movies.filter(e =>
          e.title.toLowerCase().includes(state.moviename.toLowerCase())
        )
      };
    case NEWERATING:
      return {
        ...state,
        newmovierating: action.index + 1
      };
    case NEWMOVIENAME:
      return action.event.target.value !== ' '
        ? { ...state, newmoviename: action.event.target.value }
        : { ...state, newmoviename: '' };

    case NEWMOVIEIMG:
      return action.event.target.value !== ' '
        ? { ...state, newmovieimg: action.event.target.value }
        : { ...state, newmovieimg: '' };
    case NEWMOVIEDESCRIP:
      return action.event.target.value !== ' '
        ? { ...state, newmoviedescrip: action.event.target.value }
        : { ...state, newmoviedescrip: '' };
    case ADDMOVIE:
      let newmovietoadd = {
        title: state.newmoviename.toUpperCase(),
        img: state.newmovieimg,
        rating: state.newmovierating,
        descrip: state.newmoviedescrip
      };

      return state.newmoviename && state.newmovierating && state.newmovierating
        ? {
            ...state,
            movies: [...state.movies, newmovietoadd],
            displayedmovies: [...state.movies, newmovietoadd],
            newmovieimg: '',
            newmoviename: '',
            newmovierating: 0,
            newmoviedescrip: ''
          }
        : {
            ...state,
            newmoviename: '',
            newmovieimg: '',
            newmovierating: 0,
            newmoviedescrip: ''
          };

    case CLOSEMODAL:
      return {
        ...state,
        newmoviename: '',
        newmovieimg: '',
        newmovierating: 0,
        newmoviedescrip: ''
      };

    case REMOVEHANDLER:
      console.log(state.pathindex);
      return {
        ...state,
        movies: state.movies.filter((e, i) => i !== action.index),
        displayedmovies: state.displayedmovies.filter(
          (e, i) => i !== action.index
        )
      };

    case EDITHANDLER:
      return {
        ...state,
        editmovierating: state.movies[action.index].rating,
        editindex: action.index
      };

    case EDITRATING:
      console.log(action.index);
      return { ...state, editmovierating: action.index + 1 };
    case SAVEEDIT:
      return {
        ...state,
        movies: state.movies.map((e, i) => {
          return i === state.editindex
            ? {
                title: action.name.toUpperCase(),
                img: action.img,
                rating: state.editmovierating,
                descrip: action.descrip
              }
            : e;
        }),
        displayedmovies: state.movies.map((e, i) => {
          return i === state.editindex
            ? {
                title: action.name.toUpperCase(),
                img: action.img,
                rating: state.editmovierating,
                descrip: action.descrip
              }
            : e;
        }),
        editmovierating: 0,
        editindex: -1
      };
    case PATHHANDLER:
      return {
        ...state,
        pathindex: action.index
      };

    case PATHBACK:
      return {
        ...state,
        pathindex: 0
      };
    default:
      return state;
  }
};

export default reducer;

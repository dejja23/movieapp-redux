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
export const searchbyname = event => {
  return {
    type: SEARCHBYNAME,
    event
  };
};

export const searchbynameclick = () => {
  return { type: SEARCHBYNAMECLICK };
};

export const searchbystar = index => {
  return {
    type: SEARCHBYSTAR,
    index
  };
};

export const newmovienamehandler = event => {
  return {
    type: NEWMOVIENAME,
    event
  };
};

export const newmovieimghandler = event => {
  return {
    type: NEWMOVIEIMG,
    event
  };
};

export const newrating = index => {
  return {
    type: NEWERATING,
    index
  };
};

export const newmoviedescriphandler = event => {
  return {
    type: NEWMOVIEDESCRIP,
    event
  };
};

export const addmovie = () => {
  return {
    type: ADDMOVIE
  };
};

export const closemodal = () => {
  return {
    type: CLOSEMODAL
  };
};

export const removeHandler = index => {
  return {
    type: REMOVEHANDLER,
    index
  };
};

export const editHandler = index => {
  return {
    type: EDITHANDLER,
    index
  };
};

export const editrating = index => {
  return {
    type: EDITRATING,
    index
  };
};

export const saveedit = (name, img, descrip) => {
  return {
    type: SAVEEDIT,
    name,
    img,
    descrip
  };
};

export const pathHandler = index => {
  return {
    type: PATHHANDLER,
    index
  };
};

export const pathBack = () => {
  return {
    type: PATHBACK
  };
};

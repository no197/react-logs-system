import {
  SET_LOADING_TECHS,
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case TECHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false,
      };
    case SET_LOADING_TECHS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

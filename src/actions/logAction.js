import {
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_LOADING_LOGS,
} from "./types";

//Set loading
export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING_LOGS });
};

//Get logs from server
export const getLogs = () => async dispatch => {
  try {
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

//Add log
export const addLog = log => async dispatch => {
  try {
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    dispatch({ type: ADD_LOG, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGS_ERROR, payload: error });
  }
};

//Update log
export const updateLog = log => async dispatch => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGS_ERROR, payload: error });
  }
};

//delete log
export const deleteLog = id => async dispatch => {
  try {
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error });
  }
};

//set current log
export const setCurrent = log => dispatch => {
  dispatch({ type: SET_CURRENT, payload: log });
};

//search log
export const searchLog = text => async dispatch => {
  try {
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({ type: SEARCH_LOGS, payload: data });
  } catch (error) {
    console.log(error);

    dispatch({ type: LOGS_ERROR, payload: error });
  }
};

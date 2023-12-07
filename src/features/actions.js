import { fetchData, addData, updateData, deleteData } from './api';
export const SET_DATA = 'SET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
export const addDataAction = (newItem) => {
  return async (dispatch) => {
    try {
      const response = await addData(newItem);
      dispatch({
        type: ADD_DATA,
        payload: response,
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
};
export const updateDataAction = (item) => {
  return async (dispatch) => {
    try {
      const response = await updateData(item);
      dispatch({
        type: UPDATE_DATA,
        payload: response,
      });
      dispatch(fetchDataAction());
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
};
export const deleteDataAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteData(id);
      dispatch({
        type: DELETE_DATA,
        payload: id,
      });
      dispatch(fetchDataAction());
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
};
export const fetchDataAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetchData();
      dispatch(setData(response));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../config";
import axios from "axios";
const BASE_URL_COMPANY = `${BASE_URL}/api/company`;
const initialState = {
  data: {
    name: "",
    phone: "",
    address: "",
  },
  loading: false,
};
export const ReducerSlice = createSlice({
  name: "companyxxxx",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCompany: (state, action) => {
      state.data = action.payload;
    },
    getCompanyAlldAction: (state, action) => {
      state.data = action.payload;
    },
    getCompanyByIdAction: (state, action) => {
      state.data = action.payload;
    },
    addCompanyAction: (state, action) => {
      state.data = action.payload;
    },
    updateCompanyAction: (state, action) => {
      state.data = action.payload;
    },
    deleteCompanyAction: (state, action) => {
      state.data = {};
    },
  },
});
////////////////// actions
export const {
  setLoading,
  setCompany,
  getCompanyAlldAction,
  getCompanyByIdAction,
  addCompanyAction,
  updateCompanyAction,
  deleteCompanyAction,
} = ReducerSlice.actions;

//////////////////reducer
export default ReducerSlice.reducer;

/********Body Actions*******/
export const fetchAllCompanys = () => (dispatch) => {
  axios
    .get(`${BASE_URL_COMPANY}`)
    .then((response) => {
      dispatch(getCompanyAlldAction(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchCompanyById = (id) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`${BASE_URL_COMPANY}/${id}`)
    .then((response) => {
      dispatch(getCompanyByIdAction(response.data));
      dispatch(setLoading(false));
    })
    .catch((error) => console.log(error));
};
export const addCompany = (data) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .put(`${BASE_URL_COMPANY}`, data)
    .then((response) => {
      dispatch(addCompanyAction(response.data));
      dispatch(setLoading(false));
    })
    .catch((error) => console.log(error));
};
export const updateCompany = (data) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .put(`${BASE_URL_COMPANY}`, data)
    .then((response) => {
      dispatch(updateCompanyAction(response.data));
      dispatch(setLoading(false));
    })
    .catch((error) => console.log(error));
};
export const deleteCompanyById = (id) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .delete(`${BASE_URL_COMPANY}/api/company/${id}`)
    .then((response) => {
      dispatch(deleteCompanyAction(response.data));
      dispatch(setLoading(false));
    })
    .catch((error) => console.log(error));
};

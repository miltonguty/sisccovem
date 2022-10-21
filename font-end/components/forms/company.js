import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateCompany, addCompany } from "../../redux/slices/Company";

const Company = ({ data }) => {
  const [company, setCompany] = useState(data);

  const loading = useSelector((state) => state.Company.loading);

  const dispatch = useDispatch();

  const setFormData = (event) => {
    setCompany({ ...company, [event.target.name]: event.target.value });
  };
  const handlerOnClick = (env) => {
    if (company.id) {
      dispatch(updateCompany(company));
    } else {
      dispatch(addCompany(company));
    }
  };
  useEffect(() => {
    setCompany(data);
  }, [data]);
  if (loading) return <div> LOADING.......</div>;
  else
    return (
      <div>
        <h1>Company Form</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={setFormData}
          defaultValue={company.name}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          onChange={setFormData}
          defaultValue={company.phone}
        />
        <input
          type="text"
          name="address"
          placeholder="address"
          onChange={setFormData}
          defaultValue={company.address}
        />
        <button onClick={handlerOnClick}>save</button>
      </div>
    );
};
export default Company;

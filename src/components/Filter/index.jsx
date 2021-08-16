import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { actions } from "../../pages/Result/redux/slice";
import SearchInput from "../SearchInput";

const Filter = ({ to }) => {
  const dispatch = useDispatch();

  const applyFilter = useCallback(
    ({ searchText }) => {
      const params = {
        query: searchText,
      };

      if (searchText.length > 0) {
        const delaySearch = setTimeout(() => {
          const promise = dispatch(actions.setSearch(params));
          return () => {
            promise.abort();
          };
        }, 500);
        return () => {
          clearTimeout(delaySearch);
        };
      } else {
        return dispatch(actions.clear());
      }
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col text-center w-full">
      <span className="text-md w-8 m-auto font-bold uppercase text-colors-white"></span>
      <Formik
        initialValues={{
          searchText: "",
        }}
        onSubmit={(values) => applyFilter(values)}
      >
        {({ values, handleSubmit, setFieldValue, isSubmitting }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <SearchInput
              to={to}
              type="text"
              name="searchText"
              placeholder="Buscar"
              value={values.searchText}
              className="my-4"
              onChange={(e) => {
                setFieldValue("searchText", e.target.value);
              }}
            />
            <button
              type="submit"
              style={{ display: "none" }}
              disabled={isSubmitting}
              onSubmit={handleSubmit}
            ></button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;

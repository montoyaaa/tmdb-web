import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ReactSVG from "react-inlinesvg";
import ReactPaginate from "react-paginate";

import CardMovie from "../../components/CardMovie";
import { actions } from "./redux/slice";

const Result = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { searchResult, searchText, listLoading } = useSelector(
    ({ result }) => ({
      searchResult: result.searchResult,
      searchText: result.searchText,
      listLoading: result.listLoading,
    })
  );

  useEffect(() => {
    if (searchText !== undefined) {
      const promise = dispatch(actions.search({ searchText }));

      return () => {
        promise.abort();
      };
    } else {
      return dispatch(actions.clear());
    }
  }, [dispatch, searchText]);

  return (
    <div className="pt-36 sm:pt-16 min-h-screen">
      <h1 className="text-center sm:text-left mt-5 flex flex-col sm:flex-row  sm:ml-5 uppercase font-bold text-colors-white">
        Resultado da pesquisa:
        <span
          className={`m-auto text-colors-yellow-400 sm:ml-1 ${
            listLoading && "animate-spin h-5 w-5 mr-3"
          }`}
        >
          {listLoading ? (
            <ReactSVG
              className="text-colors-white m-auto"
              width={20}
              src="/assets/svg/circle.svg"
            />
          ) : (
            searchText
          )}
        </span>
        <button
          onClick={() => dispatch(actions.clear())}
          className="sm:ml-auto sm:mr-5 hover:text-colors-red-700 uppercase"
        >
          Limpar
        </button>
      </h1>

      {searchResult?.results !== undefined &&
      searchResult?.results?.length !== 0 &&
      searchText !== undefined ? (
        <div className="flex justify-center flex-wrap gap-4 p-4">
          {searchResult.results?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center font-bold text-colors-white text-center p-4">
          <h1>Não encontramos nenhum resultado, tente pesquisar novamente.</h1>
          {pathname === "/result" && (
            <Link to="/" className="hover:text-primary-300 max-h-full">
              Voltar
            </Link>
          )}
        </div>
      )}
      <ReactPaginate
        containerClassName={"flex gap-3 p-5 justify-center items-center"}
        pageClassName={
          "flex w-full bg-colors-blueGray-200 h-10 w-10 flex items-center justify-center rounded-full"
        }
        nextClassName={
          "flex bg-colors-blueGray-200 h-10 w-20 flex items-center justify-center rounded-full"
        }
        previousClassName={
          "flex bg-colors-blueGray-200 h-10 w-20 flex items-center justify-center rounded-full"
        }
        pageCount={searchText === undefined ? 0 : searchResult?.total_pages}
        onPageChange={(e) =>
          dispatch(actions.search({ searchText, page: e.selected + 1 }))
        }
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        activeClassName={
          "flex bg-colors-blueGray-800 text-colors-white border h-10 w-10 flex items-center justify-center rounded-full"
        }
        initialPage={1}
        previousLabel={"PREV"}
        nextLabel={"NEXT"}
        breakLabel={"..."}
        breakClassName={
          "flex bg-colors-blueGray-200 h-10 w-10 flex items-center justify-center rounded-full"
        }
      />
    </div>
  );
};

export default Result;

import React from "react";
import ReactSVG from "react-inlinesvg";
import { PaginatorButton } from "./PaginatorButton";

const Paginator = ({ range = 1, currentPage = 1, totalPages, ...rest }) => {
  const makePrevArrayRange = () => {
    let arrayPages = [];
    let startIndex = currentPage - range;

    for (let index = startIndex; index < currentPage; index++) {
      if (index > 0) {
        arrayPages.push(index);
      }
    }
    return arrayPages;
  };

  const makeNextArrayRange = () => {
    let arrayPages = [];
    let finalIndex = currentPage + range;

    for (let index = currentPage + 1; index <= finalIndex; index++) {
      if (index < getPage("last")) {
        arrayPages.push(index);
      }
    }
    return arrayPages;
  };

  const makeTotalArrayPages = () => {
    let arrayPages = [];

    for (let index = 0; index < totalPages; index++) {
      arrayPages.push(index);
    }
    return arrayPages;
  };

  const getPage = (order) => {
    switch (order) {
      case "first":
        return makeTotalArrayPages()[1];
      case "last":
        return makeTotalArrayPages().length;

      default:
        return makeTotalArrayPages()[1];
    }
  };

  return (
    <div className="flex flex-row gap-2">
      {currentPage > 1 && (
        <>
          <PaginatorButton value={currentPage - 1} {...rest} isLeft>
            <ReactSVG src="/assets/svg/arrow.svg" />
          </PaginatorButton>
          <PaginatorButton value={getPage("first")} {...rest}>
            {getPage("first")}
          </PaginatorButton>
          {makePrevArrayRange().map((prevPage, index) => {
            return (
              ((prevPage === makePrevArrayRange().values().next().value + 1 &&
                prevPage > range) ||
                (range === 1 &&
                  prevPage > range &&
                  getPage("first") + 1 !== prevPage)) && (
                <PaginatorButton key={index}>...</PaginatorButton>
              )
            );
          })}
        </>
      )}

      {makePrevArrayRange().map(
        (prevPage, index) =>
          prevPage !== getPage("first") && (
            <PaginatorButton value={prevPage} {...rest} key={index}>
              {prevPage}
            </PaginatorButton>
          )
      )}

      <PaginatorButton value={currentPage} id="teste" {...rest} isSelected>
        {currentPage}
      </PaginatorButton>

      {makeNextArrayRange().map((nextPage, index) => {
        return (
          <PaginatorButton value={nextPage} {...rest} key={index}>
            {nextPage}
          </PaginatorButton>
        );
      })}

      {currentPage < getPage("last") && (
        <>
          {makeNextArrayRange().map((nextPage, index) => {
            console.log(nextPage !== getPage("last"));
            return (
              ((nextPage === makeNextArrayRange().values().next().value &&
                nextPage !== getPage("last") - 1) ||
                (range === 1 && getPage("last") - 1 !== nextPage)) && (
                <PaginatorButton key={index}>...</PaginatorButton>
              )
            );
          })}
          <PaginatorButton value={getPage("last")} {...rest}>
            {getPage("last")}
          </PaginatorButton>
          <PaginatorButton value={currentPage++} {...rest} isRight>
            <ReactSVG src="/assets/svg/arrow.svg" />
          </PaginatorButton>
        </>
      )}
    </div>
  );
};

export default Paginator;

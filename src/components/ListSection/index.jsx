import React from "react";

import { Link } from "react-router-dom";

import Carousel from "../Carousel";

import "./style.css";

const ListSection = ({ list = [], title, goToAll, link }) => {
  return (
    <>
      {list?.total_results !== 0 && (
        <div className="py-4 list-area">
          <h1 className="pl-4 pt-4 text-center sm:text-left uppercase font-bold text-primary-400">
            {title}
            <span className="text-sm text-colors-white">
              <Link to={goToAll}> Ver todos</Link>
            </span>
          </h1>
          <Carousel link={link} list={list} />
        </div>
      )}
    </>
  );
};

export default ListSection;

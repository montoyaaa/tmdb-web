import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import Filter from "../Filter";
import { HeaderBar } from "./styles";

const Header = ({ isTransparent = false }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <HeaderBar
      className="p-5 md:py-0 flex flex-col sm:flex-row md:mb-36"
      transparent={isTransparent}
    >
      <Link className="flex justify-center" to="/">
        <img
          className="w-40 md:w-60"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="The Moovie DB logo"
        />
      </Link>

      <span className="text-colors-white uppercase text-sm tracking-widest flex gap-4">
        <Link
          className={`hidden md:flex ${
            pathname === "/" ? "text-primary-400" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`md:flex mt-3 sm:m-0  ${
            pathname === "/trendings" ? "text-primary-400" : ""
          }`}
          to="/trendings#trendings"
        >
          Trendings
        </Link>
      </span>

      <div className="flex items-center text-colors-white">
        {pathname !== "/" && pathname !== "/trendings" && (
          <button className="px-4" onClick={() => history.goBack()}>
            Voltar
          </button>
        )}
        <Filter to="/result" />
      </div>
    </HeaderBar>
  );
};

export default Header;

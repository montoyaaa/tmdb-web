import React from "react";
import PropTypes from "prop-types";
import HashLinkObserver from "react-hash-link";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="bg-blueGray-600 h-full">
      <Header isTransparent={pathname === "/" ? true : false} />
      {children}
      <HashLinkObserver />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

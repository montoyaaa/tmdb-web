import React from "react";
import { useHistory } from "react-router-dom";
import ReactSVG from "react-inlinesvg";
import { Input, Button } from "./input";

const SearchInput = (props) => {
  const history = useHistory();

  return (
    <span className="flex justify-center items-center">
      <Input onSubmit={() => history.push(props.to)} {...props} />
      <Button type="submit" onClick={() => history.push(props.to)}>
        <ReactSVG width={20} src="/assets/svg/search-solid.svg" />
      </Button>
    </span>
  );
};

export default SearchInput;

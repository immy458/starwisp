import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Search() {
  return (
    <>
      <div className="form-group has-search input-group m-5">
        <div className="input-group-prepend">
          <span className="input-group-text " id="basic-text1">
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </span>
        </div>

        <input
          type="text"
          className="form-control searchbar"
          placeholder="Search"
        ></input>
      </div>
    </>
  );
}
export default Search;

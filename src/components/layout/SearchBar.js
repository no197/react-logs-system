import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLog, setLoading } from "../../actions/logAction";

const SearchBar = ({ searchLog, setLoading }) => {
  const text = useRef("");
  const onChange = () => {
    setLoading();
    searchLog(text.current.value);
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              autoComplete="off"
              placeholder="Search logs..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(
  null,
  { searchLog, setLoading }
)(SearchBar);

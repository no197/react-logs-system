import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteLog, setLoading, setCurrent } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, setLoading, deleteLog, setCurrent }) => {
  const onDelete = id => {
    setLoading();
    deleteLog(log.id);
    M.toast({ html: "The log is removed" });
  };

  const onSetCurrent = () => {
    setCurrent(log);
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={onSetCurrent}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id} </span>
          last updated by <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  setLoading: PropTypes.func.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(
  null,
  { setLoading, deleteLog, setCurrent }
)(LogItem);

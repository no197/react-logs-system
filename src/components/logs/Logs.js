import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs, setLoading } from "../../actions/logAction";

const Logs = ({ log: { logs, loading }, getLogs, setLoading }) => {
  useEffect(() => {
    setLoading();
    getLogs();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading && <Preloader />}
      {logs && (
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System Logs</h4>
          </li>
          {!loading && logs.length === 0 ? (
            <p className="center">No logs to show...</p>
          ) : (
            logs.map(log => <LogItem key={log.id} log={log} />)
          )}
        </ul>
      )}
    </Fragment>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
});
export default connect(
  mapStateToProps,
  { getLogs, setLoading }
)(Logs);

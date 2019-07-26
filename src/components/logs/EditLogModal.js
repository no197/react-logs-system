import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLoading, updateLog } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOption from "../techs/TechSelectOption";

const EditLogModal = ({ log, updateLog, setLoading }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (log) {
      setAttention(log.attention);
      setMessage(log.message);
      setTech(log.tech);
    }
    //eslint-disable-next-line
  }, [log]);

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      setLoading();
      const udtLog = {
        id: log.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(udtLog);
      M.toast({ html: `The log is updated by ${tech}` });
    }
    setMessage("");
    setAttention(false);
    setTech("");
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />

                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
          disabled={!message || !tech ? "disabled" : ""}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  log: PropTypes.object,
  setLoading: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "50%",
  height: "75%",
};

const mapStateToProps = state => ({
  log: state.log.current,
});
export default connect(
  mapStateToProps,
  { setLoading, updateLog }
)(EditLogModal);

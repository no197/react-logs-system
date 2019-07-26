import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { addLog, setLoading } from "../../actions/logAction";
import TechSelectOption from "../techs/TechSelectOption";

const AddLogModal = ({ addLog, setLoading }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      setLoading();
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      };
      addLog(newLog);
      M.toast({ html: `Log added by ${tech}` });
    }
    setMessage("");
    setAttention(false);
    setTech("");
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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

            <label htmlFor="message" className="active">
              Log Message
            </label>
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

const modalStyle = {
  width: "50%",
  height: "75%",
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
export default connect(
  null,
  { setLoading, addLog }
)(AddLogModal);

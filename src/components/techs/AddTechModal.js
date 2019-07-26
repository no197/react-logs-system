import React, { useState } from "react";
import { connect } from "react-redux";

import { addTech, setLoading } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech, setLoading }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (!firstName || !lastName) {
      M.toast({ html: "Please enter a firstname and lastname" });
    } else {
      const newTech = {
        firstName,
        lastName,
      };

      setLoading();
      addTech(newTech);
      M.toast({ html: `${firstName} ${lastName} is added as a technician` });
    }
    setFirstName("");
    setLastName("");
  };
  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />

            <label htmlFor="message" className="active">
              FirstName
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />

            <label htmlFor="message" className="active">
              LastName
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <button
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
            disabled={!firstName || !lastName ? "disabled" : ""}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "50%",
  height: "75%",
};

export default connect(
  null,
  { addTech, setLoading }
)(AddTechModal);

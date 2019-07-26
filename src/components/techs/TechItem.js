import React from "react";
import { connect } from "react-redux";
import { deleteTech, setLoading } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech, setLoading }) => {
  const onDelete = () => {
    setLoading();
    deleteTech(tech.id);
    M.toast({ html: `${tech.firstName} ${tech.lastName} is removed` });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(
  null,
  { deleteTech, setLoading }
)(TechItem);

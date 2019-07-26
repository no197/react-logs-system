import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLoading, getTechs } from "../../actions/techAction";
import TechItem from "./TechItem";

const TechListModal = ({ tech: { loading, techs }, getTechs, setLoading }) => {
  useEffect(() => {
    setLoading();
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  tech: state.tech,
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { setLoading, getTechs }
)(TechListModal);

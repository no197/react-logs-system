import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs, setLoading } from "../../actions/techAction";

const TechSelectOption = ({
  tech: { techs, loading },
  getTechs,
  setLoading,
}) => {
  useEffect(() => {
    setLoading();
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

TechSelectOption.propTypes = {
  tech: PropTypes.object.isRequired,
  current: PropTypes.object,
  getTechs: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  tech: state.tech,
});
export default connect(
  mapStateToProps,
  { getTechs, setLoading }
)(TechSelectOption);

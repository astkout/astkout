import PropTypes from 'prop-types';

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass || ''}`}>
      {name}
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isBeam: PropTypes.bool,
  containerClass: PropTypes.string,
};

Button.defaultProps = {
  isBeam: false,
  containerClass: '',
};

export default Button;
import PropTypes from 'prop-types';

const Alert = ({ type, text }) => {
  const isDanger = type === 'danger';
  
  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center z-50">
      <div
        className={`p-5 flex items-center text-indigo-100 leading-none rounded-md lg:rounded-full lg:inline-flex ${
          isDanger ? 'bg-red-800' : 'bg-blue-800'
        }`}
        role="alert"
      >
        <p
          className={`flex items-center justify-center rounded-full uppercase px-2 py-1 text-xs font-semibold mr-3 ${
            isDanger ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {isDanger ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['danger', 'success']).isRequired,
  text: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: 'success',
};

export default Alert;
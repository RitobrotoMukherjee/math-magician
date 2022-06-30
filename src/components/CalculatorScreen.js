import PropTypes from 'prop-types';

const CalculatorScreen = (props) => {
  const { calculateObj } = props;
  let result = calculateObj.total || 0;

  if (calculateObj.operation) result = `${calculateObj.total || ''} ${calculateObj.operation || ''}`;
  if (calculateObj.next) result = `${calculateObj.total || ''} ${calculateObj.operation || ''} ${calculateObj.next}`;

  return (
    <div className="Screen-div">{result}</div>
  );
};

CalculatorScreen.propTypes = {
  calculateObj: PropTypes.shape({
    total: PropTypes.string,
    operation: PropTypes.string,
    next: PropTypes.string,
  }).isRequired,
};

export default CalculatorScreen;

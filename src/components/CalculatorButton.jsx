/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';

export default function CalculatorButton(props) {
  const { className, type, symbol } = props;
  if (symbol === '0') {
    return (
      <p className={`${className} zero ${type}`}>
        {symbol}
      </p>
    );
  }
  return (
    <p className={`${className} ${type}`}>
      {symbol}
    </p>
  );
}

CalculatorButton.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
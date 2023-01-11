/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';

export default function CalculatorButton(props) {
  const {
    className, type, symbol,
  } = props;
  if (symbol === '0') {
    return (
      <option className={`${className} zero ${type}`}>
        {symbol}
      </option>
    );
  }
  return (
    <option className={`${className} ${type}`}>
      {symbol}
    </option>
  );
}

CalculatorButton.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

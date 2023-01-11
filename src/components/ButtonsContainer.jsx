/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import CalculatorButton from './CalculatorButton';

export default function ButtonsContainer(props) {
  const { buttonRows, calculate } = props;
  return (
    <>
      {buttonRows.map((buttonsRow) => buttonsRow.map((button, i) => {
        if (i === buttonsRow.length - 1) {
          return <CalculatorButton className="orange calculator-button" type={button.type} key={button.value} symbol={button.value} calculate={calculate} />;
        }
        return <CalculatorButton className="gray calculator-button" type={button.type} key={button.value} symbol={button.value} calculate={calculate} />;
      }))}
    </>
  );
}

ButtonsContainer.propTypes = {
  buttonRows: PropTypes
    .arrayOf(PropTypes
      .arrayOf(PropTypes
        .objectOf(PropTypes.string.isRequired))).isRequired,
  calculate: PropTypes.func.isRequired,
};

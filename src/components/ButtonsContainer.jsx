/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import CalculatorButton from './CalculatorButton';

export default function ButtonsContainer(props) {
  const { buttons } = props;
  return (
    <>
      {buttons.map((button) => {
        if (Number.isNaN(parseInt(button, 10))) {
          return <CalculatorButton className="orange" type="operator" key={button} symbol={button} />;
        }
        return <CalculatorButton className="gray" type="number" key={button} symbol={button} />;
      })}
    </>
  );
}

ButtonsContainer.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

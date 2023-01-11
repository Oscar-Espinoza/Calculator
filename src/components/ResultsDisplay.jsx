/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';

export default function ResultsDisplay(props) {
  const { result } = props;
  return (
    <div className="results-container">
      <p className="results">{result}</p>
    </div>
  );
}

ResultsDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

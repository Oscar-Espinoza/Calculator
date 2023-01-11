/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';

export default function ResultsDisplay(props) {
  const { current } = props;
  return (
    <div className="results-container">
      <p className="results">{current}</p>
    </div>
  );
}

ResultsDisplay.propTypes = {
  current: PropTypes.string.isRequired,
};

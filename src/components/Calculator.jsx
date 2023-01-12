/* eslint linebreak-style: ["error", "windows"] */
import { useState } from 'react';
import ButtonsContainer from './ButtonsContainer';
import ResultsDisplay from './ResultsDisplay';
import calculate from '../logic/calculate';

const calculatorButtons = [
  [
    { value: 'AC', type: 'operator' },
    { value: '+/-', type: 'operator' },
    { value: '%', type: 'operator' },
    { value: '÷', type: 'operator' },
  ],
  [
    { value: '9', type: 'number' },
    { value: '8', type: 'number' },
    { value: '7', type: 'number' },
    { value: 'x', type: 'operator' },
  ],
  [
    { value: '6', type: 'number' },
    { value: '5', type: 'number' },
    { value: '4', type: 'number' },
    { value: '-', type: 'operator' },
  ],
  [
    { value: '3', type: 'number' },
    { value: '2', type: 'number' },
    { value: '1', type: 'number' },
    { value: '+', type: 'operator' },
  ],
  [
    { value: '0', type: 'number', colSpan: '2' },
    { value: '.', type: 'decimal' },
    { value: '=', type: 'equals' },
  ],
];

export default function Calculator() {
  const [calculator, setCalculator] = useState({
    total: '0',
    next: '0',
    operation: null,
  });

  const {
    total, next, operation,
  } = calculator;

  return (
    <switch
      className="calculator"
      onClick={(e) => {
        if (e.target.classList.contains('calculator-button')) {
          const newState = calculate(calculator, e.target.innerText);
          setCalculator(newState);
        }
      }}
    >
      <ResultsDisplay
        current={next || total}
        total={total}
        next={next}
        operation={operation}
      />
      <ButtonsContainer buttonRows={calculatorButtons} calculate={calculate} />
    </switch>
  );
}

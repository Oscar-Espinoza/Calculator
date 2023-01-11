/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import ButtonsContainer from './ButtonsContainer';
import ResultsDisplay from './ResultsDisplay';

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

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastResult: 0,
      result: '0',
      currentOperation: {
        operator: '+',
        number: 0,
      },
    };
  }

  render() {
    const {
      pastResult, result, currentOperation,
    } = this.state;

    return (
      <div className="calculator">
        <ResultsDisplay
          result={result}
          pastResult={pastResult}
          currentOperation={currentOperation}
        />
        <ButtonsContainer buttonRows={calculatorButtons} />
      </div>
    );
  }
}

/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import ButtonsContainer from './ButtonsContainer';
import ResultsDisplay from './ResultsDisplay';

const buttons = ['AC', '+/-', '%', '÷', '1', '2', '3', 'x', '4', '5', '6', '-', '7', '8', '9', '+', '0', '.', '='];

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
        <ButtonsContainer buttons={buttons} />
      </div>
    );
  }
}

import React from 'react';
import Calculator from '../components/Calculator';

export default function CalculatorRoute() {
  return (
    <div className="calculator-view">
      <h2 className="calculator-title">Lets do some math</h2>
      <Calculator />
    </div>
  );
}

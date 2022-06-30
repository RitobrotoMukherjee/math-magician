import React, { useState } from 'react';
import '../css/Calculator.css';

import Buttons from './Buttons';
import CalculatorScreen from './CalculatorScreen';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const buttons = [
    'AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  const orangeButtons = ['\u00F7', 'x', '-', '+', '='];

  const [calculatorValue, setResult] = useState({ total: '0', next: null, operation: null });

  const getResult = (value) => {
    const calculation = Calculate(calculatorValue, value);
    setResult(calculation);
  };

  return (
    <div className="Calculator">
      <CalculatorScreen calculateObj={calculatorValue} />
      <div className="Buttons-grid">
        {buttons.map((button) => (
          <Buttons
            key={button}
            value={button}
            orangeButtons={orangeButtons}
            handleClick={getResult}
          />
        ))}

      </div>
    </div>
  );
};

export default Calculator;

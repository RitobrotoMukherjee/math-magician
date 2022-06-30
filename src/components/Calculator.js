import React from 'react';
import '../css/Calculator.css';

import Buttons from './Buttons';
import CalculatorScreen from './CalculatorScreen';
import Calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      'AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x',
      '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
    ];
    this.state = {
      calculateObj: { total: '0', next: null, operation: null },
    };
    this.getResult = this.getResult.bind(this);
  }

  getResult(value) {
    const { calculateObj } = this.state;
    const calculation = Calculate(calculateObj, value);
    this.setState({
      calculateObj: calculation,
    });
  }

  render() {
    const { calculateObj } = this.state;
    return (
      <div className="Calculator">
        <CalculatorScreen calculateObj={calculateObj} />
        <div className="Buttons-grid">
          {this.buttons.map((button) => (
            <Buttons key={button} value={button} handleClick={this.getResult} />
          ))}

        </div>
      </div>
    );
  }
}

export default Calculator;

import React from 'react';
import '../css/Calculator.css';

import Buttons from './Buttons';
import Calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        'AC', '+/-', '%', '\u00F7', '7', '8', '9', '\u00D7',
        '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
      ],
      calculateObj: { total: 0, next: null, operation: null },
    };

    this.getResult = this.getResult.bind(this);
  }

  getResult(value) {
    const { calculateObj } = this.state;
    const calculation = Calculate(calculateObj, value);
    console.log('Target:', value);
    console.log('Calculation:', calculation);
    this.setState({
      calculateObj: calculation,
    });
  }

  render() {
    const { buttons, calculateObj } = this.state;
    return (
      <div className="Calculator">
        <div className="Screen-div">{ calculateObj.total || calculateObj.next || 0}</div>
        <div className="Buttons-grid">
          {buttons.map((button) => (
            <Buttons key={button} value={button} handleClick={this.getResult} />
          ))}

        </div>
      </div>
    );
  }
}

export default Calculator;

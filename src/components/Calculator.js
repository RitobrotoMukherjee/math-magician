import React from 'react';
import '../css/Calculator.css';

import Buttons from './Buttons';
import Calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        'AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x',
        '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
      ],
      calculateObj: { total: 0, next: null, operation: null },
      result: 0,
    };

    this.getResult = this.getResult.bind(this);
  }

  getResult(value) {
    const { calculateObj } = this.state;
    const calculation = Calculate(calculateObj, value);
    this.setState({
      calculateObj: calculation,
    }, this.getScreenValue);
  }

  getScreenValue() {
    const { calculateObj } = this.state;
    let result = calculateObj.total || 0;
    if (calculateObj.operation) result = `${calculateObj.total || ''} ${calculateObj.operation || ''}`;
    if (calculateObj.next) result = `${calculateObj.total || ''} ${calculateObj.operation || ''} ${calculateObj.next}`;
    this.setState({ result });
  }

  render() {
    const { buttons, result } = this.state;
    return (
      <div className="Calculator">
        <div className="Screen-div">{ result }</div>
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

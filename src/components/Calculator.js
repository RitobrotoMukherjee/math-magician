import React from 'react';
import '../css/Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        'AC', '+/-', '%', '\u00F7', '7', '8', '9', '\u00D7',
        '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
      ],
      orangeButtons: ['\u00F7', '\u00D7', '-', '+', '='],
    };

    this.classNamesCreate = this.classNamesCreate.bind(this);
  }

  classNamesCreate(button) {
    const { orangeButtons } = this.state;
    if (orangeButtons.includes(button)) {
      return 'Button Orange-button';
    }
    if (button === '0') {
      return 'Button Zero';
    }
    return 'Button';
  }

  render() {
    const { buttons } = this.state;
    return (
      <div className="Calculator">
        <div className="Screen-div">0</div>
        <div className="Buttons-grid">
          {buttons.map((button) => (
            <button
              key={button}
              className={this.classNamesCreate(button)}
              type="button"
            >
              {button}
            </button>
          ))}

        </div>
      </div>
    );
  }
}

export default Calculator;

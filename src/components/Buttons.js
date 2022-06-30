import PropTypes from 'prop-types';

function Buttons(props) {
  const { value, handleClick } = props;

  const orangeButtons = ['\u00F7', '\u00D7', '-', '+', '='];

  const classNamesCreate = (button) => {
    let className = 'Button';
    if (orangeButtons.includes(button)) {
      className += ' Orange-button';
    }
    if (button === '0') {
      className += 'Button Zero';
    }
    return className;
  };

  const buttonClick = (e) => {
    handleClick(e.target.value);
  };

  return (
    <button
      className={classNamesCreate(value)}
      type="button"
      onClick={buttonClick}
      value={value}
    >
      {value}
    </button>
  );
}

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;

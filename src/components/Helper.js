import PropTypes from 'prop-types';

const Header = (props) => {
  const { heading } = props;
  return (
    <h1 className="MainHeading">{ heading }</h1>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

const Paragraph = (props) => {
  const { text } = props;
  return (
    <div className="ParagraphContainer">
      <p>{ text }</p>
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Paragraph };

export default Header;

import PropTypes from 'prop-types';

const Header = (props) => {
  const { heading } = props;
  return (
    <h2 className="MainHeading">{ heading }</h2>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;

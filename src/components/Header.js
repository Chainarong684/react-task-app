import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("gg");
  };

  return (
    <header>
      <h1>{title} This is header</h1>
      <Button func={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Hi",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;

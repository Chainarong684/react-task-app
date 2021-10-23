import PropTypes from "prop-types";
import ButtonCustom from "./ButtonCustom";
import { ProfileOutlined } from "@ant-design/icons";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("gg");
  };

  return (
    <header>
      <h1>
        <ProfileOutlined /> {title} Task list
      </h1>
      <ButtonCustom func={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "CK",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;

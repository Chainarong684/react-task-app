import PropTypes from "prop-types";
import { ProfileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const Header = ({ title, onToggleBtn }) => {
  return (
    <header>
      <h1>
        <ProfileOutlined /> {title} Task list
      </h1>
      <Button type="primary" onClick={onToggleBtn}>
        <PlusCircleOutlined /> Add
      </Button>
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

import PropTypes from "prop-types";
import { ProfileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const Header = ({ title, onToggleBtn, isToggled }) => {
  return (
    <header>
      <h1>
        <ProfileOutlined /> {title} Task list
      </h1>
      {isToggled ? (
        <Button type="dash" danger onClick={onToggleBtn}>
          <MinusCircleOutlined /> Cancel
        </Button>
      ) : (
        <Button type="primary" onClick={onToggleBtn}>
          <PlusCircleOutlined /> Add
        </Button>
      )}
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

import PropTypes from "prop-types";
import { ProfileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined, BarsOutlined } from "@ant-design/icons";
import { useLocation } from "react-router";

const Header = ({ title, onToggleBtn, isToggled }) => {
  const location = useLocation();

  return (
    <div className="header-box">
      <h1>
        <ProfileOutlined /> {title}
      </h1>
      {location.pathname === "/about" ? (
        <Button type="primary" style={customButton} onClick={onToggleBtn}>
          <BarsOutlined /> Home
        </Button>
      ) : isToggled ? (
        <Button type="dash" danger onClick={onToggleBtn}>
          <MinusCircleOutlined /> Cancel
        </Button>
      ) : (
        <Button type="primary" onClick={onToggleBtn}>
          <PlusCircleOutlined /> Add
        </Button>
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "App-Task",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const customButton = {
  color: '#000000',
  backgroundColor: "#e39520",
  borderColor: "#e39520",
};

export default Header;

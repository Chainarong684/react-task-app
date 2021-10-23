import { Button } from "antd";
import { PlusCircleOutlined } from '@ant-design/icons'

const ButtonCustom = ({ func }) => {
  return (
    <div>
      <Button type="primary" onClick={func}>
      <PlusCircleOutlined /> Add
      </Button>
    </div>
  );
};

export default ButtonCustom;

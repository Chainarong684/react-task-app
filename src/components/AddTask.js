import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleFormData = () => {
    onAddTask({ text, day, reminder });
    // setTask("");
    // setDate("");
    // setReminder(false);
  };

  return (
    <Form
      name="add-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ reminder: false }}
      autoComplete="off"
      onFinish={() => handleFormData()}
    >
      <Form.Item label="Task name" name="task" rules={[{ required: true, message: "Please input task name !" }]}>
        <Input placeholder="Task name" value={text} onChange={(e) => setText(e.target.value)} />
      </Form.Item>

      <Form.Item label="Day" name="day" rules={[{ required: true, message: "Please input day !" }]}>
        <Input placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} />
      </Form.Item>

      <Form.Item name="reminder" valuePropName="checked" wrapperCol={{ offset: 10, span: 16 }}>
        <Checkbox value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.checked)}>
          Reminder
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit" size="large">
          Save Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTask;

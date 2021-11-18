import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmitForm = () => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, text, detail, day, reminder };
    onAddTask(newTask);

    setText("");
    setDetail("");
    setDay("");
    setReminder(false);
  };

  return (
    <Form
      name="add-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        task: text,
        day: day,
        reminder: reminder,
      }}
      autoComplete="off"
      scrollToFirstError
      onFinish={handleSubmitForm}
      style={{ marginTop: 50 }}
    >
      <Form.Item label="Task name" name="task" rules={[{ required: true, message: "Please input task name !" }]}>
        <Input placeholder="Task name" value={text} onChange={(e) => setText(e.target.value)} />
      </Form.Item>

      <Form.Item label="Description" name="detail" rules={[{ required: false, message: "Please input some detail" }]}>
        <Input placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)} />
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

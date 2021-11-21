import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState(Date.now());
  const [reminder, setReminder] = useState(false);

  const handleSubmitForm = () => {
    const newTask = { name, detail, date, reminder };
    onAddTask(newTask);

    setName("");
    setDetail("");
    setDate(Date.now());
    setReminder(false);
  };

  return (
    <Form
      name="add-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        task: name,
        date: date,
        reminder: reminder,
      }}
      autoComplete="off"
      scrollToFirstError
      onFinish={handleSubmitForm}
      style={{ marginTop: 50 }}
    >
      <Form.Item label="Task name" name="task" rules={[{ required: true, message: "Please input task name !" }]}>
        <Input placeholder="Task name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Description" name="detail" rules={[{ required: false, message: "Please input some detail" }]}>
        <Input placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)} />
      </Form.Item>

      <Form.Item label="date" name="date" rules={[{ required: false, message: "Please input date !" }]}>
        <Input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} />
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

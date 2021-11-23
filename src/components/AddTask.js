import { useState } from "react";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";

const AddTask = ({ onAddTask, isEditTask }) => {
  console.log(isEditTask);

  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState(Date.now());
  const [reminder, setReminder] = useState(false);

  const handleSubmitForm = () => {
    const newTask = { name, detail, date, reminder };
    onAddTask(newTask);
    form.resetFields();
  };

  const handleEditForm = () => {
    console.log("formEdit");
  };

  const addAction = (
    <Form
      form={form}
      name="add-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      scrollToFirstError
      onFinish={handleSubmitForm}
      style={{ marginTop: 50 }}
    >
      <Form.Item label="Task name" name="task" rules={[{ required: true, message: "Please input task name !" }]}>
        <Input placeholder="Task name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Description" name="detail">
        <Input placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)} />
      </Form.Item>

      <Form.Item label="Date" name="date">
        <DatePicker onChange={(e) => setDate(e)} style={{ width: "100%" }} />
        {/* <Input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} /> */}
      </Form.Item>

      <Form.Item name="reminder" valuePropName="checked" wrapperCol={{ offset: 10 }}>
        <Checkbox value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.checked)}>
          Reminder
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10 }}>
        <Button type="primary" htmlType="submit" size="large">
          Save Task
        </Button>
      </Form.Item>
    </Form>
  );

  const editAction = (
    <Form
      form={form}
      name="add-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      scrollToFirstError
      onFinish={handleEditForm}
      style={{ marginTop: 50 }}
    >
      <Form.Item label="Task name" name="task" rules={[{ required: true, message: "Please input task name !" }]}>
        <Input placeholder="Task name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Description" name="detail">
        <Input placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)} />
      </Form.Item>

      <Form.Item label="Date" name="date">
        <DatePicker onChange={(e) => setDate(e)} style={{ width: "100%" }} />
        {/* <Input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} /> */}
      </Form.Item>

      <Form.Item name="reminder" valuePropName="checked" wrapperCol={{ offset: 10 }}>
        <Checkbox value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.checked)}>
          Reminder
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10 }}>
        <Button type="primary" htmlType="submit" size="large">
          Edit Task
        </Button>
      </Form.Item>
    </Form>
  );

  return <>{isEditTask ? editAction : addAction}</>;
};

export default AddTask;

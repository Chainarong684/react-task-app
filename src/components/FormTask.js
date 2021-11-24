import { useState } from "react";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";

const FormTask = ({ onAddTask, onEditTask, onCancelBtn }) => {
  console.log(onEditTask);

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
    <div className="add-task" style={{ marginTop: 30 }}>
      <h3 style={{ textAlign: "center" }}>*** Add Task ***</h3>
      <Form
        form={form}
        name="add-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        scrollToFirstError
        onFinish={handleSubmitForm}
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
    </div>
  );

  const editAction = (
    <div className="edit-task" style={{ marginTop: 30 }}>
      <h3 style={{ textAlign: "center" }}>*** Edit Task ***</h3>
      <Form
        form={form}
        name="add-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        scrollToFirstError
        onFinish={handleEditForm}
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

        <Form.Item style={customBtn}>
          <Button style={btn} type="primary" htmlType="submit" size="large">
            Edit
          </Button>
          <Button style={btn} type="primary" danger htmlType="button" size="large" onClick={onCancelBtn}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  return <>{onEditTask ? editAction : addAction}</>;
};

const customBtn = {
  textAlign: "center",
};

const btn = {
  width: "100px",
};

export default FormTask;

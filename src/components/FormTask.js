import { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";

const FormTask = ({ mode, onAddTask, onEditTask, handleCancelBtn, task }) => {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState(Date.now());
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    initEditForm();
  }, [task]);

  const initEditForm = () => {
    if (mode === "Edit Task") {
      const taskData = task[0];
      setName(taskData.name);
      setDetail(taskData.detail);
      setDate(taskData.date);
      setReminder(taskData.reminder);
    }
  };

  const handleSubmitForm = () => {
    const newData = { name, detail, date, reminder };
    onAddTask(newData);
    form.resetFields();
  };

  const handleEditForm = () => {
    const editData = { name, detail, date, reminder };
    onEditTask(editData);
    form.resetFields();
    console.log(editData);
  };

  const addAction = (
    <div className="add-task" style={customeForm}>
      <h3 style={{ textAlign: "center" }}>*** {mode} ***</h3>
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
    <div className="edit-task" style={customeForm}>
      <h3 style={{ textAlign: "center" }}>*** {mode} ***</h3>
      <Form
        form={form}
        name="edit-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        scrollToFirstError
        onFinish={handleEditForm}
      >
        <Form.Item label="Task name" name="task">
          <Input placeholder="Task name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item label="Description" name="detail">
          <Input placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)} />
        </Form.Item>

        <Form.Item label="Date" name="date">
          <DatePicker onChange={(e) => setDate(e)} style={{ width: "100%" }} />
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
          <Button style={btn} type="primary" danger htmlType="button" size="large" onClick={handleCancelBtn}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  const renderMode = () => {
    if (mode === "Add Task") {
      return addAction;
    } else {
      return editAction;
    }
  };

  return <>{renderMode()}</>;
};

const customeForm = {
  marginTop: "30px",
};

const customBtn = {
  textAlign: "center",
};

const btn = {
  width: "100px",
};

export default FormTask;

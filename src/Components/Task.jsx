import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {validationSchema} from "../utils/validation"
import "./Task.css"

const TaskForm = () => {
  const initialValues = {
    taskName: '',
    taskDescription: '',
    dueDate: '',
    status: 'TODO',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div id="task-form">
      <h2>Create a New Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="task-name">Task Name:</label>
            <Field type="text" id="task-name" name="taskName" />
            <ErrorMessage name="taskName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="task-description">Task Description:</label>
            <Field as="textarea" id="task-description" name="taskDescription" />
            <ErrorMessage name="taskDescription" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="due-date">Due Date:</label>
            <Field type="date" id="due-date" name="dueDate" />
            <ErrorMessage name="dueDate" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <Field as="select" id="status" name="status">
              <option value="TODO">Todo</option>
              <option value="ONGOING">On-going</option>
              <option value="ONHOLD">On-hold</option>
              <option value="COMPLETED">Completed</option>
            </Field>
          </div>

          <div className="form-group">
            <button type="submit">Create Task</button>
          </div>
        </Form>

      </Formik>
    </div>
  );
};

export default TaskForm;

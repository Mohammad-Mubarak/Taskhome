import * as Yup from 'yup';

export const validationSchema = Yup.object({
  taskName: Yup.string().required('Task Name is required'),
  taskDescription: Yup.string().required('Task Description is required'),
  dueDate: Yup.date().required('Due Date is required'),
});
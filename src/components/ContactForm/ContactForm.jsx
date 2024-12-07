import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const phoneId = useId();

  const feedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Min length: 3 characters")
      .max(50, "Max length: 50 characters")
      .required("Required"),
    phone: Yup.string()
      .min(3, "Min length: 3 characters")
      .max(50, "Max length: 50 characters")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    phone: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="username" id={nameId}></Field>
        <ErrorMessage className={css.error} name="username" component="span" />

        <label htmlFor={phoneId}>Number</label>
        <Field type="text" name="phone" id={phoneId}></Field>
        <ErrorMessage className={css.error} name="phone" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

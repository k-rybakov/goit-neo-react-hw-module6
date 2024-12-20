import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const submitHandler = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.phone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

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
      onSubmit={submitHandler}
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

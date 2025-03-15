import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const createContact = (payload) => {
    dispatch(addContact(payload));
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name should be less than 50 characters.")
      .required("Required"),
    phone: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Use format: XXX-XX-XX")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    createContact({
      name: values.name,
      phone: values.phone,
    });

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          id: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.form}>
          <ul className={css.fieldsWrapper}>
            <li className={css.fieldWrapper}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field
                className={css.field}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </li>
            <li className={css.fieldWrapper}>
              <label htmlFor={phoneFieldId}>Phone</label>
              <Field
                className={css.field}
                type="tel"
                name="phone"
                id={phoneFieldId}
                placeholder="123-11-00"
              />
              <ErrorMessage
                className={css.error}
                name="phone"
                component="span"
              />
            </li>
          </ul>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;

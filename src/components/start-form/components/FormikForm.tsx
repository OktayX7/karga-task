"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

// Model Imports
import { StartRequestModel } from "../model";

import * as Yup from "yup";

const FormikForm = () => {
  const initialValues: StartRequestModel = {
    contact: "",
    email: "",
    message: "",
    agree: false,
  };

  const onSubmit = (
    values: StartRequestModel,
    { resetForm, setValues }: FormikHelpers<StartRequestModel>
  ) => {
    alert(JSON.stringify(values, null, 2));
    setValues(initialValues);
    resetForm();
  };

  const startProjectRequestModelValidationSchema = Yup.object({
    contact: Yup.string().required("Contact is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={startProjectRequestModelValidationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, values, handleChange }) => (
        <Form>
          <Field
            type="text"
            name="contact"
            placeholder="How can I contact you?"
            size="full"
            className="px-3 bg-primary"
            error={errors.contact}
            value={values.contact}
            onChange={handleChange}
            as={Input}
          />
          <Field
            type="email"
            name="email"
            placeholder="Phone/Email"
            size="full"
            className="px-3 bg-primary"
            error={errors.email}
            value={values.email}
            onChange={handleChange}
            as={Input}
          />
          <Field
            type="text"
            name="message"
            placeholder="Add a message"
            size="full"
            className="px-3 bg-primary focus:bg-primary"
            error={errors.message}
            value={values.message}
            onChange={handleChange}
            as={Input}
          />
          <div className="flex items-center my-4">
            <Field
              type="checkbox"
              name="agree"
              className="mr-2 w-4 h-4"
              checked={values.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree">
              I agree to the processing of personal data.
            </label>
          </div>

          <Button
            type="submit"
            variant="white"
            className=" font-extrabold text-lg tracking-wider leading-5 mt-7 !px-20 !py-3"
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;

import React from "react";
import { useFormik } from "formik";
import contact_validation from "@/lib/ContactFormValidation";
import { valueTypes } from "@/pages/contact-us";
import { Button } from "../Buttons";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: onSubmit,
    validate: contact_validation,
  });

  async function onSubmit(value: valueTypes) {
    console.log(value);
  }
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-10 text-sp-solid-gray-800"
    >
      <label className="text-lg font-medium">
        Your Name <sup className="text-sp-solid-pink-900">*</sup>
      </label>
      <br />
      {formik.errors.name && (
        <p className="text-sm text-red-700 pt-2">{formik.errors.name}</p>
      )}
      <input
        {...formik.getFieldProps("name")}
        placeholder="John Doe"
        type="text"
        className={`text-base p-4 border ${
          formik.errors.name ? "border-red-800" : "border-sp-solid-pink-600"
        } rounded-lg mt-3 w-full lg:w-2/3`}
      />
      <div className="mt-8" />
      <label className="text-lg font-medium">
        Email Address <sup className="text-sp-solid-pink-900">*</sup>
      </label>
      <br />
      {formik.errors.email && (
        <p className="text-sm text-red-700 pt-2">{formik.errors.email}</p>
      )}
      <input
        {...formik.getFieldProps("email")}
        placeholder="email@address.com.au"
        type="text"
        className={`text-base p-4 border ${
          formik.errors.email ? "border-red-800" : "border-sp-solid-pink-600"
        } rounded-lg mt-3 w-full lg:w-3/4`}
      />
      <div className="mt-8" />
      <label className="text-lg font-medium">
        Phone Number <sup className="text-sp-solid-pink-900">*</sup>
      </label>
      <br />
      {formik.errors.phone && (
        <p className="text-sm text-red-700 pt-2">{formik.errors.phone}</p>
      )}
      <input
        {...formik.getFieldProps("phone")}
        placeholder="Your phone number"
        type="text"
        className={`text-base p-4 border ${
          formik.errors.phone ? "border-red-800" : "border-sp-solid-pink-600"
        } rounded-lg mt-3 w-full lg:w-auto `}
      />
      <div className="mt-8" />
      <label className="text-lg font-medium">Message</label>
      <br />
      {formik.errors.message && (
        <p className="text-sm text-red-700 pt-2">{formik.errors.message}</p>
      )}
      <textarea
        {...formik.getFieldProps("message")}
        placeholder="Your message here"
        className={`text-base p-4 border ${
          formik.errors.message ? "border-red-800" : "border-sp-solid-pink-600"
        } rounded-lg mt-3 w-full h-[114px]`}
      />
      <Button type="blue" label="Submit Enquiry" className="font-medium mt-9" />
    </form>
  );
};

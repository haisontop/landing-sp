import { valueTypes } from "@/pages/contact-us";

export default function contact_validation(value: valueTypes) {
  const errors: any = {};
  // validation for name field
  if (!value.name) {
    errors.name = "Name is Required";
  }

  // validtion for email address
  if (!value.email) {
    errors.email = "Email Address is Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)
  ) {
    errors.email = "Invalid email address";
  }

  // validation for phone number
  if (!value.phone) {
    errors.phone = "Phone Number is Required";
  }

  // validation for message

  if (!value.message) {
    errors.message = "You have not written any message";
  }
  return errors;
}

import React from "react";
import { IErrorsProps, ILoginProps } from "@/interfaces/types";

export function validateLoginForm(values: ILoginProps) {
  const errors: IErrorsProps = {};
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Email is not valid";
  }

  return errors;
}

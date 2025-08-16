import React from "react";
import {
  IErrorsProps,
  ILoginProps,
  IRegisterErrors,
  IRegisterProps,
} from "@/interfaces/types";

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

export function validateRegisterForm(values: IRegisterProps) {
  const errors: IRegisterErrors = {};
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Email is not valid";
  }

  return errors;
}

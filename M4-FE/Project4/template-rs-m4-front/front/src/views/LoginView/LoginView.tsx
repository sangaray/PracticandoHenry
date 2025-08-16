"use client";

import React, { useEffect, useState } from "react";
import { ILoginProps, IErrorsProps } from "../../interfaces/types";
import { validateLoginForm } from "@/helpers/validate";

const LoginView: React.FC = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState<ILoginProps>(initialState);
  const [errors, setErrors] = useState<IErrorsProps>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Se envió el formulario");
  };

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrors(errors);
  }, [userData]);

  return (
    <div>
      <div>
        <h1>Login in Dreamed Products </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userData?.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
          />
          {errors?.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Pasword</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userData?.password}
            onChange={handleChange}
            placeholder="********"
          />
          {errors?.password && <span>{errors.password}</span>}
        </div>
        <button disabled={errors.email ? true : false} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;

"use client";

import React, { useEffect, useState } from "react";

import { IRegisterErrors, IRegisterProps } from "@/interfaces/types";
import { validateRegisterForm } from "@/helpers/validate";

const RegisterView: React.FC = () => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const [userData, setUserData] = useState<IRegisterProps>(initialState);
  const [errors, setErrors] = useState<IRegisterErrors>(initialState);

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
    const errors = validateRegisterForm(userData);
    setErrors(errors);
  }, [userData]);

  return (
    <div>
      <div>
        <h1>Register in Dreamed Products </h1>
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
          <label htmlFor="password">Password</label>
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
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={userData?.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors?.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={userData?.address}
            onChange={handleChange}
            placeholder="Posadas, Misiones"
          />
          {errors?.address && <span>{errors.address}</span>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={userData?.phone}
            onChange={handleChange}
            placeholder="011-12345678"
          />
          {errors?.phone && <span>{errors.phone}</span>}
        </div>
        <button disabled={errors.email ? true : false} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterView;

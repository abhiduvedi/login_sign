
import { useForm } from "react-hook-form";
import React from 'react'
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const navigate = useNavigate();
  function onSubmit(data) {
    console.log("submitting the form", data);
    localStorage.setItem("Name",data.Name);
    localStorage.setItem("email",data.email)
    localStorage.setItem("passward",data.passward)
    localStorage.setItem("data", JSON.stringify(data));

    navigate("/Profile")

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h1>Registration Page</h1>
      <label>Email :</label>
      <input

        {...register('email', {
          required: "Email is required",
          minLength: {
            value: 4,
            message: "Min length should be at least 4",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <br/>
      <label> Name: </label>
      <input
        {...register('Name', {
          required: "Name is required",
          minLength: {
            value: 4,
            message: "Min length should be at least 4",
          },
        })}
      />
      {errors.Name && <p>{errors.Name.message}</p>}

      <br />

      <lable> Passward :</lable>
      <input{...register('passward')} />

      <br />
      
      <input type="submit" />
    </form>
  )
}
export default Register;

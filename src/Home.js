import React, { useState } from "react";
import firebaseDB from 'firebase';
export const Home = () => {
  const [data, setData] = useState({ firstname: "", lastname: "", email: "" });

  const { firstname, lastname, email } = { ...data };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    firebaseDB.child("register").push(data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log(data);
  };
  return (
    <form onSubmit={submitHandler}>

   
    <div>
      <input
        placeholder="firstname"
        name="firstname"
        value={firstname}
        onChange={changeHandler}
      ></input>
      <br />
      <input
        placeholder="lastname"
        name="lastname"
        value={lastname}
        onChange={changeHandler}
      ></input>
      <br />
      <input
        placeholder="email"
        name="email"
        value={email}
        onChange={changeHandler}
      ></input>
      <br />
      <button type="primary" value="" >
        Submit
      </button>
    </div>
    </form>
  );
};

export default Home;

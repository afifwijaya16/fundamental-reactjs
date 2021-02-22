import React, { useState } from "react";
import InputText from "./InputText";
const FormMultiple = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
        name: ${name}
        email: ${email}
        phone: ${phone}
    `);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputText
        label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <InputText
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <InputText
        label="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default FormMultiple;

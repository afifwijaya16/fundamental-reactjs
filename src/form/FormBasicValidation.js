import React, { useState } from "react";
import InputText from "./InputText";
// const FormBasicValidation = () => {
//   const [name, setName] = useState();
//   const [error, setError] = useState();

//   const handlechange = (e) => {
//     setError("");
//     const value = e.target.value;
//     if (value.length < 3) {
//       setError("field minimal 3 char");
//     }
//     setName(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (error) {
//       alert(error);
//     } else {
//       // sent to server
//       alert(name);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <InputText label="name" value={name} onChange={handlechange} />
//       <br />
//       {error}
//       <br />
//       <input type="submit" value="submit" />
//     </form>
//   );
// };
const FormBasicValidation = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (field, e) => {
    // validasi disini
    setError("");
    const value = e.target.value;
    if (value.length < 3) {
      setError({ ...error, [field]: `${field} minimal 3 karakter` });
    } else {
      setError({ ...error, [field]: "" });
    }
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (error["name"].length > 0) {
      alert(error["name"]);
    } else if (error["phone"].length > 0) {
      alert(error["phone"]);
    } else if (error["email"].length > 0) {
      alert(error["email"]);
    } else {
      alert("Validasi sukses");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error.name} <br />
      <InputText
        label="Name"
        value={form.name}
        onChange={(e) => handleChange("name", e)}
      />
      <br />
      {error.phone}
      <br />
      <InputText
        label="Phone"
        value={form.phone}
        onChange={(e) => handleChange("phone", e)}
      />
      <br />
      {error.email}
      <br />
      <InputText
        label="Email"
        value={form.email}
        onChange={(e) => handleChange("email", e)}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormBasicValidation;

import { useState } from "react";

function Form() {
  const [form, setForm] = useState({});

  const updateFields = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  console.log("FORM : ", form);
  return (
    <>
      {/* Name */}
      <input
        type={"text"}
        onChange={(event) => updateFields("name", event.target.value)}
      />
      {/* Phone Number */}
      <input
        type={"text"}
        onChange={(event) => updateFields("phone", event.target.value)}
      />
    </>
  );
}

export default Form;

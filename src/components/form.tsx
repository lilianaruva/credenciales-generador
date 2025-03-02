import React, { useState } from "react";
import PDFDocument from "./pdfDocument";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    lastname2: "",
    role: "Asociado",
    vigency: "",
    retiree: "",
    from: "",
    image: null,
  });

  const roles = [
    "Asociado",
    "Presidente de Mesa Directiva",
    "Presidente de la Asamblea General",
    "Tesorero",
    "Vice-Presidente de Mesa Directiva",
    "Secretario de la Asamblea General",
    "Secretario de Mesa Directiva",
    "Vocal Regional",
    "Comisario",
  ];

  // Handle input change of user form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === "name" || name === "lastname" || name === "lastname2") {
      updatedValue = value.toUpperCase();
    }

    setUser({
      ...user,
      [name]: updatedValue,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setUser({
      ...user,
      image: file,
    });
  };

  return (
    <div className="modal-container">
      <label>Nombre</label>
      <input
        value={user.name}
        name="name"
        type="text"
        onChange={handleInputChange}
      ></input>
      <div className="lastname-row">
        <div className="item">
          <label>Apellido Paterno</label>
          <input
            value={user.lastname}
            name="lastname"
            type="text"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="item">
          <label>Apellido Materno</label>
          <input
            value={user.lastname2}
            name="lastname2"
            type="text"
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <label>Role</label>
      <select value={user.role} name="role" onChange={handleInputChange}>
        {roles.map((r) => {
          return <option value={r}>{r}</option>;
        })}
      </select>
      <label>Jubilado desde:</label>
      <input
        value={user.retiree}
        name="retiree"
        type="text"
        onChange={handleInputChange}
        placeholder="DD/MM/AAAA"
      ></input>
      <label>Vigencia</label>
      <input
        value={user.vigency}
        name="vigency"
        type="text"
        onChange={handleInputChange}
        placeholder="DD/MM/AAAA"
      ></input>
      <label>Asociado desde</label>
      <input
        value={user.from}
        name="from"
        type="text"
        onChange={handleInputChange}
        placeholder="DD/MM/AAAA"
      ></input>
      <label>Foto</label>
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <PDFDocument form={user} />
    </div>
  );
};

export default Form;

import "./Form.css";
import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({fullname: ""});

  let handleInputChange = (event) => {
    setFormData((currData) => {
        return {...currData, [event.target.name] : event.target.value}
    });
  };

  let submit = (event) => {
    event.preventDefault();
    console.log(formData.fullname);
    setFormData({fullname: ""});
  };
  return (
    <>
      <h1>Form</h1>
      <div className="form">
        <form action="./action" onSubmit={submit}>
          <label htmlFor="fullname">Full Name : </label>
          <br />
          <input
            type="text"
            placeholder="enter your full name"
            id="fullname"
            onChange={handleInputChange}
            name="fullname"
            value={formData.fullname}
          />
          <br />
          <button>submit</button>
          <p>{formData.fullname}</p>
        </form>
      </div>
    </>
  );
}

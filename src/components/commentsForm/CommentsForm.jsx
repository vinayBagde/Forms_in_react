import "./CommentsForm.css";
import { useState } from "react";
 import { useFormik } from "formik";

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "username cannot be empty";
    } 

    return errors;
  };
export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remark: "",
  //   rating: 5,
  // });

   const formik = useFormik({
     initialValues: {
       username: "",
       remark: "",
       rating: 5,
     },
     validate,
     onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
        
     },
   });

  // let [isValid, setIsValid] = useState(true);

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   // if (!formData.username) {
  //   //   console.log("username cannot be empty");
  //   //   setIsValid(false);
  //   //   return;
  //   // }
  //   addNewComment(formData);
  //   setFormData({ username: "", remark: "", rating: 5 });
  // };

  return (
    <>
      <div id="form">
        <h2>Give A Comment!</h2>
        <form
          action="./action"
          // onSubmit={handleSubmit}
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="username" className="formName">
            User name :{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="username"
            id="username"
            // onChange={handleInputChange}
            onChange={formik.handleChange}
            name="username"
            // value={formData.username}
            value={formik.values.username}
          />
          {/* {!isValid && <p style={{ color: "red" }}>username cannot be empty</p>} */}
          {formik.errors.username ? (
            <p style={{color: "red"}}>{formik.errors.username}</p>
          ) : null}
          <br />
          <label htmlFor="remark" className="formName">
            Remark :{" "}
          </label>
          <br />
          <textarea
            placeholder="remark"
            id="remark"
            // onChange={handleInputChange}
            onChange={formik.handleChange}
            name="remark"
            // value={formData.remark}
            value={formik.values.remark}
          />
          <br />
          <label htmlFor="rating" className="formName">
            Rating :{" "}
          </label>
          <br />
          <input
            type="number"
            min={1}
            max={5}
            // value={formData.rating}
            value={formik.values.rating}
            // onChange={handleInputChange}
            onChange={formik.handleChange}
            name="rating"
            id="rating"
          />

          <br />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </>
  );
}

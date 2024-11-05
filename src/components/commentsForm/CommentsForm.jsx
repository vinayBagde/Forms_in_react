import "./CommentsForm.css";
import { useState } from "react";
export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  let [isValid, setIsValid] = useState(true);

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.username) {
      console.log("username cannot be empty");
      setIsValid(false);
      return;
    }
    addNewComment(formData);
    setFormData({ username: "", remark: "", rating: 5 });
  };

  return (
    <>
      <div id="form">
        <h2>Give A Comment!</h2>
        <form action="./action" onSubmit={handleSubmit}>
          <label htmlFor="username" className="formName">
            User name :{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleInputChange}
            name="username"
            value={formData.username}
          />
          {!isValid && <p style={{ color: "red" }}>username cannot be empty</p>}
          <br />
          <label htmlFor="remark" className="formName">
            Remark :{" "}
          </label>
          <br />
          <textarea
            placeholder="remark"
            id="remark"
            onChange={handleInputChange}
            name="remark"
            value={formData.remark}
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
            value={formData.rating}
            onChange={handleInputChange}
            name="rating"
            id="rating"
          />

          <br />
          <button>Add Comment</button>
        </form>
      </div>
    </>
  );
}

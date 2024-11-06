import "./ShowComment.css";
import { useState } from "react";
import CommentsForm from "../commentsForm/CommentsForm.jsx";
import Formik from "../formik/Formik.jsx";
export default function ShowComment() {
  let [comments, setComments] = useState([
    { username: "@usher", remark: "great work", rating: 5 },
  ]);

  let addNewComment = (comment) => {
    setComments((arr) => {
      return [...arr, comment];
    });
  };
  return (
    <>
      <h2>All Comments</h2>

      {comments.map((comment, idx) => {
        return (
          <div id="commentBox" key={idx}>
            <span>{comment.remark}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <br />
            <p>- {comment.username}</p>
          </div>
        );
      })}
      <hr />

      <CommentsForm addNewComment={addNewComment} />
      {/* <Formik addNewComment={addNewComment}/> */}
    </>
  );
}

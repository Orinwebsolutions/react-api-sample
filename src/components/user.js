import React from "react";

const User = (props) => {
  const { userId, title, body, id } = props.item;
  // const {singleResult} = props.singleResult;
  let linkExpression = props.singleResult === false ? "User Detail" : "Go back";
  let postID = props.singleResult === false ? id : "";
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>{userId}</td>
      <td>
        <button
          onClick={() => props.handleChildSelect(postID)}
          className="btn btn-primary link-button"
          variant="outline-primary"
        >
          {linkExpression}
        </button>
      </td>
    </tr>
  );
};

export default User;

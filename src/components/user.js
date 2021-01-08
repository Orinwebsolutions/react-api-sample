import React from "react";

const User = (props) => {
  const { userId, title, body, id } = props.item;
  let linkExpression,postID,clsNames;
  if(props.singleResult === false ){
    linkExpression = "User Detail";
    postID = id ;
    clsNames = "btn btn-primary"
  }else{
    linkExpression = "Go back";
    postID = "";
    clsNames = "btn btn-secondary"
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>{userId}</td>
      <td>
        <button
          onClick={() => props.handleChildSelect(postID)}
          className={clsNames}
          variant="outline-primary"
        >
          {linkExpression}
        </button>
      </td>
    </tr>
  );
};

export default User;

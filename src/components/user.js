import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.item.userId,
      userTitle: this.props.item.title,
      userBody: this.props.item.body,
      id: this.props.item.id,
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.id}</td>
        <td>{this.state.userTitle}</td>
        <td>{this.state.userBody}</td>
        <td>{this.state.userid}</td>
        <td><a href={"postid="+this.state.id}>User Detail</a></td>
      </tr>
    );
  }
}

export default User;

import React, { Component } from "react";
import User from "./user";
import Table from "react-bootstrap/Table";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true,
          });
        }
      );
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((item) => (
            <User item={item} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Users;

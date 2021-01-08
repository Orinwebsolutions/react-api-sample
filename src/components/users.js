import React, { Component } from "react";
import User from "./user";

class Users extends Component {
  render() {
    if (!this.props.loading) {
      return (
        <div role="status" className="spinner-border">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      if (!this.props.error) {
        return (
          <table className="table table-striped table-bordered table-hover">
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
              {this.props.items.map((item) => (
                <User
                  key={item.id}
                  handleChildSelect={this.props.onHandleChild}
                  singleResult={this.props.singleResult}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        );
      } else {
        return (
          <div class="alert alert-warning" role="alert">
            There's error API, please try again later
          </div>
        );
      }
    }
  }
}

export default Users;

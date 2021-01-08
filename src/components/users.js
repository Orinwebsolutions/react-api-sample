import React, { Component } from "react";
import User from "./user";
// import Table from "react-bootstrap/Table";
// import Spinner from "react-bootstrap/Spinner";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      loading: false,
      singleResult: false,
    };
  }
  componentDidMount() {
    this.triggerApi("");
  }

  onChildSelect = (id) => {
    // console.log(id);
    this.triggerApi(id);
  };

  triggerApi(id) {
    let apiurl = "https://jsonplaceholder.typicode.com/posts/";
    apiurl = !id ? apiurl : apiurl + id;

    this.setState({
      loading: true,
    });
    fetch(apiurl)
      .then((res) => res.json())
      .then(
        (result) => {
          Array.isArray(result)
            ? this.setState({ singleResult: false })
            : this.setState({ singleResult: true });
          result = Array.isArray(result) ? result : [result];
          this.setState({
            isLoaded: true,
            items: result,
            loading: false,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true,
            loading: false,
          });
        }
      );
  }

  render() {
    if (this.state.loading) {
      return (
        <div role="status" class="spinner-border">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
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
            {this.state.items.map((item) => (
              <User
                key={item.id}
                handleChildSelect={this.onChildSelect}
                singleResult={this.state.singleResult}
                item={item}
              />
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default Users;

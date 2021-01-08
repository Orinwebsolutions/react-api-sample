import "./App.css";
import React, { Component } from "react";
import Navibar from "./components/navibar";
import Users from "./components/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      singleResult: false,
      itemCount: null,
    };
  }
  componentDidMount() {
    this.triggerApi("");
  }

  onChildSelect = (id) => {
    this.triggerApi(id);
  };

  triggerApi(id) {
    let apiurl = "https://jsonplaceholder.typicode.com/posts/";
    apiurl = !id ? apiurl : apiurl + id;

    fetch(apiurl)
      .then((res) => res.json())
      .then(
        (result) => {
          Array.isArray(result)
            ? this.setState({
                isLoaded: true,
                singleResult: false,
                itemCount: result.length,
                items: result,
              })
            : this.setState({
                isLoaded: true,
                singleResult: true,
                itemCount: "1",
                items: [result],
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
      <div className="App">
        <Navibar totalFetchCount={this.state.itemCount} />
        <div className="container">
          <Users
            onHandleChild={this.onChildSelect}
            singleResult={this.state.singleResult}
            items={this.state.items}
            loading={this.state.isLoaded}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;

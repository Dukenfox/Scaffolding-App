import React from "react";
import ReactDOM from "react-dom";
import Season from "./Season";
import Loading from "./Loading";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: "We can't seem to find you!" })
    );
  }

  content() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Season lat={this.state.lat} />;
    }
    return (
      <div>
        <Loading message="Please Accept Location Request." />
      </div>
    );
  }
  render() {
    return <div className="border">{this.content()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

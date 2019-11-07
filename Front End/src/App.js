import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import AlbumList from "./components/AlbumList/AlbumList";
import Fileupload from "./components/fileupload/fileupload";
import Userprofile from "./components/UserCard/UserCard";
import SongTrans from "./components/SongTrans/SongTrans";
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
      user: []
    };
  }

  loadUser = data => {
    this.setState({
      user: data
    });
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "fileupload") {
      this.setState({ isSignedIn: true });
    } else if (route === "userprofile") {
      this.setState({ isSignedIn: true });
    } else if (route === "songtransaction") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {route === "home" ? (
          <AlbumList UserID={this.state.user[0].UserID} />
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === "fileupload" ? (
          <Fileupload onRouteChange={this.onRouteChange} />
        ) : route === "userprofile" ? (
          <Userprofile
            onRouteChange={this.onRouteChange}
            UserID={this.state.user[0].UserID}
          />
        ) : route === "songtransaction" ? (
          <SongTrans UserID={this.state.user[0].UserID} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import { Recoverable } from "repl";

class Userprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserN: "",
      UserP: "",
      UserE: "",
      UserNN: "",
      readOnly: true,
      Message: ""
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() {
    console.log("This.props.UserID " + this.props.UserID);
    fetch("http://localhost:3000/userprofile", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UserID: this.props.UserID
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output != []) {
          this.setState({
            UserN: output[0].Username,
            UserNN: output[0].Name,
            UserE: output[0].Email,
            UserP: output[0].Password
          });
        }
      });
  }

  onEditpress = () => {
    console.log("HGERE");
    this.state.readOnly = false;
    this.forceUpdate();
  };

  onSubmitProfile = () => {
    if (document.getElementById("Username").value === "") {
      document.getElementById("Username").value = document.getElementById(
        "Username"
      ).placeholder;
    }

    if (document.getElementById("Password").value === "") {
      document.getElementById("Password").value = document.getElementById(
        "Password"
      ).placeholder;
    }

    if (document.getElementById("Name").value === "") {
      document.getElementById("Name").value = document.getElementById(
        "Name"
      ).placeholder;
    }

    if (document.getElementById("Email").value === "") {
      document.getElementById("Email").value = document.getElementById(
        "Email"
      ).placeholder;
    }
    console.log(document.getElementById("Username").value);
    console.log(document.getElementById("Password").value);
    console.log(document.getElementById("Name").value);
    console.log(document.getElementById("Email").value);
    fetch("http://localhost:3000/editprofile", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.getElementById("Username").value,
        password: document.getElementById("Password").value,
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        userid: this.props.UserID
      })
    })
      .then(this.handleErrors)
      .then(responses => {
        if ((responses = "Ok")) {
          this.setState({
            readOnly: true,
            Message: "Success"
          });
          this.forceUpdate();
        }
      })
      .catch(error => console.log(error.response));
  };

  render() {
    const { onRouteChange } = this.props;
    var { UserN, UserP, UserE, UserNN, readOnly } = this.state;
    console.log(UserN + UserNN + UserE + UserP);
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">My Profile</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  name="email-address"
                  id="Name"
                  placeholder={UserNN}
                  readOnly={readOnly}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  name="email-address"
                  id="Email"
                  placeholder={UserE}
                  readOnly={readOnly}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Username
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  name="email-address"
                  id="Username"
                  placeholder={UserN}
                  readOnly={readOnly}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  name="email-address"
                  id="Password"
                  placeholder={UserP}
                  readOnly={readOnly}
                />
              </div>
              <div className="mv3">
                <label className="db red fw6 lh-copy f3" htmlFor="password">
                  {this.state.Message}
                </label>
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Edit"
                onClick={this.onEditpress}
              />
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
                onClick={this.onSubmitProfile}
              />

              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Back"
                onClick={() => {
                  this.props.onRouteChange("home");
                }}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Userprofile;

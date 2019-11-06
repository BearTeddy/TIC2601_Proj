import React from "react";
import { Recoverable } from "repl";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserN: "",
      UserP: "",
      UserE: "",
      UserNN: "",
      readOnly: true
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

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/editprofile", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword
      })
    })
      .then(this.handleErrors)
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
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
                  placeholder={UserN}
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
                  placeholder={UserNN}
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
              />
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Back"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default UserCard;

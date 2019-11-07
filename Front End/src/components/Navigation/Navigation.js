import React from "react";
import Logo from "../logo/logo";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <Logo />
        <div className="" display="inline-block">
          <a
            onClick={() => onRouteChange("home")}
            className="f3 link dim black underline pa3 pointer"
          >
            Home
          </a>
          <a
            onClick={() => onRouteChange("userprofile")}
            className="f3 link dim black underline pa3 pointer"
          >
            Profile
          </a>
          <a
            onClick={() => onRouteChange("songtransaction")}
            className="f3 link dim black underline pa3 pointer"
          >
            Song Transaction
          </a>
          <a
            onClick={() => onRouteChange("fileupload")}
            className="f3 link dim black underline pa3 pointer"
          >
            Upload
          </a>
          <a
            onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign Out
          </a>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <Logo />
        <div className="" display="inline-block">
          <a
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </a>
          <a
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </a>
        </div>
      </nav>
    );
  }
};
export default Navigation;

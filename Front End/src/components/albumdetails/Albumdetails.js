import React from "react";

class Albumdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataresults: []
    };
  }

  onMusicClick = event => {
    //Download Codes here
  };

  componentDidMount() {
    fetch("http://localhost:3000/searchalbdetails", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.props.AlbumName
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          this.setState({
            dataresults: output
          });
        }
      });
  }

  render() {
    var imgsrc = "http://localhost:3000/albumimages/" + this.props.AlbumArtwork;
    return (
      <article class="pa3 pa5-ns">
        <h1 class="f2"> {this.props.AlbumName} </h1>
        <img src={imgsrc} class="w-50 f5 measure" alt="Photo of outer space" />
        {this.state.dataresults.map((Album, i) => {
          return (
            <p key={i} class="measure lh-copy">
              {i + 1} . {Album.Song_Title}
            </p>
          );
        })}
        <button
          onClick={() => {
            this.props.onRouteChange("allist");
          }}
        >
          BACK
        </button>
      </article>
    );
  }
}

export default Albumdetails;

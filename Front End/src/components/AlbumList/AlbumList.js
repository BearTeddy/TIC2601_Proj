import React from "react";
import Search from "./search.png";
import AlbumCard from "../albumcard/albumCard";
import AlbumDetails from "../albumdetails/Albumdetails";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      keyword: "",
      AlList: [],
      showAlbum: false,
      route: "allist",
      AlbumName: "",
      AlbumArtwork: ""
    };
  }

  // onKeywordChange = event => {
  //   this.setState({ keyword: event.target.value });
  // };

  loadAlbumDetails = data => {
    this.setState({
      AlbumName: data.AlbumName,
      AlbumArtwork: data.AlbumArtwork
    });
  };

  onRouteChange = route => {
    if (route === "album") {
      this.setState({ showAlbum: true });
    } else {
      this.setState({ showAlbum: false });
    }
    this.setState({ route: route });
  };

  onSubmitSearch = event => {
    console.log(this.input.current.value);
    fetch("http://localhost:3000/searchalb", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: this.input.current.value
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          console.log(output[0]);
          this.setState({
            AlList: output
          });
        }
      });
  };

  componentDidMount() {
    fetch("http://localhost:3000/searchalb", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: ""
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          this.setState({
            AlList: []
          });
          this.setState({
            AlList: output
          });
        }
      });
  }

  render() {
    const { route, AlbumName, AlbumArtwork } = this.state;
    return (
      <div>
        {route === "allist" ? (
          <article style={{ display: "inline" }}>
            <div className="flex dt pa3 pa4-ns" style={{ textAlign: "left" }}>
              <h2 className="f3 fw4 mv0" style={{ widtYh: "100px" }}>
                Albums
              </h2>
              <input
                id="name"
                ref={this.input}
                className="w-20 pd5"
                type="search"
                placeholder="Search Albums"
                aria-describedby="name-desc"
                style={{ float: "right" }}
              />
              <button onClick={this.onSubmitSearch}>Search</button>
            </div>
            {this.state.AlList.map((Album, i) => {
              return (
                <AlbumCard
                  key={Album.AlbumID}
                  loadAlbumDetails={this.loadAlbumDetails}
                  onRouteChange={this.onRouteChange}
                  Album_Title={Album.Album_Title}
                  songtitle={Album.Song_Title}
                  artist={Album.Name}
                  imglink={Album.Album_Artwork}
                />
              );
            })}
          </article>
        ) : (
          <AlbumDetails
            UserID={this.props.UserID}
            onRouteChange={this.onRouteChange}
            loadAlbumDetails={this.loadAlbumDetails}
            AlbumName={AlbumName}
            AlbumArtwork={AlbumArtwork}
          />
        )}
      </div>
    );
  }
}

export default AlbumList;

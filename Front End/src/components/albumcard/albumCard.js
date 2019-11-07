import React from "react";

class AlbumCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAlbumClick = () => {
    var albdata = {
      AlbumName: this.props.Album_Title,
      AlbumArtwork: this.props.imglink
    };
    this.props.loadAlbumDetails(albdata);
    this.props.onRouteChange("album");
  };

  render() {
    const imgsrc = "http://localhost:3000/albumimages/" + this.props.imglink;
    return (
      <div className="grow" style={{ float: "left" }}>
        <a className="db center mw5 black link dim">
          <img
            className="db ba b--black-10"
            alt="Album Artwork"
            src={imgsrc}
            onClick={this.onAlbumClick}
          />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">SongTitle</dt>
            <dd className="ml0 fw9">{this.props.songtitle}</dd>
            <dt className="clip">Title</dt>
            <dd className="ml0 gray">{this.props.Album_Title}</dd>
          </dl>
        </a>
          <p className="f6 blue"
            onClick={this.onAlbumClick}
          >
            Download
          </p>
      </div>
    );
  }
}

export default AlbumCard;

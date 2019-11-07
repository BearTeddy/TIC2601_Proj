import React from "react";

class Albumdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataresults: []
    };
  }

  onSongCLick(Filepath, SongTitle, Price, SongID) {
    //Download Codes here
    console.log(SongID + " and " + SongTitle + " and " + Price);
    fetch("http://localhost:3000/filedownload", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        songid: SongID,
        price: Price,
        filepath: Filepath,
        songtitle: SongTitle,
        userid: this.props.UserID
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output == "Uploaded!") {
          console.log("OKK");
        }
      });
  }

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
         {/* <h1 class="f2"> {this.props.AlbumName} </h1>
        <img src={imgsrc} class="w-50 f5 measure" alt="Photo of outer space" />
        {this.state.dataresults.map((Album, i) => {
          return (
            <p
              key={i}
              class="measure lh-copy"
              onClick={() => {
                console.log(Album.File_Location);
                this.onSongCLick(
                  Album.File_Location,
                  Album.Song_Title,
                  Album.Price,
                  Album.SongID
                );
              }}
            >
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
        </button>  */}

         <h1 class="f2"> {this.props.AlbumName} </h1>
        
       
        <div className="w3-container" style = {{display : "center"}}>
          <th>
            <img src={imgsrc} class="w-40 f4 measure:1em" alt="Photo of outer space" />
          </th>
          <tbody className="mw5 black link">
            {this.state.dataresults.map((Album, i) => {
              return (
                <tr>
                  <a key={i} className="fm w-40 grow dib ba" 
                      style={{ display: "inline-block", border: "solid; border-width: 1px;"}}
                      onClick={() => {
                      console.log(Album.File_Location);
                      this.onSongCLick(
                        Album.File_Location,
                        Album.Song_Title,
                        Album.Price,
                        Album.SongID
                      );
                    }}
                  >
                  <td>{i+1}</td>
                  <td>.</td>
                  <td className="">{Album.Song_Title}</td>

                </a>
              </tr>
              );
            })}
             
          </tbody>
          <button
            style={{ variant: "info" }}
              onClick={() => {
                this.props.onRouteChange("allist");
              }}
            >
              BACK
          </button> 
        </div> 
      </article>
    );
  }
}

export default Albumdetails;
                  {/* {i+1} . {Album.Song_Title} */}
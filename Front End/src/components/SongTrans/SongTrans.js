import React from "react";

class SongTrans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataresults: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/songtrans", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userid: this.props.UserID
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
  renderTableData() {
    return this.state.dataresults.map((Album, i) => {
      const { Song_Title, CountOf } = Album; //destructuring
      return (
        <tr key={i}>
          <td class="pv3 pr3 bb b--black-20">{Song_Title}</td>
          <td class="pv3 pr3 bb b--black-20">{CountOf}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title"> Song Download Count Table</h1>
        <table id="SongTrans" className="f6 w-100 mw8 center" cellspacing="0">
          <tbody>
            <tr>
              <th className="f3 pv3 pr3 bb b--black-20">Song Name</th>
              <th className="f3 pv3 pr3 bb b--black-20">Download Count</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongTrans;

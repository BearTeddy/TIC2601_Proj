const handleAlbumdetails = db => (req, res) => {
  const { title } = req.body;
  db.query(
    {
      sql:
        "SELECT Name, Album_Artwork,Song_Title, File_Location FROM album a INNER JOIN song b on (b.AlbumID = a.AlbumID AND a.Album_Title = ? ) INNER JOIN artist c on c.ArtistID = b.ArtistID;",
      values: [title]
    },
    function(error, results, fields) {
      if (error) {
        throw error;
      }
      // const isValid = bcrypt.compareSync(password, results[0].Password);
      if (!results) {
        res.status(400).json("Such Keyword does not exists");
      } else {
        // const isValid = bcrypt.compareSync(password, dboutput[0].Password);
        res.send(JSON.stringify(results));
      }
    }
  );
};

module.exports = {
  handleAlbumdetails: handleAlbumdetails
};

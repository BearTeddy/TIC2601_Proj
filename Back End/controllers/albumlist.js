const handleSearch = db => (req, res) => {
  const { keyword } = req.body;
  const val = "%" + keyword + "%";
  db.query(
    {
      sql:
        "SELECT  a.Album_Artwork, a.Album_Title, a.Description, a.Date, a.Price, b.Song_Title, b.File_Location, b.Price, b.Date, c.Name FROM album a INNER JOIN song b on (b.albumID = a.albumID AND b.Song_Title LIKE ?) INNER JOIN artist c ON c.artistID = b.artistID;",
      values: [val]
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
  handleSearch: handleSearch
};

const handleFiledownload = db => (req, res) => {
  const { songid, price, filepath, songtitle, userid } = req.body;

  const dateTime = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  console.log(req.body);
  console.log(
    dateTime + " " + songid + " " + userid + " " + songtitle + " " + price
  );
  db.query(
    {
      sql:
        "INSERT INTO songtransaction (Date_Of_Purchased, SongID, UserID, Song_Title,Price) VALUES (?,?,?,?,?);",
      values: [dateTime, songid, userid, songtitle, price]
    },
    function(error, results, fields) {
      if (error) {
        console.log("SQL Sign in not working");
        throw error;
      } else {
        console.log("SQL success");
        res.status(200).json("Uploaded!");
      }
    }
  );
};

module.exports = {
  handleFiledownload: handleFiledownload
};

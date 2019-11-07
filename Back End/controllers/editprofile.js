const handleEditprofile = db => (req, res) => {
  const { username, name, email, password, userid } = req.body;
  console.log(username + password + name + email);
  if (!username || !password || !email || !name) {
    return res.status(400).json("incorrect form submission");
  }
  db.query(
    {
      sql:
        "UPDATE userdata SET Name = ?, Email =? , Username =? , Password=? WHERE UserID = ?; ",
      values: [name, email, username, password, userid]
    },
    function(error, results, fields) {
      if (error) {
        throw error;
      } else {
        res.status(200).json("Ok");
      }
    }
  );
};

module.exports = {
  handleEditprofile: handleEditprofile
};

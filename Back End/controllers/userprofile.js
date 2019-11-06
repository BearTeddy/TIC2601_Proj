const handleProfile = db => (req, res) => {
  const { UserID } = req.body;
  console.log(UserID);
  db.query(
    {
      sql:
        "SELECT UserID, Name, Username, Password, Email FROM userdata where UserID = ?;",

      values: [UserID]
    },
    function(error, results, fields) {
      if (error) {
        throw error;
      }
      // const isValid = bcrypt.compareSync(password, results[0].Password);
      const data = Object.values(JSON.parse(JSON.stringify(results)));
      console.log(data);
      if (!results) {
        res.status(400).json("User does not exist");
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
};

module.exports = {
  handleProfile: handleProfile
};

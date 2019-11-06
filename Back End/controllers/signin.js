const handleSignin = db => (req, res) => {
  const { username, password } = req.body;
  console.log(username + password);
  if (!username || !password) {
    return res.status(400).json("incorrect form submission");
  }
  db.query(
    {
      sql: "SELECT UserID,Username,Password FROM userdata WHERE Username = ?",
      values: [username]
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
        console.log(data[0].Password + " vs " + password);
        if (data[0].Password === password) {
          console.log("HERE");
          res.send(data);
        } else {
          res.status(400).json("Wrong Credentials");
        }
      }
    }
  );
};

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

module.exports = {
  handleSignin: handleSignin
};

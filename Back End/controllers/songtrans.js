const handleSongtrans = db => (req, res) => {
  const { userid } = req.body;
  db.query(
    {
      sql:
        "SELECT Song_Title, COUNT(*) AS CountOf FROM songtransaction WHERE UserID=? GROUP BY Song_Title	HAVING COUNT(*)>0",
      values: [userid]
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
  handleSongtrans: handleSongtrans
};

const homeRoute = (req, res) => {
  res.send("homeRoute");
};

const testRoute = (req, res) => {
  res.send("testRoute");
};

module.exports = { homeRoute, testRoute };

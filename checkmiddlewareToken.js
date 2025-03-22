let token = "12345";

let checkToken = (req, res, next) => {
  if (!req.query.token) {
    return res.send({
      status: 0,
      msg: "Please Fill The Token",
    });
  }

  if (req.query.token !== token) {
    return res.send({
      status: 0,
      msg: "Please Fill the Correct Token",
    });
  }

  next();
};

module.exports = { checkToken };

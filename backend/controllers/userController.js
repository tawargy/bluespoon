exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 !== 5) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.getAllUsers = (req, res, next) => {
  res.end("all users");
};
exports.getUser = (req, res, next) => {
  res.end("user");
};

exports.addUser = (req, res, next) => {
  res.end("home!!!");
};
exports.updateUser = (req, res, next) => {
  res.end("update");
};

exports.deleteUser = (req, res, next) => {
  res.end("update");
};

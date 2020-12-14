exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 !== 5) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.getAllRecipe = (req, res, next) => {
  res.end("all recipes");
};

exports.getRecipe = (req, res, next) => {
  const id = req.params;

  res.end(`recipe id${id.id}`);
};

exports.postRecipe = (req, res, next) => {
  const data = req.body;
  const datax = Object.assign({ id: 1 }, data);
  res.send({
    status: "success",
    data: {
      tour: datax,
    },
  });
};

exports.updateRecipe = (req, res, next) => {
  res.end("patched");
};

exports.deleteRecipe = (req, res, next) => {
  res.end("deleted");
};

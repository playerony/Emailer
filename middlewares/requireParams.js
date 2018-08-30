module.exports = (req, res, next) => {
  if (!req.params) {
    return res.status(403).send({ error: "Params are not defined" });
  }

  next();
};

module.exports = (req, res, next) => {
  const { adminPassword } = req.body;

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json({ msg: "Wrong admin password" });
  }

  next();
};
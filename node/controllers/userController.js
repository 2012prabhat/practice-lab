exports.getCurrentUser = async (req, res) => {
  res.status(200).json({
    name: "Prabhat Kumar",
    age: 28,
    gender: "Male",
  });
};

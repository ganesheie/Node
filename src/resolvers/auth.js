const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authResolvers = {
  register: async ({ username, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return { ...user.toJSON(), token };
  },
  login: async ({ username, password }) => {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    console.log("user role " + user.role);
    return { ...user.toJSON(), token };
  },
};

module.exports = authResolvers;

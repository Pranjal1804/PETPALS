import bcrypt from "bcryptjs";

export const users = [];

export const addUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(user);
};

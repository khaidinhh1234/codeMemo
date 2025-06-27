import { User } from "../models/User";
import bcrypt from "bcrypt";
export const Register = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    // Kiểm tra xem email đã tồn tại chưa
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    } else if (password !== confirmPassword) {
      return res.status(400).json({ message: "Mật khẩu không khớp" });
    }
    const hashedPassWord = await bcrypt.hash(password, 10);
    const NewUser = {
      email,
      password: hashedPassWord,
      role: "user",
    };
    // Tạo người dùng mới
    const user = await User.create(NewUser);
    res.status(200).json({
      message: "Đăng ký thành công",
      data: user,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Kiểm tra xem email đã tồn tại chưa
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Tài khoản không tồn tại" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Mật khẩu không đúng" });
    }
    res.status(200).json({
      message: "Đăng nhập thành công",
      data: user,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

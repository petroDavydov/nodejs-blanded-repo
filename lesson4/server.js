// registration- сохранение нового пользователя в базу данных
// authorization - проверка credention user,  логин, пароль , токен
// authentification - проверка прав доступа к определенным ресурсам сайта(роли, подписка, возможность создавать, удалять читать определенние данние)
////*** Валидный токен:
//а) Не истекло время действия
//б) Успешно разшифрован с помощью SECRET KEY
//  ===================================
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const { colors } = require("./helpers"); //так работает colors без осветления
const User = require("./models/User");
dotenv.config({ path: "./config/.env" });
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middlewares/auth");
// ============handlebars===================
const { engine } = require("express-handlebars");
// =========nodemaulerService=========
const nodemailerService = require("./services/nodemailerService");

app.use(cors());
app.use(express.json());
//  включаем отправку формы
const urlEncodedParser = express.urlencoded({ extended: false });
app.use(urlEncodedParser);
// set handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

connectDB();
// set routes

const books = require("./routes/booksRouts");
const { findByIdAndUpdate } = require("./models/User");
// =============
const auth= require('./routes/authRouter')

app.use("/api/v1/books", books); // путь обработчик роутера
app.use('/api/v1', auth)

// app.post("/register",
//   async (req, res) => {
//     //1.Получать данные от пользователя(email,password,name, etx)
//     const { email, password } = req.body;

//     //2. Валидация полей пользователя
//     //   if (!password || !email) {
//     //     return res.status(400).json({ code: 400, message: "Enter correct fields" });
//     //   }
//     //3. Проверяем наличие пользователя в базе
//     const user = await User.findOne({ email });
//     //4. Если пользователь есть то сообщаем что они есть в базе
//     if (user) {
//       return res
//         .status(409)
//         .json({ code: 409, message: "User is already exist" });
//     }
//     //5. Если пользователя нет, то ХЕШИРУЕМ пароль
//     const hashPassword = await bcryptjs.hash(password, 5);
//     console.log(hashPassword);
//     //6. Готовим пользователя к базе данных
//     const candidate = await User.create({
//       ...req.body,
//       password: hashPassword,
//     });
//     console.log(candidate);
//     //7. Генерируем токен и присваиваем нашему пользователю
//     const token = await jwt.sign(
//       {
//         user_id: candidate._id,
//       },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "5h" }
//     );
//     candidate.token = token;
//     await candidate.save();
//     //8. Отправить сообщение - "Успешная регистрация"
//     return res
//       .status(201)
//       .json({ code: 201, message: "User succsessfuly created" });
//   }
// );

// app.post("/login", async (req, res) => {
//   //1.Получать данные от пользователя(email,password,name, etx)
//   const { email, password } = req.body;
//   console.log(req.user);
//   //2. Валидация полей пользователя
//   if (!password || !email) {
//     return res.status(400).json({ code: 400, message: "Enter correct fields" });
//   }
//   //3. Проверяем наличие пользователя в базе
//   const user = await User.findOne({ email });
//   //4. Если пользователь есть то проверяем логин пароль на валидность.
//   if (!user) {
//     return res
//       .status(401)
//       .json({ code: 401, message: "No such User, please register" });
//   }
//   //Если логин или пароль не валидний то ответ 400 - Неверний логин или пароль
//   const passwordFromDB = await bcryptjs.compare(password, user.password);

//   if (user.email !== email || !passwordFromDB) {
//     return res
//       .status(401)
//       .json({ code: 401, message: "Wrong password or login" });
//   }

//   //5. Если логин и пароль валидный,проверяем токен на валидность в базе данных
//   const [Bearer, token] = req.headers.authorization.split(" ");

//   if (!token) {
//     const createToken = await jwt.sign(
//       {
//         user_id: user._id,
//       },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "5h" }
//     );
//     user.token = createToken;
//     await user.save();
//   }

//   // verify a token symmetric
//   // jwt.verify(user.token, process.env.JWT_SECRET_KEY, (err, decoded)=> {
//   //   console.log(decoded) // bar
//   //   console.log(err.message) // bar
//   // });

//   // invalid token - synchronous
//   //6.Если токен валидный пропускаем дальше, если нет, то выдаем новый токен сразу
//   try {
//     const decoded = jwt.verify(user.token, process.env.JWT_SECRET_KEY);
//     if (decoded.user_id) {
//       //7. Пользователь успешно залогинился - сообщение.

//       return res.status(200).json({ code: 200, message: "Login Succsess" });
//     }
//     console.log(decoded.user_id);
//   } catch (err) {
//     const token = await jwt.sign(
//       {
//         user_id: user._id,
//       },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "5h" }
//     );
//     user.token = token;
//     await user.save();
//     //7. Пользователь успешно залогинился - сообщение.
//     return res.status(200).json({ code: 200, message: "Login Succsess" });
//   }
// });
// app.get("/logout", verifyToken, async (req, res) => {
//   //1. Получаем токен из заголовков
//   console.log(req.user);
//   //   if (req.user.user_id) {
//   //     const user = await User.findById(req.user.user_id);
//   //     user.token = null;
//   //     await user.save();
//   //     return res.status(200).json({ code: 200, message: "Logout Succsess" });
//   //   }
//   if (req.user.user_id) {
//     const user = await User.findByIdAndUpdate(req.user.user_id, {
//       token: null,
//     });

//     return res.status(200).json({ code: 200, message: "Logout Succsess" });
//   }

//   //2. Разшифровуем токен
//   //3. Если в токене есть payload_id, то в базе ставим token=null
//   //4. Если в токене нет payload_id, то он разлогинился либо неправильный токен
// });

app.get("/comment", (req, res) => {
  res.render("comment", { pizza: "napoleon" });
});

app.get("/about", (req, res) => {
  res.render("about");
});
// =======Отправка формы=========
app.post("/commentform", async (req, res) => {
  try {
    await nodemailerService(req.body);
    res.status(200).redirect("comment");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const { PORT } = process.env || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan);
});

process.on("unhandledRejection", (error, _) => {
  if (error) {
    console.log(`ERROR: ${error.message}`.red);
    server.close(() => process.exit(1)); //єтот код ошибки надо описать в readme.md
  }
});
// ==========================================

import express from "express";
import passport from "passport";
import { BasicStrategy } from "passport-http";
import bcrypt from "bcrypt";

const app = express();

const users = [
  {
    username: "admin",
    name: "Guillermo Rodas",
    email: "me@guillermorodas.com",
    password: "$2b$10$jTCd14vnB24Wy.f8BHr0SOCIjQgfEdN3aeZcbXdBLgNtIBDZ6iICm",
  },
];

passport.use(
  new BasicStrategy(function (userid, password, done) {
    const user = users.find((user) => user.username === userid);

    if (!user) {
      return done(null, false);
    }

    if (bcrypt.compareSync(password, user.password)) {
      const { password, ...userWithoutPassword } = user;
      return done(null, userWithoutPassword);
    } else {
      done(null, false);
    }
  })
);

app.get("/public", (req, res) => {
  res.status(200).json({ message: "public!" });
});

app.get(
  "/private",
  passport.authenticate("basic", { session: false }),
  (req, res) => {
    res.status(200).json({ message: "private!", user: req.user });
  }
);

app.listen(3000, () => {
  console.log("🌍 Server is running on port 3000");
});

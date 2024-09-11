const Books = require("../controllers/booksController");
const User = require("../controllers/userController");

const router = require("express").Router();

router.get("/", Books.get);
router.post("/user/", User.insert);
router.post("/login/", User.login);
router.post("/books/", Books.insert);
router.put("/books/:id", Books.update);
router.delete("/books/:id", Books.delete);

module.exports = router
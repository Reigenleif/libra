const Books = require("../models/books");
const Borrowed = require("../models/borrowed");
const parseToken = require("../token/parse-token");

exports.navigateByToken = (req, res) => {
  res.render("script", { src: "js/tcheck-book.js" });
};

exports.getBookList = (req, res, n) => {
  const token = req.query.token;
  const userData = parseToken(token);
  
  // if token didn't valid
  if (!userData) {
    res.render("error", { msg: "Error: Bad Token" });
  } else {
    res.render("books", {
      bookdata: Books.data,
      borr: Borrowed.getBorrow(userData.id,stred=true),
      uname: userData.name
    });
  }
};
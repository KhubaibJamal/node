reqFilter = (req, res, next) => {
    if (!req.query.age) {
        return res.send("provide age");
    } if (req.query.age < 18) {
        return res.send("under age");
    } else {
        next();
    }
}

module.exports = { reqFilter };
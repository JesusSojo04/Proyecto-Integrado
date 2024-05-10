const getIndex = (req, res) => {
    res.render('home-page');
};

const getSignUp = (req, res) => {
    res.render('sign-up');
};
const getLogIn = (req, res) => {
    res.render('log-in');
};
const getList = (req, res) => {
    res.render('content-list');
};
const getDetail = (req, res) => {
    res.render('content-detail');
};

module.exports = {
    getIndex,
    getSignUp,
    getLogIn,
    getList,
    getDetail
};
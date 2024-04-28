const getIndex = (req, res) => {
    res.render('home-page');
};

const getSignUp = (req, res) => {
    res.render('sign-up');
};
const getLogIn = (req, res) => {
    res.render('log-in');
}

module.exports = {
    getIndex,
    getSignUp,
    getLogIn

};
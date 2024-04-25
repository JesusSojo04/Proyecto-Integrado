const getIndex = (req, res) => {
    res.render('home-page');
};

const getRegistro = (req, res) => {
    res.render('registro');
};

module.exports = {
    getIndex,
    getRegistro

};
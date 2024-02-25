const Sport = require('../controllers/sport');

module.exports = function(apmp) {
    app.route('/sport/tour/match').get(async (req, res, next) => {
        try {
            return res.json(await Sport.getAllSportsToursAndMatches());
        } catch (err) {
            return next(err);
        }
    });
}
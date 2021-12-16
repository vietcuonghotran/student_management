const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose')

class OfficerController {

    // [GET] /news
    // index(req, res, next) {
    //     // res.render('news');
    //     Course.find({})
    //         .then(courses => {
    //             res.render('news', {courses: multipleMongooseToObject(courses)});
    //         })
    //         .catch(next);
    // }

    info (req, res) {
        res.render('users/home', {layout: 'officer.hbs'});
    }

    createAccount(req, res){
        res.render('users/officer/create_account', {layout: 'officer.hbs'});
    }

    store(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/create_account'))
            .catch(err => {});
    }

    updateInfo (req, res, next) {
        User.find({})
        .then(users => {
            res.render('users/officer/update_info', {layout: 'officer.hbs', users: multipleMongooseToObject(users)});
        })
        .catch(next);
    }

    report (req, res) {
        res.render('users/officer/report', {layout: 'officer.hbs'});
    }

}

module.exports = new OfficerController;
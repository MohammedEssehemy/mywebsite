const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmark');
const userAuth = require('../modules/userauthMiddleware');


router.use(userAuth);
router.route('/')
    .post((req, res, next) => {
        console.log(req.body)
        let newBookmark = new Bookmark({
            userId: req.decoded.userId,
            title: req.body.title,
            lat: req.body.lat,
            lng: req.body.lng
        });
        console.log(newBookmark)
        newBookmark.save().then(bookmark => res.json({
            success: true,
            msg: 'Bookmark Added',
            bookmark: bookmark
        })).catch(err => console.log(err));
    })
    .get((req, res, next) => {
        Bookmark.find().exec()
            .then(bookmarks => res.json({
                success: true,
                bookmarks: bookmarks.map(bookmark => {
                    return {
                        _id: bookmark._id,
                        title: bookmark.title,
                        lat: bookmark.lat,
                        lng: bookmark.lng
                    }
                })
            }))
            .catch(err => console.log(err))
    })
router.route('/:id')
    .put((req, res, next) => {
        console.log(req.body)
        let newBookmark = {
            title: req.body.title,
            lat: req.body.lat,
            lng: req.body.lng
        };

        Bookmark.findByIdAndUpdate(req.params.id, newBookmark).exec()
            .then(bookmark => {
                if (bookmark) {
                    return res.json({
                        success: true,
                        bookmark: bookmark
                    })
                }
                res.json({
                    success: false,
                    msg: 'bookmark not found',
                })
            })
            .catch(err => console.log(err))
    })
    .delete((req, res, next) => {
        Bookmark.findByIdAndRemove(req.params.id).exec()
            .then(bookmark => {
                if (bookmark) {
                    return res.json({
                        success: true,
                        message: bookmark
                    })
                }
                res.json({
                    success: false,
                    msg: 'bookmark not found',
                })
            })
            .catch(err => console.log(err));
    })

module.exports = router;
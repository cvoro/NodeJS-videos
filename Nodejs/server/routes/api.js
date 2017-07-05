var express = require('express');
var router = express.Router();
const mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'obama1994',
    database: 'videos',
    port: 3306
});

connection.connect();

//get all videos which are not on black list
router.get('/all', (req, res, next) => {
    connection.query(
        'select * from videos where black_list=0',
        function(err, result, fields) {
            if (err) throw err;
            res.json(result)
        }
    )
});

//get all distinct(unique) dates
router.get('/dates', (req, res, next) => {
    connection.query(
        'select distinct date from videos where black_list=0',
        function(err, result, fields) {
            if (err) throw err;
            res.json(result)
        }
    )
});

//get videos by date
router.post('/videoDate', (req, res, next) => {
    connection.query(
        'select * from videos where date=? and black_list=0', [req.body.date],
        function(err, result, fields) {
            if (err) throw err;
            res.json(result)
        }
    )
});

//get video by id
router.post('/videoID', (req, res, next) => {
    connection.query(
        'select * from videos where id=? and black_list=0', [req.body.id],
        function(err, result, fields) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        }
    )
});

//set video to be in black list
router.put('/videoInBL', (req, res, next) => {
    connection.query(
        'UPDATE videos SET black_list=1 WHERE id=?', [req.body.id],
        function(err, result, fields) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        }
    )
});
//set video off black list
router.post('/videoOffBL', (req, res, next) => {
    connection.query(
        'UPDATE videos SET black_list=0 WHERE id=?', [req.body.id],
        function(err, result, fields) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        }
    )
});


//get all black list videos
router.get('/blackListVideo', (req, res, next) => {
    connection.query(
        'select * from videos where black_list=1',
        function(err, result, fields) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        }
    )
});

//delete bl video
router.delete('/deleteBl/:id', (req, res, next) => {
    connection.query(
        'delete from videos where id=?', [req.params.id],
        function(err, result, fields) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        }
    )
});

module.exports = router;
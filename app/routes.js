var express = require('express');
var router = express.Router();

var playback = require('./routes/playback')
var archive = require('./routes/archive')
var auth = require('./routes/auth')
var playlists = require('./routes/playlists')
var songs = require('./routes/songs')

router.use(playback.routes)
router.use(archive)
router.use(auth)
router.use(playlists)
router.use(songs)

module.exports = router

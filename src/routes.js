const express = require('express');
const multer = require('multer');
const PostController = require('../src/controllers/PostController');
const LikeController = require('../src/controllers/LikeController');
const uploadConfig = require('./config/upload');


const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/Post', PostController.index);
routes.post('/Post', upload.single('image'), PostController.store);

routes.post('/Post/:id/like', LikeController.store);


module.exports = routes;
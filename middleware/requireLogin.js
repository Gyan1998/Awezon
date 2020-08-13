const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'you must be logged in' });
  }
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'you must be logged in' });
    }

    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};


const isAdmin = (req, res, next) => {
  if(req.user&&req.user.isAdmin){
    return next();
  }
  return res.status(401).json({msg:"Admin token is not valid"});
};


module.exports={isAuth,isAdmin};
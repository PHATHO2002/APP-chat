const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const refreshToken = new Schema({

    refreshToken: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

});


module.exports = mongoose.model('refreshtoken', refreshToken);
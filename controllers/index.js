var mongoose = require("mongoose");

exports.indexIndex = function(req, res)
{
    var _aParams = {};
    res.render('index.twig', _aParams);
};


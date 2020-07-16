'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku Berjalan",res)
}; 

//menampilkan data
exports.tampilproduk = function(req,res){
    connection.query('SELECT * FROM produk',function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
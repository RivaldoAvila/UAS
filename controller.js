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

//menambahkan data produk
exports.tambahproduk = function(req,res){
    var id_barang = req.body.id_barang;
    var nama_barang = req.body.nama_barang;
    var stock = req.body.stock;
    var harga_barang = req.body.harga_barang;


    connection.query('INSERT INTO produk (id_barang,nama_barang,stock,harga_barang) VALUES(?,?,?,?)',
    [id_barang,nama_barang,stock,harga_barang],

    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data",res)
        }
    });
    
};

//mengubah data produk
exports.ubahproduk = function(req,res){
    var id_barang = req.body.id_barang;
    var nama_barang = req.body.nama_barang;
    var stock = req.body.stock;
    var harga_barang = req.body.harga_barang;

    connection.query('UPDATE produk SET nama_barang=?, stock=?, harga_barang=? WHERE id_barang=?',[nama_barang,stock,harga_barang,id_barang],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil ubah data", res)
        }
    });
    
};

//menghapus data berdasarkan id
exports.hapusproduk = function(req,res){
    var id = req.body.id_barang;
    connection.query('DELETE FROM produk WHERE id_barang=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Hapus data", res)
        }
    });
};

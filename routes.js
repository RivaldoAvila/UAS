'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/')
    .get(jsonku.index);

    app.route('/tampilproduk')
    .get(jsonku.tampilproduk);

    app.route('/tambahproduk')
    .post(jsonku.tambahproduk);

    app.route('/ubahproduk')
    .put(jsonku.ubahbarang);

   }
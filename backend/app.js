const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require('express-fileupload');
const crypto = require('crypto');
var koneksi = require('cors');
var app = express();

const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_animico',
    port: '3306',
    multipleStatements: true

});
dbs.connect();


var port = 8002;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// INI BUAT NAMPILIN PRODUK
app.get('/Product', (req, res) => {
    var panggilData = 'SELECT * FROM  product';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send(hasilQuery);
        }
    });
});

// INI BUAT NAMPILIN LIST KATEGORI DAN UKURAN DI ADD PRODUCT
app.get('/AddProduct', (req, res) => {
    var panggilData = 'SELECT * FROM  category;'
    panggilData += 'SELECT * FROM size'
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send(hasilQuery);
            console.log(hasilQuery)
        }
    });
});

// INI BUAT NAMBAH PRODUCT
app.post('/AddProduct', (req, res) => {
    var idKategori = req.body.katid;
    var prodsize = req.body.sizeprod;
    var prodname = req.body.namaprod;
    var prodprice = req.body.hargaprod;
    var proddetail = req.body.detailprod;
    var prodgambar = req.files.gambarprod.name;

    // console.log(idKategori)
    // console.log(prodsize)
    // console.log(prodname)
    // console.log(prodprice)
    // console.log(proddetail)
    // console.log(prodgambar)


    // PROTEKSI APABILA FILE KOSONG
    if(idKategori !== '' && prodsize !== '' && prodname !== '' && prodprice !== '' && proddetail !== '' && prodgambar !== '')
    {
        var tampunggambar = req.files.gambarprod
        tampunggambar.mv("./images/" + prodgambar, (err) => {
            if(err)
            {
                console.log('upload failed')
            }
            else{
                console.log('Upload success');
                var data = `INSERT INTO product SET id_category="${idKategori}", id_size="${prodsize}", 
                product_name="${prodname}", product_price="${prodprice}", product_detail="${proddetail}", product_image="${prodgambar}"`
                dbs.query(data,(err,result) => {
                    if(err) throw err;
                    else{
                        res.send('1')
                    }
                })
            }
        })
    }
 });

 // INI BUAT EDIT PRODUCT
app.post('/EditProduct', (req, res) => {
    var idProduk = req.body.prodid;
    var idKategori = req.body.katid;
    var prodsize = req.body.sizeprod;
    var prodname = req.body.namaprod;
    var prodprice = req.body.hargaprod;
    var proddetail = req.body.detailprod;

    // console.log(idProduk)
    // console.log(idKategori)
    // console.log(prodsize)
    // console.log(prodname)
    // console.log(prodprice)
    // console.log(proddetail)
    // console.log(prodgambar)


    // PROTEKSI APABILA FILE KOSONG
    if(req.files) {
        var gambar = req.files.gambarprod.name
        var image = req.files.gambarprod
        image.mv("./images/" + gambar, (err) => {
            if(err)
            {
                console.log('Upload failed')
            }
            else{
                console.log('Upload success')
                var edit = `UPDATE product SET id_category="${idKategori}", id_size="${prodsize}", 
                product_name="${prodname}", product_price="${prodprice}", product_detail="${proddetail}", product_image="${prodgambar}"
                WHERE id = "${idProduk}"`
                dbs.query(edit,(err,result) => {
                    if(err) throw err;
                    else{
                        res.send('1')
                    }
                })
            }
        })
    }
    else{
        var edit = `UPDATE product SET id_category="${idKategori}", id_size="${prodsize}", 
                product_name="${prodname}", product_price="${prodprice}", product_detail="${proddetail}" WHERE id = "${idProduk}"`
                dbs.query(edit,(err,result) => {
                    if(err) throw err;
                    else{
                        res.send('1')
                    }
                })
    }
 });


 // INI BUAT HAPUS PRODUK
 app.post('/RemoveProduct', (req, res) => {
    var idProduk = req.body.inputNol;
    // console.log(idKategori)
    var sql = `DELETE from product where id="${idProduk}"`;
     dbs.query(sql, (kaloError, hasilnya) => {
         if(kaloError){
             throw kaloError;
         } else {
             res.send('1')
         }
     });
 });


// INI BUAT NAMPILIN CATEGORY
app.get('/Category', (req, res) => {
    var panggilData = 'SELECT * FROM  category';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send(hasilQuery);
        }
    });
});

// INI BUAT NAMBAH KATEGORI
app.post('/AddCategory', (req, res) => {
    var namaProduk = req.body.inputSatu;
 //    console.log(namaKategori)
    var sql = `INSERT INTO product VALUES("${''}", "${namaKategori}")`;
     dbs.query(sql, (kaloError, hasilnya) => {
         if(kaloError){
             throw kaloError;
         } else {
             res.send('1')
         }
     });
 });



// INI BUAT NAMBAH KATEGORI
app.post('/AddCategory', (req, res) => {
   var namaKategori = req.body.inputSatu;
//    console.log(namaKategori)
   var sql = `INSERT INTO category VALUES("${''}", "${namaKategori}")`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.send('1')
        }
    });
});

/** UNTUK EDIT KATEGORI*/
app.post('/EditCategory', (req, res) => {
    var idKategori = req.body.inputid;
    var namaKategori = req.body.inputnama;
    console.log(idKategori)
    console.log(namaKategori)

    var queryUpdate = `UPDATE category SET category_name="${namaKategori}" WHERE id="${idKategori}"`;
    dbs.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('1');
        }
    });

});

// INI BUAT HAPUS KATEGORI
app.post('/RemoveCategory', (req, res) => {
   var idKategori = req.body.inputNol;
   console.log(idKategori)
   var sql = `DELETE from category where id="${idKategori}"`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.send('1')
        }
    });
});


// BELOM KEPAKE

// /** UNTUK EDIT KATEGORI*/
// app.post('/EditCategory', (req, res) => {
//     var id = req.body.id;
//     var namaProduk = req.body.namaproduk;
//     var hargaProduk = req.body.harga;
//     var fileName = req.files.file.name;

// // Ketika dapat kiriman yang berbentuk files maka akan dijalankan fungsi ini
//     if(req.files){
        
//         var fungsiFile = req.files.file;

//         fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) => {
//             if(kaloError){
//                 console.log(kaloError);
//                 res.send('Upload failed');
//             } else {
//                 res.send('Upload berhasil');
//             }
//         })
//     }

//     var queryUpdate = `UPDATE produk_samid SET nama_produk = "${namaProduk}", 
//                         harga = "${hargaProduk}", foto_produk = "${fileName}" WHERE id="${id}"`;
//     dbs.query(queryUpdate, (err, result) => {
//         if(err){
//             throw err;
//         } else {
//             res.send('Update berhasil !');
//         }
//     });

// });

// app.get('/getdata/:id', (req, res) => {
//     /** Menyiapkan query untuk ke MySQL */
//     var grabData = `SELECT * FROM produk_samid WHERE id = ${req.params.id}`;
//     /** Mengeksekusi query dengan syntax nodeJS */
//     dbs.query(grabData, (err, hasilquery) => {
//         if(err){
//             /** Mengeluarkan pesan error apabila terjadi kesalahan */
//             throw err;
//         } else {
//             /** Menyiapkan hasil query untuk siap dikirim */
//             res.send(hasilquery);
//         }
//     })
// });


// LOGIN ADMIN
app.post('/adminlogin', (req, res) => {
    var sql = `SELECT * FROM user_admin`;
    dbs.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else {
            var username = req.body.username;
            var password = req.body.password;

            for(var i=0; i < result.length; i++ ){
                if(username === result[i].username && password === result[i].password){
                   
                    res.send(username);
                    break;
                } else if(i === result.length - 1) {
                    res.send('0');
                }
            }
        }
    });
});

app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});
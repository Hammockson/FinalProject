const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require ('express-fileupload');
const crypto = require ('crypto');
var koneksi = require('cors');
var app = express();

const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sqlexercise',
    port: '3306'
});
dbs.connect();


var port = 8002;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    var panggilData = 'SELECT * FROM produk_samid';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.send(hasilQuery);
        }
    });
    
});

app.post('/tambahData', (req, res) => {
   var namaProduk = req.body.inputSatu;
   var hargaProduk = req.body.inputDua;
   var sql = `INSERT INTO produk_samid VALUES("${''}", "${nama_produk}", "${harga}")`;
    dbs.query(sql, (kaloError, hasilnya) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.end('Data berhasil disimpan')
        }
    });
});

app.get('/getdata/:id', (req, res) => {
    var grabData = `SELECT * FROM produk_samid WHERE id = ${req.params.id}`;
    dbs.query(grabData, (nilaiError, hasilquery) => {
        if(nilaiError){
            throw nilaiError;
        }else {
            res.send(hasilquery)
        }
    })
});

app.post('/ubahData', (req, res) => {
    if(req.files){
        console.log(req.files);
        var file = req.files.filename;
        var filename = file.name;
        name.mv("./tampunganFile/"+filename, (kaloError) => {
            if(kaloError){
                console.log(kaloError);
                res.send('Upload Failed')
            }else{
                res.send('Upload BErhasil')
            }
        })
    }
    var id = req.body.id;
    var namaProduk = req.body.namaproduk;
    var hargaProduk = req.body.harga;
    var queryUpdate = `UPDATE produk_samid SET nama_produk = "${namaProduk}", harga = "${hargaProduk}", fotoproduk = "${filename}" WHERE id="${id}"`;
    // console.log(id, namaProduk, hargaProduk)
    dbs.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('Update Berhasil !');
        }
    });
});

app.post('/login', (req, res) => {
    var username = req.body.inputUsername;
    var password = req.body.inputPassword;

    // var passwordUser = password;
    // var passwordEncrypt = crypto.createHash('sha256', secret).update(passwordUser).digest('hex');

    console.log(username);
    console.log(password);
    
    var sql = `SELECT * FROM newusers`;
    dbs.query(sql, (err, result) => {
        if(err){
            throw err;
        } else{

            for(var i=0; i<result.length; i++){
                if(username === result[i].Username && password === result[i].Password){
                    var status = 'oke';
                    res.send(status);
                    break;
                }else if(i === result.length -1){
                    res.send('gagal');
                }
            }
        }
    });
});

app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});
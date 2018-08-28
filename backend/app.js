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
app.use('/images', express.static('images'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ------------------------------------------------------------ADMIN--------------------------------------------

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

// INI BUAT NAMPILIN JUMLAH TSHIRT DI DASHBOARD
app.get('/TotalTshirt', (req, res) => {
    var panggilData = 'SELECT * FROM product WHERE id_category=1';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            // res.send(hasilQuery);
            var count = 0;
            for (var i=0; i<hasilQuery.length; i++)
            {
                count++
            }
            // console.log(count)
            res.send((count).toString())
        }
    });
});

// INI BUAT NAMPILIN JUMLAH SHIRT DI DASHBOARD
app.get('/TotalShirt', (req, res) => {
    var panggilData = 'SELECT * FROM product WHERE id_category=9';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            // res.send(hasilQuery);
            var count = 0;
            for (var i=0; i<hasilQuery.length; i++)
            {
                count++
            }
            // console.log(count)
            res.send((count).toString())
        }
    });
});

// INI BUAT NAMPILIN JUMLAH HOODIE DI DASHBOARD
app.get('/TotalHoodie', (req, res) => {
    var panggilData = 'SELECT * FROM product WHERE id_category=3';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            // res.send(hasilQuery);
            var count = 0;
            for (var i=0; i<hasilQuery.length; i++)
            {
                count++
            }
            // console.log(count)
            res.send((count).toString())
        }
    });
});

// INI BUAT NAMPILIN JUMLAH CATEGORY DI DASHBOARD
app.get('/TotalCategory', (req, res) => {
    var panggilData = 'SELECT * FROM category';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            // res.send(hasilQuery);
            var count = 0;
            for (var i=0; i<hasilQuery.length; i++)
            {
                count++
            }
            // console.log(count)
            res.send((count).toString())
        }
    });
});

// INI BUAT NAMPILIN JUMLAH USER DI DASHBOARD
app.get('/TotalUser', (req, res) => {
    var panggilData = 'SELECT * FROM user_client';
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            // res.send(hasilQuery);
            var count = 0;
            for (var i=0; i<hasilQuery.length; i++)
            {
                count++
            }
            // console.log(count)
            res.send((count).toString())
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

    console.log(req.body)


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
                var data = `INSERT INTO product SET id_category="${idKategori}", 
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
    // console.log(gambar)


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
                var edit = "UPDATE `product` SET `id_category`=?,`product_name`=?,`product_price`=?,`product_detail`=?,`product_image`=? WHERE `id`=?"
                dbs.query(edit,[idKategori,prodname,prodprice,proddetail,gambar,idProduk],(err,result) => {
                    if(err) throw err;
                    if(result != undefined){
                    res.send('1')
                    console.log('Upload success')
                    }
                })
            }
        })
    }
    else{
        var edit = `UPDATE product SET id_category="${idKategori}", 
                product_name="${prodname}", product_price="${prodprice}", product_detail="${proddetail}" WHERE id = "${idProduk}"`
                dbs.query(edit,(err,result) => {
                    if(err) throw err;
                    else{
                        console.log("Sukses")
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
app.post('/Category', (req, res) => {
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

// TARIKINVOICE
app.get('/Invoice', (req, res) => {
    var panggilData = 'SELECT * FROM  invo';
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

// ------------------------------------------------------------USER--------------------------------------------------------------


// INI BUAT NAMBAH USER (REGISTER)
app.post('/AddUser', (req, res) => {
    var userfname = req.body.cfname;
    var userlname = req.body.clname;
    var userusername = req.body.cusername;
    var useremail = req.body.cemail;
    var userpassword = req.body.cpassword;
    var userphone = req.body.cphone;
    var useraddress = req.body.caddress;
    // var useravatar = req.files.avatarc.name;

    console.log(req.body)

    var sql = `INSERT INTO user_client (firstname, lastname, username, password, email, phone, address) values ('${userfname}','${userlname}','${userusername}','${userpassword}','${useremail}','${userphone}','${useraddress}')`;
    // var sql = `INSERT INTO user_client SET firstname="${userfname}", lastname="${userlname}", username"${userusername}", email="${useremail}", password="${userpassword}", phone="${userphone}", address="${useraddress}"`;
    dbs.query(sql, (error, result) => {
        if (error){
            throw error
        } else {
            console.log(result)
        }
    }) 
 });

// LOGIN USER
app.post('/userlogin', (req, res) => {
    var sql = `SELECT * FROM user_client`;
    dbs.query(sql, (error, result) => {
        if(error) {
            throw error;
        } else {
            var username = req.body.username;
            var password = req.body.password;

            for(var i=0; i < result.length; i++ ){
                if(username === result[i].username && password === result[i].password){
                   var userid = result[i].id
                    res.send(userid.toString());
                    break;
                } else if(i === result.length - 1) {
                    res.send('0');
                }
            }
        }
    });
});


// INI BUAT NAMPILIN PRODUK NEW ARRIVAL DI HOMEPAGE
app.get('/AllProductsHomepage', (req, res) => {
    var panggilData = 'SELECT * FROM  product ORDER BY id DESC LIMIT 3;'
    panggilData += 'SELECT * FROM  category;'
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

// INI BUAT NAMPILIN LIST PRODUK PRODUCT LIST
app.get('/AllProducts', (req, res) => {
    var panggilData = 'SELECT * FROM  product;'
    panggilData += 'SELECT * FROM  category;'
    panggilData += 'SELECT * FROM  size'
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

// INI BUAT NAMPILIN DETAIL PRODUK DI PRODUCT DETAIL
app.post('/ProductDetail', (req, res) => {
    var panggilid = req.body.tangkapdata
    var panggilData = `SELECT * FROM product JOIN category ON product.id_category = category.id WHERE product.id='${panggilid}';`
    panggilData += 'SELECT * FROM  size'
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



// INI BUAT NAMPILIN PRODUK DI CART
app.post('/ShowCart', (req, res) => {
    var userid = req.body.iduser
    var showcart = `SELECT * FROM cart JOIN product ON cart.id_product=product.id WHERE id_client="${userid}" AND status="1";`
    showcart += `SELECT cart.cart_id, product_price*qty AS sub_price FROM cart JOIN product ON cart.id_product=product.id WHERE id_client="${userid}" AND status="1"`
    dbs.query(showcart, (kaloError, hasilQuery) => {
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

// INI BUAT NAMPILIN BADGE CART DI HEADER
app.post('/TotalCartHeader', (req, res) => {
    var iduser = req.body.iduser
    console.log(iduser)
    var panggilData = `SELECT * FROM cart WHERE id_client="${iduser}"`;
    dbs.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            // res.send(hasilQuery);
            var count = 0;
            for (var i=0; i<hasilQuery.length; i++)
            {
                count++
            }
            // console.log(count)
            res.send((count).toString())
        }
    });
});

// INI BUAT NAMPILIN USER DATA DI CART
app.post('/ShowUserDetail', (req, res) => {
    var userid = req.body.iduser
    var showcart = `SELECT firstname,lastname,phone,address,email FROM user_client WHERE id="${userid}"`
    dbs.query(showcart, (kaloError, hasilQuery) => {
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

// INI BUAT TAMBAH KE CART
app.post('/AddCart', (req, res) => {
    var filterukuran = req.body.sizefilter;
    var produkid = req.body.idproduk;
    var jumlahproduk = req.body.quantityproduct;
    var clientid = req.body.idclient
    var status = 1
    var tambahcart = `INSERT INTO cart (id_client, id_product, size, qty, status)
    values ("${clientid}","${produkid}","${filterukuran}","${jumlahproduk}","${status}")`
    dbs.query(tambahcart, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            res.send('1');
        }
    });
});



// INI BUAT UPDATE QUANTITY DI CART
app.post('/UpdateQty', (req, res) => {
    var quantity = req.body.newqty;
    var idcart = req.body.cartid;
    var updatecart = `UPDATE cart SET qty="${quantity}" WHERE cart_id="${idcart}"`
    dbs.query(updatecart, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            var userid = req.body.iduser;
            var showcart = `SELECT * FROM cart JOIN product ON cart.id_product=product.id WHERE id_client="${userid}" AND status="1";`
            showcart += `SELECT cart.cart_id, product_price*qty AS sub_price FROM cart JOIN product ON cart.id_product=product.id WHERE id_client="${userid}" AND status="1"`
            dbs.query(showcart, (kaloError, hasilQuery) => {
                if(kaloError)
                {
                    throw kaloError;
                } 
                else 
                {
                    res.send(hasilQuery);
                }
            });
        }
    });
});


// INI BUAT DELETE PRODUCT DI CART
app.post('/DeleteCart', (req, res) => {
    var idcart = req.body.idcart;
    var updatecart = `DELETE FROM cart WHERE cart_id="${idcart}"`
    dbs.query(updatecart, (kaloError, hasilQuery) => {
        if(kaloError)
        {
            throw kaloError;
        } 
        else 
        {
            var userid = req.body.iduser;
            var showcart = `SELECT * FROM cart JOIN product ON cart.id_product=product.id WHERE id_client="${userid}" AND status="1";`
            showcart += `SELECT cart.cart_id, product_price*qty AS sub_price FROM cart JOIN product ON cart.id_product=product.id WHERE id_client="${userid}" AND status="1"`
            dbs.query(showcart, (kaloError, hasilQuery) => {
                if(kaloError)
                {
                    throw kaloError;
                } 
                else 
                {
                    res.send(hasilQuery);
                }
            });
        }
    });
});




app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});
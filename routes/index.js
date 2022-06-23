var express = require('express');
var router = express.Router();
var fs = require('fs');
var emulter = require('multer');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

const storage = emulter.diskStorage({
  filename : function (req, file , cb){
    cb(null, file.filename + '-' + Date.now() +  path.extname(file.originalname));
  }
})

var db = 'mongodb+srv://thucvan025:thuc2502@cluster0.wx7e2.mongodb.net/ASM_SEVER?retryWrites=true&w=majority'
const mongoose = require('mongoose');
const server = require("express/lib/router");
mongoose.connect(db).catch(err => {
  console.log(err);
});

var _id;

const schema_img = new mongoose.Schema({
  tile : 'string',
  del : 'string',
  img : 'string'
});

const data_slide = mongoose.model('slide_shows', schema_img);
const data_anime = mongoose.model('animes', schema_img);
const data_desktop = mongoose.model('desktops', schema_img);
const data_landscapes = mongoose.model('landscapes', schema_img);
const data_moons = mongoose.model('moons', schema_img);
const data_natures = mongoose.model('natures', schema_img);
const data_stars = mongoose.model('stars', schema_img);
const data_sunsets = mongoose.model('sunsets', schema_img);

/* GET home page. */
router.get('/', function(req, res, next) {

  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('index', {title: 'Express', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })

  // data_anime.find({}, function (err, datas) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_anime : datas})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = datas[i]._id.toString();
  //   }
  // })
  //
  // data_desktop.find({}, function (err, data) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_desktop : data})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = data[i]._id.toString();
  //   }
  // })
  //
  // data_landscapes.find({}, function (err, data) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_land: data})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = data[i]._id.toString();
  //   }
  // })
  //
  // data_moons.find({}, function (err, data) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_moon: data})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = data[i]._id.toString();
  //   }
  // })
  //
  // data_natures.find({}, function (err, data) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_nature: data})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = data[i]._id.toString();
  //   }
  // })
  //
  // data_stars.find({}, function (err, data) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_stars: data})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = data[i]._id.toString();
  //   }
  // })
  //
  // data_sunsets.find({}, function (err, data) {
  //   // trả về 1 file ejs.
  //   res.render('index', {title: 'Express', datas_sunets: data})
  //
  //   for(let i = 0; i< data.length; i++){
  //     _id = data[i]._id.toString();
  //   }
  // })
});

router.get('/nautre', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('category', {title: 'Nauture', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/land', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('euro', {title: 'Landsacape', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/americar', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('americar', {title: 'Desktop', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/mobile', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('mobile', {title: 'Mobile', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/moon', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('moon', {title: 'Moon', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/sunset', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('sunset', {title: 'Sunset', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/list', (reg, res) => {
  data_anime.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('main_database/list_database', {title: 'WELLCOME !', datas: data, mess : ""})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
})

router.get('/api', (req, res) =>{
  data_anime.find({}, function (err, data) {
    // trả về 1 file ejs.
    // res.send(JSON.parse(JSON.stringify(Object.assign({}, data))))
    res.send(data);
    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
})

router.post('/delete', async function (reg, res) {
  data_anime.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('main_database/list_database', {title: 'WELLCOME !', datas: data, mess : ""})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })

  data_anime.deleteOne({_id: _id}, function (error) {
    console.log(error);
    console.log(_id);
  })
})

router.post('/update', async (req, res) => {
  var title = req.body.title;
  var del = req.body.deltaisImg;
  var img = req.body.anh_dai_dien;

  data_anime.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('main_database/list_database', {title: 'WELLCOME !', datas: data, mess : "Success !"})

    for (let i = 0; i < data.length; i++) {
      _id = data[i]._id.toString();
    }
  })

  const filter = {_id: _id};
  const update = {del: del, img: img};
  let kq = await data_anime.findOneAndUpdate(filter, update, {
    new: true
  })

})

router.get('/stars', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('star', {title: 'Stars', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/anime', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('anime', {title: 'Anime', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/livewall', function (reg, res){
  data_slide.find({}, function (err, data) {
    // trả về 1 file ejs.
    res.render('livewall', {title: 'Live_Wallpaper', datas: data})

    for(let i = 0; i< data.length; i++){
      _id = data[i]._id.toString();
    }
  })
});

router.get('/about', function (reg, res){
  res.render('about', {title:'About Us', message : ''});
});

router.get('/login', function (reg, res){
  res.render('login', {title:''});
});

router.post('/index_data', async function (reg, res) {
  var user = reg.body.text_user;
  var password = reg.body.text_password;

  if (user.trim() === "admin" && password.trim() === "admin"){
    res.render('main_database/index_data', {title : 'WellCome !'});
  }else {
    res.render('login', {title : 'Error login information !!!'})
  }
})

router.get('/index_data', function (reg, res){
  res.render('main_database/index_data', {title : 'WellCome !'});
})

router.get('/database', function (reg, res){
  res.render('main_database/main_database', {title : 'WellCome !'});
})

router.get('/buttons', function (reg, res){
  res.render('main_database/buttons', {title : 'WellCome !'});
})

router.get('/cards', function (reg, res){
  res.render('main_database/cards',{title : 'WellCome !'});
})

router.get('/colors', function (reg, res){
  res.render('main_database/utilities-color',{title : 'WellCome !'});
})

router.get('/borders', function (reg, res){
  res.render('main_database/utilities-border',{title : 'WellCome !'});
})

router.get('/animations', function (reg, res){
  res.render('main_database/utilities-animation',{title : 'WellCome !'});
})

router.get('/others', function (reg, res){
  res.render('main_database/utilities-other',{title : 'WellCome !'});
})

router.get('/404', function (reg, res){
  res.render('main_database/404',{title : 'WellCome !'});
})

router.get('/blank', function (reg, res){
  res.render('main_database/main_database',{title : 'WellCome !'});
})

router.get('/charts', function (reg, res){
  res.render('main_database/charts',{title : 'WellCome !'});
})

router.get('/tables', function (reg, res){
  res.render('main_database/tables',{title : 'WellCome !'});
})

router.get('/add', function (reg, res){
  res.render('main_database/add',{title : 'WellCome !', mess : ""});
})

router.post('/upload', async (req, res,next) => {
  var coll = req.body.collection_img;
  var tile = req.body.titleImg;
  var del = req.body.deltaisImg;
  var img = req.body.anh_dai_dien;



      switch (Number(coll)){
        case 1 :
          const  Nature = mongoose.model('nature', schema_img);

          const data_nature = new Nature({
            title : tile,
            del : del,
            img : img,
          });


          data_nature.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 2 :
          const  Landscape = mongoose.model('landscape', schema_img);

          const data_landscape = new Landscape({
            title : tile,
            del : del,
            img : img,
          });


          data_landscape.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 3 :
          const  Desktop = mongoose.model('desktop', schema_img);

          const data_desktop = new Desktop({
            title : tile,
            del : del,
            img : img,
          });


          data_desktop.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 4 :
          const  Mobile = mongoose.model('mobile', schema_img);

          const data_Mobile = new Mobile({
            title : tile,
            del : del,
            img : img,
          });


          data_Mobile.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 5 :
          const  Moon = mongoose.model('moon', schema_img);

          const data_Moon = new Moon({
            title : tile,
            del : del,
            img : img,
          });


          data_Moon.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 6 :
          const  Sunset = mongoose.model('sunset', schema_img);

          const data_Sunset = new Sunset({
            title : tile,
            del : del,
            img : img,
          });


          data_Sunset.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 7 :
          const  Stars = mongoose.model('stars', schema_img);

          const data_Stars = new Stars({
            title : tile,
            del : del,
            img : img,
          });


          data_Stars.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 8 :
          const  Anime = mongoose.model('anime', schema_img);

          const data_Anime = new Anime({
            title : tile,
            del : del,
            img : img,
          });


          data_Anime.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 9 :
          const  LiveWallpaper = mongoose.model('live_wallpaper', schema_img);

          const data_live = new LiveWallpaper({
            title : tile,
            del : del,
            img : img,
          });


          data_live.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
        case 10 :
          const  SlideShow = mongoose.model('slide_show', schema_img);

          const data = new SlideShow({
            title : tile,
            del : del,
            img : img,
          });


          data.save(function (err){
            if(err) {
              console.log(err);
            }
            else {
              console.log("Ghi du lieu thanh cong");
            }
          });
          break
      }
  // console.log(coll + tile + del);
  res.render('main_database/add',{title : 'WellCome !' , mess : "Success !"});
})




router.post('/support', function (reg, res){
  //lấy tham số ra
  var email = reg.body.emails;
  var deltais = reg.body.content;

  //in ra log để kiểm tra
  console.log("email : " + email + " \ndeltais : " + deltais);
  var message;

  //them vao collection : students - database : myData

  //b1 : dinh nghia Schama - tuong duong voi model ben Java
  const studentChema = new mongoose.Schema({
    email : 'string',
    content : 'string'
  });

  //students la ten cua collection ben database
  const  Student = mongoose.model('students', studentChema);
  //b2 : goi cau lenh them vao database

  const data = new Student({
    email : email,
    content : content
  });

  data.save(function (err){
    if(err) {
      console.log(err);
    }
    else {
      res.render('about', {
        title: 'about', message : 'Chúng tôi đã nhận thông tin'
      })
    }
  });
})

router.post('/supports', async function (reg
    , res){
  var email = reg.body.emails;
  var phone = reg.body.phonenum;
  var deltais = reg.body.content;

  //them vao collection : students - database : myData

  //b1 : dinh nghia Schama - tuong duong voi model ben Java
  const studentChema = new mongoose.Schema({
    email : 'string',
    deltais : 'string'
  });

  //students la ten cua collection ben database
  const  Student = mongoose.model('students', studentChema);
  //b2 : goi cau lenh them vao database

  const data = new Student({
    email : email,
    deltais : deltais
  });

  data.save(function (err){
    if(err){
      console.log(err);
    }
    else {
      res.render('about', {
        title: 'about', message : 'Chúng tôi đã nhận thông tin'
      })
    }
  });

  // cau lenh cap nhat

  const filter = { email: email };
  const update = { deltais: 'da cap nhap' };
  let kq = await Student.findOneAndUpdate(filter, update, {
    new : true
  });

  // cau lenh xoa
  await mongoose.model('Student').deleteOne({ filter }).j(true);
  // let xoa = await Student.findOneAndDelete(filter, function (err){
  //   console.log(err);
  //   console.log("xoa thanh cong");
  // })

  // var message;
  // fs.appendFile( 'Uploads/' + email + '.txt', '\nEmail : ' + email + '\nDeltais : '
  //     + deltais +'\nPhone : ' + phone, function (err){
  //   if(err){
  //     message = err;
  //   }else {
  //     message = 'Chúng tôi đã nhận phản hồi của bạn , chúc bạn 1 ngày vui vẻ !!!'
  //   }
  //   res.render('about', {title : 'About Us',message: message})
  // })
});

module.exports = router;

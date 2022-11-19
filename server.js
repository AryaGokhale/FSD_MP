const mongoose = require('mongoose')
const express = require('express')
const cors = require("cors");
const socketio = require("socket.io");
const app = express();
const path = require('path');
var bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

//require('./routes/auth.routes')(app);
//require('./routes/user.routes')(app);

const UserModel = require("./models/user.model")
//const RoleModel = require("./models/role.model")

const db = require("./models");
//const Role = db.role;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

app.use(express.static('public'));

app.use(express.static('homepage'));

app.use(express.static('aies'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// simple route
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname+"/public/register.html"));
 });


 app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname+"/homepage/homepage.html"));
  
});

app.get('/aies', (req, res) => {
  res.sendFile(path.join(__dirname+"/aies/aies.html"));
});


app.get('/dbms', (req, res) => {
  res.sendFile(path.join(__dirname+"/dbms/dbms.html"));
});


app.get('/fsd', (req, res) => {
  res.sendFile(path.join(__dirname+"/fsd/fsd.html"));
});


app.get('/ics', (req, res) => {
  res.sendFile(path.join(__dirname+"/ics/ics.html"));
});


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});

const url = `mongodb+srv://userdb:pandaexpress@cluster0.4s8kf.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ');
//         initial();
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//         process.exit();
//     })


db.mongoose.connect(url, connectionParams)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    //initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }

app.post("/api/user", (req, res)=>{

  var name = req.body.name;
  var email =req.body.email;
  var pass = req.body.password;
  var role =req.body.role;

  //const UserRole = new RoleModel(role);

  var data = {
    "name": name,
    "email":email,
    "password":pass,
    "role":role
}
  
  const SaveUser = new UserModel(data);
  console.log(SaveUser);
  // SaveUser.save((error,savedUser)=>
  // {
  //   if(error) throw error
  //       res.json(savedUser);
  // });
  SaveUser.save();
  res.redirect('/homepage');
});

app.post('/api/aies', (req, res)=>
  {
    res.redirect('/aies');
  })

  app.post('/api/fsd', (req, res)=>
  {
    res.redirect('/fsd');
  })

  app.post('/api/dbms', (req, res)=>
  {
    res.redirect('/dbms');
  })

  app.post('/api/ics', (req, res)=>
  {
    res.redirect('/ics');
  })

  app.post('/api/sdmt', (req, res)=>
  {
    res.redirect('/sdmt');
  })

  app.post('/api/wp', (req, res)=>
  {
    res.redirect('/wp');
  })


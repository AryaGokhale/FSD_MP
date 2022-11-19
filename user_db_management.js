const { connection } = require('mongoose');
var mysql = require('mysql');

var connect_mysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "portal_users"
});

function get_value(email, name, password)
{
    let email = email;
    let name = name;
    let password = password;
}

connect_mysql.connect(function(err)
{
    if(err)
    {
        throw (err);
    }

    else
    {
        console.log("Connected!");

        var sql = "INSERT INTO users (email, username, password) VALUES "
    }
})
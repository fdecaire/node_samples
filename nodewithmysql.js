var mysql = require('mysql'); 


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fdecaire",
    database: "demodata"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM person", function (err, result, fields) {
        if (err) throw err;

        result.forEach(function(item){
            console.log(item.last);
        });
      });
  });


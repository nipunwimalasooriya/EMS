import mysql, { createConnection } from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "EMS"
})

con.connect(function(err) {
    if(err) {
        console.log("Connection error" + err)
    }else{
        console.log("Connection Successfull")
    }
})

export default con;
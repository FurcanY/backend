var mongoose = require('mongoose');
var dbURI='mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("bağlantıda hata oldu");
});
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı kesildi");
});
process.on("SIGINT",function(){
    mongoose.connection.console;
    console.log("Uygulama Kapatıldı");
    process.exit(0);
});

require("./venue");
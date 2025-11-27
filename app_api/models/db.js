var mongoose=require('mongoose');
var dbURI= 'mongodb+srv://test:test@cluster0.mlkjz0b.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log(dbURI+' adresindeki veritabanına bağlanıldı.');
});
mongoose.connection.on('error',function(err){
    console.log('Veritabanı bağlantı hatası: '+err);
});
mongoose.connection.on('disconnected',function(){
    console.log('Bağlantı kesildi.');
});
process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Uygulama sonlandırıldı, bağlantı kapatıldı.");
    process.exit(0);
});
require('./venue'); 

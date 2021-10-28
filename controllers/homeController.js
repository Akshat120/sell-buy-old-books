
exports.home = function(req,res){
    res.render(`home/home.ejs`);
}

exports.books = function(req,res){
    res.render(`home/books.ejs`);   
}

exports.buy = function(req,res){
    res.render(`home/buy.ejs`);   
}

exports.sell = function(req,res){
    res.render(`home/sell.ejs`);   
}

exports.login = function(req,res){
    res.render(`home/login.ejs`);   
}

exports.register = function(req,res){
    res.render(`home/register.ejs`);   
}










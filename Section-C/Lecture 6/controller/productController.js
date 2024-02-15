function showProduct(req, res){
    res.send("all product")
}
function showHome(req, res){
    res.render('home.ejs', {name:"abcde"});
}

module.exports = {showProduct, showHome}
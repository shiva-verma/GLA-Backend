function showAllProduct(req, res){
    res.send('all product')
}

function createProduct(req, res){
    res.send('create product')
}

function updateProd(req, res){
    res.send('updated product')
}

function deleteProd(req, res){
    res.send('delete product')
}

module.exports = {showAllProduct, createProduct, updateProd, deleteProd}
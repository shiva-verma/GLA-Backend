function showAll(req, res){
    res.send("ALL product listed")
}

function createProduct(req, res){
    res.send("product created")
}

function updateProduct(req, res){
    res.send("product updated")
}

function deleteProduct(req, res){
    res.send('product deleted')
}

module.exports = {showAll, createProduct, updateProduct, deleteProduct};
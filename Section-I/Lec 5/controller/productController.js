function showProduct(req, res){
    res.send("All product is listed above")
}

function showSingleProduct(req, res){
    res.send("single product is listed above")
}

function createProduct(req, res){
    res.send("product created")
}

function updateProduct(req, res){
    res.send("product updated")
}

function deleteProduct(req, res){
    res.send("product deleted")
}

module.exports = {showProduct, showSingleProduct, updateProduct, createProduct, deleteProduct}
function showAllProduct(req, res){
    res.send("all product")
}

const showSingleProduct = (req, res)=>{
    res.send("single product")
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
module.exports = {showAllProduct, showSingleProduct, createProduct, updateProduct,deleteProduct}
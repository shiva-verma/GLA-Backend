const name = "abcde"

function addition(a, b){
    console.log(a + b)
}

// module.exports = {name, addition}  //old version
export {name, addition}; //modern js

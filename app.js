

var lengthSlider = document.getElementById("lengthSlider")
function rValue(){
    // var lengthSlider = document.getElementById("lengthSlider").value

    document.getElementById("sliderValue").innerText = lengthSlider.value
}
function passwordGenerate(){
    var length = document.getElementById("sliderValue").innerText
    var uppar = "AZERTYUIOPMLKJHGFDSQWXCVBN"
    var lower = "azertyuiopqmsldkfjghnwbxvc"
    var symbol = "&é@%£$µ"
    var num = "1234567890"
    var randomPassword = ""
    for(var i = 0; i < length; i++){
        var randomNum = Math.floor(Math.random()*uppar.length)
        randomPassword += uppar[randomNum]
        var uppercase = document.getElementById("uppercase");
        if(uppercase.checked) {
            uppar += uppar
        }
        else{
            null
        }
        var lower = document.getElementById("lowercase")
        if(lower.checked){
            uppar += lower
        }
        else{
            null
        }
        var  numbers = document.getElementById("numbers");
        if(numbers.checked){
            uppar += num
        }
        else{
            null
        }
        var symbol = document.getElementById("Symbols")
        if(symbol.checked){
            uppar += symbol
        }
        else{
            null
        }

}
document.getElementById("password").value = randomPassword
}



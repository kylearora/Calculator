let clear = document.querySelector('#clear')
let field = document.querySelector('#field')
let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
let decimal = document.querySelector('.decimal')
let equals = document.querySelector('#equals')
let modulo = document.querySelector('.modulo')
let squareRoot = document.querySelector('.squareRoot')

let result = "";
let fieldLength = false
field.innerHTML = ""

//Basic functions
for (var i = 0; i < number.length; i++) {
  let value = number[i].id
  number[i].addEventListener('click', function() {
    if (isGreaterThan() == false) {
      result += (value)
      field.innerHTML = result
      minimizeFontOnLength()
    }
  })
}

for (var i = 0; i < operator.length; i++) {
  let operatorButton = operator[i].id
  operator[i].addEventListener('click', function() {
    minimizeFontOnLength()
    result += (operatorButton)
    field.innerHTML = result
    console.log(operatorButton)
  })
}

clear.addEventListener('click', function(){
  result = ""
  fieldLength = false
  field.innerHTML = result
})

//Add decimal key to the calculator
decimal.addEventListener('click', function() {
  minimizeFontOnLength()
  result += (decimal.id)
  field.innerHTML = result
  console.log(decimal.id)
})

//Add Modulo function key to the calculator
modulo.addEventListener('click', function() {

  result += (modulo.id)
  isGreaterThanModulo()
  field.innerHTML = result
  console.log(modulo.id)
})

//Add Square Root function to the calculator
squareRoot.addEventListener('click', function() {
  minimizeFontOnLength()
  let root = Math.sqrt(result)
  field.innerHTML = root.toFixed(4)
  console.log(squareRoot.id)
})

// Makes sure there are numbers in the field before pressing the equals button
equals.addEventListener('click', function() {
  if (field.innerHTML.length == 0){
    window.alert("Put some numbers in, bro!")
  } else {
  let test = eval(result)
  let rounded = test.toFixed(2)
  field.innerHTML = rounded
  result = ""
  }
})


//Press "Enter" key to get calculation
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
  let test = eval(result)
  result = test.toFixed(2)
    field.innerHTML = result
    result = ""
    console.log(result);
  }
})

//Use numerical keys to input numbers into the field instead of clicking on buttons
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 48) {
    result += 0;
    field.innerHTML = result;
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 49) {
    result += 1;
    field.innerHTML = result;
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 50) {
    result += 2;
    field.innerHTML = result;
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 51) {
    result += 3;
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 52) {
    result += 4;
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 53) {
    result += 5
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})


document.addEventListener('keydown', function(event) {
  if (event.keyCode === 54) {
    result += 6
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 55) {
    result += 7
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 56) {
    result += 8
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 57) {
    result += 9
    field.innerHTML = result
    minimizeFontOnLength()
    isGreaterThan()
  }
})

//Changes font size in the field if more than 10 characters are keyed in
function minimizeFontOnLength() {
  console.log(field.innerHTML.length)
  if (field.innerHTML.length >= 12){
    document.getElementById('field').style.fontSize = "22px"
  } else {
    document.getElementById('field').style.fontSize = "33px"
  }
}

//Sets an alert to stop typing once the field runs out of space
function isGreaterThan() {
  if (field.innerHTML.length > 16) {
    fieldLength = true
    window.alert("OH SNAP!!@%^$#, You're out of space!!")
  }
  return fieldLength;
}

//Sets an alert to stop typing once the field runs out of spcae for the Modulo key
function isGreaterThanModulo() {
  if (field.innerHTML.length > 6) {
    fieldLength = true
    window.alert("OH SNAP!!@%^$#, You're out of space!!")
  }
  return fieldLength;
}

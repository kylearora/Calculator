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

clear.addEventListener('click', function(){
  result = ""
  fieldLength = false
  field.innerHTML = result
})

modulo.addEventListener('click', function() {
  minimizeFontOnLength()
  isGreaterThanModulo()
  result += (modulo.id)
  field.innerHTML += modulo.id
  console.log(modulo.id)
})

decimal.addEventListener('click', function() {
  minimizeFontOnLength()
  result += (decimal.id)
  field.innerHTML = result
  console.log(decimal.id)
})

squareRoot.addEventListener('click', function() {
  minimizeFontOnLength()
  let root = Math.sqrt(result)
  field.innerHTML = root.toFixed(4)
  console.log(squareRoot.id)
})

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

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
  let test = eval(result)
  let rounded = test.toFixed(2)
    field.innerHTML = rounded
    result = ""
  }
})

for (var i = 0; i < number.length; i++) {
  let value = number[i].id
  number[i].addEventListener('click', function() {
    minimizeFontOnLength()
    if (isGreaterThan() == false) {
      result += (value)
      field.innerHTML = result
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

function minimizeFontOnLength() {
  console.log(field.innerHTML.length)
  if (field.innerHTML.length >= 11){
    document.getElementById('field').style.fontSize = "22px"
  } else {
    document.getElementById('field').style.fontSize = "33px"
  }
}

function isGreaterThan() {
  if (field.innerHTML.length > 16) {
    fieldLength = true
    window.alert("OH SNAP!!@%^$#, You're out of space!!")
  }
  return fieldLength;
}

function isGreaterThanModulo() {
  if (field.innerHTML.length > 6) {
    fieldLength = true
    window.alert("OH SNAP!!@%^$#, You're out of space!!")
  }
  return fieldLength;
}

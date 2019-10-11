var firstName = ""
var num1 = ""
var num2 = ""
var op = ""
var answer = ""

btnnSbmt.onclick=function(){
  firsName = inptName.value
  num1 = Number(inptFirst.value)
  num2 = Number(inptSec.value)
  op = inptOp.value
  if (op == '*'){
    answer = num1 * num2
  }
  else if (op == '+'){
    answer = num1 + num2
  }
  lblAnswer.value = inptName.value + "your answer is " + answer
  
}

btnnClear.onclick=function(){
  inptName.value = ""
  inptFirst.value = ""
  inptSec.value = ""
  inptOp.value = ""
  lblAnswer.value = ""
}
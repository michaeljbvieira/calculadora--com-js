//Desenvolvido por Michael Vieira
function calcular(){
  var operacao = document.getElementById('operacao').value 
  var num1 = document.getElementById('num1').value 
  var num2 = document.getElementById('num2').value 

  //Rotinas de consistência
  if( num1 == '' || num1 == null ){
    alert('Favor digitar um número')
    return false;
  }

  if( num2 == '' || num2 == null ){
    alert('Favor digitar um número')
    return false;
  }

  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  var resultado = null

  if(operacao == '1'){ //Soma
    resultado = num1 + num2
  }else if(operacao == '2'){//subtração
    resultado = num1 - num2
  }else if(operacao == '3'){//Multiplicação
    resultado = num1 * num2
  }else if(operacao == '4'){//Divisão
    resultado = num1 / num2
  }else{
    alert('Selecione uma operação')
    return false
  }

  document.getElementById('resultado').value = resultado
}
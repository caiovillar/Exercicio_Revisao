function Alerta1(){
    alert("Logo Clicado!");
 }

function Alerta2(){
    alert("Item Ordenado")
}

function Alerta3(){
    alert("Item Desordenado")
}


var d = document;
function processar(idTabela)
{
	var newRow = d.createElement('tr');
	newRow.insertCell(0).innerHTML = d.getElementsByName('nome')[0].value;
	newRow.insertCell(1).innerHTML = d.getElementsByName('cor')[0].value;
    newRow.insertCell(2).innerHTML = d.getElementsByName('nascimento')[0].value;
	newRow.insertCell(3).innerHTML = d.getElementsByName('salario')[0].value;
    d.getElementById(idTabela).appendChild(newRow);
	return false;
}

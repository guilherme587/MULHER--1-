let data = [
  {"biquiniA":{"code":"0000000000000", "quatidade":"0", "valor":"00,00"}},
  {"biquiniA":{"code":"0000000000001", "quatidade":"0", "valor":"00,00"}},
  {"biquiniA":{"code":"0000000000002", "quatidade":"0", "valor":"00,00"}},
];

function drawList(_data){
  let cont = data.length;
  document.querySelector('#lista').innerHTML = ""
  for(let i = 0; i < cont; i++){
    document.querySelector('#lista').innerHTML += `<table id="table"></table><tr> <td>código: ${_data[i].biquiniA.code}</td> | 
                                                        <td>estoque: ${_data[i].biquiniA.quatidade}</td> | 
                                                        <td>valor: ${_data[i].biquiniA.valor}</td> </tr>`;
  }
}

drawList(data);

let code = document.querySelector("#code");
let quatidade = document.querySelector("#quatidade");
let valor = document.querySelector("#valor");
let add = document.querySelector("#addButton").addEventListener("click", function(){ 
  let aData = [{"biquiniA":{
    "code":code.innerHTML,
    "quatidade":quatidade.value,
    "valor":valor.value}
  }];

  console.log(aData[0].biquiniA.code);
  console.log(aData[0].biquiniA.quatidade);
  console.log(aData[0].biquiniA.valor);

  document.querySelector('#lista').innerHTML += `<table id="table"></table><tr> <td>código: ${aData[0].biquiniA.code}</td> | 
                                                <td>estoque: ${aData[0].biquiniA.quatidade}</td> | 
                                                <td>valor: ${aData[0].biquiniA.valor}</td> </tr>`;

  //drawList(aData);
});

function media(element) {
  const trabalho = parseFloat(element.children.trabalho.value)
  const prova = parseFloat(element.children.prova.value)
  let resultado = 0
  let final = 0
  resultado = (trabalho + prova) / 2
  
  if (resultado >= 7) {
    alert("Você foi aprovado!\nNota: " + resultado)
    location.reload()
  } else if (resultado < 4) {
    alert("Você foi reprovado!\nNota: " + resultado)
    location.reload()
  } else if (resultado >= 4) {
    alert("Você ficou de recuperação!\nNota : " + resultado)
    let vals = document.getElementById("rec");
    let br = document.createElement("br");
    vals.appendChild(br);
    let lab = document.createTextNode("Nota da Recuperação:");
    vals.appendChild(lab);
    let inp = document.createElement("input");
    inp.type = "number";
    inp.id = "recuperacao"
    inp.min = 0
    inp.max = 10
    inp.name = "Nota da Recuperação: ";
    vals.appendChild(inp);

    let rec = parseFloat(document.getElementById('recuperacao').value)

    final = (resultado + rec) / 2

    if (final >= 7) { 
      alert("Você foi aprovado!\nNota: " + final)
      location.reload()
    }else if (final < 7) {
      alert("Você foi reprovado!\nNota: " + final)
      location.reload()
    }
  }
  
}
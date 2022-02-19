function adicionar(){
    var itens = document.getElementById("text").value
    var lista = document.getElementById("lista").innerHTML

    lista = lista + "<li>"+itens+"</li>"

    document.getElementById("lista").innerHTML = lista

}
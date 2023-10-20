var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-busca");

    var nome = form.nome;
    

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    

    nomeTd.textContent = nome;

   

    tabela.appendChild(pacienteTr);

});
$(document).ready(function(){
 /*
    if (confirm("Deseja salvar as informações?")) {
        alert("Informação salva com sucesso!");
    } else {
        alert("Inserção cancelada!");
    }
*/

    variavel_qualquer = $("p").text(); // obtenção de conteúdo textual
    alert(variavel_qualquer);
    $("p").text("Mensagem trocada"); // mudança de conteúdo textual

})
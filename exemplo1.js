$(document).ready(function(){
 /*
    if (confirm("Deseja salvar as informações?")) {
        alert("Informação salva com sucesso!");
    } else {
        alert("Inserção cancelada!");
    }
*/

    variavel_qualquer = $("p").text(); // obtenção de conteúdo textual
    //alert(variavel_qualquer);
    num = 10
    $("#especial").text("Mensagem trocada" + num); // mudança de conteúdo textual

    //monitorar o evento de clique no botão Salvar
    $("#salvar").click(function(){
        //alert("OI");
        /*
        valor = $("#nome").val();
        uf = $("#uf").val();
        if (uf == "RS") {
            mensagem = "Você é do Rio Grande do Sul"
        } else {
            mensagem = "Você é do exterior"
        }
        alert(mensagem);
        */
       sigla = $("#sigla").val();
       nome = $("#nome").val();
       $("#uf").append("<option value='"+sigla+"'>"+nome+"</option>")
       $("#sigla").val("");
       $("#nome").val("");
    })
})
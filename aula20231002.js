$(document).ready(function(){
    $("#salvar").click(function(){
        nome = $("#nome").val();
        datanasc = $("#datanasc").val();
        cidade = $("#cidade").val();
        uf = $("#uf").val();
        filhos = $("input[name=filhos]:checked").val();
        $("#clientes tbody").append("<tr><td>"+nome+"</td><td>"+datanasc+"</td><td>"+cidade+"</td><td>"+uf+"</td><td>"+filhos+"<td><td><input type='button' class='excluir' value='Excluir'></td></tr>")
    })

    $("#excluir-tudo").click(function(){
        $("#clientes tbody").empty();
    })

    // essa função abaixo não funciona, porque o botão excluir não estava originalmente no HTML.
    $(".excluir").click(function(){
        alert("OI");
    })

    // a função abaixo funciona
    $("#clientes tbody").on("click",".excluir", function(){
        //alert("OI!");
        $(this).closest("tr").remove();
        quant_linhas = $("#clientes tbody tr").length;
        $("#quant").text(quant_linhas);
    }) 
})

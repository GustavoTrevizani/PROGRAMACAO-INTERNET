$(document).ready(function(){
    $("#salvar").click(function(){
        nome = $("#nome").val();
        datanasc = $("#datanasc").val();
        cidade = $("#cidade").val();
        uf = $("#uf").val();
        filhos = $("input[name=filhos]:checked").val();
        $("#clientes tbody").append("<tr><td>"+nome+"</td><td>"+datanasc+"</td><td>"+cidade+"</td><td>"+uf+"</td><td>"+filhos+"<td></tr>")
    })
}) 
$(document).ready(function(){
    $("#salvar").click(function(){
        nome = $("#nome").val();
        datanasc = $("#datanasc").val();
        $("#clientes tbody").append("<tr><td>"+nome+"</td><td>"+datanasc+"</td></tr>")
    })
}) 
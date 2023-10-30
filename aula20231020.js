$(document).ready(function(){
    km_total = 0
    tempo_total = 0

    $("#adicionar").click(function(){
    de = $("#de").val();
    para = $("#para").val();
    km = $("#km").val();
    velocidade = $("#velocidade").val();
    tempo = km/velocidade;
    km_total = km_total + parseInt(km);
    tempo_total = tempo_total + tempo;
    $("#trajetos tbody").append("<tr><td>"+de+"</td><td>"+para+"</td><td class='km'>"+km+"</td><td>"+velocidade+"</td><td class='tempo'>"+tempo.toFixed(2)+"</td><td><input type='button' value='Excluir' class='excluir'></td></tr>");
    $("#km_total").text(km_total);
    $("#tempo_total").text(tempo_total);
    }) 

    $("#trajetos tbody").on("click", ".excluir", function(){
        /*km_total = km_total - ?????
        tempo_total = tempo_total - ?????*/

        $(this).closest("tr").remove();
        $("#km_total").text(km_total);
        $("#tempo_total").text(tempo_total);
    })
})



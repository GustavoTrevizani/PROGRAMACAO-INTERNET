$(document).ready(function(){
    $("#excluir-selec").click(function(){
        alert($("#arquivo").val().replace("C:\\fakepath\\", ''));
        $(".selecao:checked").each(function(){
            $(this).closest("tr").remove(); 
        })
    })

    $("#marca").change(function(){
        marca = $(this).val();
        if (marca == "--Todos--") {
            $("#veiculos tbody tr").show();
        } else {
            $("#veiculos tbody tr").hide();
            $("."+marca).closest("tr").show();
        }
    })
})
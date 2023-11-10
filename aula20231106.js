$(document).ready(function(){
    $("#excluir-selec").click(function(){
        $(".selecao:checked").each(function(){
            $(this).closest("tr").remove(); 
        })
    })

    $("#marca").change(function(){
        marca = $(this).val();
        $("#veiculos tbody tr").hide(500);
        $("."+marca).closest("tr").show();
    })
})
$(document).ready(function(){
    $("#excluir-selec").click(function(){
        $(".selecao:checked").each(function(){
            $(this).closest("tr").remove(); 
        })
    })
})
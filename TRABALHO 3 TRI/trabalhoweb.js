var input = document.querySelector("#imagemProduto");

function adicionarProduto() {
    var nomeProduto = $('#nomeProduto').val();
    var imagemProduto = $('#imagemProduto').val().replace("C:\\fakepath\\", '');
    var precoProduto = $('#precoProduto').val();
    var categoriaProduto = $('#categoriaProduto').val();

    var novoProduto = $('<div class="'+ categoriaProduto+'" >' +
        '<h3>' + nomeProduto + '</h3>' +
        '<img src="' + imagemProduto + '" alt="Imagem do Produto" width="200px">' +
        '<p><strong>Preço:</strong> R$' + precoProduto + '</p>' +
        '<p><strong>Categoria:</strong> ' + categoriaProduto + '</p>' +
        "<input type='button' class='excluir' value='Excluir'>"+
        '</div>');

    $('#produtosContainer').append(novoProduto);

    $('#nomeProduto').val('');
    $('#imagemProduto').val('');
    $('#precoProduto').val('');
    $('#categoriaProduto').val('');
};

$("#escolherCategoria").change(function () {
    var categoriaProd = $(this).val();

    if (categoriaProd === "--Todos--") {
        $("#produtosContainer div").show();
    } else {
        $("#produtosContainer div").hide();
        $('.' + categoriaProd).show();
    }
});

$("#produtosContainer").on("click", ".excluir", function(){
    $(this).closest("div").remove();
})
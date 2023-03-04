$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        $('ul').append('<li>' + novaTarefa + '</li>');
        $('#nova-tarefa').val('');
    });

    $(".lista-tarefas").click("li", function() {
        $(`<li style="text-decoration: line-through;"></li>`)
    })
});

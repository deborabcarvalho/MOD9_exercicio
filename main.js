$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const tarefaNaLista = $('<li></li>');

        $('<li>' + novaTarefa + '</li>').appendTo(tarefaNaLista);
        tarefaNaLista.appendTo('ul');

        $(tarefaNaLista).click(function() {
            $(tarefaNaLista).css('text-decoration', 'line-through');
        })
        
        $('#nova-tarefa').val('');
    });   
});

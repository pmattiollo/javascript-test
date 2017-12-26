$(function () {

	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	
	atividade.on('keyup', function(e) {
		if (e.keyCode == 13) {
			atividade.trigger('enter', atividade.val());
			atividade.val('');
		}
	});

	atividade.on('enter', function(evento, valor) {
		listaAtividades.prepend('<li>' + valor + '</li>');
	});
	
});
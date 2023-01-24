import swal from 'sweetalert';

const exibeAlerta = (text: string, icon: string, title: string) => {
	swal({
		title: title,
		text: text,
		icon: icon,
		timer: 7000,
	});
};

const alertaSucesso = {
	alerta: (texto: string) => exibeAlerta(texto, 'success', 'Sucesso!'),
};

const alertaErro = {
	alerta: (texto: string) => exibeAlerta(texto, 'error', 'Erro!'),
};

const alertaInfo = {
	alerta: (texto: string) => exibeAlerta(texto, 'info', 'Info!'),
};

const alertaDelete = {
	deleteUser: () =>
		swal({
			title: 'Deseja apagar o Usuario ? Você perderá todos os seus dados!',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => resp),
	deleteGenre: () =>
		swal({
			title: 'Deseja apagar o genero ?',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => resp),
	deleteGame: () =>
		swal({
			title: 'Deseja apagar o Jogo ?',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => resp),
	deleteProfile: () =>
		swal({
			title: 'Deseja apagar o perfil ?',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => resp),
	deleteAdmin: () =>
		exibeAlerta('Ops! Você não pode apagar esse usuario !', 'error', 'Erro!'),
};

const alertaUpdate = {
	updateUser: () =>
		exibeAlerta(
			'Ops! Você não pode atualizar esse usuario !',
			'error',
			'Erro!'
		),
};

export { alertaDelete, alertaSucesso, alertaErro, alertaInfo, alertaUpdate };

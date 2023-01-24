import { userLogin } from '../@types/interfaces';
import api from './api';


const loginService = {
	login: (values: userLogin) =>
		api
			.post('/sessions', values)
			.then((response: any) => { return response })
			.catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
};


export { loginService};

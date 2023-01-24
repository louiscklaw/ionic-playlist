import { userLogin } from '../@types/interfaces';
import api from './api';

const updateService = {
	updateUser: (id: string, values: userLogin) =>
		api
			.patch(`/user/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response)
}

export { updateService };

import api from './api';


const registerService = {
	registerValues: (values: any, role: any) =>
		api
			.post(`${role}`, values)
			.then((response: any) => { return response })
			.catch((error: any) => error.response),
};

export {  registerService };

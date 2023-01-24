import api from './api';

const findAllService = {
		findAllDoctors: async (value: string) =>
		await api
			.get(`${value}`)
			.then((response: any) => { return response })
			.catch((error: any) => error.response),
};




const findByIdService = {
	findProfileById: (id: string) =>
		api
			.get(`/profile/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	findUserById: (id: string | undefined) =>
		api
			.get(`/user/${id}`)
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
	findHomeProfile: (id: string) =>
		api
			.get(`/homepage/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	findGenreById: (id: string) =>
		api
			.get(`/genre/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	findGameById: (id: string) =>
		api
			.get(`/game/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
};

export { findAllService, findByIdService };


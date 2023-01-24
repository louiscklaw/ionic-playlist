export interface ChatConversationProps {
  key: number;
  user: string;
  createdAt: number;
  msg: string;
}

export interface Doctor {
  id?: string;
  name?: string;
  crm?: string;
	doctor?: {
		speciality?: string;
	}
  email?: string;
  password?: string;
  cep?: string;
  cpf?: string;
  rank?: number;
}

export interface Pacient {
  id?: string;
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  cep?: string;
  cpf?: string;
}

export interface userLogin {
  email: string;
  password: string;
}

export interface userPacient {
	id?: string;
	name: string;
	rg: string;
	cpf: string;
	cep: string;
	address: string;
	number: number | string;
	city: string;
	district: string;
	state: string;
	email: string;
	password: string;
	confirmPassword?: string;
	role?: string;
	isAdmin?: boolean;
}

export interface userDoctor {
	id?: string;
	name: string;
	cpf: string;
	crm: string;
	cep: string;
	address: string;
	number: number | string;
	city: string;
	district: string;
	state: string;
	email: string;
	password: string;
	confirmPassword?: string;
	speciality: string;
	role?: string;
	isAdmin?: boolean;
}

export interface userClinic {
	id?: string;
	name: string;
	razao: string;
	cnpj: string;
	cep: string;
	address: string;
	number: number | string;
	city: string;
	district: string;
	state: string;
	email: string;
	password: string;
	confirmPassword?: string;
	role?: string;
	isAdmin?: boolean;
}

export interface RoomProps {
  roomName: any;
  room: any;
  handleLogout: any;
}

export interface LobbyProps {
  username: string;
  handleUsernameChange: any;
  roomName: string;
  handleRoomNameChange: any;
  handleSubmit: any;
  connecting: any;
}

export interface PronturariosProps {
	id?: string;
  name?: string;
}

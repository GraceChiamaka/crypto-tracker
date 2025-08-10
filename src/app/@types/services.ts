export type AuthResponse = {
    status: number;
    message: string;
    user: any;
};
export type LoginRequest = {
	email: string;
	password: string;
};

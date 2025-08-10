export type AuthResponse = {
    status: number;
    message: string;
    user: string[];
};
export type LoginRequest = {
    email: string;
    password: string;
};

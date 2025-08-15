export type SignupPayload = {
    email: string;
    password: string;
    full_name: string;
    currency: string;
};

export type ConfirmEmailPayload = {
    email: string;
    token: string;
};

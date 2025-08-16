import { baseApi } from "./base";

import { SignupPayload, ConfirmEmailPayload, LoginPayload } from "./types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (payload: SignupPayload) => ({ url: "/auth/signup", method: "POST", body: payload }),
        }),
        login: builder.mutation({
            query: (payload: LoginPayload) => ({
                url: "/auth/login",
                method: "POST",
                body: payload,
            }),
        }),
        confirmEmail: builder.mutation({
            query: (payload: ConfirmEmailPayload) => ({ url: "/auth/confirm", method: "POST", body: payload }),
        }),
        forgotPassword: builder.mutation({
            query: (payload: string) => ({
                url: "/auth/forgot_password",
                method: "POST",
                body: { email: payload },
            }),
        }),
        resetPassword: builder.mutation({
            query: (payload) => ({
                url: "/auth/reset_password",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const {
    useSignupMutation,
    useConfirmEmailMutation,
    useLoginMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi;

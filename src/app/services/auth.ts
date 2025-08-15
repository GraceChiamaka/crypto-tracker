import { baseApi } from "./base";
import { SignupPayload, ConfirmEmailPayload } from "./types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (payload: SignupPayload) => ({ url: "/auth/signup", method: "POST", body: payload }),
        }),
        login: builder.query({
            query: () => "/utils/currency",
        }),
        confirmEmail: builder.mutation({
            query: (payload: ConfirmEmailPayload) => ({ url: "/auth/confirm", method: "POST", body: payload }),
        }),
    }),
});

export const { useSignupMutation, useConfirmEmailMutation } = authApi;

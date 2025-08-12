import { combineSlices } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { uiReducer } from "./ui";
import { authApi } from "@services/auth";

export const rootReducer = combineSlices({ [authApi.reducerPath]: authApi.reducer, user: usersReducer, ui: uiReducer });

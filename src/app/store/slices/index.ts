import { combineSlices } from "@reduxjs/toolkit";
import { usersReducer } from "./users";
import { uiReducer } from "./ui";
import { baseApi } from "@services/index";

export const rootReducer = combineSlices({ [baseApi.reducerPath]: baseApi.reducer, user: usersReducer, ui: uiReducer });

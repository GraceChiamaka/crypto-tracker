import { combineSlices } from "@reduxjs/toolkit";
import { authApi } from "../api";
import { users } from "./users";

export const rootReducer = combineSlices(authApi, { users });

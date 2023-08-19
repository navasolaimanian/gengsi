import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { authActions } from "./auth-slice";

export const setTokenAction = (token) => {
    return (dispatch) => {
        // const token = useLoaderData();
        dispatch(authActions.setToken({token: token}));
    };
};